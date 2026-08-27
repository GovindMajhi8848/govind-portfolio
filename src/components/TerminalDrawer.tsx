import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, projects, education, certifications } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleTheme: () => void;
  onPlayKeypress?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onToggleTheme,
  onPlayKeypress,
}) => {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">🚀 Govind Kumar Majhi — Interactive Shell v2.4 (gm-cli)</p>
          <p className="text-xs text-slate-400">Type <span className="text-cyan-300 font-bold font-mono">help</span> to list all interactive commands, or <span className="text-cyan-300 font-bold font-mono">resume</span> to preview CV.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, logs]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-bold mb-2">Available GM-CLI Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-amber-300 font-semibold">bio</span> — About Govind & core craft</div>
              <div><span className="text-amber-300 font-semibold">skills</span> — Design systems & frontend stack</div>
              <div><span className="text-amber-300 font-semibold">vibe</span> — AI vibe coding toolkit & workflow</div>
              <div><span className="text-amber-300 font-semibold">projects</span> — Interactive projects catalogue</div>
              <div><span className="text-amber-300 font-semibold">education</span> — Degrees & AWS certifications</div>
              <div><span className="text-amber-300 font-semibold">resume</span> — Open interactive CV modal</div>
              <div><span className="text-amber-300 font-semibold">contact</span> — Email, phone, & LinkedIn</div>
              <div><span className="text-amber-300 font-semibold">theme</span> — Toggle Light / Dark mode</div>
              <div><span className="text-amber-300 font-semibold">clear</span> — Clear terminal output</div>
              <div><span className="text-amber-300 font-semibold">sudo</span> — Elevate to root privileges</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-bold">{personalInfo.name} — {personalInfo.role}</p>
            <p>{personalInfo.bioHeadline}</p>
            <p className="text-slate-400">{personalInfo.bioFull[0]}</p>
            <p className="text-emerald-400">Status: {personalInfo.availability}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">Specialized Engineering & Design Capabilities:</p>
            <div className="space-y-1.5 text-slate-300">
              <p><span className="text-purple-400 font-semibold">Design & UI/UX:</span> Figma (Auto Layout 5.0, Variables, Design Tokens), Wireframing, User Journey Maps, Interactive Prototyping.</p>
              <p><span className="text-pink-400 font-semibold">AI & Vibe Coding:</span> Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0 Prototyping, Spec-driven LLM orchestration.</p>
              <p><span className="text-emerald-400 font-semibold">Creative & Branding:</span> Canva Pro, Adobe Illustrator/Photoshop, Visual Brand Kits, Motion & Video.</p>
              <p><span className="text-amber-400 font-semibold">Systems & Security:</span> Git/GitHub Workflows, CI/CD Deployment, Zscaler Cloud Security, REST APIs.</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">Featured Works & Interactive Prototypes:</p>
            <div className="space-y-2 text-slate-300">
              {projects.map((p) => (
                <div key={p.id} className="border-l-2 border-slate-700 pl-2">
                  <div className="font-semibold text-white">{p.title} <span className="text-slate-500">[{p.category}]</span></div>
                  <div className="text-slate-400 text-[11px]">{p.tagline}</div>
                  <div className="text-[10px] text-cyan-300 mt-0.5">Stack: {p.tags.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">Education & Official Credentials:</p>
            {education.map((e, idx) => (
              <div key={idx} className="border-l-2 border-blue-500/60 pl-2">
                <div className="font-semibold text-white">{e.degree}</div>
                <div className="text-slate-400">{e.institution} • {e.period}</div>
              </div>
            ))}
            <p className="text-amber-400 font-bold mt-2">Certifications:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
              {certifications.map((c, idx) => (
                <div key={idx} className="text-slate-300">✓ {c.title} ({c.year})</div>
              ))}
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        output = (
          <div className="text-xs font-mono text-emerald-400">
            Opening interactive Resume / CV viewer modal...
          </div>
        );
        setTimeout(() => onOpenResume(), 300);
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">Direct Channels:</p>
            <p>📧 Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 underline">{personalInfo.email}</a></p>
            <p>📱 Phone: <span className="text-emerald-400">{personalInfo.phone}</span></p>
            <p>🔗 LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">linkedin.com/in/govindkumarmajhi173</a></p>
            <p>📍 Location: {personalInfo.location}</p>
          </div>
        );
        break;

      case 'theme':
        output = <div className="text-xs font-mono text-amber-300">Theme toggled successfully.</div>;
        onToggleTheme();
        break;

      case 'clear':
      case 'cls':
        setLogs([]);
        return;

      case 'vibe':
      case 'vibecoding':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-pink-400 font-bold">⚡ Vibe Coding Protocol & AI Stack:</p>
            <div className="space-y-1 text-slate-300">
              <p>• <span className="text-cyan-300 font-semibold">Primary Drivers:</span> Cursor AI, Claude Code, GitHub Copilot, Gemini CLI</p>
              <p>• <span className="text-purple-300 font-semibold">Generative Prototyping:</span> v0 by Vercel, Bolt.new, Figma AI</p>
              <p>• <span className="text-emerald-300 font-semibold">Engineering Philosophy:</span> Directing LLMs with structured context, markdown specs, and atomic design tokens to ship 10x faster without regressions.</p>
              <p>• <span className="text-amber-300 font-semibold">Flow State:</span> High fidelity UI + Strict TypeScript + Ambient Lo-Fi 🎧</p>
            </div>
          </div>
        );
        break;

      case 'sudo':
      case 'sudo su':
        output = (
          <div className="text-xs font-mono text-rose-400">
            [ACCESS GRANTED] You are now Govind Kumar Majhi (uid=0). All permissions authorized. Feel free to hire! 🚀
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: <span className="text-white font-bold">{raw}</span>. Type <span className="text-cyan-300 underline font-bold">help</span> for a list of available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: raw,
        output,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPlayKeypress) onPlayKeypress();

    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(history[nextIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Terminal Window Container */}
      <div 
        className={`relative w-full rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 transition-all duration-300 ${
          isExpanded ? 'max-w-5xl h-[85vh]' : 'max-w-3xl h-[60vh]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:opacity-100" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer hover:opacity-100" onClick={() => setLogs([])} />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer hover:opacity-100" onClick={() => setIsExpanded(!isExpanded)} />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>gm@portfolio: ~/terminal-shell</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-xs sm:text-sm">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400">gm@portfolio</span>
                <span className="text-slate-600">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-slate-200">$ {log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 sm:p-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2 font-mono">
          <span className="text-emerald-400 text-sm">➜</span>
          <span className="text-cyan-400 text-xs sm:text-sm hidden sm:inline">gm@portfolio</span>
          <span className="text-slate-600 hidden sm:inline">:</span>
          <span className="text-purple-400 text-xs sm:text-sm">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'resume', 'skills', or 'projects'..."
            className="flex-1 bg-transparent text-white text-xs sm:text-sm focus:outline-hidden caret-blue-400 placeholder:text-slate-600"
          />
          <button
            onClick={() => {
              handleCommand(input);
              setInput('');
            }}
            className="px-2.5 py-1 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-xs flex items-center gap-1"
          >
            <CornerDownLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Run</span>
          </button>
        </div>

      </div>
    </div>
  );
};
