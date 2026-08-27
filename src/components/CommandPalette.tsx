import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FileText, 
  Palette, 
  Code2, 
  Mail, 
  Sun, 
  Moon, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  X
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onToggleTheme: () => void;
  darkMode: boolean;
  onSelectProject?: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenResume,
  onToggleTheme,
  darkMode,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Define commands
  const defaultActions = [
    {
      id: 'resume',
      title: 'View Interactive Resume / CV',
      subtitle: 'Preview education, AWS certs, skills & experience',
      icon: FileText,
      category: 'Actions',
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'terminal',
      title: 'Launch gm-cli Terminal Emulator',
      subtitle: 'Interactive developer console & commands',
      icon: Terminal,
      category: 'Developer Tools',
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'theme',
      title: darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      subtitle: darkMode ? 'Clean high-contrast day palette' : 'Immersive cyber night palette',
      icon: darkMode ? Sun : Moon,
      category: 'Preferences',
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Send Direct Message / Contact',
      subtitle: `Reach out directly to ${personalInfo.email}`,
      icon: Mail,
      category: 'Navigation',
      action: () => {
        onClose();
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-work',
      title: 'Jump to Selected Projects',
      subtitle: 'Figma prototypes, web apps, and design systems',
      icon: Layers,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-uilab',
      title: 'Jump to Interactive Token Lab',
      subtitle: 'Live component sandbox & Tailwind code generator',
      icon: Sparkles,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('ui-lab')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-stack',
      title: 'Jump to Tech Stack & Tools',
      subtitle: 'Figma, UI/UX Design, Vibe Coding, Canva Pro',
      icon: Layers,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'vibe-coding',
      title: 'AI Vibe Coding & Tooling',
      subtitle: 'Cursor, Claude Code, GitHub Copilot, v0 generative workflows',
      icon: Sparkles,
      category: 'Capabilities',
      action: () => {
        onClose();
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-experience',
      title: 'Jump to Experience & Journey',
      subtitle: 'Career progression, design milestones & internships',
      icon: Briefcase,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-education',
      title: 'Jump to Education & Certifications',
      subtitle: 'B.Tech CSE (2024), AWS Academy Certifications',
      icon: GraduationCap,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'linkedin',
      title: 'Visit LinkedIn Profile',
      subtitle: 'Connect with Govind Kumar Majhi on LinkedIn',
      icon: ExternalLink,
      category: 'External Links',
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      },
    },
  ];

  // Project commands
  const projectActions = projects.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: `${p.category} — ${p.tagline}`,
    icon: p.category === 'UI/UX Design' ? Palette : Code2,
    category: 'Projects & Case Studies',
    action: () => {
      onClose();
      if (onSelectProject) {
        onSelectProject(p.id);
      } else {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  const allItems = [...defaultActions, ...projectActions];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );

  // Keyboard navigation inside palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#11141f] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Header */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <span>ESC</span>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-3 divide-y divide-slate-100 dark:divide-slate-800/40">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching commands or projects found for <span className="font-mono text-slate-700 dark:text-slate-300">"{query}"</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-white ring-1 ring-blue-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                          [{item.category}]
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    {isSelected && (
                      <ArrowRight className="w-4 h-4 text-blue-500 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px]">↵</kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="hidden sm:inline text-[10px]">Govind Majhi • Portfolio Engine</span>
        </div>

      </div>
    </div>
  );
};
