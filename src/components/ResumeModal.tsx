import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Palette, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Globe, 
  ExternalLink, 
  FolderGit2, 
  FileText,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, education, certifications, experiences, ExperienceItem, projects } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<'md' | 'txt' | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${personalInfo.name}
**${personalInfo.role}**
📍 ${personalInfo.location} | 📞 ${personalInfo.phone} | ✉️ ${personalInfo.email}
🔗 Portfolio: https://portfolio-nine-sable-tzxl77wobo.vercel.app
🔗 LinkedIn: ${personalInfo.linkedin}
🔗 GitHub: https://github.com/GovindMajhi8848

---

## Executive Summary
${personalInfo.bioFull.join('\n\n')}

---

## Core Competencies & Tooling
- **UI/UX & Product Design:** Figma (Auto Layout 5.0, Variables, Design Tokens, Components), Wireframing (Lo-Fi to Hi-Fi), Design Thinking (Empathize, Define, Ideate, Prototype, Test), Information Architecture, Usability Testing, WCAG 2.1 AA Accessibility.
- **AI & Vibe Coding:** Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0.dev by Vercel, Bolt.new, Spec-Driven Context Prompting, Rapid Prototyping Loops.
- **Creative Suite & Brand Identity:** Canva Pro (Brand Kits, Presentation Pitch Decks), Adobe Illustrator & Photoshop (Vector Graphics, Collateral), UI Interaction Reels & Video Editing.
- **Version Control & Systems:** Git/GitHub Version Control, Vercel CI/CD Deployment, REST APIs, Zscaler Cloud Security.

---

## Featured Production Projects

### ClickDigitals — Digital Marketing & Tech Academy Web Platform (2024)
- **Role:** Lead UI/UX & Web Designer | **Live:** https://clickdigitals.com.np
- Designed and launched official web platform for ClickDigitals, featuring audience targeting science, performance marketing campaigns, and interactive 6-track tech academy curriculum.
- Built interactive course syllabus modals, instant lead funnels, and responsive UI with sub-second page loads and 4.8★ user feedback.

### Lilliput Premier Elementary School Web Portal (2024)
- **Role:** UI/UX Designer & Developer | **Live:** https://lilliputschool.edu.np
- Architected and built official institutional portal featuring dual Bikram Sambat / Gregorian academic calendar, admission inquiry funnel, and curriculum showcase.
- Achieved a 98+ Google Lighthouse mobile score, zero layout shifts, and WCAG-compliant accessible contrast ratios.

### FreshCart — Mobile Grocery & Delivery App Design (2024)
- **Role:** Product Designer (Tech Axis Capstone)
- Designed complete mobile e-commerce grocery delivery experience featuring 8 user flows, thumb-friendly navigation, and Figma Auto Layout 5.0 variables.

---

## Professional Experience & Training

${experiences.map((x: ExperienceItem) => `### ${x.role} — ${x.company}
*${x.period} | ${x.location} (${x.type})*
${x.description.map((d: string) => `- ${d}`).join('\n')}
*Key Skills:* ${x.technologies.join(', ')}`).join('\n\n')}

---

## Education
${education.map(e => `- **${e.degree}** — ${e.institution} (${e.period}, ${e.location})\n  ${e.details || ''}`).join('\n')}

---

## Certifications & Credentials
${certifications.map(c => `- **${c.title}** — ${c.issuer} (${c.year})`).join('\n')}
`;
    navigator.clipboard.writeText(md);
    setCopiedType('md');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyPlainText = () => {
    const txt = `${personalInfo.name.toUpperCase()}
${personalInfo.role}
Location: ${personalInfo.location}
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
Portfolio: https://portfolio-nine-sable-tzxl77wobo.vercel.app
LinkedIn: ${personalInfo.linkedin}

EXECUTIVE SUMMARY
${personalInfo.bioFull.join(' ')}

CORE SKILLS & TOOLS
• UI/UX Design: Figma (Auto Layout 5.0, Variables, Design Tokens, Components), Wireframing, Design Thinking, Usability Testing, WCAG 2.1 AA.
• AI & Vibe Coding: Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0.dev, Context Prompting, Rapid Prototyping.
• Creative Suite: Canva Pro, Adobe Illustrator, Photoshop, Visual Branding, Motion & Video.
• Systems & Version Control: Git, GitHub, Vercel CI/CD, REST APIs, Zscaler Security.

