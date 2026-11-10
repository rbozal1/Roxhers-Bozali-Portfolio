import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Copy, Check, FileText } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  experienceList: ExperienceItem[];
  onSaveExperience: (updated: ExperienceItem[]) => void;
  onResetToDefault: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  experienceList,
  onSaveExperience,
  onResetToDefault
}) => {
  const [items, setItems] = useState<ExperienceItem[]>(experienceList);
  const [rawText, setRawText] = useState('');
  const [activeTab, setActiveTab] = useState<'structured' | 'paste'>('structured');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setItems(experienceList);
  }, [experienceList]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUpdateField = (index: number, field: keyof ExperienceItem, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleSave = () => {
    onSaveExperience(items);
    onClose();
  };

  const handleApplyPastedText = () => {
    if (!rawText.trim()) return;
    // Update top role description with pasted text
    const updated = [...items];
    if (updated[0]) {
      updated[0] = {
        ...updated[0],
        description: rawText.slice(0, 300),
        achievements: [
          ...rawText.split('\n').filter(line => line.trim().length > 15).slice(0, 4)
        ]
      };
      setItems(updated);
      onSaveExperience(updated);
      setActiveTab('structured');
    }
  };

  const handleCopyResume = () => {
    const text = items.map(exp => `
ROLE: ${exp.role}
COMPANY: ${exp.company} (${exp.location})
PERIOD: ${exp.period}
DESCRIPTION: ${exp.description}
ACHIEVEMENTS:
${exp.achievements.map(a => `- ${a}`).join('\n')}
TECH: ${exp.technologies.join(', ')}
    `).join('\n---\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
              Resume Customizer & Blueprint
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Fine-tune work experience roles, deliverables, or paste your real resume details.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyResume}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Copy formatted resume text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
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

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex gap-2">
          <button
            onClick={() => setActiveTab('structured')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'structured'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Structured Experience Form
          </button>
          <button
            onClick={() => setActiveTab('paste')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'paste'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Paste Raw Resume Text
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'structured' ? (
            items.map((exp, idx) => (
              <div
                key={exp.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Role Title
                    </label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => handleUpdateField(idx, 'role', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Company & Location
                    </label>
                    <input
                      type="text"
                      value={`${exp.company} - ${exp.location}`}
                      onChange={(e) => {
                        const parts = e.target.value.split('-');
                        handleUpdateField(idx, 'company', parts[0]?.trim() || exp.company);
                        if (parts[1]) handleUpdateField(idx, 'location', parts[1].trim());
                      }}
                      className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Description & Overview
                  </label>
                  <textarea
                    rows={2}
                    value={exp.description}
                    onChange={(e) => handleUpdateField(idx, 'description', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Key Achievements (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={exp.achievements.join('\n')}
                    onChange={(e) =>
                      handleUpdateField(
                        idx,
                        'achievements',
                        e.target.value.split('\n').filter(Boolean)
                      )
                    }
                    className="w-full px-3 py-1.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Paste any text from your resume attachment below. We'll extract and format it into your portfolio timeline.
              </p>
              <textarea
                rows={10}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Paste your resume sections, work history bullets, or bio here..."
                className="w-full p-4 text-xs font-mono bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleApplyPastedText}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Apply Pasted Text to Portfolio
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/60">
          <button
            onClick={onResetToDefault}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Verified Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
