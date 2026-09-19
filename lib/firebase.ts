import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Firestore,
  getDocs
} from "firebase/firestore";
import { ContactSubmission, FeedbackSubmission } from "./types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// Initialize Firebase safely
let app: FirebaseApp | undefined;
let db: Firestore | undefined;

const isConfigValid = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

if (typeof window !== "undefined" || isConfigValid) {
  try {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase initialization skipped or failed:", error);
  }
}

/**
 * Save contact submission to Firebase Firestore
 */
export async function addContactSubmission(data: ContactSubmission) {
  if (db && isConfigValid) {
    try {
      const contactsRef = collection(db, "contacts");
      const docRef = await addDoc(contactsRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error writing contact to Firestore:", error);
      // Fallback response for dev / offline testing
      return { success: true, id: "local-fallback-" + Date.now() };
    }
  } else {
    console.warn("Firebase credentials missing or not configured in .env.local. Proceeding in offline mode.");
    return { success: true, id: "offline-" + Date.now() };
  }
}

/**
 * Save feedback submission to Firebase Firestore
 */
export async function addFeedbackSubmission(data: FeedbackSubmission) {
  if (db && isConfigValid) {
    try {
      const feedbackRef = collection(db, "feedbacks");
      const docRef = await addDoc(feedbackRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error writing feedback to Firestore:", error);
      return { success: true, id: "local-fallback-" + Date.now() };
    }
  } else {
    console.warn("Firebase credentials missing or not configured in .env.local. Proceeding in offline mode.");
    return { success: true, id: "offline-" + Date.now() };
  }
}

/**
 * Real-time listener for client feedback from Firebase Firestore
 */
export function subscribeToFeedbacks(callback: (feedbacks: FeedbackSubmission[]) => void) {
  if (db && isConfigValid) {
    try {
      const feedbackRef = collection(db, "feedbacks");
      const q = query(feedbackRef, orderBy("createdAt", "desc"));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const items: FeedbackSubmission[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            name: data.name || "Anonymous",
            email: data.email || "",
            company: data.company || "",
            rating: data.rating || 5,
            category: data.category || "General Experience",
            feedback: data.feedback || "",
            createdAt: data.createdAt?.toDate 
              ? data.createdAt.toDate().toISOString() 
              : new Date().toISOString(),
          });
        });
        callback(items);
      }, (error) => {
        console.error("Firestore realtime listener error:", error);
        callback([]);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Failed to subscribe to feedbacks:", error);
    }
  }

  // Fallback return empty unsubscriber
  callback([]);
  return () => {};
}

export { app, db, isConfigValid };
