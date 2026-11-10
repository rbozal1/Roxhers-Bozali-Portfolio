import React from 'react';
import { ArrowDown, Code2, Phone, Mail, MapPin, ShieldCheck, Briefcase } from 'lucide-react';
import { PROFILE_PHOTO, APPLICANT_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenExportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenExportModal }) => {
  return (
    <section className="pt-10 pb-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Full-Stack Software Engineer · Federal Contractor</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance mb-5">
                {APPLICANT_INFO.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-4">
                Full-Stack Software Engineer with 5+ years of experience engineering secure federal mission systems, scalable .NET Core APIs, and Angular 21 architectures.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl">
                Currently supporting the Executive Office of the President (EOP) via Softtek. Experienced in clean architecture, C#, ASP.NET, PostgreSQL, SQL Server, Entity Framework Core, Vue.js, and modern automated testing with Playwright.
              </p>
            </div>

            <div>
              {/* Unboxed Metadata with Typographic Separators & Direct Contact Affordances */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 dark:text-slate-400 mb-7">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  {APPLICANT_INFO.location}
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={`tel:${APPLICANT_INFO.phone}`}
                  className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-500" />
                  <span>{APPLICANT_INFO.phone}</span>
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={`mailto:${APPLICANT_INFO.email}`}
                  className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <span>{APPLICANT_INFO.email}</span>
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span>5+ Years Experience</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-sm inline-flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Work Experience & Resume</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700/60"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Get in Touch</span>
                </a>

                <button
                  onClick={onOpenExportModal}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap inline-flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Angular 21 Redesign Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Roger's Executive Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle architectural frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl">
                <img
                  src={PROFILE_PHOTO}
                  alt="Roger (Roxhers) Bozali - Full-Stack Software Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Photo Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm tracking-tight">Roger Bozali</p>
                    <p className="text-[11px] text-white/80">Softtek / EOP Federal Contractor</p>
                  </div>
                  <span className="font-mono text-[11px] text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metrics Row Below the Split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-12 border-t border-slate-200/80 dark:border-slate-800/80">
          <div>
            <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white tabular-nums">
              5+ Years
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Full-stack software engineering
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-blue-600 dark:text-blue-400 tabular-nums">
              Federal / EOP
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Mission-critical web application systems
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white tabular-nums">
              Angular & .NET
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Enterprise REST APIs & reactive UI
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-600 dark:text-emerald-400 tabular-nums">
              PostgreSQL & SQL
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Schema optimization & EF Core migrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
