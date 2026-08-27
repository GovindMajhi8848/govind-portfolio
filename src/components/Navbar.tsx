import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUpRight, 
  Search, 
  Terminal, 
  Volume2, 
  VolumeX, 
  FileText,
  Layers,
  Workflow,
  Sliders,
  Cpu,
  GraduationCap,
  Briefcase,
  User,
  MessageSquare
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onPlayClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  onToggleDarkMode,
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenResume,
  soundEnabled,
  onToggleSound,
  onPlayClick,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? totalScroll / windowHeight : 0;

      setScrollProgress(scrollPercent);
      setIsScrolled(currentScrollY > 20);

      // Smart Scroll Hide / Reveal Behavior
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 8) {
          // Scrolling down
          setIsNavVisible(false);
        } else if (currentScrollY < lastScrollY.current - 12) {
          // Scrolling up
          setIsNavVisible(true);
        }
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Section Spy with refined offsets
      const sections = ['work', 'process', 'ui-lab', 'stack', 'education', 'experience', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (currentScrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Handle ESC to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work', icon: Layers },
    { name: 'Process', href: '#process', id: 'process', icon: Workflow },
    { name: 'UI Lab', href: '#ui-lab', id: 'ui-lab', icon: Sliders },
    { name: 'Stack', href: '#stack', id: 'stack', icon: Cpu },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'About', href: '#about', id: 'about', icon: User },
  ];

  const handleLinkClick = () => {
    if (onPlayClick) onPlayClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Dynamic Island Container */}
      <header 
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl z-50 transition-all duration-300 transform ${
          isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`relative rounded-2xl sm:rounded-full transition-all duration-300 px-3 sm:px-4 py-2 sm:py-2.5 backdrop-blur-2xl border ${
          isScrolled 
            ? 'bg-white/85 dark:bg-[#0c0f17]/85 border-slate-200/90 dark:border-white/[0.1] shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/60' 
            : 'bg-white/70 dark:bg-[#0c0f17]/70 border-slate-200/60 dark:border-white/[0.06] shadow-md shadow-slate-900/5'
        }`}>
          
          {/* Specular Ambient Top Glow Line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />

          {/* Integrated Capsule Scroll Progress Track */}
          <div className="absolute inset-x-4 bottom-0 h-[2px] bg-transparent overflow-hidden rounded-full pointer-events-none">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            
            {/* 1. Brand Logo & Interactive Avatar */}
            <a 
              href="#" 
              onClick={() => onPlayClick && onPlayClick()}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1 shrink-0"
              aria-label="Govind Kumar Majhi - Home"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md font-mono group-hover:scale-105 transition-transform duration-200">
                  GM
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c0f17] flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white animate-ping"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5 leading-tight">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/40 hidden lg:inline">
                    B.Tech '24
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
                  <span>• UI/UX & Frontend</span>
                </div>
              </div>
            </a>

            {/* 2. Desktop Sliding Nav Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-full px-2 py-1 shadow-inner backdrop-blur-md shrink-0" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`relative px-2.5 xl:px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 -z-10 shadow-sm animate-in fade-in zoom-in-95 duration-200" />
                    )}
                    <span className="whitespace-nowrap">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* 3. Action Tools & Direct CTA */}
            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              
              {/* Command Palette Trigger (Cmd+K) */}
              <div className="relative">
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenCommandPalette();
                  }}
                  onMouseEnter={() => setActiveTooltip('search')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-blue-500/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-all text-xs font-mono craft-button"
                  title="Search & Quick Actions"
                  aria-label="Open Command Palette"
                >
                  <Search className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[11px] hidden xl:inline">Search</span>
                  <kbd className="px-1.5 py-0.2 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400">⌘K</kbd>
                </button>
              </div>

              {/* Terminal Drawer Trigger */}
              <div className="relative">
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenTerminal();
                  }}
                  onMouseEnter={() => setActiveTooltip('terminal')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all craft-button"
                  aria-label="Launch gm-cli Terminal Shell"
                >
                  <Terminal className="w-3.5 h-3.5" />
                </button>
                {activeTooltip === 'terminal' && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 animate-in fade-in duration-150">
                    CLI Shell (gm-cli)
                  </div>
                )}
              </div>

              {/* Resume / CV Modal Trigger */}
              <div className="relative">
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenResume();
                  }}
                  onMouseEnter={() => setActiveTooltip('resume')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all craft-button"
                  aria-label="View Resume / CV"
                >
                  <FileText className="w-3.5 h-3.5" />
                </button>
                {activeTooltip === 'resume' && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 animate-in fade-in duration-150">
                    Resume / CV
                  </div>
                )}
              </div>

              {/* Sound FX Toggle */}
              <div className="relative">
                <button
                  onClick={() => {
                    onToggleSound();
                    if (!soundEnabled && onPlayClick) {
                      setTimeout(() => onPlayClick(), 50);
                    }
                  }}
                  onMouseEnter={() => setActiveTooltip('sound')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  aria-label={soundEnabled ? "Disable UI sounds" : "Enable tactile sound feedback"}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 transition-all craft-button"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-500" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
                </button>
                {activeTooltip === 'sound' && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 animate-in fade-in duration-150">
                    {soundEnabled ? 'Mute Sounds' : 'Tactile Sounds: Off'}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <div className="relative">
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onToggleDarkMode();
                  }}
                  onMouseEnter={() => setActiveTooltip('theme')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  aria-label={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 transition-all craft-button"
                >
                  {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                </button>
                {activeTooltip === 'theme' && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 animate-in fade-in duration-150">
                    {darkMode ? 'Light Theme' : 'Dark Theme'}
                  </div>
                )}
              </div>

              {/* Vertical subtle divider */}
              <div className="w-[1px] h-5 bg-slate-200 dark:bg-slate-800 mx-1" />

              {/* Primary Contact CTA */}
              <a
                href="#contact"
                onClick={() => onPlayClick && onPlayClick()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-md shadow-blue-500/20 transition-all craft-button hover:scale-[1.02] active:scale-95"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 4. Mobile Trigger Icons */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onOpenCommandPalette();
                }}
                aria-label="Open Search"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60"
              >
                <Search className="w-4 h-4 text-blue-500" />
              </button>

              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onToggleDarkMode();
                }}
                aria-label="Toggle Theme"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-rose-500" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 5. Mobile Enhanced Fullscreen / Drawer Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[64px] bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-5 mx-1 z-50 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[82vh] overflow-y-auto space-y-4">
            
            {/* Status Header inside Mobile Drawer */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-slate-900 dark:text-white">Available for full-time & contracts</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Kathmandu, NP</span>
            </div>

            {/* Navigation Grid */}
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl border transition-all text-xs font-semibold ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-500/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Tools Grid in Mobile Menu */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Developer & Document Tools
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium text-xs hover:border-blue-500/50"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>Resume / CV</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>gm-cli Shell</span>
                </button>
              </div>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact & Hire Govind</span>
              </a>
            </div>

          </div>
        )}

      </header>
    </>
  );
};
