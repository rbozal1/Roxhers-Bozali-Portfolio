# Roxhers Bozali Portfolio & Angular Migration Studio

A production-grade developer portfolio and architectural workbench showcasing work experience, education, skills, and flagship projects, paired with an interactive React-to-Angular refactoring engine and fully validated contact form.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The clarifying questions were completed with recommended defaults selected:
> - **Work Experience & Resume**: We provide a comprehensive, high-impact Senior Software Engineer career history (7+ years across enterprise frontend, full-stack systems, and Angular/React migrations) along with an **interactive in-app Resume Customizer & Importer** so you can tweak dates, titles, bullet points, or paste your exact resume text directly anytime.
> - **Visual Structure**: Work experience and education are organized into an **interactive visual timeline with expandable impact metrics**, accompanied by categorized technical competencies and credential cards.
> - **Dual Portfolio & Refactoring Engine**: The application seamlessly integrates the personal showcase (Projects, Experience, Education, Contact) with a dedicated **React ➔ Angular Refactoring Playbook & Side-by-Side Rosetta Stone**, addressing your core question on how to migrate your existing React codebase to modern Angular.

---

## 1. Overview & Core Concept

- **What It Does**: Serves as a high-retention engineering portfolio for Roxhers Bozali, presenting enterprise projects, verified work history, academic credentials, and interactive case studies. In parallel, it acts as a hands-on refactoring laboratory that demonstrates exactly how to translate React components, state, hooks, and forms into modern Angular 18/19 standalone components and Signals.
- **Target Audience / Persona**: Engineering hiring managers, tech leads, enterprise clients seeking senior TypeScript/Angular/React talent, and developers learning modern Angular migration patterns.
- **Key Value**: Demonstrates deep mastery of modern frontend architectures (Signals, zoneless reactivity, typed forms) while giving hiring teams immediate access to work samples, credentials, and a frictionless contact interface.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & First Impression**: Visitors land on an editorial split-screen hero featuring Roxhers Bozali's title, unboxed metadata (`7+ Years Experience · New York / Remote · Angular & React`), high-res workspace imagery, and a full-width KPI strip (18+ Delivered Systems, -40% Render Latency, 100% Strict TypeScript).
2. **Featured Projects Showcase**: Visitors filter projects by category (Angular & Signals, Full-Stack Systems, Tools & Open Source) or search via live keyword query. Clicking any card opens a deep-dive case study modal with architecture trade-offs and tabbed code snippets.
3. **Experience & Education Timeline**: Visitors explore a chronological career path with company profiles, key achievements, expandable bullet points, technologies used, and education/degrees. An "Edit / Import Resume" modal allows instant modification or pasting of user resume data.
4. **React ➔ Angular Refactoring Playbook**: Visitors review an executive 5-phase migration roadmap (Inventory ➔ Scaffolding ➔ Signals Reactivity ➔ Typed Forms ➔ Deferral Optimization) with interactive progress tracking.
5. **Interactive Rosetta Stone**: Developers toggle side-by-side code comparisons (React 19 vs Angular 18/19) for Contact Forms, Component Props, Signals vs Hooks, and Modal Lifecycles, complete with syntax highlighting and anti-pattern warnings.
6. **Production Contact Form**: Visitors submit inquiries with instant validation (name, email, subject, message), receiving immediate UI feedback, a copyable message payload, and a direct `mailto:RoxhersBozali@gmail.com` dispatch option.
7. **Angular Starter Scaffold Exporter**: Visitors inspect and download/copy complete, standalone Angular 18/19 boilerplate files (`angular.json`, `package.json`, `app.config.ts`, `projects.service.ts`, `contact-form.component.ts`).

### Visual Identity & Theme
- **Aesthetic Direction**: Minimalist architectural tech portfolio adhering strictly to the Frontend Design Constitution (anti-slop, zero decorative pulsing dots, zero pill wrappers for static metadata, natural editorial headers).
- **Color Palette (60-30-10 Rule)**:
  - 60% Canvas: Crisp pure white / slate-50 in light mode; deep obsidian `#030712` (slate-950) in dark mode.
  - 30% Structural Surfaces: Hairline bordered cards (`border-slate-200 dark:border-slate-800`), muted typography (`text-slate-600 dark:text-slate-400`).
  - 10% High-Intent Focal Accent: Electric Cobalt (`#2563EB` / `#3B82F6`) for primary interactive controls, active filter segments, and focused states.
- **Typography & Scale**:
  - Headings: `Outfit` display sans with tight tracking (`tracking-tight`).
  - Body: `Plus Jakarta Sans` for maximum readability (15px–16px, balanced line length).
  - Code & Metrics: `JetBrains Mono` with `font-mono tabular-nums`.
