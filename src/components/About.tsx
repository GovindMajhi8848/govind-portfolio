import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--color-bg-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle mb-12">The person behind the code.</p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text)] mb-6">
              {personalInfo.description}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)]">
              I'm driven by a simple mission: build tools that make a real difference.
              Every project ships production-grade — zero TypeScript errors, tested,
              documented, and designed to last. I care deeply about architecture,
              design systems, and creating software that feels solid.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Core Values
              </h3>
              <ul className="space-y-3">
                {["Quality over speed — but fast counts", "Architecture-first, code-second", "Ships with zero errors", "Design for real constraints"].map((value) => (
                  <li key={value} className="flex items-start gap-2 text-sm">
                    <span className="text-[var(--color-primary)] mt-0.5 shrink-0">◆</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Education
              </h3>
              <p className="text-sm font-medium">B.Tech Computer Science & Engineering</p>
              <p className="text-xs text-[var(--color-text-muted)]">2020 — 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
