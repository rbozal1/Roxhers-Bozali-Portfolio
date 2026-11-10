import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { ExportAngularModal } from './components/ExportAngularModal';
import { Footer } from './components/Footer';
import {
  WORK_EXPERIENCE,
  EDUCATION_HISTORY,
  CERTIFICATIONS,
  SKILL_GROUPS
} from './data/portfolioData';
import { Project, ExperienceItem } from './types/portfolio';

export default function App() {
  // Theme state with dark mode as default
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Experience state with localStorage persistence
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('roxhers_experience');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return WORK_EXPERIENCE;
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Sync theme with DOM
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSaveExperience = (updated: ExperienceItem[]) => {
    setExperienceList(updated);
    localStorage.setItem('roxhers_experience', JSON.stringify(updated));
  };

  const handleResetExperience = () => {
    setExperienceList(WORK_EXPERIENCE);
    localStorage.removeItem('roxhers_experience');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        
        <ExperienceSection
          experienceList={experienceList}
          educationList={EDUCATION_HISTORY}
          certifications={CERTIFICATIONS}
          skillGroups={SKILL_GROUPS}
          onOpenResumeEditor={() => setIsResumeModalOpen(true)}
        />

        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Deep-Dive Case Study Lightbox */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* In-App Resume Customizer & Importer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        experienceList={experienceList}
        onSaveExperience={handleSaveExperience}
        onResetToDefault={handleResetExperience}
      />

      {/* Angular 21 Architecture & Source Code Hub Modal */}
      <ExportAngularModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
