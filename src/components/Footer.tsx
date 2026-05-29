import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
