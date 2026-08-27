import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  Code2, 
  Sliders, 
  Check, 
  MousePointerClick,
  Smartphone,
  Laptop,
  Tablet
} from 'lucide-react';
import { FigmaIcon, ReactIcon, TypescriptIcon, TailwindIcon } from './Icons';
import { use3DTilt } from '../hooks/use3DTilt';

interface HeroVisualShowcaseProps {
  onPlayClick?: () => void;
}

export const HeroVisualShowcase: React.FC<HeroVisualShowcaseProps> = ({ onPlayClick }) => {
  const [activeTheme, setActiveTheme] = useState<'cyan' | 'purple' | 'emerald' | 'amber'>('cyan');
  const [interactiveCounter, setInteractiveCounter] = useState(148);
  const [toggleActive, setToggleActive] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const containerRef = use3DTilt<HTMLDivElement>({ max: 6, perspective: 1200, scale: 1.01 });

  const themeConfigs = {
    cyan: {
      name: 'Electric Cyan',
      gradient: 'from-cyan-500 to-blue-600',
      accentText: 'text-cyan-400',
      accentBg: 'bg-cyan-500',
      badgeBg: 'bg-cyan-950/60 border-cyan-800/60 text-cyan-300',
      ringColor: 'ring-cyan-500/30',
      glow: 'shadow-cyan-500/20'
    },
    purple: {
      name: 'Cyber Violet',
      gradient: 'from-purple-500 to-indigo-600',
      accentText: 'text-purple-400',
      accentBg: 'bg-purple-500',
      badgeBg: 'bg-purple-950/60 border-purple-800/60 text-purple-300',
      ringColor: 'ring-purple-500/30',
      glow: 'shadow-purple-500/20'
    },
    emerald: {
      name: 'Neon Emerald',
      gradient: 'from-emerald-500 to-teal-600',
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-500',
      badgeBg: 'bg-emerald-950/60 border-emerald-800/60 text-emerald-300',
      ringColor: 'ring-emerald-500/30',
      glow: 'shadow-emerald-500/20'
    },
    amber: {
      name: 'Solar Amber',
      gradient: 'from-amber-500 to-orange-600',
      accentText: 'text-amber-400',
      accentBg: 'bg-amber-500',
      badgeBg: 'bg-amber-950/60 border-amber-800/60 text-amber-300',
      ringColor: 'ring-amber-500/30',
      glow: 'shadow-amber-500/20'
    }
  };

  const currentTheme = themeConfigs[activeTheme];

  const handleTestClick = () => {
    if (onPlayClick) onPlayClick();
    setButtonPressed(true);
    setInteractiveCounter(prev => prev + 1);
    setTimeout(() => setButtonPressed(false), 800);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Dynamic Ambient Background Glow */}
      <div 
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${currentTheme.gradient} opacity-20 blur-2xl transition-all duration-700 pointer-events-none`}
      />

      {/* Floating Badges */}
      <div className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl backdrop-blur-md text-xs font-mono">
        <FigmaIcon className="w-3.5 h-3.5" />
        <span>Figma Auto Layout 5.0</span>
      </div>

      <div className="absolute -bottom-3 -left-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl backdrop-blur-md text-xs font-mono">
        <ReactIcon className="w-3.5 h-3.5" />
        <span>React 19 + Strict TS</span>
      </div>

      {/* Main Glassmorphic Showcase Container */}
      <div className="relative rounded-3xl bg-slate-900/90 dark:bg-[#111420]/95 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden text-slate-100">
        
        {/* Card Header: Designer / Engineer Duality & Profile Seal */}
        <div className="p-5 sm:p-6 pb-4 bg-gradient-to-b from-slate-800/50 to-slate-900/30 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Profile Avatar / Initials Seal */}
            <div className="relative group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentTheme.gradient} p-0.5 shadow-lg transition-all duration-500`}>
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center font-mono font-bold text-base text-white">
                  GM
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-white text-sm sm:text-base">Govind Majhi</h3>
                <span className="px-2 py-0.2 rounded-md bg-blue-500/20 text-blue-300 font-mono text-[10px] font-medium border border-blue-500/30">
                  B.Tech 2024
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                <Palette className="w-3 h-3 text-purple-400" />
                <span>UI/UX Craft</span>
                <span className="text-slate-600">•</span>
                <Code2 className="w-3 h-3 text-cyan-400" />
                <span>Frontend</span>
              </div>
            </div>
          </div>

          {/* Device Frame Viewport Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/70 border border-slate-800">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              title="Desktop Frame"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              title="Tablet Frame"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              title="Mobile Phone Frame"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive UI Sandbox & Inspector Area */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Interactive Token Palette Switcher */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span>FIGMA DESIGN SYSTEM THEME:</span>
              </span>
              <span className={`font-bold ${currentTheme.accentText}`}>{currentTheme.name}</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {(Object.keys(themeConfigs) as Array<keyof typeof themeConfigs>).map((key) => {
                const conf = themeConfigs[key];
                const isActive = activeTheme === key;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setActiveTheme(key);
                    }}
                    className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      isActive 
                        ? `bg-slate-800/90 border-slate-500 ${conf.ringColor} ring-2 shadow-lg` 
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-tr ${conf.gradient} shadow-inner`}></div>
                    <span className="text-[10px] font-mono font-medium truncate w-full">{conf.name.split(' ')[1]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulated Interactive UI Component Widget */}
          <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 shadow-inner transition-all duration-300 ${
            deviceView === 'mobile' ? 'max-w-[280px] mx-auto' : deviceView === 'tablet' ? 'max-w-[380px] mx-auto' : 'w-full'
          }`}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-slate-400 text-[11px] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Interactive Component Sandbox
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {deviceView.toUpperCase()} MODE
              </span>
            </div>

            {/* Dynamic Metric Display */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div>
                <div className="text-[10px] font-mono text-slate-400">FIGMA COMPONENT INSTANCES</div>
                <div className="text-lg font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
                  <span>{interactiveCounter}</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">tokens synchronized</span>
                </div>
              </div>

              {/* Interactive Test Button */}
              <button
                onClick={handleTestClick}
                className={`px-3 py-2 rounded-xl font-medium text-xs text-white shadow-md flex items-center gap-1.5 transition-all bg-gradient-to-r ${currentTheme.gradient} hover:opacity-90 active:scale-95`}
              >
                {buttonPressed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Syncing...</span>
                  </>
                ) : (
                  <>
                    <MousePointerClick className="w-3.5 h-3.5" />
                    <span>Test State</span>
                  </>
                )}
              </button>
            </div>

            {/* Toggle & Token Spec Row */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-300 font-medium">Auto Layout 5</span>
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    setToggleActive(!toggleActive);
                  }}
                  className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${toggleActive ? currentTheme.accentBg : 'bg-slate-700'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${toggleActive ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Radius</span>
                <span className="text-emerald-400 font-bold">16px (1rem)</span>
              </div>
            </div>

          </div>

          {/* Quick Tech Logo Strip */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[10px] uppercase">Core Tools:</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <FigmaIcon className="w-3.5 h-3.5" />
                <span>Figma</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <ReactIcon className="w-3.5 h-3.5" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <TypescriptIcon className="w-3.5 h-3.5" />
                <span>TS</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <TailwindIcon className="w-3.5 h-3.5" />
                <span>Tailwind</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
