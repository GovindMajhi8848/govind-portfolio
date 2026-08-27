import React, { useState } from 'react';
import { 
  Users, 
  Layout, 
  Palette, 
  Zap, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Empathize & User Research',
      subtitle: 'Design Thinking Phase 1',
      icon: Users,
      color: 'from-pink-500 to-rose-600',
      badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      summary: 'Deep-dive user interviews, persona mapping, competitive analysis, and pain-point definition.',
      deliverables: ['User Personas', 'Empathy Maps', 'User Journey Diagrams', 'Problem Statement Definition'],
      metric: '85% fewer usability revisions'
    },
    {
      step: '02',
      title: 'Wireframing & Information Architecture',
      subtitle: 'Design Thinking Phase 2',
      icon: Layout,
      color: 'from-blue-500 to-cyan-600',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      summary: 'Rapid low-fidelity sketches, screen flow maps, user navigation hierarchy, and layout constraints.',
      deliverables: ['Lo-Fi Wireframe Flows', 'Navigation Matrix', 'Clickable Flow Prototypes', 'Heuristic Evaluation'],
      metric: 'Fast rapid iteration'
    },
    {
      step: '03',
      title: 'Hi-Fi UI & Figma Design Tokens',
      subtitle: 'Figma Auto Layout 5.0 & Variables',
      icon: Palette,
      color: 'from-purple-500 to-indigo-600',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      summary: 'Pixel-perfect visual design, atomic component hierarchy, Figma variables (color/spacing/radius), and WCAG 2.1 AA compliance.',
      deliverables: ['Component Variant Libraries', 'Color & Spacing Tokens', 'Dark/Light Mode Systems', 'Micro-interaction Specs'],
      metric: '100% Auto Layout structure'
    },
    {
      step: '04',
      title: 'AI Vibe Coding & Live Prototyping',
      subtitle: 'Cursor + Claude Code + v0 Prototyping',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      summary: 'Directing AI developer tooling to build live, high-fidelity interactive web prototypes directly from Figma specs and design tokens.',
      deliverables: ['Spec-Driven Prompting', 'Instant Live Prototyping', 'Component Modularity', 'Context Engineering'],
      metric: '10x iteration velocity'
    },
    {
      step: '05',
      title: 'Quality Assurance & Production Release',
      subtitle: 'Performance & Cross-Platform QA',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      summary: 'Cross-browser testing, responsiveness audits, accessibility checks, and automated continuous deployment.',
      deliverables: ['100/100 Lighthouse Score', 'Cross-Device Responsiveness', 'Accessibility QA', 'Continuous Deployment'],
      metric: 'Flawless production readiness'
    }
  ];

  return (
    <section id="process" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design Thinking to Production Code</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              My 5-Stage Engineering Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
              Trained at Tech Axis and refined across real-world projects to guarantee pixel-perfect execution from initial research to cloud deployment.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono text-xs">
              Tech Axis Certified Pipeline
            </span>
          </div>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between craft-card ${
                  isSelected 
                    ? 'bg-white dark:bg-[#11141c] border-blue-500/80 ring-2 ring-blue-500/20 shadow-md' 
                    : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                    STEP {item.step}
                  </span>
                  <div className={`p-1 rounded-lg ${isSelected ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className={`text-xs font-bold truncate ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                  {item.title.split(' ')[0]}...
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Visual Showcase Card */}
        {(() => {
          const current = steps[activeStep];
          const Icon = current.icon;

          return (
            <div className="rounded-3xl bg-white dark:bg-[#11141c] border border-slate-200 dark:border-slate-800/80 shadow-lg p-6 sm:p-8 overflow-hidden relative">
              {/* Subtle Ambient Glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${current.color} opacity-5 blur-3xl pointer-events-none`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Col: Step Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      STEP {current.step} OF 05
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {current.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {current.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Key Deliverables & Artifacts
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Visual Card & Impact Metric */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-400">KEY BENEFIT</div>
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        {current.metric}
                      </div>
                    </div>
                  </div>

                  {/* Mini Flow Indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Pipeline Progress</span>
                      <span className="font-bold text-slate-900 dark:text-white">{(activeStep + 1) * 20}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${current.color} transition-all duration-500 rounded-full`}
                        style={{ width: `${(activeStep + 1) * 20}%` }}
                      />
                    </div>
                  </div>

                  {/* Quick Next / Prev Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 transition-all"
                    >
                      ← Previous
                    </button>
                    <button
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-sm"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
