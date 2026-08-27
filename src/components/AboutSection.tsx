import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Palette, GraduationCap, MapPin, Sparkles, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Background & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Story */}
          <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I graduated in 2024 with a B.Tech in Computer Science and Engineering from ITM University. Throughout my journey, I discovered my passion at the intersection of design aesthetics, user psychology, and intuitive digital interfaces—creating digital experiences that not only look modern and intentional, but also solve real problems.
            </p>
            <p>
              To refine my craft, I completed intensive professional UI/UX Design training at Tech Axis, mastering the 5-stage Design Thinking Process (Empathize, Define, Ideate, Prototype, Test), Auto Layout component architecture, and design token variables.
            </p>
            <p>
              With deep expertise in core design principles—typography scale, 8pt spatial rhythm, color harmony, and micro-interactions—I craft pixel-perfect, accessible, and responsive user interfaces on the first pass with meticulous attention to detail.
            </p>
            <p>
              To deliver at modern velocity, I integrate <strong className="text-slate-900 dark:text-white font-semibold">AI developer tooling and vibe coding</strong> (Cursor, Claude Code, GitHub Copilot, v0.dev) into my daily workflow. By directing AI with design-token discipline and systematic prompt architecture, I iterate through prototypes in hours, resolve edge cases quickly, and ship high-fidelity digital experiences 10x faster.
            </p>
          </div>

          {/* Right Col: Quick Facts Card */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#11141c] border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-500">
              Quick Highlights
            </h3>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>B.Tech in Computer Science & Engineering (2020 – 2024).</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Palette className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>UI/UX Specialization from Tech Axis (Design Thinking & Auto Layout).</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>AI & Vibe Coding: Cursor, Claude Code, Copilot, v0 prototyping.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Visual Branding: Figma Variables, Canva Pro, Adobe Suite.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Based in {personalInfo.location}. Open to Remote & Relocation.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
