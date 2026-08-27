import React, { useState, useMemo } from 'react';
import { techStack, TechTool } from '../data/portfolioData';
import { 
  Layers, 
  Palette, 
  Sparkles, 
  Cloud, 
  Search, 
  X,
  Layout,
  Sliders,
  Users,
  Terminal,
  Video,
  ExternalLink,
  Zap
} from 'lucide-react';
import { 
  FigmaIcon, 
  CanvaIcon, 
  AdobeIcon, 
  ZscalerIcon,
  AiVibeIcon 
} from './Icons';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Design & UI/UX', icon: Palette },
    { name: 'AI & Vibe Coding', icon: Zap },
    { name: 'Creative Suite', icon: Sparkles },
    { name: 'Cloud & Systems', icon: Cloud }
  ];

  // Tool visual icon mapping
  const renderToolBrandIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'figma':
        return <FigmaIcon className="w-6 h-6" />;
      case 'ai-vibe':
        return <AiVibeIcon className="w-6 h-6" />;
      case 'gen-ui':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'prompt':
        return <Terminal className="w-6 h-6 text-purple-400" />;
      case 'canva':
        return <CanvaIcon className="w-6 h-6" />;
      case 'illustrator':
      case 'photoshop':
        return <AdobeIcon className="w-6 h-6" />;
      case 'zscaler':
        return <ZscalerIcon className="w-6 h-6" />;
      case 'wireframe':
        return <Layout className="w-6 h-6 text-blue-500" />;
      case 'tokens':
        return <Sliders className="w-6 h-6 text-purple-500" />;
      case 'research':
        return <Users className="w-6 h-6 text-pink-500" />;
      case 'video':
        return <Video className="w-6 h-6 text-rose-500" />;
      case 'git':
        return <Terminal className="w-6 h-6 text-orange-500" />;
      default:
        return <Layout className="w-6 h-6 text-blue-500" />;
    }
  };

  // Mastery percentage calculation for visual rings
  const getMasteryPercentage = (tool: TechTool): number => {
    if (tool.id === 'ai-vibe-coding') return 96;
    if (tool.id === 'generative-ui') return 94;
    if (tool.id === 'prompt-engineering') return 92;
    if (tool.id === 'figma') return 95;
    if (tool.id === 'design-systems') return 93;
    if (tool.id === 'wireframing') return 92;
    if (tool.id === 'user-research') return 90;
    if (tool.id === 'canva-pro') return 95;
    if (tool.id === 'adobe-suite') return 85;
    if (tool.id === 'git-version-control') return 90;
    return 88;
  };

  const filtered = useMemo(() => {
    return techStack.filter((tool) => {
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        tool.name.toLowerCase().includes(q) ||
        tool.commentary.toLowerCase().includes(q) ||
        tool.highlights.some(h => h.toLowerCase().includes(q)) ||
        (tool.badge && tool.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="stack" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Proficiency & Tooling Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tech Stack & Design Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
              Daily drivers for UI/UX product design, interactive prototyping, AI vibe coding, and creative brand systems.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Figma, AI, Canva, Git..."
              className="w-full pl-8.5 pr-8 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#11141c] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tool) => {
            const pct = getMasteryPercentage(tool);

            return (
              <div
                key={tool.id}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#11141c] border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between craft-card"
              >
                <div>
                  {/* Top Row: Icon + Badge + Mastery Ring */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xs">
                        {renderToolBrandIcon(tool.iconKey)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {tool.name}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {tool.category}
                        </span>
                      </div>
                    </div>

                    {/* Visual Circular Mastery Progress */}
                    <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100 dark:text-slate-800"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-500"
                          strokeDasharray={`${pct}, 100`}
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-[9px] font-mono font-bold text-slate-700 dark:text-slate-300">
                        {pct}%
                      </span>
                    </div>
                  </div>

                  {/* Commentary */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {tool.commentary}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {tool.highlights.slice(0, 4).map((h, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Special External Link if any */}
                  {tool.workspaceUrl && (
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={tool.workspaceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                      >
                        <span>Open Live Canva Workshop</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