FEATURED PRODUCTION PROJECTS
1. ClickDigitals (https://clickdigitals.com.np) - Digital Marketing & Tech Academy Platform. Lead UI/UX Designer.
2. Lilliput Premier Elementary School (https://lilliputschool.edu.np) - Official Institutional Portal. 98+ Lighthouse score.
3. FreshCart Mobile Grocery App - 8 user journeys, thumb-zone mobile UI design, Figma variables.

WORK EXPERIENCE
${experiences.map((x: ExperienceItem) => `${x.role.toUpperCase()} | ${x.company} (${x.period}, ${x.location})\n${x.description.map((d: string) => `• ${d}`).join('\n')}\nTools: ${x.technologies.join(', ')}`).join('\n\n')}

EDUCATION
${education.map(e => `• ${e.degree} | ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS
${certifications.map(c => `• ${c.title} - ${c.issuer} (${c.year})`).join('\n')}
`;
    navigator.clipboard.writeText(txt);
    setCopiedType('txt');
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Top 3 featured projects for CV display
  const featuredProjects = projects.filter(p => p.id === 'clickdigitals-agency' || p.id === 'lilliput-school' || p.id === 'freshcart-mobile');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:static print:z-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200 print:hidden"
        onClick={onClose}
      />

      {/* Modal / Resume Document Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl bg-white dark:bg-[#0f111a] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100 print:max-w-none print:h-auto print:rounded-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Action Header Bar (Hidden in Print) */}
        <div className="p-3.5 sm:p-4.5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-tight text-slate-800 dark:text-slate-200">
              Curriculum Vitae • {personalInfo.name}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              ATS-Optimized V2.0
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Open Standalone Page */}
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
              title="Open full-page clean CV in new tab"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Web Page</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Copy Plain Text */}
            <button
              onClick={handleCopyPlainText}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
              title="Copy plain text for job applications"
            >
              {copiedType === 'txt' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">Copied Text!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Copy Markdown */}
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
              title="Copy Markdown formatted CV"
            >
              {copiedType === 'md' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">Copied MD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            {/* Print PDF */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 print:p-8 space-y-8 print:space-y-6 print:overflow-visible">
          
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:pb-4 space-y-3">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent print:text-blue-800 mt-1">
                  {personalInfo.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 print:text-slate-600 mt-0.5">
                  Computer Science Graduate (B.Tech 2024) • Tech Axis UI/UX Certified
                </p>
              </div>

              {/* Contact Pills */}
              <div className="text-xs text-slate-600 dark:text-slate-300 print:text-black space-y-1.5 md:text-right font-mono">
                <div className="flex items-center md:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 print:text-black" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-500 print:text-black" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500 print:text-black" />
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 print:text-black hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-500 print:text-black" />
                  <a href="https://portfolio-nine-sable-tzxl77wobo.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 print:text-black hover:underline">govind-portfolio.vercel.app</a>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2 print:break-inside-avoid">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
              {personalInfo.bioFull[0]} {personalInfo.bioFull[1]}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
              {personalInfo.bioFull[2]}
            </p>
          </div>

          {/* 2-Column Section: Left (Skills/Education/Certs) & Right (Projects/Experience) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:grid-cols-12 print:gap-6">
            
            {/* Left Column (4 cols on lg/print) */}
            <div className="lg:col-span-5 print:col-span-5 space-y-6">
              
              {/* Core Competencies */}
              <div className="space-y-3 print:break-inside-avoid">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Core Competencies</span>
                </h2>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 print:bg-slate-50 print:border-slate-300">
                    <div className="font-bold text-purple-700 dark:text-purple-400 print:text-purple-900 mb-1 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5" />
                      <span>UI/UX & Product Design</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 print:text-slate-800 text-[11px] leading-relaxed">
                      Figma (Auto Layout 5.0, Variables, Design Tokens, Component Variants), Wireframing (Lo-Fi to Hi-Fi), Design Thinking (5-Stage), User Journey Maps, Usability Testing, WCAG 2.1 AA Accessibility.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 print:bg-slate-50 print:border-slate-300">
                    <div className="font-bold text-amber-700 dark:text-amber-400 print:text-amber-900 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI & Vibe Coding</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 print:text-slate-800 text-[11px] leading-relaxed">
                      Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0.dev by Vercel, Bolt.new, Spec-Driven Context Prompting, Rapid Prototyping, Zero-Drift Design Translation.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 print:bg-slate-50 print:border-slate-300">
                    <div className="font-bold text-emerald-700 dark:text-emerald-400 print:text-emerald-900 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Creative Suite & Branding</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 print:text-slate-800 text-[11px] leading-relaxed">
                      Canva Pro (Brand Kits, Pitch Decks), Adobe Illustrator & Photoshop (Vector Graphics, Collateral), UI Interaction Reels & Video Editing.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 print:bg-slate-50 print:border-slate-300">
                    <div className="font-bold text-blue-700 dark:text-blue-400 print:text-blue-900 mb-1 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Systems & Version Control</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 print:text-slate-800 text-[11px] leading-relaxed">
                      Git/GitHub Version Control, Branching & PR Reviews, Vercel CI/CD Deployment, REST APIs, Zscaler Cloud Security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3 print:break-inside-avoid">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  <span>Education</span>
                </h2>
                <div className="space-y-3">
                  {education.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500/50 pl-3">
                      <div className="text-xs font-bold text-slate-900 dark:text-white print:text-black">
                        {item.degree}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-700 mt-0.5">
                        {item.institution}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-500 print:text-slate-600">
                        {item.period} • {item.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3 print:break-inside-avoid">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certifications</span>
                </h2>
                <div className="space-y-2 text-xs">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 print:bg-slate-50 print:border-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white print:text-black text-[11px]">{cert.title}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 print:text-slate-600">{cert.issuer} • {cert.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (7 cols on lg/print) */}
            <div className="lg:col-span-7 print:col-span-7 space-y-6">
              
              {/* Featured Production Projects */}
              <div className="space-y-3 print:break-inside-avoid">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-blue-500" />
                  <span>Featured Production Projects</span>
                </h2>

                <div className="space-y-3.5">
                  {featuredProjects.map((p) => (
                    <div key={p.id} className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 print:bg-white print:border-slate-300 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                          {p.title}
                        </h3>
                        {p.liveUrl && (
                          <a 
                            href={p.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 print:text-blue-800 font-semibold hover:underline"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 print:border-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-3 print:break-inside-avoid">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 print:text-black flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  <span>Professional Experience & Training</span>
                </h2>

                <div className="space-y-4">
                  {experiences.map((exp: ExperienceItem) => (
                    <div key={exp.id} className="border-l-2 border-emerald-500/50 pl-3.5 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                          {exp.role} — <span className="text-emerald-600 dark:text-emerald-400 print:text-emerald-800 font-semibold">{exp.company}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600 shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                        {exp.location} • {exp.type}
                      </div>

                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 print:text-slate-800 pt-0.5">
                        {exp.description.map((d: string, i: number) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold mt-0.5">•</span>
                            <span className="text-[11px] leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600 pt-1">
                        <span className="font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">Technologies:</span> {exp.technologies.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
