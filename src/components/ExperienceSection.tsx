import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, Edit3, CheckCircle2 } from 'lucide-react';
import { ExperienceItem, EducationItem, CertificationItem, SkillGroup } from '../types/portfolio';

interface ExperienceSectionProps {
  experienceList: ExperienceItem[];
  educationList: EducationItem[];
  certifications: CertificationItem[];
  skillGroups: SkillGroup[];
  onOpenResumeEditor: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experienceList,
  educationList,
  certifications,
  skillGroups,
  onOpenResumeEditor
}) => {
  const [expandedId, setExpandedId] = useState<string>(experienceList[0]?.id || '');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Career Trajectory & Credentials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Work Experience & Skills
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              7+ years of engineering leadership, enterprise frontend architecture, and mission-critical reactive systems.
            </p>
          </div>

          <button
            onClick={onOpenResumeEditor}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/60 self-start md:self-auto"
          >
            <Edit3 className="w-3.5 h-3.5 text-blue-500" />
            <span>Customize / Import Resume</span>
          </button>
        </div>

        {/* 2-Column Split: Timeline on Left (7 cols), Education & Certs on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Professional Experience</span>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 pl-6 space-y-8">
              {experienceList.map((exp) => {
                const isExpanded = expandedId === exp.id;
                return (
                  <div key={exp.id} className="relative group">
                    {/* Timeline Node */}
                    <div
                      className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                        exp.isCurrent
                          ? 'bg-blue-600 border-blue-200 dark:border-blue-900'
                          : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900'
                      }`}
                    />

                    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.company}</span>
                            <span aria-hidden="true">·</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable Key Impact & Achievements */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="flex items-center justify-between w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1"
                        >
                          <span>{isExpanded ? 'Hide Key Impact & Deliverables' : `View Key Deliverables (${exp.achievements.length})`}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                            {exp.achievements.map((ach, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-blue-500 mt-0.5 font-bold">›</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Tech Stack Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        {exp.technologies.map((t, idx) => (
                          <React.Fragment key={t}>
                            {idx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>}
                            <span>{t}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-4">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Education</span>
              </div>

              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    {edu.honors && (
                      <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-2">
                        {edu.honors}
                      </p>
                    )}

                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                      {edu.highlights.map((h, idx) => (
                        <p key={idx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Badges */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-4">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Certifications & Credentials</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer} {cert.credentialId && `· ID: ${cert.credentialId}`}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Competencies Matrix */}
        <div id="skills" className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="mb-8">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Core & Engineering Competencies
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Deep expertise in modern Angular 21, reactive primitives, and distributed cloud systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {group.category}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
