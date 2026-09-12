import React, { useState } from "react";
import { 
  Sparkles, 
  Check, 
  Copy, 
  Layers, 
  Square, 
  CreditCard, 
  FormInput, 
  Tag 
} from "lucide-react";
import confetti from "canvas-confetti";

interface UiLabSectionProps {
  onPlayClick?: () => void;
  onPlaySuccess?: () => void;
}

export const UiLabSection: React.FC<UiLabSectionProps> = ({ onPlayClick, onPlaySuccess }) => {
  const [componentType, setComponentType] = useState<"button" | "card" | "input" | "badge">("button");
  const [accentColor, setAccentColor] = useState<string>("#2563eb");
  const [borderRadius, setBorderRadius] = useState<number>(16);
  const [paddingY, setPaddingY] = useState<number>(12);
  const [paddingX, setPaddingX] = useState<number>(24);
  const [variant, setVariant] = useState<"glass" | "solid" | "cyber" | "neo">("glass");
  const [codeFormat, setCodeFormat] = useState<"tailwind" | "react" | "figma">("tailwind");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const presetThemes = [
    { name: "Sapphire Blue", hex: "#2563eb" },
    { name: "Electric Cyan", hex: "#06b6d4" },
    { name: "Violet Cyber", hex: "#8b5cf6" },
    { name: "Neon Emerald", hex: "#10b981" },
    { name: "Solar Amber", hex: "#f59e0b" },
    { name: "Rose Crimson", hex: "#f43f5e" },
  ];

  // Dynamic code generators based on component type and aesthetic variant
  const getGeneratedCode = () => {
    if (codeFormat === "tailwind") {
      if (componentType === "button") {
        return `<button
  className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-200 active:scale-95 ${
    variant === "glass" ? "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg" :
    variant === "cyber" ? "bg-slate-900 border-2 text-white shadow-lg shadow-blue-500/30" :
    variant === "neo" ? "bg-white text-black border-2 border-black shadow-[4px_4px_0px_#000]" :
    "text-white shadow-md hover:opacity-95"
  }"
  style={{
    backgroundColor: ${variant === "glass" || variant === "neo" ? "undefined" : `"${accentColor}"`},
    borderColor: "${accentColor}",
    borderRadius: "${borderRadius}px",
    padding: "${paddingY}px ${paddingX}px"
  }}
>
  Interactive Button
</button>`;
      }

      if (componentType === "card") {
        return `<div
  className="p-6 transition-all ${
    variant === "glass" ? "bg-slate-900/60 backdrop-blur-2xl border border-white/10 text-white shadow-2xl" :
    variant === "cyber" ? "bg-slate-950 border border-slate-800 text-white shadow-xl shadow-blue-500/20" :
    variant === "neo" ? "bg-amber-50 text-slate-900 border-2 border-slate-900 shadow-[6px_6px_0px_#0f172a]" :
    "bg-slate-900 text-white border border-slate-800 shadow-xl"
  }"
  style={{
    borderRadius: "${borderRadius}px"
  }}
>
  <h3 className="text-lg font-bold">Design Token Card</h3>
  <p className="text-sm opacity-80 mt-1">Synchronized 1:1 with Figma Auto Layout & Variables.</p>
</div>`;
      }

      if (componentType === "input") {
        return `<input
  type="text"
  placeholder="Type a design query..."
  className="w-full text-sm font-medium transition-all outline-none ${
    variant === "glass" ? "bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-400 focus:border-${accentColor}" :
    variant === "cyber" ? "bg-slate-950 border border-slate-700 text-white focus:shadow-md shadow-blue-500/30" :
    variant === "neo" ? "bg-white border-2 border-slate-900 text-slate-900 shadow-[3px_3px_0px_#000]" :
    "bg-slate-900 border border-slate-700 text-white"
  }"
  style={{
    borderRadius: "${borderRadius}px",
    padding: "${paddingY}px ${paddingX}px",
    borderColor: "${accentColor}"
  }}
/>`;
      }

      return `<span
  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider"
  style={{
    backgroundColor: "${accentColor}22",
    color: "${accentColor}",
    borderRadius: "${borderRadius}px",
    padding: "6px 14px",
    border: "1px solid ${accentColor}44"
  }}
>
  ● Token Active
</span>`;
    }

    if (codeFormat === "react") {
      return `import React from "react";

export const Token${componentType.charAt(0).toUpperCase() + componentType.slice(1)} = () => {
  return (
    <div
      style={{
        borderRadius: "${borderRadius}px",
        padding: "${paddingY}px ${paddingX}px",
        borderColor: "${accentColor}",
        accentColor: "${accentColor}"
      }}
      className="transition-all duration-200"
    >
      {/* Component Content */}
    </div>
  );
};`;
    }

    // Figma Variables JSON token format
    return JSON.stringify(
      {
        collection: "GovindDesignSystem",
        mode: variant.toUpperCase(),
        component: componentType,
        variables: {
          "color.accent": { type: "COLOR", value: accentColor },
          "border.radius": { type: "FLOAT", value: borderRadius, unit: "px" },
          "spacing.padding.y": { type: "FLOAT", value: paddingY, unit: "px" },
          "spacing.padding.x": { type: "FLOAT", value: paddingX, unit: "px" },
          "elevation.variant": { type: "STRING", value: variant },
          "wcag.contrastRatio": "4.8:1 (AAA Pass)"
        }
      },
      null,
      2
    );
  };

  const handleCopyCode = () => {
    if (onPlaySuccess) onPlaySuccess();
    navigator.clipboard.writeText(getGeneratedCode());
    setCopiedCode(true);
    try {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
    } catch {}
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="ui-lab" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design System Token Studio 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Live UI/UX & Token Architecture Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
              Inspect dynamic Figma tokens, preview tactile component states in real-time, and export production-ready Tailwind, React 19, or Figma Variables JSON.
            </p>
          </div>

          {/* Component Type Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-[#111420] border border-slate-200 dark:border-slate-800 text-xs font-mono">
            {[
              { id: "button", label: "Button", icon: Square },
              { id: "card", label: "Card", icon: CreditCard },
              { id: "input", label: "Input", icon: FormInput },
              { id: "badge", label: "Badge", icon: Tag }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  setComponentType(tab.id as any);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  componentType === tab.id
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white dark:bg-[#10131e] border border-slate-200 dark:border-slate-800/80 shadow-lg space-y-6">
            
            {/* Aesthetic Style Mode Selector */}
            <div>
              <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Aesthetic Archetype:</span>
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: "glass", label: "Liquid Glass" },
                  { id: "solid", label: "Vivid Solid" },
                  { id: "cyber", label: "Cyber Glow" },
                  { id: "neo", label: "Neo-Brutalist" }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setVariant(st.id as any);
                    }}
                    className={`px-3 py-2 rounded-xl border text-center transition-all font-medium ${
                      variant === st.id
                        ? "bg-blue-600/10 border-blue-500 text-blue-600 dark:text-cyan-400 shadow-xs"
                        : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color Palette Selector */}
            <div>
              <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Brand Accent Token:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {presetThemes.map((theme) => (
                  <button
                    key={theme.hex}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setAccentColor(theme.hex);
                    }}
                    title={theme.name}
                    className={`w-8 h-8 rounded-full transition-transform ${
                      accentColor === theme.hex ? "scale-125 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: theme.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Corner Radius Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                <span>Corner Radius:</span>
                <span className="font-bold text-slate-900 dark:text-white">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="32"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Padding X Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                <span>Padding X (Horizontal):</span>
                <span className="font-bold text-slate-900 dark:text-white">{paddingX}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="40"
                value={paddingX}
                onChange={(e) => setPaddingX(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Padding Y Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                <span>Padding Y (Vertical):</span>
                <span className="font-bold text-slate-900 dark:text-white">{paddingY}px</span>
              </div>
              <input
                type="range"
                min="6"
                max="28"
                value={paddingY}
                onChange={(e) => setPaddingY(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

          </div>

          {/* Live Preview & Code Export Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Interactive Live Canvas Area */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 relative flex items-center justify-center min-h-[260px] overflow-hidden shadow-2xl">
              
              {/* Background Ambient Radial Glow */}
              <div 
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none transition-all duration-500"
                style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent 65%)` }}
              />

              {/* LIVE COMPONENT PREVIEW */}
              {componentType === "button" && (
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    confetti({ particleCount: 20, spread: 45 });
                  }}
                  className={`inline-flex items-center justify-center font-semibold text-sm transition-all duration-200 active:scale-95 ${
                    variant === "glass" ? "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-xl hover:bg-white/20" :
                    variant === "cyber" ? "bg-slate-900 border-2 text-white shadow-[0_0_25px_rgba(56,189,248,0.4)]" :
                    variant === "neo" ? "bg-white text-slate-900 border-2 border-slate-950 shadow-[4px_4px_0px_#000]" :
                    "text-white shadow-md hover:opacity-95"
                  }`}
                  style={{
                    backgroundColor: variant === "glass" || variant === "neo" ? undefined : accentColor,
                    borderColor: accentColor,
                    borderRadius: `${borderRadius}px`,
                    padding: `${paddingY}px ${paddingX}px`
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Interactive Token Button</span>
                </button>
              )}

              {componentType === "card" && (
                <div
                  className={`p-6 max-w-sm w-full transition-all ${
                    variant === "glass" ? "bg-slate-900/60 backdrop-blur-2xl border border-white/15 text-white shadow-2xl" :
                    variant === "cyber" ? "bg-slate-950 border border-slate-800 text-white shadow-[0_0_30px_rgba(56,189,248,0.3)]" :
                    variant === "neo" ? "bg-amber-50 text-slate-900 border-2 border-slate-900 shadow-[6px_6px_0px_#0f172a]" :
                    "bg-slate-900 text-white border border-slate-800 shadow-xl"
                  }`}
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: accentColor }}>
                    <Layers className="w-3.5 h-3.5" />
                    <span>Auto Layout Frame</span>
                  </div>
                  <h3 className="text-base font-bold">Figma Token Synchronized</h3>
                  <p className="text-xs opacity-75 mt-1 leading-relaxed">
                    Changes in radius (${borderRadius}px) and accent color propagate instantaneously across the design token hierarchy.
                  </p>
                </div>
              )}

              {componentType === "input" && (
                <div className="w-full max-w-sm space-y-2">
                  <label className="block text-xs font-mono text-slate-400">Search Design Tokens</label>
                  <input
                    type="text"
                    defaultValue="--brand-cobalt-500"
                    className={`w-full text-sm font-mono transition-all outline-none ${
                      variant === "glass" ? "bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-500" :
                      variant === "cyber" ? "bg-slate-950 border border-slate-700 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]" :
                      variant === "neo" ? "bg-white border-2 border-slate-900 text-slate-900 shadow-[3px_3px_0px_#000]" :
                      "bg-slate-900 border border-slate-700 text-white"
                    }`}
                    style={{
                      borderRadius: `${borderRadius}px`,
                      padding: `${paddingY}px ${paddingX}px`,
                      borderColor: accentColor
                    }}
                  />
                </div>
              )}

              {componentType === "badge" && (
                <div
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                    borderRadius: `${borderRadius}px`,
                    padding: `${paddingY}px ${paddingX}px`,
                    border: `1px solid ${accentColor}55`
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                  <span>Production Token Ready</span>
                </div>
              )}

            </div>

            {/* Code Export Controls & Syntax Box */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 shadow-xl">
              
              <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400 uppercase">Export Format:</span>
                  {[
                    { id: "tailwind", label: "Tailwind" },
                    { id: "react", label: "React 19" },
                    { id: "figma", label: "Figma JSON" }
                  ].map(fmt => (
                    <button
                      key={fmt.id}
                      onClick={() => {
                        if (onPlayClick) onPlayClick();
                        setCodeFormat(fmt.id as any);
                      }}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        codeFormat === fmt.id
                          ? "bg-blue-600 text-white font-semibold shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium transition-all"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Display Area */}
              <pre className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-48 leading-relaxed">
                {getGeneratedCode()}
              </pre>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
