# SangamX — Premium Digital Web Studio

> A high-performance, beautifully crafted portfolio and agency website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-FF0050?style=flat-square&logo=framer)

---

## ✨ Features

- ⚡ **Ultra-fast** — Built on Next.js 15 App Router with optimized rendering
- 🎨 **Stunning UI** — Custom cursor, noise overlays, glassmorphism, and smooth animations
- 📱 **Fully Responsive** — Pixel-perfect across all screen sizes
- 🔍 **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD schema, sitemap & robots.txt
- 🌗 **Dark Theme** — Premium dark aesthetic with carefully curated color palette
- ♿ **Accessible** — Semantic HTML, keyboard navigation, and ARIA support

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 15 (App Router)             |
| Language     | TypeScript 5.7                      |
| Styling      | Tailwind CSS 3.4                    |
| Animations   | Framer Motion 12                    |
| Icons        | Lucide React                        |
| Fonts        | Plus Jakarta Sans, JetBrains Mono   |
| Deployment   | Vercel (recommended)                |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/SangamX.git
cd SangamX

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start dev server with hot reload     |
| `npm run build`  | Create optimized production build    |
| `npm run start`  | Serve the production build           |
| `npm run lint`   | Run ESLint for code quality checks   |

---

## 📁 Project Structure

```
SangamX/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── services/           # Services page
│   ├── work/               # Portfolio/work page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── components/
│   ├── hero/               # Hero section components
│   ├── layout/             # Navbar, Footer
│   ├── process/            # Process/workflow components
│   ├── sections/           # Page sections (TechStack, etc.)
│   ├── services/           # Service-related components
│   ├── ui/                 # Reusable UI primitives
│   └── work/               # Portfolio/project components
├── data/                   # Static data (projects, services, etc.)
├── lib/                    # Utilities and type definitions
├── public/                 # Static assets (images, logos)
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<your-username>/SangamX)

Or deploy manually:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/<your-username>/SangamX/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Crafted with ❤️ by <strong>SangamX Digital Studio</strong>
</p>
