import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ApplicantHeroData {
  name: string;
  title: string;
  yearsExperience: string;
  location: string;
  phone: string;
  email: string;
  profilePhotoPath: string;
  headlineSummary: string;
  currentRole: string;
  coreBadges: string[];
}

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="relative w-full py-12 px-6 sm:px-8 bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300">
      <!-- Subtle Ambient Radial Glow -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div class="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        <!-- Profile Photo / Avatar Column -->
        <div class="relative flex-shrink-0 group">
          <div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              [src]="photoUrl()"
              [alt]="photoAltText()"
              loading="eager"
              class="w-full h-full object-cover object-top rounded-[14px] sm:rounded-[22px] bg-slate-950"
            />
          </div>

          <!-- Active Federal Contractor / Engineer Badge -->
          <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-950/90 border border-slate-700/80 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span class="text-[11px] font-mono font-medium text-slate-200">Federal Contractor (EOP)</span>
          </div>
        </div>

        <!-- Details & Content Column -->
        <div class="flex-1 text-center md:text-left space-y-4">
          <!-- Top Metadata Kicker with Interactive Status Signal -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-800/60 px-2.5 py-0.5 rounded-md">
              {{ applicant().yearsExperience }} Experience
            </span>
            <span class="text-xs text-slate-400">·</span>
            <span class="text-xs text-slate-300 font-medium">
              {{ applicant().currentRole }}
            </span>
          </div>

          <!-- Applicant Name & Title -->
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {{ applicant().name }}
            </h1>
            <p class="text-lg sm:text-xl font-semibold text-blue-300/90 mt-1">
              {{ applicant().title }}
            </p>
          </div>

          <!-- Summary Prose -->
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {{ applicant().headlineSummary }}
          </p>

          <!-- Core Tech Badges -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-1">
            @for (badge of applicant().coreBadges; track badge) {
              <span class="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/70 rounded-lg">
                {{ badge }}
              </span>
            }
          </div>

          <!-- Contact Details Strip & Interactive Copy Action Signals -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-y-3 gap-x-6 text-xs text-slate-300">
            <!-- Location -->
            <div class="flex items-center gap-1.5 text-slate-300">
              <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ applicant().location }}</span>
            </div>

            <!-- Phone Link + Copy Button -->
            <div class="flex items-center gap-1.5">
              <a
                [href]="'tel:' + applicant().phone"
                class="hover:text-blue-400 transition-colors flex items-center gap-1 font-mono font-medium"
                title="Call phone number"
              >
                <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ applicant().phone }}</span>
              </a>

              <button
                type="button"
                (click)="copyToClipboard(applicant().phone, 'phone')"
                aria-label="Copy phone number to clipboard"
                class="p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded transition-colors"
              >
                @if (phoneCopied()) {
                  <span class="text-[10px] font-mono text-emerald-400">Copied!</span>
                } @else {
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              </button>
            </div>

            <!-- Email Link + Copy Button -->
            <div class="flex items-center gap-1.5">
              <a
                [href]="'mailto:' + applicant().email"
                class="hover:text-blue-400 transition-colors flex items-center gap-1 font-mono font-medium"
                title="Send email message"
              >
                <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ applicant().email }}</span>
              </a>

              <button
                type="button"
                (click)="copyToClipboard(applicant().email, 'email')"
                aria-label="Copy email address to clipboard"
                class="p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded transition-colors"
              >
                @if (emailCopied()) {
                  <span class="text-[10px] font-mono text-emerald-400">Copied!</span>
                } @else {
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeroHeaderComponent {
  // Primary applicant signal state
  applicant = signal<ApplicantHeroData>({
    name: 'Roger (Roxhers Bozali)',
    title: 'Full-Stack Software Engineer',
    yearsExperience: '5+ Years',
    location: 'Baltimore, MD',
    phone: '443-379-7405',
    email: 'roxhersbozali@gmail.com',
    profilePhotoPath: 'assets/images/RogerProfessionalPic.jpg',
    currentRole: 'Federal Contractor @ Softtek (supporting EOP)',
    headlineSummary:
      'Engineering secure enterprise web applications supporting federal mission systems. Specialized in Angular & TypeScript frontend solutions, high-performance .NET Core RESTful APIs, PostgreSQL/SQL Server database architecture, and end-to-end automation with Playwright.',
    coreBadges: [
      'Angular 21',
      '.NET Core / C#',
      'PostgreSQL',
      'SQL Server',
      'Entity Framework Core',
      'Vue.js',
      'Playwright',
      'RBAC Security'
    ]
  });

  // Photo URL & Accessibility Alt text computed signals
  photoUrl = computed(() => this.applicant().profilePhotoPath);
  photoAltText = computed(() => `Executive headshot portrait of ${this.applicant().name}`);

  // Interactive UI Signals for micro-interaction states (clipboard feedback)
  phoneCopied = signal<boolean>(false);
  emailCopied = signal<boolean>(false);

  /**
   * Copies contact information to clipboard with reactive Signal UI feedback
   */
  copyToClipboard(text: string, type: 'phone' | 'email'): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        if (type === 'phone') {
          this.phoneCopied.set(true);
          setTimeout(() => this.phoneCopied.set(false), 2000);
        } else {
          this.emailCopied.set(true);
          setTimeout(() => this.emailCopied.set(false), 2000);
        }
      });
    }
  }
}
