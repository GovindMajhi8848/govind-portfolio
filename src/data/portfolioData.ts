export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'UI/UX Design' | 'Frontend Dev' | 'Mobile App' | 'Design System';
  tags: string[];
  role: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  canvaUrl?: string;
  featured: boolean;
  overview: string;
  challenges: string[];
  keyFeatures: string[];
  metrics?: ProjectMetric[];
  accentGradient: string;
  prototypeBadge: string;
}

export interface TechTool {
  id: string;
  name: string;
  category: 'Design & UI/UX' | 'AI & Vibe Coding' | 'Creative Suite' | 'Cloud & Systems';
  commentary: string;
  proficiency: 'Daily Driver' | 'Proficient' | 'Certified / Trained';
  highlights: string[];
  iconKey: string;
  badge?: string;
  workspaceUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  highlight?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  content: string[];
}

export const personalInfo = {
  name: "Govind Kumar Majhi",
  role: "UI/UX Designer & Frontend Developer",
  tagline: "Crafting intuitive interfaces in Figma and building interactive prototypes with AI vibe coding.",
  location: "Sunsari / Kathmandu, Nepal",
  phone: "+977 9826384499",
  remoteStatus: "Open to Remote & On-Site Roles",
  availability: "Available for full-time roles & UI/UX contracts",
  email: "govindmajhi173@gmail.com",
  linkedin: "https://www.linkedin.com/in/govindkumarmajhi173/",
  canvaWorkspace: "https://www.canva.com/design/DAGwM_FuciM/wHWYVp5J94eQ6QL96otlFQ/edit",
  bioHeadline: "I design intuitive interfaces in Figma and build rapid prototypes with AI vibe coding.",
  bioFull: [
    "I'm Govind Kumar Majhi — a Computer Science graduate (B.Tech 2024) with a strong foundation in UI/UX design, wireframing, interactive prototyping, and modern design systems.",
    "I bridge the gap between human empathy and digital products. Having trained deeply in the Design Thinking Process, Auto Layout, Figma Variables, and Component Design Systems at Tech Axis, I craft user experiences and design systems that are visually polished, accessible, and intuitive.",
    "I leverage modern AI developer workflows and vibe coding (Cursor, Claude Code, GitHub Copilot, v0) to accelerate prototyping, explore multiple UI directions, and ship high-fidelity interactive experiences at 10x velocity without compromising design standards."
  ],
  quickStats: [
    { label: "Education", value: "B.Tech CSE (2024)" },
    { label: "Core Craft", value: "UI/UX & Prototyping" },
    { label: "AI Workflows", value: "Vibe Coding & Tools" },
    { label: "Certifications", value: "Tech Axis & Zscaler" }
  ]
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "ITM University, Gwalior, MP, India",
    period: "2020 — 2024",
    location: "Gwalior, India",
    details: "Core focus on Software Engineering, Web Technologies, Systems Architecture, and Human-Computer Interaction."
  },
  {
    degree: "+2 Science",
    institution: "Araniko Awasiya Secondary School",
    period: "2018 — 2020",
    location: "Biratnagar, Morang, Nepal",
    details: "Physics, Mathematics, and Computer Science foundation."
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services Training & Certification",
    year: "2024",
    badge: "AWS Certified"
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services Training & Certification",
    year: "2024",
    badge: "AWS Certified"
  },
  {
    title: "UI/UX Design Specialization Training",
    issuer: "Tech Axis",
    year: "2024",
    badge: "Tech Axis"
  },
  {
    title: "Zscaler Cybersecurity Fundamentals Associate",
    issuer: "Zscaler Academy",
    year: "2023",
    badge: "Zscaler"
  }
];

