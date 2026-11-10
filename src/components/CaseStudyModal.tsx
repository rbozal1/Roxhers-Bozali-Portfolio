import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Code, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.categoryLabel}
            </span>
            <h2 id="case-study-title" className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Open Live Deployment"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Hero Media Frame */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <p className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Overview & Architectural Problem Space */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Executive Architectural Context
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/30 dark:bg-rose-950/20">
                <h4 className="text-xs font-bold text-rose-800 dark:text-rose-400 mb-1">
                  Core Engineering Challenge
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/30 dark:bg-emerald-950/20">
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-1">
                  Architectural Solution & Impact
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Angular 21 Architecture Pillar */}
          <div className="p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20">
            <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
              <Cpu className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Angular 21 Architecture Philosophy
              </h4>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.angularArchitecture}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Production Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {project.caseStudy.codeSnippet && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-4 h-4 text-blue-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {project.caseStudy.codeSnippet.title}
                </h3>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed">
                <code>{project.caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack Metadata */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-2">
              Technologies & Standards
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              {project.technologies.map((t, idx) => (
                <React.Fragment key={t}>
                  {idx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>}
                  <span>{t}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[11px] font-mono">ESC</kbd> to exit
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Live Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
