import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProcessSection } from './components/ProcessSection';
import { UiLabSection } from './components/UiLabSection';
import { TechStack } from './components/TechStack';
import { EducationCertifications } from './components/EducationCertifications';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { WritingSection } from './components/WritingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Next-Gen Modals & Drawers
import { CommandPalette } from './components/CommandPalette';
import { TerminalDrawer } from './components/TerminalDrawer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeModal } from './components/ResumeModal';

// Sound & Audio Hooks
import { useSoundEffects } from './hooks/useSoundEffects';
import { Project, projects } from './data/portfolioData';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Modal States
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Sound Engine
  const { soundEnabled, toggleSound, playClick, playSuccess, playKeypress } = useSoundEffects();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for Search Palette)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playClick();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playClick]);

  const handleSelectProjectFromPalette = (projectId: string) => {
    const p = projects.find((x) => x.id === projectId);
    if (p) {
      setSelectedCaseStudy(p);
      playSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#090a0d] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => {
          playClick();
          if ("startViewTransition" in document) {
            (document as any).startViewTransition(() => {
              setDarkMode(!darkMode);
            });
          } else {
            setDarkMode(!darkMode);
          }
        }}
        onOpenCommandPalette={() => {
          playClick();
          setIsCommandPaletteOpen(true);
        }}
        onOpenTerminal={() => {
          playClick();
          setIsTerminalOpen(true);
        }}
        onOpenResume={() => {
          playClick();
          setIsResumeOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onPlayClick={playClick}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero 
          onOpenResume={() => {
            playClick();
            setIsResumeOpen(true);
          }}
          onOpenTerminal={() => {
            playClick();
            setIsTerminalOpen(true);
          }}
          onPlayClick={playClick}
          onPlaySuccess={playSuccess}
        />

        <Projects 
          onOpenCaseStudy={(p) => {
            playSuccess();
            setSelectedCaseStudy(p);
          }}
          onPlayClick={playClick}
        />

        <ProcessSection />

        <UiLabSection 
          onPlayClick={playClick}
          onPlaySuccess={playSuccess}
        />

        <TechStack />

        <EducationCertifications />

        <ExperienceTimeline />

        <WritingSection />

        <AboutSection />

        <ContactSection 
          onPlayClick={playClick}
          onPlaySuccess={playSuccess}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCommandPalette={() => {
          playClick();
          setIsCommandPaletteOpen(true);
        }}
        onOpenTerminal={() => {
          playClick();
          setIsTerminalOpen(true);
        }}
        onOpenResume={() => {
          playClick();
          setIsResumeOpen(true);
        }}
        onPlayClick={playClick}
      />

      {/* Global Interactive Modals & Drawers */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTheme={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        onSelectProject={handleSelectProjectFromPalette}
      />

      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onPlayKeypress={playKeypress}
      />

      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export default App;
