import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Palette, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  FileCode2, 
  Copy, 
  Check
} from 'lucide-react';
import { Project } from '../data/portfolioData';
import { 
  NovaStoreMockup, 
  FreshGoMockup, 
  DevPulseMockup, 
  PrismMockup, 
  BrandStudioMockup,
  LilliputSchoolMockup,
  ClickDigitalsMockup
} from './ProjectMockups';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'design-system' | 'architecture' | 'metrics'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [project]);

  if (!project) return null;

  const renderMockup = () => {
    switch (project.id) {
      case 'clickdigitals-agency':
        return <ClickDigitalsMockup />;
      case 'lilliputschool-portal':
        return <LilliputSchoolMockup />;
      case 'novastore-ecommerce':
        return <NovaStoreMockup />;
      case 'freshgo-grocery-app':
        return <FreshGoMockup />;
      case 'devpulse-dashboard':
        return <DevPulseMockup />;
      case 'prism-design-system':
        return <PrismMockup />;
      case 'brand-identity-studio':
        return <BrandStudioMockup />;
      default:
        return <NovaStoreMockup />;
    }
  };

  const handleCopyShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {project.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShare}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Copy link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-slate-50/50 dark:bg-slate-900/30 overflow-x-auto gap-2">
          {[
            { id: 'overview', label: 'Interactive Preview & Story', icon: Layers },
            { id: 'design-system', label: 'Figma Tokens & Design System', icon: Palette },
            { id: 'architecture', label: 'Frontend Architecture & Tech', icon: FileCode2 },
            { id: 'metrics', label: 'UX Metrics & Impact', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-3.5 px-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all shrink-0 ${
                  isActive
                    ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Tab 1: Overview & Mockup */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Interactive Sandbox Container */}
              <div className="p-4 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800/90 shadow-inner">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>LIVE INTERACTIVE WIREFRAME & UI SIMULATION</span>
                  </span>
                  <span className="text-[11px] text-emerald-400">60 FPS Hardware Render</span>
                </div>
                {renderMockup()}
              </div>

              {/* Narrative & Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>Project Overview & Intent</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Core UX Challenges Solved</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Design System & Tokens */}
          {activeTab === 'design-system' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 space-y-3">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-bold text-sm">
                  <Palette className="w-4 h-4" />
                  <span>Figma Auto Layout & Variable Tokens Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Engineered using Figma 5.0 nested Auto Layout structures, responsive min/max constraints, multi-mode color variables (Light/Dark/High-Contrast), and atomic component component sets.
                </p>
              </div>

              {/* Design Token Spec Table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="p-3">Token Group</th>
                      <th className="p-3">Figma Variable</th>
                      <th className="p-3">CSS / Tailwind Equivalent</th>
                      <th className="p-3">Standard Constraint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                    <tr>
                      <td className="p-3 font-bold text-purple-600 dark:text-purple-400">Spacing</td>
                      <td className="p-3">space.sm / space.md / space.xl</td>
                      <td className="p-3">gap-2 (8px), gap-4 (16px), gap-8 (32px)</td>
                      <td className="p-3">8pt Linear Grid</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-blue-600 dark:text-blue-400">Radii</td>
                      <td className="p-3">radius.card / radius.btn</td>
                      <td className="p-3">rounded-2xl (16px), rounded-xl (12px)</td>
                      <td className="p-3">Continuous Squircle</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-cyan-600 dark:text-cyan-400">Typography</td>
                      <td className="p-3">type.heading.lg / type.body</td>
                      <td className="p-3">text-2xl font-bold / text-sm leading-relaxed</td>
                      <td className="p-3">1.25 Major Third Scale</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Elevation</td>
                      <td className="p-3">shadow.subtle / shadow.modal</td>
                      <td className="p-3">shadow-sm, shadow-2xl backdrop-blur-xl</td>
                      <td className="p-3">Dual-layer ambient glow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Architecture & Tech */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 space-y-2">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-bold text-sm">
                  <FileCode2 className="w-4 h-4" />
                  <span>Design & Technical Invariants</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Developed with strict design token fidelity, component state isolation, zero cumulative layout shifts (CLS), and modular accessibility.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Metrics & Impact */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics ? (
                  project.metrics.map((m, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-600 dark:text-blue-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full p-8 text-center text-xs text-slate-500">
                    High engagement & zero-latency prototype fidelity tested on mobile viewports.
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Role: {project.role}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.canvaUrl && (
              <a
                href={project.canvaUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:opacity-90 flex items-center gap-1.5 shadow-xs"
              >
                <span>View Canva Presentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center gap-1.5"
              >
                <span>GitHub Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 flex items-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
