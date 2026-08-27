import React, { useState, useMemo } from 'react';
import { projects, Project } from '../data/portfolioData';
import { 
  Layers, 
  Palette, 
  Code2, 
  Smartphone, 
  Sliders, 
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Brush,
  Eye,
  FileCode2,
  Search,
  BookOpen,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  NovaStoreMockup, 
  FreshGoMockup, 
  DevPulseMockup, 
  PrismMockup, 
  BrandStudioMockup,
  LilliputSchoolMockup,
  ClickDigitalsMockup
} from './ProjectMockups';

interface ProjectsProps {
  onOpenCaseStudy?: (project: Project) => void;
  onPlayClick?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy, onPlayClick }) => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [activeCardTab, setActiveCardTab] = useState<{ [key: string]: 'mockup' | 'specs' }>({});

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Frontend Dev', icon: Code2 },
    { name: 'Mobile App', icon: Smartphone },
    { name: 'Design System', icon: Sliders }
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === 'All' || p.category === filter;
      const matchesSearch = searchQuery.trim() === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const toggleExpand = (id: string) => {
    if (onPlayClick) onPlayClick();
    setExpandedProjectId(prev => (prev === id ? null : id));
  };

  const setCardTab = (id: string, tab: 'mockup' | 'specs') => {
    if (onPlayClick) onPlayClick();
    setActiveCardTab(prev => ({ ...prev, [id]: tab }));
  };

  // Render matching visual mockup for a project
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
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

  // Get accent color classes per project
  const getProjectAccent = (category: string) => {
    switch (category) {
      case 'UI/UX Design':
        return {
          badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/50',
          hoverBorder: 'hover:border-blue-500/50 hover:shadow-blue-500/5',
          dot: 'bg-blue-500'
        };
      case 'Mobile App':
        return {
          badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/50',
          hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/5',
          dot: 'bg-emerald-500'
        };
      case 'Frontend Dev':
        return {
          badge: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border-cyan-200/60 dark:border-cyan-800/50',
          hoverBorder: 'hover:border-cyan-500/50 hover:shadow-cyan-500/5',
          dot: 'bg-cyan-500'
        };
      case 'Design System':
        return {
          badge: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200/60 dark:border-purple-800/50',
          hoverBorder: 'hover:border-purple-500/50 hover:shadow-purple-500/5',
          dot: 'bg-purple-500'
        };
      default:
        return {
          badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/50',
          hoverBorder: 'hover:border-amber-500/50 hover:shadow-amber-500/5',
          dot: 'bg-amber-500'
        };
    }
  };

  return (
    <section id="work" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive UI Mockups & Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected UI/UX Design & Frontend Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Explore interactive high-fidelity Figma prototypes, mobile application flows, telemetry dashboards, and design systems.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, Figma, tokens..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 transition-all font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl mb-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.name;
            const count = categoryCounts[cat.name] || 0;

            return (
              <button
                key={cat.name}
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  setFilter(cat.name);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all shrink-0 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs ring-1 ring-slate-200 dark:ring-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300'
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects found matching the search "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setFilter('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {filtered.map((project) => {
              const isExpanded = expandedProjectId === project.id;
              const currentCardTab = activeCardTab[project.id] || 'mockup';
              const accent = getProjectAccent(project.category);

              return (
                <div
                  key={project.id}
                  className={`rounded-3xl bg-white dark:bg-[#0e121e] border border-slate-200/90 dark:border-white/[0.08] shadow-md dark:shadow-2xl overflow-hidden flex flex-col justify-between craft-card ${accent.hoverBorder} hover:shadow-xl transition-all duration-300`}
                >
                  
                  {/* 1. Top Bar / Category Tag & Live Tabs */}
                  <div>
                    <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border flex items-center gap-1.5 ${accent.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}></span>
                            <span>{project.category}</span>
                          </span>
                          <span className="text-xs text-slate-400 font-mono">• {project.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Card View Switcher: Interactive Mockup vs Technical Specs */}
                      <div className="flex items-center p-1 bg-slate-100/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/80 dark:border-slate-800 shrink-0">
                        <button
                          onClick={() => setCardTab(project.id, 'mockup')}
                          className={`p-1.5 px-2 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                            currentCardTab === 'mockup'
                              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                              : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                          }`}
                          title="Interactive Mockup View"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Preview</span>
                        </button>
                        <button
                          onClick={() => setCardTab(project.id, 'specs')}
                          className={`p-1.5 px-2 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                            currentCardTab === 'specs'
                              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                              : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                          }`}
                          title="Technical Specs View"
                        >
                          <FileCode2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Specs</span>
                        </button>
                      </div>
                    </div>

                    {/* 2. Visual Sandbox or Technical Specs View */}
                    <div className="p-3.5 sm:p-4 bg-slate-950/95 dark:bg-slate-950/90 border-b border-slate-800/80">
                      {currentCardTab === 'mockup' ? (
                        <div>{renderProjectMockup(project.id)}</div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs text-slate-300 p-2">
                          <div className="text-cyan-400 font-bold flex items-center gap-1.5 text-xs">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>TECHNICAL SPECIFICATIONS & ARCHITECTURE</span>
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed">{project.overview}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                              <span className="text-purple-400 block font-bold mb-0.5">Figma Tokens:</span>
                              <span className="text-slate-300">Auto Layout 5.0, Nested Variables, Mode Switching</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                              <span className="text-emerald-400 block font-bold mb-0.5">Performance & A11y:</span>
                              <span className="text-slate-300">60 FPS Hardware Accelerate, WCAG 2.1 AA</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 3. Project Tags */}
                    <div className="p-5 sm:p-6 pt-4 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Overview Drawer */}
                      {isExpanded && (
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3 animate-in fade-in duration-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                              <span>Key UX Challenges & Solutions:</span>
                            </div>
                            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 pl-1">
                              {project.challenges.map((c, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-amber-500 font-bold">•</span>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                              <span>Architectural Features:</span>
                            </div>
                            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 pl-1">
                              {project.keyFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-emerald-500 font-bold">✓</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 4. Card Bottom Actions */}
                  <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <span>{isExpanded ? 'Less' : 'Details'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {onOpenCaseStudy && (
                        <button
                          onClick={() => {
                            if (onPlayClick) onPlayClick();
                            onOpenCaseStudy(project);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-semibold transition-all shadow-2xs hover:scale-[1.02] active:scale-95"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Deep-Dive Case Study</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {project.canvaUrl && (
                        <a
                          href={project.canvaUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 rounded-xl text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-xs font-medium flex items-center gap-1 border border-purple-200/60 dark:border-purple-800/40 transition-colors"
                          title="Open Canva Workspace"
                        >
                          <Brush className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Canva</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium flex items-center gap-1 border border-slate-200/80 dark:border-slate-700/60 transition-colors"
                          title="GitHub Source Code"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
