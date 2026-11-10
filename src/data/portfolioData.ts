import { Project, ExperienceItem, EducationItem, CertificationItem, SkillGroup } from '../types/portfolio';

export const PROFILE_PHOTO = '/src/assets/images/RogerProfessionalPic.jpg';
export const HERO_WORKSPACE = '/src/assets/images/hero_dev_workspace_1794280805266.jpg';

export const APPLICANT_INFO = {
  name: 'Roger (Roxhers) Bozali',
  preferredName: 'Roger Bozali',
  title: 'Full-Stack Software Engineer',
  yearsExperience: '5+ Years',
  location: 'Baltimore, MD',
  phone: '443-379-7405',
  email: 'roxhersbozali@gmail.com',
  summary: 'Full-Stack Software Engineer with 5+ years of experience engineering secure federal mission systems, scalable Angular & .NET Core architectures, high-performance PostgreSQL/SQL Server data layers, and reactive enterprise web applications.'
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'softtek-eop',
    role: 'Software Engineer / Federal Contractor',
    company: 'Softtek (Contract supporting EOP)',
    location: 'Reston, VA / Hybrid',
    period: 'Oct 2025 — Present',
    isCurrent: true,
    description: 'Lead architecture, design, and implementation of secure enterprise web applications supporting federal mission systems.',
    achievements: [
      'Lead architecture, design, and implementation of secure enterprise web applications supporting federal mission systems.',
      'Build scalable Angular and TypeScript frontend solutions with reusable components, shared modules, RBAC, and performance optimization.',
      'Develop RESTful APIs with .NET Core using clean architecture, dependency injection, and secure authentication patterns.',
      'Optimize PostgreSQL and Entity Framework Core solutions through schema design, migrations, query tuning, and performance improvements.'
    ],
    technologies: ['Angular', 'TypeScript', '.NET Core', 'C#', 'PostgreSQL', 'Entity Framework Core', 'RBAC', 'REST APIs', 'Docker']
  },
  {
    id: 'eurofins',
    role: 'Software Engineer',
    company: 'Eurofins E&E North America',
    location: 'Baltimore, MD',
    period: 'Jul 2024 — Oct 2025',
    isCurrent: false,
    description: 'Maintained and enhanced internal .NET Framework business applications and mission-critical laboratory workflows.',
    achievements: [
      'Maintained and enhanced internal .NET Framework business applications using C#, ASP.NET MVC, Razor views, SQL Server, and REST integrations.',
      'Developed server-rendered forms, validation, and data-driven workflows for internal CRM and laboratory operations.',
      'Streamlined SQL Server queries and stored procedures, accelerating data turnaround for engineering lab teams.'
    ],
    technologies: ['C#', 'ASP.NET MVC', '.NET Framework', 'Razor Views', 'SQL Server', 'REST APIs', 'JavaScript', 'HTML/CSS']
  },
  {
    id: 'bookmeinscotty',
    role: 'Frontend Developer (Part-Time, Remote)',
    company: 'BookMeInScotty, LTD',
    location: 'Greece (Remote)',
    period: 'Mar 2022 — Jul 2024',
    isCurrent: false,
    description: 'Engineered cross-platform single-page and progressive web applications for high-retention consumer booking flows.',
    achievements: [
      'Built SPA/PWA features with Vue.js, Vuex, and Vue Router with responsive mobile-first interfaces.',
      'Created reusable component libraries ensuring visual consistency and accessibility.',
      'Implemented automated Playwright end-to-end testing suites to safeguard critical checkout and scheduling pipelines.'
    ],
    technologies: ['Vue.js', 'Vuex', 'Vue Router', 'TypeScript', 'JavaScript', 'Playwright', 'PWA', 'Tailwind CSS']
  },
  {
    id: 'g2-global',
    role: 'Junior Software Engineer',
    company: 'G2 Global Solutions',
    location: 'Gainesville, VA',
    period: 'Sep 2020 — Mar 2023',
    isCurrent: false,
    description: 'Engineered business workflow automation and enterprise case management solutions.',
    achievements: [
      'Developed Java and BeanShell solutions on the Entellitrak enterprise case management platform.',
      'Updated and tuned complex Oracle SQL queries, data views, and reporting functions.',
      'Collaborated closely with cross-functional defense and federal analysts to fulfill security specifications.'
    ],
    technologies: ['Java', 'BeanShell', 'Entellitrak', 'Oracle SQL', 'JavaScript', 'HTML/CSS', 'Git']
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'towson-bs',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Towson University',
    location: 'Towson, MD',
    period: 'Graduated Dec 2018',
    highlights: [
      'Comprehensive study of systems architecture, enterprise database systems, software engineering principles, and secure computer networking.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'jhu-mern',
    title: 'Full Stack MERN Web Development Certificate',
    issuer: 'Johns Hopkins University Whiting School of Engineering (WSE)',
    year: 'Feb 2021',
    credentialId: 'JHU-WSE-FSW-2021'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Engineering',
    description: 'Modern reactive component systems & progressive architectures',
    skills: [
      'Angular (Angular 21 Redesign)',
      'TypeScript & JavaScript (ESNext)',
      'Vue.js, Vuex & Vue Router',
      'HTML5, CSS3 & Tailwind CSS',
      'Razor Views & Velocity',
      'Signals & Reactive State',
      'Reusable Component Libraries',
      'PWA & SPA Performance'
    ]
  },
  {
    category: 'Backend & Languages',
    description: 'Enterprise REST APIs, clean architecture & microservices',
    skills: [
      'C# & .NET Core',
      'ASP.NET & .NET Framework',
      'Entity Framework Core',
      'REST APIs & Microservices',
      'Java & BeanShell',
      'Dependency Injection',
      'Clean Architecture Patterns',
      'OAuth2 & JWT Security'
    ]
  },
  {
    category: 'Databases & Cloud Infrastructure',
    description: 'Relational data modeling, schema migration & deployment',
    skills: [
      'PostgreSQL (Schema & Tuning)',
      'SQL Server & Stored Procedures',
      'Oracle SQL & Data Views',
      'Azure Cloud Services',
      'Docker & Containerization',
      'IIS Web Server Configuration'
    ]
  },
  {
    category: 'Tools, Testing & DevOps',
    description: 'Automated testing, modern toolchains & quality automation',
    skills: [
      'Playwright End-to-End Testing',
      'Swagger UI & Postman',
      'CI/CD Pipelines & GitHub Actions',
      'GitHub Codespaces & GitHub Copilot',
      'Git Version Control & PR Review',
      'Role-Based Access Control (RBAC)'
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'federal-mission-portal',
    title: 'Federal Mission Portal & RBAC Platform',
    tagline: 'Enterprise mission management system supporting federal operations',
    category: 'angular',
    categoryLabel: 'Angular 21 & .NET Core',
    image: '/src/assets/images/project_cloud_engine_1794280806967.jpg',
    fallbackGradient: 'from-blue-950/40 to-slate-900',
    summary: 'A secure, scalable enterprise web application supporting federal mission operations. Features an Angular 21 standalone frontend with strict Role-Based Access Control (RBAC), decoupled reusable component modules, and high-performance .NET Core RESTful APIs.',
    technologies: ['Angular 21', 'TypeScript', '.NET Core', 'C#', 'PostgreSQL', 'Entity Framework Core', 'RBAC', 'Docker'],
    metrics: [
      { label: 'Security Standard', value: 'Federal / EOP' },
      { label: 'Architecture', value: 'Clean .NET Core' },
      { label: 'Data Layer', value: 'PostgreSQL + EF' },
    ],
    demoUrl: 'https://github.com/RoxhersBozali',
    githubUrl: 'https://github.com/RoxhersBozali',
    caseStudy: {
      overview: 'Supporting federal mission systems at Softtek/EOP, this system provides role-based portal access, audit logging, and data workflows with strict compliance standards. The Angular frontend communicates with a clean-architecture .NET Core API layer and optimized PostgreSQL databases.',
      challenge: 'Ensuring strict zero-trust security and granular role-based permissions (RBAC) across diverse user personas without sacrificing UI responsiveness or introducing data-access bottlenecks.',
      solution: 'Constructed an Angular 21 standalone component architecture with functional authentication guards, combined with a .NET Core backend utilizing Dependency Injection, Entity Framework Core query tuning, and schema migrations.',
      angularArchitecture: 'Angular 21 standalone components, functional route guards, and typed Reactive Forms provide strict compile-time safety and eliminate runtime authorization leaks.',
      keyFeatures: [
        'Fine-grained Role-Based Access Control (RBAC) enforced on client routes and API controllers',
        'Clean Architecture .NET Core backend with Entity Framework Core migrations',
        'Reusable Angular component library for mission data grids, filters, and modals',
        'Optimized PostgreSQL queries with indexed schema execution'
      ]
    }
  },
  {
    id: 'lab-ops-workflow',
    title: 'Laboratory Operations & CRM Suite',
    tagline: 'High-throughput enterprise testing & CRM workflows',
    category: 'fullstack',
    categoryLabel: 'Full-Stack .NET & SQL Server',
    image: '/src/assets/images/project_analytics_platform_1794280806619.jpg',
    fallbackGradient: 'from-amber-950/40 to-slate-900',
    summary: 'Core laboratory operations management platform for Eurofins E&E North America. Facilitated mission-critical testing schedules, client certification tracking, and automated validation for engineering teams.',
    technologies: ['C#', 'ASP.NET MVC', '.NET Framework', 'Razor Views', 'SQL Server', 'REST APIs', 'JavaScript'],
    metrics: [
      { label: 'Lab Operations', value: 'Daily 24/7' },
      { label: 'Database', value: 'SQL Server' },
      { label: 'Validation', value: 'Server & Client' },
    ],
    demoUrl: 'https://github.com/RoxhersBozali',
    githubUrl: 'https://github.com/RoxhersBozali',
    caseStudy: {
      overview: 'Maintained and enhanced core enterprise operations at Eurofins E&E North America. Implemented server-rendered forms, validation rules, and automated reporting workflows for electrical and environmental testing operations.',
      challenge: 'Modernizing complex legacy CRM workflows and handling thousands of daily test result records without interrupting lab technician operations.',
      solution: 'Refactored ASP.NET MVC controllers and Razor views, optimized SQL Server queries and stored procedures, and created structured REST integrations for lab telemetry.',
      angularArchitecture: 'Modernized into Angular 21 with typed reactive forms, client-side validation pipelines, and instant search feedback.',
      keyFeatures: [
        'High-reliability CRM and lab certification workflow tracking',
        'Optimized SQL Server stored procedures and transactional integrity',
        'Automated report generation and client communication pipelines',
        'Intuitive data-entry forms with dual server/client validation'
      ]
    }
  },
  {
    id: 'booking-spa-pwa',
    title: 'High-Retention Booking SPA / PWA',
    tagline: 'Consumer scheduling, appointment management & Playwright automation',
    category: 'devtools',
    categoryLabel: 'SPA / PWA & Playwright',
    image: '/src/assets/images/project_developer_toolkit_1794280807036.jpg',
    fallbackGradient: 'from-emerald-950/40 to-slate-900',
    summary: 'Progressive web application developed for BookMeInScotty LTD, offering fast mobile appointment booking, offline capabilities, and comprehensive Playwright end-to-end automated testing.',
    technologies: ['Vue.js', 'Vuex', 'TypeScript', 'Playwright', 'PWA', 'Tailwind CSS', 'REST APIs'],
    metrics: [
      { label: 'E2E Testing', value: 'Playwright' },
      { label: 'Architecture', value: 'SPA / PWA' },
      { label: 'Platform', value: 'Mobile First' },
    ],
    demoUrl: 'https://github.com/RoxhersBozali',
    githubUrl: 'https://github.com/RoxhersBozali',
    caseStudy: {
      overview: 'Built for BookMeInScotty LTD as a responsive booking application. Architected reusable component design systems and implemented Playwright testing to ensure zero regression in customer conversion funnels.',
      challenge: 'Ensuring seamless offline support and fast client-side navigation on mobile devices with diverse network conditions.',
      solution: 'Developed modular component systems with state persistence and authored end-to-end Playwright tests covering the entire scheduling and payment checkout lifecycle.',
      angularArchitecture: 'Re-architected for Angular 21 using modern Signals, native @defer blocks, and zoneless change detection.',
      keyFeatures: [
        'Automated Playwright test suites covering full end-to-end appointment workflows',
        'Mobile-first responsive UX with offline caching capabilities',
        'Reusable component library with accessibility standards',
        'Predictable client state management and streamlined checkout'
      ]
    }
  }
];

export const ANGULAR_21_STARTER_FILES = {
  'package.json': `{
  "name": "roger-bozali-portfolio-angular21",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development"
  },
  "dependencies": {
    "@angular/animations": "^21.0.0",
    "@angular/common": "^21.0.0",
    "@angular/compiler": "^21.0.0",
    "@angular/core": "^21.0.0",
    "@angular/forms": "^21.0.0",
    "@angular/platform-browser": "^21.0.0",
    "@angular/platform-browser-dynamic": "^21.0.0",
    "@angular/router": "^21.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.6.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^21.0.0",
    "@angular/cli": "^21.0.0",
    "@angular/compiler-cli": "^21.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "~5.5.0"
  }
}`,
  'angular.json': `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "roger-bozali-portfolio": {
      "projectType": "application",
      "schematics": {
        "@angular/cli": {
          "analytics": false
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/roger-bozali-portfolio",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "roger-bozali-portfolio:build:production"
            },
            "development": {
              "buildTarget": "roger-bozali-portfolio:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
      }
    }
  }
}`,
  'src/main.ts': `import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));`,
  'src/app/app.config.ts': `import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular 21 Zoneless Change Detection via Signals
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch())
  ]
};`,
  'src/app/app.component.ts': `import { Component, inject } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent],
  template: \`
    <div class="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
      <!-- Top Navigation -->
      <header class="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 h-16 flex items-center justify-between">
        <span class="text-lg font-bold tracking-tight text-white">Roger (Roxhers) Bozali</span>
        <nav class="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#experience" class="hover:text-white transition-colors">Experience</a>
          <a href="#skills" class="hover:text-white transition-colors">Skills</a>
          <a href="#projects" class="hover:text-white transition-colors">Projects</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" class="px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors">
          Get in Touch
        </a>
      </header>

      <!-- Main Showcase Container -->
      <main class="max-w-6xl mx-auto px-6 py-16 space-y-24">
        <!-- Hero Section -->
        <section id="about" class="py-12 border-b border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-8">
            <p class="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Full-Stack Software Engineer (5+ Years Experience)
            </p>
            <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering secure federal systems, scalable .NET Core APIs, and Angular 21 architectures.
            </h1>
            <p class="text-base text-slate-300 leading-relaxed mb-6">
              Based in Baltimore, MD. Specializing in enterprise web applications supporting federal mission systems, high-performance PostgreSQL and SQL Server data layers, and reactive frontend experiences.
            </p>
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span>Baltimore, MD</span>
              <span aria-hidden="true">·</span>
              <span>443-379-7405</span>
              <span aria-hidden="true">·</span>
              <span class="text-blue-400">roxhersbozali@gmail.com</span>
            </div>
          </div>
          <div class="md:col-span-4 flex justify-center md:justify-end">
            <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-900">
              <img
                src="assets/images/RogerProfessionalPic.jpg"
                alt="Roger Bozali - Professional Executive Headshot"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <!-- Experience Timeline -->
        <section id="experience" class="space-y-8">
          <h2 class="text-2xl font-bold text-white">Work Experience</h2>
          <div class="space-y-6">
            @for (exp of portfolio.experience(); track exp.id) {
              <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 class="text-lg font-bold text-white">{{ exp.role }}</h3>
                    <p class="text-xs text-blue-400">{{ exp.company }} · {{ exp.location }}</p>
                  </div>
                  <span class="text-xs font-mono text-slate-400">{{ exp.period }}</span>
                </div>
                <ul class="space-y-1.5 text-xs text-slate-300">
                  @for (ach of exp.achievements; track ach) {
                    <li class="flex items-start gap-2">
                      <span class="text-blue-400">›</span>
                      <span>{{ ach }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </section>

        <!-- Deferred Contact Component -->
        @defer (on viewport) {
          <app-contact />
        } @placeholder {
          <div class="h-64 rounded-2xl bg-slate-900/40 animate-pulse"></div>
        }
      </main>

      <footer class="border-t border-slate-800 py-12 text-center text-xs text-slate-500">
        © 2026 Roger (Roxhers) Bozali · Baltimore, MD · Built with Angular 21
      </footer>
    </div>
  \`
})
export class AppComponent {
  portfolio = inject(PortfolioService);
}`,
  'src/app/services/portfolio.service.ts': `import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  applicant = signal({
    name: 'Roger (Roxhers) Bozali',
    title: 'Full-Stack Software Engineer (5+ years experience)',
    location: 'Baltimore, MD',
    phone: '443-379-7405',
    email: 'roxhersbozali@gmail.com'
  });

  experience = signal([
    {
      id: 'softtek-eop',
      role: 'Software Engineer / Federal Contractor',
      company: 'Softtek (Contract supporting EOP)',
      location: 'Reston, VA / Hybrid',
      period: 'Oct 2025 — Present',
      achievements: [
        'Lead architecture, design, and implementation of secure enterprise web applications supporting federal mission systems.',
        'Build scalable Angular and TypeScript frontend solutions with reusable components, shared modules, RBAC, and performance optimization.',
        'Develop RESTful APIs with .NET Core using clean architecture, dependency injection, and secure authentication patterns.',
        'Optimize PostgreSQL and Entity Framework Core solutions through schema design, migrations, query tuning, and performance improvements.'
      ]
    },
    {
      id: 'eurofins',
      role: 'Software Engineer',
      company: 'Eurofins E&E North America',
      location: 'Baltimore, MD',
      period: 'Jul 2024 — Oct 2025',
      achievements: [
        'Maintained and enhanced internal .NET Framework business applications using C#, ASP.NET MVC, Razor views, SQL Server, and REST integrations.',
        'Developed server-rendered forms, validation, and data-driven workflows for internal CRM and laboratory operations.'
      ]
    },
    {
      id: 'bookmeinscotty',
      role: 'Frontend Developer (Part-Time, Remote)',
      company: 'BookMeInScotty, LTD',
      location: 'Greece (Remote)',
      period: 'Mar 2022 — Jul 2024',
      achievements: [
        'Built SPA/PWA features with Vue.js, Vuex, and Vue Router; created reusable component libraries and implemented Playwright testing.'
      ]
    },
    {
      id: 'g2-global',
      role: 'Junior Software Engineer',
      company: 'G2 Global Solutions',
      location: 'Gainesville, VA',
      period: 'Sep 2020 — Mar 2023',
      achievements: [
        'Developed Java and BeanShell solutions on the Entellitrak platform and updated Oracle SQL queries.'
      ]
    }
  ]);
}`,
  'src/app/components/hero-header.component.ts': `import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <header class="relative w-full py-12 px-6 sm:px-8 bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden">
      <div class="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        <!-- Profile Photo / Avatar Column -->
        <div class="relative flex-shrink-0 group">
          <div class="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 shadow-xl">
            <img
              [src]="photoUrl()"
              [alt]="photoAltText()"
              loading="eager"
              class="w-full h-full object-cover object-top rounded-[22px] bg-slate-950"
            />
          </div>
          <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-950/90 border border-slate-700/80 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-[11px] font-mono text-slate-200">Federal Contractor (EOP)</span>
          </div>
        </div>

        <!-- Details Column -->
        <div class="flex-1 text-center md:text-left space-y-4">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-800/60 px-2.5 py-0.5 rounded-md">
              {{ applicant().yearsExperience }} Experience
            </span>
            <span class="text-xs text-slate-400">·</span>
            <span class="text-xs text-slate-300 font-medium">{{ applicant().currentRole }}</span>
          </div>

          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {{ applicant().name }}
            </h1>
            <p class="text-lg sm:text-xl font-semibold text-blue-300/90 mt-1">
              {{ applicant().title }}
            </p>
          </div>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {{ applicant().headlineSummary }}
          </p>

          <!-- Contact Details Strip with Copy Signals -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-y-3 gap-x-6 text-xs text-slate-300">
            <span>{{ applicant().location }}</span>
            <a [href]="'tel:' + applicant().phone" class="hover:text-blue-400 transition-colors font-mono font-medium">
              {{ applicant().phone }}
            </a>
            <a [href]="'mailto:' + applicant().email" class="hover:text-blue-400 transition-colors font-mono font-medium">
              {{ applicant().email }}
            </a>
          </div>
        </div>
      </div>
    </header>
  \`
})
export class HeroHeaderComponent {
  applicant = signal({
    name: 'Roger (Roxhers Bozali)',
    title: 'Full-Stack Software Engineer',
    yearsExperience: '5+ Years',
    location: 'Baltimore, MD',
    phone: '443-379-7405',
    email: 'roxhersbozali@gmail.com',
    profilePhotoPath: 'assets/images/RogerProfessionalPic.jpg',
    currentRole: 'Federal Contractor @ Softtek (supporting EOP)',
    headlineSummary: 'Engineering secure enterprise web applications supporting federal mission systems. Specialized in Angular & TypeScript, .NET Core RESTful APIs, PostgreSQL/SQL Server, and Playwright.'
  });

  photoUrl = computed(() => this.applicant().profilePhotoPath);
  photoAltText = computed(() => 'Executive headshot portrait of ' + this.applicant().name);
}`,
  'src/app/components/contact.component.ts': `import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <section id="contact" class="max-w-xl mx-auto py-16">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-white">Get in Touch</h2>
        <p class="text-sm text-slate-400 mt-2">
          Contact Roger Bozali · Baltimore, MD · 443-379-7405 · roxhersbozali@gmail.com
        </p>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Your Full Name</label>
          <input
            formControlName="name"
            placeholder="e.g. Sarah Jenkins"
            class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
          <input
            type="email"
            formControlName="email"
            placeholder="sarah@agency.gov"
            class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Message / Project Inquiries</label>
          <textarea
            formControlName="message"
            rows="4"
            placeholder="Discuss federal engineering roles, full-stack .NET / Angular 21 architecture, or technical projects..."
            class="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          ></textarea>
        </div>

        <button
          type="submit"
          [disabled]="form.invalid || isSubmitting()"
          class="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
        >
          {{ isSubmitting() ? 'Transmitting...' : 'Send Message' }}
        </button>

        @if (sent()) {
          <div class="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs rounded-lg text-center">
            Thank you! Your inquiry has been dispatched to roxhersbozali@gmail.com.
          </div>
        }
      </form>
    </section>
  \`
})
export class ContactComponent {
  private fb = inject(NonNullableFormBuilder);
  private http = inject(HttpClient);

  isSubmitting = signal(false);
  sent = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 700);
  }
}`
};
