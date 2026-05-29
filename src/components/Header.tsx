import { personalInfo } from "../data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-[var(--color-border)] backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight">
          {personalInfo.name.split(" ")[0]}
          <span className="text-[var(--color-primary)]">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary text-sm py-2 px-4"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
