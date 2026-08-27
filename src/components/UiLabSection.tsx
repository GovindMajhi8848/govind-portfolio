import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Check, 
  Copy, 
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface UiLabSectionProps {
  onPlayClick?: () => void;
  onPlaySuccess?: () => void;
}

export const UiLabSection: React.FC<UiLabSectionProps> = ({ onPlayClick, onPlaySuccess }) => {
  const [accentColor, setAccentColor] = useState<string>('#2563eb');
  const [borderRadius, setBorderRadius] = useState<number>(16);
  const [paddingY, setPaddingY] = useState<number>(12);
  const [paddingX, setPaddingX] = useState<number>(24);
  const [variant, setVariant] = useState<'solid' | 'glass' | 'cyber' | 'outline'>('solid');
  const [codeFormat, setCodeFormat] = useState<'tailwind' | 'react' | 'figma'>('tailwind');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const presetThemes = [
    { name: 'Sapphire Blue', hex: '#2563eb' },
    { name: 'Electric Cyan', hex: '#06b6d4' },
    { name: 'Violet Cyber', hex: '#8b5cf6' },
    { name: 'Neon Emerald', hex: '#10b981' },
    { name: 'Solar Amber', hex: '#f59e0b' },
    { name: 'Rose Crimson', hex: '#f43f5e' },
  ];

  // Dynamic code generators
  const getGeneratedCode = () => {
    if (codeFormat === 'tailwind') {
      let variantClasses = '';
      if (variant === 'solid') variantClasses = 'text-white shadow-md hover:opacity-90';
      if (variant === 'glass') variantClasses = 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg';
      if (variant === 'cyber') variantClasses = 'bg-slate-900 border-2 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]';
      if (variant === 'outline') variantClasses = 'bg-transparent border-2 text-slate-800 dark:text-white';

      return `<button
  className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-200 active:scale-95 ${variantClasses}"
  style={{
    backgroundColor: '${variant === 'outline' ? 'transparent' : accentColor}',
    borderColor: '${accentColor}',
    borderRadius: '${borderRadius}px',
    padding: '${paddingY}px ${paddingX}px'
  }}
>
  Interactive Button
</button>`;
    }

    if (codeFormat === 'react') {
      return `import React from 'react';

export const CustomButton = () => {
  return (
    <button 
      style={{
        backgroundColor: '${variant === 'outline' ? 'transparent' : accentColor}',
        borderRadius: '${borderRadius}px',
        padding: '${paddingY}px ${paddingX}px',
        color: '#ffffff',
        border: '1px solid ${accentColor}'
      }}
      className="font-medium text-sm transition-all active:scale-95 shadow-md"
    >
      Interactive Button
    </button>
  );
};`;
    }

    // Figma Variables JSON token format
    return JSON.stringify(
      {
        tokenCollection: "GovindDesignSystem",
        mode: "Default",
        variables: {
          "color.accent": { type: "COLOR", value: accentColor },
          "radius.component": { type: "FLOAT", value: borderRadius },
          "space.padding.y": { type: "FLOAT", value: paddingY },
          "space.padding.x": { type: "FLOAT", value: paddingX },
          "style.variant": { type: "STRING", value: variant }
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
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } catch {}
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="ui-lab" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Token Playground 2.0</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Live UI/UX & Design Token Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
              Test live Figma design tokens, interact with dynamic component states, and export 1:1 Tailwind CSS, React JSX, and Figma Variable JSON.
            </p>
          </div>

          {/* Export Format Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                setCodeFormat('tailwind');
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                codeFormat === 'tailwind'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tailwind
            </button>
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                setCodeFormat('react');
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                codeFormat === 'react'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              React JSX
            </button>
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                setCodeFormat('figma');
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                codeFormat === 'figma'
                  ? 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Figma JSON
            </button>
          </div>
        </div>

        {/* Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Controls Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 p-6 rounded-3xl bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800 shadow-sm">
            
            {/* Color Palette */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
                Primary Token Color
              </label>
              <div className="grid grid-cols-6 gap-2">
                {presetThemes.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setAccentColor(preset.hex);
                    }}
                    style={{ backgroundColor: preset.hex }}
                    className={`w-full aspect-square rounded-xl transition-all ${
                      accentColor === preset.hex ? 'ring-2 ring-offset-2 ring-slate-900 dark:ring-white scale-105' : 'hover:opacity-80'
                    }`}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>

            {/* Variant Switcher */}
            <div>
              <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Component Variant
              </label>
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                {(['solid', 'glass', 'cyber', 'outline'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      if (onPlayClick) onPlayClick();
                      setVariant(v);
                    }}
                    className={`py-1.5 rounded-lg capitalize font-mono text-[11px] transition-colors ${
                      variant === v ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Radius Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                <span>Corner Radius (Figma Variable):</span>
                <span className="font-bold text-slate-900 dark:text-white">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="32"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Padding Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  <span>Padding Y:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{paddingY}px</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="20"
                  value={paddingY}
                  onChange={(e) => setPaddingY(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                  <span>Padding X:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{paddingX}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="40"
                  value={paddingX}
                  onChange={(e) => setPaddingX(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Right Live Stage & Code Output (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Live Interactive Component Sandbox */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden shadow-inner">
              <div className="absolute top-3 left-4 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>INTERACTIVE COMPONENT STAGE</span>
              </div>

              {/* Rendered Live Button */}
              <button
                className={`font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  variant === 'glass' ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl' :
                  variant === 'cyber' ? 'bg-slate-900 border-2 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' :
                  variant === 'outline' ? 'bg-transparent border-2 text-white' :
                  'text-white shadow-lg hover:opacity-95'
                }`}
                style={{
                  backgroundColor: variant === 'outline' ? 'transparent' : variant === 'glass' ? 'rgba(255,255,255,0.08)' : accentColor,
                  borderColor: accentColor,
                  borderRadius: `${borderRadius}px`,
                  padding: `${paddingY}px ${paddingX}px`
                }}
              >
                Interactive Design Token Button
              </button>
            </div>

            {/* Generated Code Window */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden text-xs">
              <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{codeFormat.toUpperCase()} OUTPUT</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied Token!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-slate-300 overflow-x-auto leading-relaxed">
                <code>{getGeneratedCode()}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