export const techStack: TechTool[] = [
  // Design & UI/UX
  {
    id: "figma",
    name: "Figma",
    category: "Design & UI/UX",
    commentary: "Mastery of Auto Layout, component variant properties, interactive state prototyping, Figma Variables (Color/Spacing/Radius), and responsive design constraint matrices.",
    proficiency: "Daily Driver",
    highlights: ["Auto Layout 5.0", "Component Variants", "Design Tokens", "Variables & Modes", "Interactive Overlays"],
    iconKey: "figma",
    badge: "Primary Tool"
  },
  {
    id: "wireframing",
    name: "Wireframing & Interactive Prototyping",
    category: "Design & UI/UX",
    commentary: "Translating ambiguous problem statements into rapid low-fidelity sketches, high-fidelity clickable user flows, and micro-interaction states for usability testing.",
    proficiency: "Daily Driver",
    highlights: ["Lo-Fi / Hi-Fi Flows", "Clickable Prototypes", "Smart Animate", "Interactive Form States", "User Testing"],
    iconKey: "wireframe"
  },
  {
    id: "design-systems",
    name: "Design Systems & Token Architecture",
    category: "Design & UI/UX",
    commentary: "Constructing scalable design systems with atomic component hierarchies, semantic color variables, 8pt spacing scales, fluid typography, and dark mode tokens.",
    proficiency: "Daily Driver",
    highlights: ["Atomic Design", "Token Variables", "WCAG AA Contrast", "Typography Scale", "8pt Spacing Grid"],
    iconKey: "tokens",
    badge: "Design-to-Code"
  },
  {
    id: "user-research",
    name: "Design Thinking & User Research",
    category: "Design & UI/UX",
    commentary: "Executing the 5-stage Design Thinking methodology: user persona profiling, empathy mapping, customer journey tracking, and data-backed usability evaluations.",
    proficiency: "Daily Driver",
    highlights: ["Empathize & Define", "User Personas", "Journey Mapping", "Information Architecture", "Heuristic Evaluation"],
    iconKey: "research",
    badge: "Tech Axis Trained"
  },


  // AI & Vibe Coding
  {
    id: "ai-vibe-coding",
    name: "Vibe Coding & AI Developer Tooling",
    category: "AI & Vibe Coding",
    commentary: "Mastery of high-velocity development using Claude Code, Cursor, GitHub Copilot, and Gemini CLI. Directing large language models through iterative context-driven prompting, instant prototyping, automated refactoring, and strict code quality verification.",
    proficiency: "Daily Driver",
    highlights: ["Cursor & Claude Code", "GitHub Copilot", "Context Prompting", "Spec-Driven Prototyping", "Rapid Refactoring", "Zero-Regression Loop"],
    iconKey: "ai-vibe",
    badge: "10x Velocity"
  },
  {
    id: "generative-ui",
    name: "Generative UI & Prompt-to-Component",
    category: "AI & Vibe Coding",
    commentary: "Accelerating design-to-code pipelines by translating natural language specs into production-ready React and Tailwind components with v0 by Vercel and Bolt.new, followed by manual token alignment and polish.",
    proficiency: "Daily Driver",
    highlights: ["v0.dev by Vercel", "Bolt.new & Lovable", "Figma AI Workflows", "Component Scaffolding", "Micro-Interactions", "Instant MVP Launch"],
    iconKey: "gen-ui",
    badge: "Generative UI"
  },
  {
    id: "prompt-engineering",
    name: "Prompt Architecture & Agentic Workflows",
    category: "AI & Vibe Coding",
    commentary: "Structuring system prompts, context files, markdown specifications, and automated agent loops (Gemini CLI, Antigravity, MCP tools) to generate deterministic, high-quality, and maintainable software.",
    proficiency: "Daily Driver",
    highlights: ["System Prompt Design", "Context Optimization", "MCP Tool Integration", "Agentic Pipelines", "Test-Driven AI Loops"],
    iconKey: "prompt",
    badge: "Agentic AI"
  },

  // Creative Suite
  {
    id: "adobe-suite",
    name: "Adobe Illustrator & Photoshop",
    category: "Creative Suite",
    commentary: "Vector illustration, custom icon design, graphic banners, photo retouching, background removal, and digital artwork production.",
    proficiency: "Proficient",
    highlights: ["Vector Icon Sets", "Photo Manipulation", "Marketing Collateral", "Pen Tool Mastery", "Asset Exporting"],
    iconKey: "illustrator"
  },
  {
    id: "canva-pro",
    name: "Canva Pro & Visual Branding",
    category: "Creative Suite",
    commentary: "Rapid social media graphics, presentation deck design, brand kit management, typography lockups, and digital promotional assets.",
    proficiency: "Daily Driver",
    highlights: ["Brand Kit Setup", "Social Media Graphics", "Pitch Decks", "Infographic Design", "Marketing Materials"],
    iconKey: "canva",
    badge: "Live Workshop",
    workspaceUrl: "https://www.canva.com/design/DAGwM_FuciM/wHWYVp5J94eQ6QL96otlFQ/edit"
  },
  {
    id: "motion-video",
    name: "Animation & Video Editing",
    category: "Creative Suite",
    commentary: "Creating UI interaction reels, product walkthroughs, animated component showcases, and video post-production for web demos.",
    proficiency: "Proficient",
    highlights: ["UI Walkthrough Reels", "Transition Timing", "Video Trimming", "Audio Syncing", "Demo Teasers"],
    iconKey: "video"
  },

  // Cloud & Systems
  {
    id: "git-version-control",
    name: "Git & GitHub Version Control",
    category: "Cloud & Systems",
    commentary: "Clean feature branching, semantic git commits, Pull Request reviews, merge workflows, and automated continuous deployment to Vercel/GitHub Pages.",
    proficiency: "Daily Driver",
    highlights: ["Branching Workflows", "Pull Request Reviews", "Conflict Resolution", "CI/CD Deployment", "Git Hygiene"],
    iconKey: "git"
  }
];