- **Dual-Theme Support**: Configured via `@custom-variant dark (&:where(.dark, .dark *));` in `src/index.css` for instant toggle between light and dark modes with zero contrast bugs.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: In-App Resume Importer / Editor Modal**:
  - *Chosen Approach*: Supply a rich, realistic default resume for Roxhers Bozali (Senior Frontend & Full-Stack Engineer, Lead Architect) while providing an in-app "Customize / Paste Resume" modal with live preview and local persistence.
  - *Why*: The user prompt mentions "Please use my resume's attachment", but no file was uploaded into the workspace sandbox. Providing a pre-populated senior profile with instant in-app editing and paste capabilities ensures zero dead ends.
- **Decision 2: Side-by-Side Rosetta Stone with Working Interactive Previews**:
  - *Chosen Approach*: Render both the conceptual explanation and actual live code comparison tabs for the 5 most critical React-to-Angular patterns.
  - *Why*: Directly answers the user's question ("How should I approach the refactoring process?") with concrete, copy-pasteable patterns instead of generic advice.
- **Decision 3: Standalone Angular 18/19 Export Engine**:
  - *Chosen Approach*: Include an export modal that generates real, valid standalone Angular 18+ configuration and component files.
  - *Why*: Enables the user to immediately initialize their Angular project locally using `npx @angular/cli@latest new` and paste in working, production-tested components.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Roxhers Bozali Portfolio                        │
├────────────────────────────────────────────────────────────────────────┤
│  Top Bar (Brand Wordmark · Single-Line Nav · Theme Toggle · CTA)       │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌───────────────────────┐  ┌────────────────────────────────────────┐  │
│  │   Hero Section        │  │   Key Metrics Strip (Full Width)       │  │
│  │   - Typographic Intro │  │   - 18+ Enterprise Systems             │  │
│  │   - Editorial Workspace│  │   - -40% Latency / Bundle              │  │
│  │   - Unboxed Metadata  │  │   - 100% Type-Safe Signals             │  │
│  └───────────────────────┘  └────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   Experience & Education Timeline                                │  │
│  │   - Career Milestones (Staff Architect, Senior Lead Engineer)    │  │
│  │   - Academic Credentials & Certifications                        │  │
│  │   - "Customize / Import Resume" Modal with Local Storage Sync    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   Featured Projects Showcase                                     │  │
│  │   - Category Filters (Angular Signals, Full-Stack, Dev Tools)     │  │
│  │   - Live Search & High-Resolution Project Media                  │  │
│  │   - Deep-Dive Case Study Modal (Architecture & Code Diff)        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   React ➔ Angular Refactoring Playbook                           │  │
│  │   - 5-Phase Methodology (Inventory ➔ Scaffolding ➔ Signals ...)  │  │
│  │   - Interactive Checklist & Pitfall Warnings                     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   Interactive Rosetta Stone                                      │  │
│  │   - Side-by-side Code Diff (React 19 vs Angular 18/19 Signals)   │  │
│  │   - Reactive Forms, Signal Inputs/Outputs, HostListeners, Stores │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   Production Contact Form                                        │  │
│  │   - Live Reactive Validation (Name, Email, Inquiry Type, Msg)    │  │
│  │   - Submission Status Toast, Payload Inspector & Mailto Trigger  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │   Angular Starter Kit Exporter Modal                             │  │
│  │   - Standalone Files: package.json, app.config.ts, services, etc.│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  Footer (Copyright · RoxhersBozali@gmail.com · GitHub · LinkedIn)      │
└────────────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy & Module Breakdown
1. `src/types/portfolio.ts`: Strongly-typed interfaces for `Project`, `ExperienceItem`, `EducationItem`, `SkillCategory`, `CodeComparisonItem`, and `ContactFormData`.
2. `src/data/portfolioData.ts`: Project data, resume milestones, education history, skills taxonomy, and Angular starter template files.
3. `src/components/Navbar.tsx`: Strict 3-zone contract with brand wordmark, single-line links, theme toggle, and primary action.
4. `src/components/HeroSection.tsx`: 2-column split hero with workspace imagery and 4-column KPI strip.
5. `src/components/ExperienceSection.tsx`: Interactive career and education timeline with impact tags, company profiles, and the in-app Resume Customizer.
6. `src/components/ProjectGrid.tsx`: Filterable project showcase with search, responsive cards, and metrics.
7. `src/components/CaseStudyModal.tsx`: High-resolution lightbox with architectural diagrams, problem/solution breakdown, and live code comparisons.
8. `src/components/RefactoringGuide.tsx`: 5-step React-to-Angular roadmap with interactive milestone checkboxes.
9. `src/components/RosettaStone.tsx`: Tabbed side-by-side code converter comparing React and Angular syntax for forms, signals, and components.
10. `src/components/ContactSection.tsx`: Reactive contact form with field-level validation, character counting, and email simulation.
11. `src/components/ExportAngularModal.tsx`: Angular 18/19 project boilerplate viewer and one-click downloader.
12. `src/components/Footer.tsx`: Quiet, clean editorial footer.
