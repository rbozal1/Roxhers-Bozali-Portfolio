# Roger (Roxhers) Bozali — Personal Portfolio (Angular 21)

This is the standalone **Angular 21** personal portfolio and resume codebase for **Roger (Roxhers) Bozali**, Full-Stack Software Engineer (5+ years experience, Federal Contractor supporting EOP).

---

## Applicant Details

- **Name**: Roger (Roxhers) Bozali
- **Location**: Baltimore, MD
- **Contact**: 443-379-7405 · roxhersbozali@gmail.com
- **Current Role**: Software Engineer / Federal Contractor at Softtek (Contract supporting EOP)
- **Profile Photo**: `assets/images/RogerProfessionalPic.jpg`

---

## Architectural Highlights

- **Angular 21 Zoneless Change Detection**: Zero `Zone.js` overhead via `provideExperimentalZonelessChangeDetection()` in `src/app/app.config.ts`.
- **Signals Reactivity**: Powered by fine-grained `signal()` and `computed()` state primitives (see `hero-header.component.ts`).
- **Modern Template Control Flow**: Native `@if`, `@for (...; track ...)`, and `@switch` blocks without requiring `CommonModule` or legacy directives.
- **Native View Deferral**: `@defer (on viewport)` lazy-loading blocks with `@placeholder` skeletons.
- **Typed Reactive Forms**: Built with `NonNullableFormBuilder` and strict validators.
- **Tailwind CSS v4 Integration**: Modern zero-runtime utility styling.

---

## Standalone Components Hierarchy

- `app-root` (`src/app/app.component.ts`): Main application container and responsive navigation shell.
- `app-hero-header` (`src/app/components/hero-header/hero-header.component.ts`): Profile hero displaying Roger's headshot, credentials, location, phone, and email with reactive clipboard copy actions.
- `app-contact` (`src/app/components/contact.component.ts`): Typed Reactive Form with live validation and submission handling.
- `PortfolioService` (`src/app/services/portfolio.service.ts`): Reactive Signal store managing applicant details, experience records, and project filters.

---

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Angular development server:
   ```bash
   npm start
   # or
   ng serve
   ```

3. Open `http://localhost:4200` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
