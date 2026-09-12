import React, { useState } from "react";
import { 
  Code2, 
  Sliders, 
  Check, 
  MousePointerClick,
  Smartphone,
  Laptop,
  Tablet,
  Box
} from "lucide-react";
import { FigmaIcon, ReactIcon, TypescriptIcon, TailwindIcon } from "./Icons";
import { use3DTilt } from "../hooks/use3DTilt";

interface HeroVisualShowcaseProps {
  onPlayClick?: () => void;
}

export const HeroVisualShowcase: React.FC<HeroVisualShowcaseProps> = ({ onPlayClick }) => {
  const [inspectorMode, setInspectorMode] = useState<"figma" | "code">("figma");
  const [activeTheme, setActiveTheme] = useState<"cyan" | "purple" | "emerald" | "amber">("cyan");
  const [interactiveCounter, setInteractiveCounter] = useState(148);
  const [toggleActive, setToggleActive] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const containerRef = use3DTilt<HTMLDivElement>({ max: 6, perspective: 1200, scale: 1.01 });

  const themeConfigs = {
    cyan: {
      name: "Electric Cyan",
      gradient: "from-cyan-500 to-blue-600",
      accentText: "text-cyan-400",
      accentBg: "bg-cyan-500",
      badgeBg: "bg-cyan-950/60 border-cyan-800/60 text-cyan-300",
      ringColor: "ring-cyan-500/30",
      glow: "shadow-cyan-500/20",
      hex: "#06b6d4"
    },
    purple: {
      name: "Cyber Violet",
      gradient: "from-purple-500 to-indigo-600",
      accentText: "text-purple-400",
      accentBg: "bg-purple-500",
      badgeBg: "bg-purple-950/60 border-purple-800/60 text-purple-300",
      ringColor: "ring-purple-500/30",
      glow: "shadow-purple-500/20",
      hex: "#8b5cf6"
    },
    emerald: {
      name: "Neon Emerald",
      gradient: "from-emerald-500 to-teal-600",
      accentText: "text-emerald-400",
      accentBg: "bg-emerald-500",
      badgeBg: "bg-emerald-950/60 border-emerald-800/60 text-emerald-300",
      ringColor: "ring-emerald-500/30",
      glow: "shadow-emerald-500/20",
      hex: "#10b981"
    },
    amber: {
      name: "Solar Amber",
      gradient: "from-amber-500 to-orange-600",
      accentText: "text-amber-400",
      accentBg: "bg-amber-500",
      badgeBg: "bg-amber-950/60 border-amber-800/60 text-amber-300",
      ringColor: "ring-amber-500/30",
      glow: "shadow-amber-500/20",
      hex: "#f59e0b"
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
    <div className="relative group">
      {/* Dynamic Ambient Blur Glow behind the card */}
      <div 
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${currentTheme.gradient} opacity-25 group-hover:opacity-40 blur-2xl transition duration-500`}
      />

      <div
        ref={containerRef}
        className="relative rounded-3xl bg-slate-900/90 dark:bg-[#0c0e17]/95 border border-slate-700/60 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300"
      >
        {/* Top Header: Figma vs Code Mode Switcher & Device Controls */}
        <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between gap-3">
          
          {/* Dual Inspector Mode Pill */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                setInspectorMode("figma");
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                inspectorMode === "figma" 
                  ? "bg-purple-600 text-white shadow-xs" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FigmaIcon className="w-3 h-3 text-purple-300" />
              <span>Figma Canvas</span>
            </button>
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                setInspectorMode("code");
              }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
                inspectorMode === "code" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>React 19 Code</span>
            </button>
          </div>

          {/* Device Frame Viewport Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setDeviceView("desktop")}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === "desktop" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              title="Desktop Frame"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView("tablet")}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === "tablet" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              title="Tablet Frame"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceView("mobile")}
              className={`p-1.5 rounded-lg transition-colors ${deviceView === "mobile" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
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
                <span>FIGMA DESIGN SYSTEM VARIABLES:</span>
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
                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-tr ${conf.gradient} shadow-inner`} />
                    <span className="text-[10px] font-mono font-medium truncate w-full">{conf.name.split(" ")[1]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN INSPECTION AREA: FIGMA VIEW VS CODE VIEW */}
          {inspectorMode === "figma" ? (
            /* Figma Canvas View with Auto Layout Bounding Box & Token Indicators */
            <div className={`p-4 rounded-2xl bg-slate-950/90 border-2 border-dashed border-purple-500/40 relative space-y-3 shadow-inner transition-all duration-300 ${
              deviceView === "mobile" ? "max-w-[280px] mx-auto" : deviceView === "tablet" ? "max-w-[380px] mx-auto" : "w-full"
            }`}>
              
              {/* Figma Auto Layout Overlay Badge */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
                  <Box className="w-3 h-3 text-purple-400" />
                  <span>Auto Layout 5.0 • Vertical (Gap: 12px)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {deviceView.toUpperCase()}
                </span>
              </div>

              {/* Dynamic Metric Display */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 relative group/box">
                <div className="absolute -top-2 left-3 px-1.5 py-0.2 bg-purple-600 text-white rounded text-[8px] font-mono uppercase tracking-wider">
                  Frame Instance
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">DESIGN TOKEN SYNC</div>
                  <div className="text-lg font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
                    <span>{interactiveCounter}</span>
                    <span className="text-xs font-normal text-slate-400 font-sans">tokens mapped</span>
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

              {/* Token Parameters Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Variable / Mode</span>
                  <button
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setToggleActive(!toggleActive);
                    }}
                    className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${toggleActive ? currentTheme.accentBg : "bg-slate-700"}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${toggleActive ? "translate-x-4" : "translate-x-0"}`} />
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Corner Radius</span>
                  <span className="text-emerald-400 font-bold">16px (--radius-lg)</span>
                </div>
              </div>

            </div>
          ) : (
            /* React 19 Production Code View */
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Component.tsx</span>
                </span>
                <span className="text-emerald-400 font-semibold text-[10px]">React 19 • Zero Layout Shift</span>
              </div>
              <pre className="text-slate-300 text-[11px] leading-relaxed">
{`<button
  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl
             font-semibold text-xs text-white transition-all
             bg-gradient-to-r ${currentTheme.gradient}
             shadow-lg hover:opacity-90 active:scale-95"
  style={{
    accentColor: "${currentTheme.hex}",
    borderRadius: "16px"
  }}
>
  <Sparkles className="w-3.5 h-3.5" />
  <span>Sync Design Tokens</span>
</button>`}
              </pre>
            </div>
          )}

          {/* Quick Tech Logo Strip */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[10px] uppercase">Superpowers:</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <FigmaIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>Figma 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <ReactIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>React 19</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <TypescriptIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>Strict TS</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <TailwindIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tailwind</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
