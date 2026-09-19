import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactSubmission } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: ContactSubmission = await request.json();

    const { name, email, phone, company, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || "sarthaksjc2003@gmail.com, kesahrwaniadarsh24@gmail.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE !== "false";

    // Clean, structured HTML email template with inline styles for Gmail compatibility
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New SangamX Contact Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #090A0F; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #090A0F; padding: 30px 15px;">
          <tr>
            <td align="center">
              <!-- Main Card Container -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #12141C; border: 1px solid #2e3248; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                
                <!-- Header Banner -->
                <tr>
                  <td style="padding: 32px 32px 24px 32px; background: #181b28; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="font-family: monospace; font-size: 11px; font-weight: 800; letter-spacing: 2px; color: #818cf8; text-transform: uppercase;">
                            SANGAMX STUDIO
                          </div>
                          <div style="font-size: 22px; font-weight: 800; color: #ffffff; margin-top: 6px; letter-spacing: -0.5px;">
                            ⚡ NEW PROJECT INQUIRY
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content Body Table -->
                <tr>
                  <td style="padding: 28px 32px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      
                      <!-- Client Name -->
                      <tr>
                        <td style="padding-bottom: 18px;">
                          <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                            CLIENT NAME
                          </div>
                          <div style="font-size: 15px; font-weight: 700; color: #ffffff; background-color: #090A0F; border: 1px solid rgba(255,255,255,0.12); padding: 12px 16px; border-radius: 8px;">
                            ${name}
                          </div>
                        </td>
                      </tr>

                      <!-- Email Address & Phone Number 2-Col Table -->
                      <tr>
                        <td style="padding-bottom: 18px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="48%" valign="top" style="padding-right: 2%;">
                                <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                                  EMAIL ADDRESS
                                </div>
                                <div style="font-size: 14px; font-weight: 600; color: #38bdf8; background-color: #090A0F; border: 1px solid rgba(255,255,255,0.12); padding: 12px 16px; border-radius: 8px; word-break: break-all;">
                                  <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                                </div>
                              </td>
                              <td width="48%" valign="top" style="padding-left: 2%;">
                                <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                                  PHONE NUMBER
                                </div>
                                <div style="font-size: 14px; font-weight: 600; color: #38bdf8; background-color: #090A0F; border: 1px solid rgba(255,255,255,0.12); padding: 12px 16px; border-radius: 8px;">
                                  ${phone ? `<a href="tel:${phone}" style="color: #38bdf8; text-decoration: none;">${phone}</a>` : '<span style="color: #6b7280;">Not provided</span>'}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Company / Organization -->
                      <tr>
                        <td style="padding-bottom: 18px;">
                          <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                            COMPANY / ORGANIZATION
                          </div>
                          <div style="font-size: 14px; color: #e5e7eb; background-color: #090A0F; border: 1px solid rgba(255,255,255,0.12); padding: 12px 16px; border-radius: 8px;">
                            ${company || "Not specified"}
                          </div>
                        </td>
                      </tr>

                      <!-- Project Type & Estimated Budget -->
                      <tr>
                        <td style="padding-bottom: 18px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="48%" valign="top" style="padding-right: 2%;">
                                <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                                  PROJECT TYPE
                                </div>
                                <div style="font-size: 13px; font-weight: 700; color: #c084fc; background-color: #2e1065; border: 1px solid #6b21a8; padding: 12px 16px; border-radius: 8px;">
                                  ${projectType}
                                </div>
                              </td>
                              <td width="48%" valign="top" style="padding-left: 2%;">
                                <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                                  ESTIMATED BUDGET
                                </div>
                                <div style="font-size: 13px; font-weight: 700; color: #34d399; background-color: #064e3b; border: 1px solid #047857; padding: 12px 16px; border-radius: 8px;">
                                  ${budget}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Message Overview -->
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
                            PROJECT OVERVIEW & TIMELINE
                          </div>
                          <div style="font-size: 14px; line-height: 1.6; color: #f3f4f6; background-color: #090A0F; border-left: 4px solid #6366f1; border-top: 1px solid rgba(255,255,255,0.12); border-right: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 0 8px 8px 0; white-space: pre-wrap;">
                            ${message}
                          </div>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 32px; background-color: #090A0F; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                    <div style="font-family: monospace; font-size: 11px; color: #6b7280;">
                      Sent automatically via SangamX Contact System &bull; ${new Date().toLocaleString()}
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Check if SMTP is configured
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"SangamX Contact Form" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: `⚡ New SangamX Inquiry: ${name} (${projectType})`,
        html: htmlTemplate,
        text: `New Contact Inquiry from ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProject: ${projectType}\nBudget: ${budget}\nMessage:\n${message}`,
      });

      return NextResponse.json({
        success: true,
        message: "Email sent successfully via SMTP.",
      });
    } else {
      console.log("=========================================");
      console.log("📩 NEW CONTACT FORM INQUIRY (SMTP Pending)");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company || "N/A");
      console.log("Project Type:", projectType);
      console.log("Budget:", budget);
      console.log("Message:", message);
      console.log("Recipient:", recipient);
      console.log("=========================================");

      return NextResponse.json({
        success: true,
        message: "Inquiry saved & logged successfully. Add SMTP_USER & SMTP_PASS to .env.local for email dispatch.",
      });
    }
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email notification.", details: error.message },
      { status: 500 }
    );
  }
}
