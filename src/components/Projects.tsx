import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--color-bg-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">
          Production-grade SaaS products I've built from the ground up.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-[var(--color-text-muted)] text-sm mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]">
                    {project.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-[var(--color-primary)] bg-[rgba(14,124,123,0.06)] px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="text-[var(--color-primary)] mt-0.5 shrink-0">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
