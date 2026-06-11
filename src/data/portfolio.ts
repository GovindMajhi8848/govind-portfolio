export const personalInfo = {
  name: "Govind Majhi",
  title: "Full-Stack Developer & SaaS Builder",
  subtitle: "B.Tech CSE 2024 | Building products that solve real problems",
  location: "Nepal",
  description:
    "I build production-grade SaaS products from scratch — full-stack web apps with React, TypeScript, Express, and PostgreSQL. I specialize in designing architecture-first solutions for emerging markets: offline-capable, mobile-first, and local-payment-ready. Every project ships with zero TypeScript errors, production UI standards, and a relentless focus on quality.",
  resumeUrl: "#",
  github: "GovindMajhi8848",
  email: "govindmajhi173@gmail.com",
};

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "PWA"] },
  { category: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "REST API"] },
  { category: "Mobile", items: ["Android (Java)", "MVVM", "Hilt", "ViewBinding"] },
  { category: "DevOps", items: ["Docker", "cPanel", "Git", "CI/CD", "Vercel"] },
  { category: "Design", items: ["Design Systems", "UI/UX", "Typography", "Figma"] },
  { category: "Architecture", items: ["Multi-Tenant SaaS", "Offline-First", "Microservices", "API Design"] },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  link?: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: "schoolos",
    title: "SchoolOS",
    subtitle: "School Management SaaS for Nepal",
    description:
      "B2B platform designed for Nepal's education sector. Offline-first architecture with CRDT sync, SMS-first communication (BullMQ queue), local payment integration (eSewa/Fonepay), and multi-tenant PostgreSQL. PWA frontend works on $100 Android phones.",
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "PWA"],
    highlights: [
      "Offline-first: work without internet, sync when reconnected",
      "SMS queue: automated attendance alerts & fee reminders in Nepali",
      "Multi-tenant: row-level isolation per school",
      "Full pipeline: attendance, fees, report cards, parent communication",
    ],
    status: "Active Development",
  },
  {
    id: "qskipper",
    title: "Q-Skipper",
    subtitle: "Multi-Tenant Queue Management System",
    description:
      "Enterprise queue management serving salons, garages, hospitals, e-commerce, and government verticals. Full-stack web app with companion Android app. Features real-time analytics, multi-branch management, and 3-channel notification system.",
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "Android", "Zustand"],
    highlights: [
      "Multi-vertical: configured for 6+ industry types",
      "Android companion app (MVVM + Hilt + Retrofit)",
      "Real-time analytics dashboard with live queue monitoring",
      "3-channel notification: in-app, SMS, email",
    ],
    status: "Launched",
  },
  {
    id: "solosparc",
    title: "SoloSparc",
    subtitle: "Operating System for Solo Agency Owners",
    description:
      "Complete business management suite for freelancers and solo agency owners. Full pipeline from lead generation to client support: proposals, contracts, time tracking, invoicing, and a branded client portal.",
    tech: ["React", "Vite", "TypeScript", "Express", "SQLite", "Stripe", "PWA"],
    highlights: [
      "End-to-end agency workflow: lead → proposal → contract → invoice",
      "Stripe subscription integration with tiered pricing",
      "Branded client portal for proposal approval & invoice payment",
      "Time tracking with manual and timer modes",
    ],
    status: "In Development",
  },
  {
    id: "ems",
    title: "EMS-2.0",
    subtitle: "Employee Management System",
    description:
      "Production-grade employee management system built with systematic design methodology. Complete redesign with design tokens, component architecture, and semantic CSS variables. Zero TypeScript errors, both light and dark mode verified.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Design Systems"],
    highlights: [
      "Figma-style design system: tokens → components → pages",
      "12 UI primitives: Dialog, Toast, SearchBar, StatCard, EmptyState, ErrorBoundary",
      "Semantic CSS with OKLCH color space, glass surfaces, proper text hierarchy",
      "Accessibility: semantic HTML, ARIA labels, keyboard navigation",
    ],
    status: "Shipped",
  },
  {
    id: "clickdigital",
    title: "Click Digital",
    subtitle: "Digital Marketing Agency Landing Page",
    description:
      "Data-driven digital marketing agency landing page for Nepal market. Brand identity with Navy, Teal, and Gold palette. SEO-optimized with JSON-LD structured data, OG tags, and responsive design.",
    tech: ["HTML/CSS", "Tailwind", "SEO", "Responsive Design"],
    highlights: [
      "Brand identity system with comprehensive design tokens",
      "SEO optimized: JSON-LD, OG/Twitter cards, sitemap, robots.txt",
      "Fully responsive across all device sizes",
      "Production deployment on cPanel hosting",
    ],
    status: "Live",
  },
];

export const experience = [
  {
    role: "Independent SaaS Developer",
    period: "2025 — Present",
    description:
      "Building full-stack SaaS products from architecture to deployment. Specializing in B2B solutions for emerging markets with offline-first architecture, local payment integration, and mobile-first design.",
  },
  {
    role: "B.Tech Computer Science & Engineering",
    organization: "2020 — 2024",
    description:
      "Computer Science graduate with focus on full-stack development, system design, and building production-grade applications.",
  },
];
