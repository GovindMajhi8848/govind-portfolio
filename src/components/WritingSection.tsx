import React, { useState } from 'react';
import { articles } from '../data/portfolioData';
import { ChevronDown, ChevronUp, BookOpen, Clock, Calendar, UserCheck } from 'lucide-react';

export const WritingSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="writing" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Design & Engineering Notes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Thoughts & Articles
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
            Practical reflections on UI/UX workflows, Figma-to-code translation, and design systems.
          </p>
        </div>

        {/* Articles List with Inline Expansion (No Popups) */}
        <div className="space-y-4">
          {articles.map((article) => {
            const isExpanded = expandedId === article.id;

            return (
              <div
                key={article.id}
                className={`rounded-2xl bg-white dark:bg-[#11141c] border transition-all duration-200 shadow-sm ${
                  isExpanded
                    ? 'border-blue-500/50 dark:border-blue-500/50 ring-2 ring-blue-500/10'
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleArticle(article.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Toggle Button Badge */}
                  <div className="self-start sm:self-center shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isExpanded
                        ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}>
                      <span>{isExpanded ? 'Collapse' : 'Read Article'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </button>

                {/* Inline Full Article Content (Smooth Expand) */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3.5 pt-4 leading-relaxed">
                      {article.content.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Author & Close Strip */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <UserCheck className="w-3.5 h-3.5 text-blue-500" />
                        <span>Written by Govind Kumar Majhi</span>
                      </div>

                      <button
                        onClick={() => toggleArticle(article.id)}
                        className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        Collapse article ↑
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
