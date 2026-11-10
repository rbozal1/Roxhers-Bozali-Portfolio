import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, FileCode, CheckCircle2 } from 'lucide-react';
import { ANGULAR_21_STARTER_FILES } from '../data/portfolioData';

interface ExportAngularModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportAngularModal: React.FC<ExportAngularModalProps> = ({ isOpen, onClose }) => {
  const fileKeys = Object.keys(ANGULAR_21_STARTER_FILES) as Array<keyof typeof ANGULAR_21_STARTER_FILES>;
  const [activeFile, setActiveFile] = useState<keyof typeof ANGULAR_21_STARTER_FILES>(fileKeys[0]);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentCode = ANGULAR_21_STARTER_FILES[activeFile];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadAll = () => {
    const combined = Object.entries(ANGULAR_21_STARTER_FILES)
      .map(([filename, content]) => `// ==========================================\n// FILE: ${filename}\n// ==========================================\n\n${content}`)
      .join('\n\n\n');

    const blob = new Blob([combined], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'roxhers-angular21-portfolio-source.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Angular 21 Standalone Architecture
            </span>
            <h3 id="export-modal-title" className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              Angular 21 Project Files & Source Blueprint
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              {downloaded ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Downloaded' : 'Download All Files'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* File Navigator Tabs */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto">
          {fileKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFile(key)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md whitespace-nowrap transition-colors ${
                activeFile === key
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{key}</span>
            </button>
          ))}
        </div>

        {/* Code Content View */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-mono">
            <span>{activeFile}</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy File'}</span>
            </button>
          </div>

          <pre className="text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <code>{currentCode}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/60">
          <span>Angular 21 · Zoneless Signals · Standalone Components · Tailwind CSS v4</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
