import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle, MapPin, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { AwsIcon, FigmaIcon, ZscalerIcon } from './Icons';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 scroll-mt-20 sm:scroll-mt-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Verified Credentials & Academic Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Education & Professional Certifications
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
            Engineering degree combined with industry-certified cloud architecture, cybersecurity, and intensive UI/UX design training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Formal Academic Education</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#11141c] border border-slate-200 dark:border-slate-800/90 shadow-sm craft-card space-y-3 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1 pl-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{edu.location}</span>
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Industry Certifications & Specializations</span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => {
                const isAws = cert.title.includes('AWS');
                const isTechAxis = cert.title.includes('Tech Axis') || cert.issuer.includes('Tech Axis');
                const isZscaler = cert.title.includes('Zscaler');

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#11141c] border border-slate-200 dark:border-slate-800/90 shadow-sm craft-card flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Visual Badge Icon */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-xs">
                        {isAws && <AwsIcon className="w-5 h-5" />}
                        {isTechAxis && <FigmaIcon className="w-4 h-4" />}
                        {isZscaler && <ZscalerIcon className="w-5 h-5" />}
                        {!isAws && !isTechAxis && !isZscaler && <ShieldCheck className="w-5 h-5 text-blue-500" />}
                      </div>

                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>{cert.title}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tech Axis Immersion Spotlight Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent border border-purple-500/20 text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-purple-600 dark:text-purple-300 block mb-0.5">Tech Axis UI/UX Design Immersion:</strong>
                Comprehensive specialization covering Design Thinking, Information Architecture, Wireframing, Auto Layout 5.0, Component Variants, Typography Scales, and Usability Testing.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
