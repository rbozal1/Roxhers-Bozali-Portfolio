# Roger (Roxhers) Bozali — Personal Developer Portfolio & Resume

A production-grade developer portfolio and career showcase for **Roger (Roxhers) Bozali**, Full-Stack Software Engineer with 5+ years of experience engineering secure federal mission systems, scalable .NET Core APIs, and modern Angular 21 architectures.

---

## Executive Profile

- **Name**: Roger (Roxhers) Bozali
- **Title**: Full-Stack Software Engineer (5+ Years Experience)
- **Location**: Baltimore, MD
- **Phone**: [443-379-7405](tel:443-379-7405)
- **Email**: [roxhersbozali@gmail.com](mailto:roxhersbozali@gmail.com)
- **GitHub**: [github.com/RoxhersBozali](https://github.com/RoxhersBozali)
- **Current Position**: Software Engineer / Federal Contractor at **Softtek** (Contract supporting the Executive Office of the President — EOP)
- **Executive Headshot Asset**: `assets/images/RogerProfessionalPic.jpg`

---

## Technical Skills Matrix

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Backend & Languages** | C#, .NET Core, ASP.NET, .NET Framework, Java, BeanShell, REST APIs, Entity Framework Core, Clean Architecture, Dependency Injection |
| **Frontend Engineering** | Angular (Angular 21 Standalone), TypeScript 5.5+, JavaScript (ESNext), Vue.js, Vuex, Vue Router, HTML5/CSS3, Tailwind CSS v4, Razor Views, Velocity |
| **Databases & Cloud** | PostgreSQL (Schema Design & Query Tuning), SQL Server (Stored Procedures), Oracle SQL, Azure, Docker, IIS, OAuth2, JWT |
| **Testing & Tooling** | Playwright (E2E Automated Testing), Swagger UI, Postman, Git, CI/CD (GitHub Actions), GitHub Codespaces, GitHub Copilot |
| **Security & Standards** | Role-Based Access Control (RBAC), Federal Compliance Standards, WCAG AA Accessibility, Performance Auditing |

---

## Professional Work Experience

### 1. Software Engineer / Federal Contractor — Softtek (Contract supporting EOP)
**Location**: Reston, VA / Hybrid  
**Period**: Oct 2025 — Present  
- Lead architecture, design, and implementation of secure enterprise web applications supporting federal mission systems.
- Build scalable Angular and TypeScript frontend solutions with reusable components, shared modules, RBAC, and performance optimization.
- Develop RESTful APIs with .NET Core using clean architecture, dependency injection, and secure authentication patterns.
- Optimize PostgreSQL and Entity Framework Core solutions through schema design, migrations, query tuning, and performance improvements.
- **Tech Stack**: Angular 21, TypeScript, .NET Core, C#, PostgreSQL, Entity Framework Core, RBAC, REST APIs, Docker.

### 2. Software Engineer — Eurofins E&E North America
**Location**: Baltimore, MD  
**Period**: Jul 2024 — Oct 2025  
- Maintained and enhanced internal .NET Framework business applications using C#, ASP.NET MVC, Razor views, SQL Server, and REST integrations.
- Developed server-rendered forms, validation, and data-driven workflows for internal CRM and laboratory operations.
- Optimized database queries, reducing data retrieval latencies for electrical and environmental engineering testing teams.
- **Tech Stack**: C#, ASP.NET MVC, .NET Framework, Razor Views, SQL Server, REST APIs, JavaScript, HTML/CSS.

### 3. Frontend Developer (Part-Time, Remote) — BookMeInScotty, LTD
**Location**: Greece (Remote)  
**Period**: Mar 2022 — Jul 2024  
- Built SPA/PWA features with Vue.js, Vuex, and Vue Router with responsive mobile-first interfaces.
- Created reusable component libraries ensuring visual consistency and accessibility across consumer scheduling funnels.
- Implemented automated Playwright end-to-end testing suites to safeguard critical booking and payment workflows.
- **Tech Stack**: Vue.js, Vuex, Vue Router, TypeScript, JavaScript, Playwright, PWA, Tailwind CSS.

### 4. Junior Software Engineer — G2 Global Solutions
**Location**: Gainesville, VA  
**Period**: Sep 2020 — Mar 2023  
- Developed Java and BeanShell solutions on the Entellitrak enterprise case management platform.
- Updated and tuned complex Oracle SQL queries, data views, and reporting functions for federal clients.
- Collaborated closely with defense and federal analysts to satisfy strict security requirements.
- **Tech Stack**: Java, BeanShell, Entellitrak, Oracle SQL, JavaScript, HTML/CSS, Git.

---

## Education & Certifications

- **Bachelor of Science in Information Technology**  
  *Towson University*, Towson, MD — Graduated Dec 2018  
  *Focus*: Enterprise Systems Architecture, Database Management, Network Security.

- **Full Stack MERN Web Development Certificate**  
  *Johns Hopkins University Whiting School of Engineering (WSE)* — Completed Feb 2021  
  *Credential ID*: `JHU-WSE-FSW-2021`

---

## Project Highlights & Architectural Case Studies

### 1. Federal Mission Portal & RBAC Platform
- **Overview**: Enterprise mission management platform supporting federal operations with strict Role-Based Access Control (RBAC).
- **Architecture**: Angular 21 Standalone frontend with functional guards and typed reactive forms communicating with a .NET Core Clean Architecture backend and optimized PostgreSQL schemas.
- **Key Metrics**: Federal/EOP Compliance · Clean .NET Core Architecture · Sub-5ms Client Render Latencies.

### 2. Laboratory Operations & CRM Suite
- **Overview**: Core operational platform for Eurofins E&E North America facilitating test tracking, client certifications, and engineering lab operations.
- **Architecture**: ASP.NET MVC, C#, SQL Server, stored procedure optimization, and dual-layer validation.

### 3. High-Retention Consumer Booking SPA / PWA
- **Overview**: Mobile-first progressive web application for BookMeInScotty LTD with offline caching and automated Playwright test suites.

---

## Angular 21 Redesign Blueprint (`/angular-portfolio`)

A complete, standalone **Angular 21** project is included in the `/angular-portfolio` directory, demonstrating modern Angular architectural patterns:

1. **Zoneless Change Detection**: Configured with `provideExperimentalZonelessChangeDetection()` in `src/app/app.config.ts` to eliminate Zone.js monkey-patching overhead.
2. **Signals Reactivity**: Fine-grained `signal()` and `computed()` state primitives (see `hero-header.component.ts`).
3. **Modern Template Control Flow**: Built-in `@if`, `@for (...; track ...)`, and `@switch` blocks without requiring `CommonModule` or legacy directives.
4. **Native Template Deferral**: `@defer (on viewport)` blocks with `@placeholder` skeletons for deferred component hydration.
5. **Typed Reactive Forms**: Built with `NonNullableFormBuilder` and strict validators.

### Angular 21 Hero Header Component (`hero-header.component.ts`)
```typescript
@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
export class HeroHeaderComponent {
  applicant = signal<ApplicantHeroData>({
    name: 'Roger (Roxhers Bozali)',
    title: 'Full-Stack Software Engineer',
    location: 'Baltimore, MD',
    phone: '443-379-7405',
    email: 'roxhersbozali@gmail.com',
    profilePhotoPath: 'assets/images/RogerProfessionalPic.jpg',
    currentRole: 'Federal Contractor @ Softtek (supporting EOP)',
    ...
  });

  photoUrl = computed(() => this.applicant().profilePhotoPath);
  photoAltText = computed(() => `Executive headshot portrait of ${this.applicant().name}`);
  phoneCopied = signal(false);
  emailCopied = signal(false);
}
```

---

## Portfolio Web Application Features

- **Executive Hero Section**: Features Roger's authentic executive portrait (`assets/images/RogerProfessionalPic.jpg`), verified contact links (`tel:443-379-7405`, `mailto:roxhersbozali@gmail.com`), and call-to-actions.
- **Interactive Experience Timeline**: Expandable career milestones with detailed deliverables and categorized tech stack tags.
- **In-App Resume Customizer & Importer**: Allows instant editing of work history or pasting raw resume text with `localStorage` persistence and copy-to-clipboard export.
- **Projects Showcase & Lightbox Modals**: Filterable by category (Angular & .NET Core, Full-Stack, Tools) with interactive case study modals detailing challenge, solution, and architecture.
- **Production Contact Form**: Live client-side validation (name, email, message length), character counters, submission receipts, and direct mailto links.
- **Dual-Theme Support**: Light and Dark mode toggle utilizing Tailwind CSS v4 `@custom-variant dark`.

---

## Directory Structure

```
├── README.md                                # Comprehensive documentation
├── angular-portfolio/                       # Standalone Angular 21 project
│   ├── angular.json                         # Angular CLI configuration
│   ├── package.json                         # Angular 21 dependencies
│   ├── README.md                            # Angular 21 setup guide
│   └── src/
│       ├── main.ts                          # Angular bootstrap
│       ├── app/
│       │   ├── app.config.ts                # Zoneless Signals providers
│       │   ├── app.component.ts             # Main application shell
│       │   ├── services/portfolio.service.ts# Reactive Signals store
│       │   └── components/
│       │       ├── hero-header/             # Hero Header component
│       │       └── contact.component.ts     # Typed Reactive Form
├── public/
│   └── assets/images/
│       └── RogerProfessionalPic.jpg         # Executive portrait
├── src/
│   ├── App.tsx                              # React preview application shell
│   ├── data/portfolioData.ts                # Applicant resume & project data
│   ├── types/portfolio.ts                   # TypeScript interfaces
│   ├── components/
│   │   ├── Navbar.tsx                       # Clean 3-zone top bar
│   │   ├── HeroSection.tsx                  # Profile hero with headshot
│   │   ├── ExperienceSection.tsx            # Interactive timeline & skills
│   │   ├── ProjectGrid.tsx                  # Filterable project showcase
│   │   ├── CaseStudyModal.tsx               # Deep-dive architecture modal
│   │   ├── ResumeModal.tsx                  # In-app resume editor/importer
│   │   ├── ContactSection.tsx               # Validated contact form
│   │   └── Footer.tsx                       # Minimal editorial footer
│   └── index.css                            # Tailwind CSS v4 & theme tokens
├── package.json                             # Root development dependencies
└── vite.config.ts                           # Vite configuration
```

---

## Getting Started

### Running the Live Portfolio Preview
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```

### Running the Standalone Angular 21 Project
```bash
cd angular-portfolio

# Install Angular 21 dependencies
npm install

# Start Angular development server
npm start
# or
ng serve

# Build Angular production bundle
npm run build
```

---

## Contact & Inquiries

For technical leadership, federal mission engineering, or full-stack .NET & Angular contracts:

- **Phone**: [443-379-7405](tel:443-379-7405)
- **Email**: [roxhersbozali@gmail.com](mailto:roxhersbozali@gmail.com)
- **Location**: Baltimore, MD
