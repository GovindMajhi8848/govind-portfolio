import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  ArrowDown, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Palette, 
  FileText,
  Terminal,
  Sparkles,
  Layers,
  ExternalLink
} from "lucide-react";
import { LinkedinIcon, GithubIcon, FigmaIcon, CanvaIcon } from "./Icons";
import { HeroVisualShowcase } from "./HeroVisualShowcase";
import { use3DTilt } from "../hooks/use3DTilt";

interface HeroProps {
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
  onPlayClick?: () => void;
  onPlaySuccess?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenTerminal,
  onPlayClick,
  onPlaySuccess,
}) => {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroCardRef = use3DTilt<HTMLDivElement>({ max: 8, scale: 1.01 });

  const handleCopyEmail = () => {
    if (onPlaySuccess) onPlaySuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Subtle interactive particle mesh on Hero canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = 600);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 600;
      }
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = [];
    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/70 dark:border-slate-800/80">
      
      {/* Background Decorative Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60 z-0"
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Call To Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-medium backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Punchy Editorial Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-wide text-blue-600 dark:text-cyan-400 font-semibold uppercase">
                {personalInfo.name} — Product Designer & Frontend Engineer
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Designing <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent">high-fidelity systems</span> in Figma.
                <span className="block mt-2 text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  Shipping production software in React.
                </span>
              </h1>
            </div>

            {/* Focus Pillars / Proof Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-medium font-mono shadow-xs">
                <Palette className="w-3.5 h-3.5 text-purple-500" />
                Figma Auto Layout 5.0 & Variables
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-300 text-xs font-medium font-mono shadow-xs">
                <Layers className="w-3.5 h-3.5 text-cyan-500" />
                Design Tokens to React 19
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs font-medium font-mono shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                AI Vibe Coding (Cursor, Claude Code)
              </span>
            </div>

            {/* Concise Bio Narrative */}
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-2 max-w-xl">
              <p>{personalInfo.bioFull[0]}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {personalInfo.bioFull[1]}
              </p>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                onClick={() => onPlayClick && onPlayClick()}
                className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-2xl shadow-md shadow-blue-500/20 transition-all craft-button"
              >
                <span>Explore Shipped Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {onOpenResume && (
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111420] border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all craft-button shadow-xs"
                >
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>View Resume / CV</span>
                </button>
              )}

              {onOpenTerminal && (
                <button
                  onClick={() => {
                    if (onPlayClick) onPlayClick();
                    onOpenTerminal();
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-3 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all craft-button"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>gm-cli</span>
                </button>
              )}

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-all craft-button"
                aria-label="Copy direct email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span className="font-mono text-xs">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Link Channels */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={personalInfo.figma}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 text-slate-700 dark:text-slate-300 text-xs font-mono transition-all hover:scale-105"
              >
                <FigmaIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>Figma @govindmajhi</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personalInfo.canvaWorkspace}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 text-xs font-mono transition-all hover:scale-105"
              >
                <CanvaIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Canva Live Workshop</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300 text-xs font-mono transition-all hover:scale-105"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 text-xs font-mono transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Meta Row */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Quick Stats Grid with 3D Tilt Hook */}
            <div ref={heroCardRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {personalInfo.quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#11141f] border border-slate-200/80 dark:border-slate-800/80 shadow-xs craft-card hover:border-blue-500/40"
                >
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Visual 3D Showcase (5 Cols) */}
          <div className="lg:col-span-5">
            <HeroVisualShowcase onPlayClick={onPlayClick} />
          </div>

        </div>

      </div>
    </section>
  );
};
