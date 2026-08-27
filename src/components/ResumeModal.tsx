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
  Sparkles
} from 'lucide-react';
import { personalInfo, education, certifications, experiences, ExperienceItem } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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
    const md = `# ${personalInfo.name} — ${personalInfo.role}
Location: ${personalInfo.location} | Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

## Summary
${personalInfo.bioFull.join('\n\n')}

## Key Skills & Tooling
- **UI/UX Design:** Figma (Auto Layout 5.0, Variables, Design Tokens, Components), Wireframing, Prototypes, Design Systems, Canva Pro
- **AI & Vibe Coding:** Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0.dev, Bolt.new, Context Prompting, Spec-Driven Prototyping
- **Systems & Security:** Git/GitHub Version Control, Zscaler Cybersecurity, REST APIs, Design-to-Code Pipelines

## Education
${education.map(e => `- **${e.degree}** — ${e.institution} (${e.period}, ${e.location})\n  ${e.details || ''}`).join('\n')}

## Certifications
${certifications.map(c => `- **${c.title}** — ${c.issuer} (${c.year})`).join('\n')}

## Experience
${experiences.map((x: ExperienceItem) => `### ${x.role} — ${x.company} (${x.period}, ${x.location})\n${x.description.map((d: string) => `- ${d}`).join('\n')}\n*Technologies:* ${x.technologies.join(', ')}`).join('\n\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:static print:z-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200 print:hidden"
        onClick={onClose}
      />

      {/* Modal / Resume Document */}
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100 print:max-w-none print:h-auto print:rounded-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Action Header (Hidden in Print) */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
              Curriculum Vitae • {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">Copied MD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                  {personalInfo.role} • Computer Science Graduate (B.Tech 2024)
                </p>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-500 hover:underline">{personalInfo.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Narrative */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.bioFull[0]} {personalInfo.bioFull[1]}
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Skills & Methodologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>UI/UX Design & Systems</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Figma (Auto Layout 5.0, Variables, Design Tokens, Components), Wireframing, Prototypes, Design Systems, Canva Pro.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI & Vibe Coding</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Claude Code, Cursor, GitHub Copilot, Gemini CLI, v0.dev, Bolt.new, Context Prompting, Spec-Driven Prototyping.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Version Control & Security</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Git/GitHub Version Control, CI/CD Deployment, Zscaler Cybersecurity, REST APIs, Design-to-Code Pipelines.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {education.map((item, idx) => (
                <div key={idx} className="border-l-2 border-blue-500/50 pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    <span>{item.degree}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-normal">{item.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {item.institution} — <span className="text-slate-500">{item.location}</span>
                  </div>
                  {item.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Official Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{cert.title}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{cert.issuer} • {cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-500" />
              <span>Experience & Training Milestones</span>
            </h2>
            <div className="space-y-4">
              {experiences.map((exp: ExperienceItem) => (
                <div key={exp.id} className="border-l-2 border-emerald-500/50 pl-3 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    <span>{exp.role} — <span className="text-emerald-600 dark:text-emerald-400 font-normal">{exp.company}</span></span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {exp.description.map((d: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                    Tools: {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
