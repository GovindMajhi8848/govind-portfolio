# Govind Majhi — Personal Portfolio & Systems Showcase

> High-performance, modern, interactive developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS**, **Vite**, and **Lucide Icons**.

---

## ⚡ Key Highlights & Features

- 💎 **Modern Dark Neomorphism & Glassmorphic UI**: High-end aesthetic with ambient background glows, subtle cyber grids, and 60fps animations.
- **Interactive Project Showcase**: Deep-dive modals with architectural invariants, performance metrics, and live demo / source links.
- 🧠 **Categorized Skills Matrix**: Visual proficiency breakdown spanning Frontend, Backend/Distributed, AI/Agentic, and DevSecOps.
- 💻 **Interactive CLI Terminal Emulator (`agy-cli`)**: Embedded developer easter egg supporting commands like `help`, `bio`, `skills`, `projects`, `stats`, `contact`, and `sudo`.
- 📬 **Streamlined Contact Conversion**: Direct contact channels with one-click email clipboard copy and interactive message composer with canvas confetti.
- 📱 **Mobile-First & Responsive**: Fully responsive layout optimized across mobile, tablet, and desktop screens with WCAG 2.1 AA accessibility.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev) + [Vite 6](https://vitejs.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + Custom Glassmorphism Classes
- **Icons & Effects**: [Lucide React](https://lucide.dev) + `canvas-confetti`

---

## Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static production assets will be output to the `dist/` directory, ready to be deployed instantly on **Vercel**, **Cloudflare Pages**, **GitHub Pages**, or **Netlify**.

### 4. Type Check
```bash
npm run type-check
```

---

## 📝 Customization

All personal details, projects, skills, career history, and terminal commands are centralized in a single file:
👉 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

Simply update the exported objects and arrays to customize your portfolio content.
