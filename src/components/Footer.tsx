import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            Roxhers Bozali
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Senior Full-Stack & Angular 21 Systems Architect
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          <a
            href="https://github.com/RoxhersBozali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:RoxhersBozali@gmail.com"
            className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>RoxhersBozali@gmail.com</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
