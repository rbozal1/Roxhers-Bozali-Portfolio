import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          Roger (Roxhers) Bozali
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
            Work Experience
          </a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
            Skills & Education
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Theme toggle + primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};
