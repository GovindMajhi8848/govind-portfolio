import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
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
  Layers
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { HeroVisualShowcase } from './HeroVisualShowcase';
import { use3DTilt } from '../hooks/use3DTilt';

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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = 600);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 600;
      }
    };
    window.addEventListener('resize', handleResize);

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
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 110) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-dot-pattern relative overflow-hidden">
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40"
      />

      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-purple-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Call To Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">{personalInfo.name}</span>.
              <span className="block mt-2 text-xl sm:text-3xl font-medium text-slate-600 dark:text-slate-300">
                {personalInfo.bioHeadline}
              </span>
            </h1>

            {/* Focus Pillars */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs font-medium font-mono shadow-xs">
                <Palette className="w-3.5 h-3.5 text-purple-500" />
                UI/UX Design (Figma, Tokens)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs font-medium font-mono shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Vibe Coding (Cursor, Claude Code, v0)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs font-medium font-mono shadow-xs">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                Interactive Prototyping (Tech Axis)
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
                className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-md shadow-blue-500/20 transition-all craft-button"
              >
                <span>Explore Works & Prototypes</span>
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

            {/* Quick Meta Row */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn Profile</span>
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
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
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
