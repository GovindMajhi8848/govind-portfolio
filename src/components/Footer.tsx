import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, FileText, Search } from 'lucide-react';
import { LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenCommandPalette?: () => void;
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
  onPlayClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenResume,
  onPlayClick,
}) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (onPlayClick) onPlayClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07080b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/60">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xs font-mono shadow-xs">
              GM
            </div>
            <div>
              <div className="font-semibold text-xs text-slate-900 dark:text-white">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {personalInfo.role} • B.Tech CSE (2024)
              </div>
            </div>
          </div>

          {/* Local Time Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400 font-mono border border-slate-200 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Kathmandu, NP: {localTime || 'UTC+5:45'}</span>
          </div>

          {/* Quick Footer Shortcuts */}
          <div className="flex items-center gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onOpenCommandPalette();
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-mono"
                title="Command Palette (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            )}

            {onOpenTerminal && (
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onOpenTerminal();
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-700"
                title="Open Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
              </button>
            )}

            {onOpenResume && (
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onOpenResume();
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-700"
                title="View Resume / CV"
              >
                <FileText className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-500"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all craft-button shadow-xs"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Subtitle */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Crafted with Figma, React 19, TypeScript, and Tailwind CSS.
          </div>
          <div className="font-mono text-[11px]">
            © {new Date().getFullYear()} Govind Kumar Majhi. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