export const projects: Project[] = [
  {
    id: "clickdigitals-agency",
    title: "ClickDigitals — Digital Marketing & Tech Academy Platform",
    tagline: "High-conversion digital agency web platform featuring data-driven growth services, interactive skill course catalog, and instant lead funnels.",
    description: "Designed and engineered the official web platform for ClickDigitals (Biratnagar), combining audience targeting science, performance marketing campaigns, and an interactive 6-track tech academy curriculum with responsive React & Tailwind UI.",
    category: "Frontend Dev",
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Performance Marketing", "Tech Academy Catalog", "Schema.org SEO"],
    role: "Lead Frontend Developer & UI/UX Designer",
    year: "2024",
    liveUrl: "https://www.clickdigitals.com.np/",
    githubUrl: "https://github.com/govindmajhi",
    featured: true,
    accentGradient: "from-blue-700 via-indigo-700 to-cyan-600",
    prototypeBadge: "Live Production Platform",
    metrics: [
      { label: "Performance", value: "< 0.8s Load Speed" },
      { label: "SEO Structured Data", value: "100% Schema.org" },
      { label: "Skill Tracks", value: "6 In-Demand Courses" }
    ],
    overview: "Architected, designed, and deployed the official production website for ClickDigitals in Biratnagar. Engineered an ultra-fast modern platform with interactive course exploration, audience targeting ROI visualizers, responsive mobile-first navigation, and comprehensive JSON-LD structured data.",
    challenges: [
      "Unifying two distinct business models (B2B digital marketing services and B2C skill training programs) within a coherent, streamlined user experience",
      "Building an interactive course catalog module with duration, difficulty levels, and instant QR enrollment lead flows",
      "Ensuring optimal Core Web Vitals and zero layout shifts across desktop, tablet, and mobile viewports with Tailwind CSS"
    ],
    keyFeatures: [
      "Interactive 6-track tech academy course catalog with dynamic duration & difficulty filters",
      "Data-driven ROI marketing service breakdowns (Audience Targeting, Brand Strategy, Performance Ads)",
      "Instant modal inquiry workflow and interactive QR code registration integration",
      "Full JSON-LD structured data (LocalBusiness, Course, ItemList, FAQPage, BreadcrumbList)",
      "High-contrast, accessible typography with 60fps smooth animations"
    ]
  },
  {
    id: "lilliputschool-portal",
    title: "Lilliput Premier School — Official Institutional Platform",
    tagline: "High-performance institutional web portal featuring a dual B.S./A.D. academic calendar, admissions workflow, and WCAG accessibility.",
    description: "Designed and developed the full web experience for Lilliput Premier Elementary School (British Council ISA Awardee in Biratnagar). Includes a dual Bikram Sambat / Gregorian calendar, online admissions portal, interactive galleries, and mobile-first architecture.",
    category: "Frontend Dev",
    tags: ["HTML5 / Modern CSS3", "JavaScript ES6+", "Dual Calendar (B.S./A.D.)", "UI/UX Design", "Responsive Layout", "WCAG 2.1 AA", "SEO Schema.org"],
    role: "Lead Frontend Developer & UI/UX Designer",
    year: "2024",
    liveUrl: "https://lilliputschool.edu.np",
    githubUrl: "https://github.com/govindmajhi",
    featured: true,
    accentGradient: "from-rose-600 to-red-700",
    prototypeBadge: "Live Production Site",
    metrics: [
      { label: "Performance", value: "98+ Mobile Score" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Calendar", value: "Dual B.S. / A.D." }
    ],
    overview: "Architected and delivered the official production website for Lilliput Premier Elementary School, Biratnagar. Engineered a custom dual-calendar synchronizing Bikram Sambat with Gregorian academic milestones, an intuitive online admissions pipeline, and responsive multi-page layouts achieving sub-second load times.",
    challenges: [
      "Building a custom dual-calendar engine that accurately displays Nepali Bikram Sambat (B.S.) alongside standard Gregorian dates for academic terms",
      "Designing a clean, parent-friendly information architecture across multiple branches (Montessori preschool, elementary school, STEAM campus, SDGs)",
      "Optimizing rich image galleries, video hero backgrounds, and web assets for rapid mobile loading across various network conditions in Nepal",
      "Implementing Schema.org EducationalOrganization structured data to boost local search rankings and discoverability"
    ],
    keyFeatures: [
      "Interactive dual Bikram Sambat (B.S.) and Gregorian (A.D.) academic calendar viewer",
      "Mobile-optimized admissions application portal with input validation",
      "Full responsive navigation drawer with accessible touch targets and keyboard traps",
      "Interactive campus photo gallery and compressed high-definition video hero banner",
      "100% semantic HTML5 with complete WCAG 2.1 AA contrast compliance and Schema.org metadata"
    ]
  },
  {
    id: "novastore-ecommerce",
    title: "NovaStore — Responsive E-Commerce Platform",
    tagline: "End-to-end multi-device retail experience designed in Figma and coded with React 19 & Tailwind CSS.",
    description: "A complete multi-device shopping experience featuring an intuitive product catalog, responsive filter drawer, interactive cart modal, and optimized 3-step checkout flow.",
    category: "UI/UX Design",
    tags: ["Figma Auto Layout", "React 19", "TypeScript", "Tailwind CSS", "Design Tokens"],
    role: "Lead UI/UX Designer & Frontend Developer",
    year: "2024",
    githubUrl: "https://github.com/govindmajhi",
    liveUrl: "https://govindmajhi.dev",
    figmaUrl: "https://figma.com/@govindmajhi",
    featured: true,
    accentGradient: "from-blue-600 to-indigo-600",
    prototypeBadge: "Figma + React Code",
    metrics: [
      { label: "Layout", value: "100% Auto Layout" },
      { label: "Screens", value: "18+ Desktop & Mobile" },
      { label: "Speed", value: "Sub-100ms Transitions" }
    ],
    overview: "Conducted user research to eliminate checkout friction. Built comprehensive Figma component variants with responsive constraints and developed clean React components.",
    challenges: [
      "Translating complex multi-level category navigation into a mobile-friendly drawer without cluttering the screen",
      "Designing high-contrast, WCAG AA compliant cart and checkout micro-interactions",
      "Building reusable Figma component variants with interactive hover and active states"
    ],
    keyFeatures: [
      "Desktop & Mobile responsive Figma prototype with 100% Auto Layout",
      "Interactive product card with quick-view modal and image zoom",
      "Seamless sticky checkout summary and step-by-step progress indicator",
      "Modular Tailwind component design token system"
    ]
  },
  {
    id: "freshgo-grocery-app",
    title: "FreshGo — Grocery E-Commerce Mobile App",
    tagline: "Mobile-first UI/UX design with localized category browsing, instant search, and express delivery tracking.",
    description: "Designed from the ground up to make daily grocery ordering fast and friction-free for busy urban shoppers, with smart item reordering and cart recommendations.",
    category: "Mobile App",
    tags: ["Figma Mobile UI", "User Research", "Wireframing", "Interactive Prototype", "Design Thinking"],
    role: "UI/UX Designer",
    year: "2024",
    githubUrl: "https://github.com/govindmajhi",
    figmaUrl: "https://figma.com/@govindmajhi",
    featured: true,
    accentGradient: "from-emerald-600 to-teal-600",
    prototypeBadge: "Interactive Mobile Prototype",
    metrics: [
      { label: "Platform", value: "iOS / Android Mobile" },
      { label: "Usability", value: "One-Handed Reach Zone" },
      { label: "User Flows", value: "8 Complete Journeys" }
    ],
    overview: "Designed based on Tech Axis Design Thinking methodology: user persona definition, journey mapping, low-fidelity wireframing, and high-fidelity testing.",
    challenges: [
      "Optimizing bottom navigation and thumbnail sizes for one-handed thumb-reach zones on mobile devices",
      "Designing clear visual states for out-of-stock items and alternative product suggestions",
      "Creating smooth micro-interactions for adding/subtracting item quantities"
    ],
    keyFeatures: [
      "Thumb-friendly bottom navigation bar with live cart counter badge",
      "Category carousel with vibrant custom iconography",
      "Order status timeline tracking from store packaging to doorstep delivery",
      "Clean onboarding and location permission modal flows"
    ]
  },
  {
    id: "devpulse-dashboard",
    title: "DevPulse — Real-Time Developer Analytics",
    tagline: "High-performance frontend dashboard engineered with React 19, TypeScript, and responsive Tailwind charts.",
    description: "A fast developer telemetry application providing real-time Core Web Vitals, API latency monitors, error rate tracking, and interactive timeseries filters.",
    category: "Frontend Dev",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Web Performance"],
    role: "Frontend Engineer",
    year: "2024",
    githubUrl: "https://github.com/govindmajhi",
    liveUrl: "https://govindmajhi.dev",
    featured: true,
    accentGradient: "from-cyan-600 to-blue-700",
    prototypeBadge: "Production React App",
    metrics: [
      { label: "Performance", value: "100/100 Lighthouse" },
      { label: "Type Safety", value: "100% Strict TS" },
      { label: "Bundle Size", value: "< 45KB Gzipped" }
    ],
    overview: "Engineered to deliver 60fps chart rendering and zero layout shifts even when streaming high-frequency data.",
    challenges: [
      "Debouncing high-frequency data updates to prevent React re-render lag",
      "Building dark-mode optimized SVG charts with high data density and tooltips",
      "Designing keyboard-navigable tabular data views with sticky headers"
    ],
    keyFeatures: [
      "Instant client-side filter and date range selector",
      "Subtle active press states and tactile button animations",
      "Responsive mobile cards and desktop expanded data table views",
      "100% strict TypeScript types with Zod payload validation"
    ]
  },
  {
    id: "prism-design-system",
    title: "Prism — UI Component & Token Library",
    tagline: "A comprehensive Figma design system translated into accessible React & Tailwind UI components.",
    description: "A synchronized design library featuring typography scales, color semantic tokens, button variants, input fields, badges, and modal dialogs.",
    category: "Design System",
    tags: ["Figma Variables", "Design Tokens", "React Components", "Tailwind CSS", "WCAG 2.1 AA"],
    role: "Creator & Maintainer",
    year: "2024",
    githubUrl: "https://github.com/govindmajhi",
    figmaUrl: "https://figma.com/@govindmajhi",
    featured: true,
    accentGradient: "from-purple-600 to-pink-600",
    prototypeBadge: "Design Tokens + React Kit",
    metrics: [
      { label: "Components", value: "40+ Variants" },
      { label: "Accessibility", value: "WCAG 2.1 AA Compliant" },
      { label: "Theming", value: "Light & Dark Modes" }
    ],
    overview: "Engineered to eliminate discrepancies between Figma design files and production code by standardizing token names and component states.",
    challenges: [
      "Structuring Figma variables to seamlessly support both light and dark mode themes",
      "Ensuring all interactive states (hover, focus-visible, active, disabled) match WCAG 2.1 AA contrast requirements",
      "Exporting clean SVG icon assets optimized for minimal bundle weight"
    ],
    keyFeatures: [
      "40+ modular Figma components with full variant configurations",
      "Direct code parity with React 19 and Tailwind CSS utility classes",
      "Accessible color palette with verified 4.5:1 minimum contrast ratios",
      "Comprehensive typography hierarchy guide"
    ]
  },
  {
    id: "brand-identity-studio",
    title: "Brand Identity & Visual Graphic Studio",
    tagline: "Visual identity systems, social media assets, marketing banners, and vector illustration work.",
    description: "A curated showcase of brand identities, promotional banners, event posters, and digital content created using Adobe Illustrator, Photoshop, and Canva.",
    category: "UI/UX Design",
    tags: ["Adobe Illustrator", "Photoshop", "Canva Pro", "Brand Identity", "Vector Art"],
    role: "Graphic & Visual Designer",
    year: "2023 — 2024",
    canvaUrl: "https://www.canva.com/design/DAGwM_FuciM/wHWYVp5J94eQ6QL96otlFQ/edit",
    featured: true,
    accentGradient: "from-amber-500 to-orange-600",
    prototypeBadge: "Canva Live Workshop",
    metrics: [
      { label: "Collateral", value: "Vector & Print" },
      { label: "Formats", value: "Social, Web, Print" }
    ],
    overview: "Crafted engaging visual collateral for digital campaigns, student organizations, and independent projects.",
    challenges: [
      "Maintaining brand consistency across different aspect ratios (Instagram, LinkedIn, Web Banners, Print)",
      "Balancing bold typography with clean whitespace for maximum visual impact"
    ],
    keyFeatures: [
      "Live Canva workshop with presentation templates and layout compositions",
      "Custom vector logo marks and typography lockups",
      "High-converting promotional social media carousels",
      "Print-ready promotional collateral and digital flyers"
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "tech-axis-uiux",
    role: "UI/UX Design Trainee & Researcher",
    company: "Tech Axis",
    period: "Jun 2024 — Aug 2024",
    location: "Kathmandu, Nepal",
    type: "Professional Training",
    description: [
      "Completed rigorous intensive training in the Design Thinking Process: Empathize, Define, Ideate, Prototype, and Test.",
      "Mastered Figma Auto Layout, Constraints, Component Variants, Variables, and Design System Architecture.",
      "Conducted usability testing sessions, mapped user journey flows, and built high-fidelity clickable interactive prototypes.",
      "Applied typography theory, 8pt spacing grids, and color harmony to mobile and desktop product designs."
    ],
    technologies: ["Figma", "Auto Layout", "Design Thinking", "User Research", "Wireframing", "Prototyping", "Variables"],
    highlight: "Designed complete end-to-end desktop and mobile e-commerce prototypes evaluated with top honors."
  },
  {
    id: "freelance-design-dev",
    role: "UI/UX Designer & Frontend Developer",
    company: "Freelance / Independent Projects",
    period: "2023 — Present",
    location: "Nepal / Remote",
    type: "Freelance",
    description: [
      "Architected, designed, and developed the official production platforms for ClickDigitals (https://clickdigitals.com.np) and Lilliput Premier Elementary School (https://lilliputschool.edu.np).",
      "Engineered high-performance marketing landing pages, interactive course catalogs, dual academic calendar engines, and lead inquiry workflows with React and Tailwind CSS.",
      "Create marketing banners, social media assets, and vector brand kits using Adobe Illustrator, Photoshop, and Canva.",
      "Ensure web projects achieve 95+ mobile performance scores with responsive Tailwind CSS & CSS3 layouts and full Schema.org structured data."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "Figma", "HTML5/CSS3", "Canva", "Git"],
    highlight: "Successfully launched production platforms for ClickDigitals and Lilliput School with 98+ performance scores."
  }
];

export const articles: Article[] = [
  {
    id: "figma-to-code",
    title: "Closing the Gap: How Designing in Figma Makes Me a Better Frontend Developer",
    date: "2024",
    readTime: "4 min read",
    excerpt: "Why understanding Figma Auto Layout, component variants, and design tokens makes building React and Tailwind components 2x faster and virtually bug-free.",
    slug: "closing-the-gap-figma-to-code",
    content: [
      "When developers design and designers understand code constraints, the entire product development lifecycle accelerates.",
      "Figma's Auto Layout is fundamentally Flexbox in a visual canvas. Understanding how flex-grow, padding, and constraints work in design tools allows me to write cleaner, more maintainable CSS without endless trial and error.",
      "By establishing strict naming conventions for Figma Variables (e.g. colors, spacing, radius) that match Tailwind configuration classes, translating design mockups to production-ready React code becomes an effortless, 1-to-1 mapping.",
      "The result is fewer UI bugs, zero layout shifts, and pixel-perfect fidelity between design and reality."
    ]
  },
  {
    id: "ux-principles-ecommerce",
    title: "Designing E-Commerce Flows That Minimize Cart Abandonment",
    date: "2024",
    readTime: "5 min read",
    excerpt: "Key UX lessons from designing mobile grocery and online storefront apps: sticky actions, one-thumb reachability, and micro-feedback.",
    slug: "designing-ecommerce-flows-that-minimize-cart-abandonment",
    content: [
      "Cart abandonment often occurs not because users change their minds, but because the interface presents unexpected friction.",
      "During our user testing sessions at Tech Axis, we noticed that mobile users struggle with hidden fee summaries and complex multi-step address forms.",
      "By implementing a sticky bottom sheet with transparent subtotal breakdowns and progressive disclosure for shipping details, user task completion speed improved significantly.",
      "Small details—such as instant visual checkmarks when an item is added to the cart—provide the tactile assurance users need to complete their purchases with confidence."
    ]
  },
  {
    id: "design-systems-scale",
    title: "Building Scalable Design Systems with Figma Variables and Tokens",
    date: "2024",
    readTime: "4 min read",
    excerpt: "How to structure color palettes, typography hierarchies, and component variants so your designs remain consistent across mobile and web.",
    slug: "building-scalable-design-systems-with-figma-variables",
    content: [
      "A design system is only as good as its maintainability. Using raw hex codes and arbitrary pixel values inevitably leads to fragmented UI as projects grow.",
      "By structuring design tokens into primitive layers (e.g. blue-500) and semantic layers (e.g. action-primary-bg), theming and dark mode support become effortless.",
      "Pairing Figma component variants with strict documentation ensures that developers always know which state (default, hover, active, disabled) to implement.",
      "Consistency builds user trust, and a robust token foundation makes scaling products a joy."
    ]
  },
  {
    id: "vibe-coding-ai-tools",
    title: "The Art of Vibe Coding: How AI Tools Supercharge Modern Developers",
    date: "2024",
    readTime: "5 min read",
    excerpt: "Why pairing deep design systems and frontend fundamentals with AI developer tools like Cursor, Claude Code, and v0 unlocks 10x engineering velocity.",
    slug: "the-art-of-vibe-coding-with-ai-tools",
    content: [
      "Vibe coding has transformed software development, but true mastery isn't about blind copy-pasting—it is the art of high-level architectural direction, rapid prototyping, and context-driven AI orchestration.",
      "By using AI tools like Cursor, Claude Code, and GitHub Copilot, I can express complex UI/UX requirements in natural language or design specs, scaffold working interactive prototypes in minutes, and then apply strict engineering rigor (TypeScript types, accessibility, responsive CSS) to harden them for production.",
      "Generative UI platforms like v0.dev bridge prompt-to-component translation, letting us explore multiple UI variants in minutes rather than days.",
      "The true superpower of modern development is combining deep foundational knowledge—knowing clean code, architecture, and user psychology—with AI as a tireless co-pilot."
    ]
  }
];
