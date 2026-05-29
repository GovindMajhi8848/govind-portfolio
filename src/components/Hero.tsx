import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-4">
            {personalInfo.location} — Available for Work
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="gradient-text">{personalInfo.name.split(" ")[1]}</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-muted)] font-medium">
              {personalInfo.title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-2xl">
            {personalInfo.subtitle}. I design and build production-grade SaaS
            products — from idea to deployment — with zero compromises on quality.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              View Projects
            </a>
            <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
