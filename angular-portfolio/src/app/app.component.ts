import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <!-- Top Navigation -->
      <header class="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 h-16 flex items-center justify-between">
        <span class="text-lg font-bold tracking-tight text-white">Roxhers Bozali</span>
        <nav class="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#experience" class="hover:text-white transition-colors">Experience</a>
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
        <section class="py-12 border-b border-slate-800">
          <p class="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Senior Full-Stack & Angular 21 Systems Architect
          </p>
          <h1 class="text-5xl font-bold tracking-tight text-white mb-6">
            Engineering reactive web systems with modern Angular 21 & TypeScript.
          </h1>
          <p class="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Specializing in zero-overhead Signals architecture, zoneless change detection, and high-frequency cloud enterprise platforms.
          </p>
        </section>

        <!-- Projects Section with Modern Angular 21 Control Flow -->
        <section id="projects" class="space-y-8">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-3xl font-bold text-white">Featured Projects</h2>
              <p class="text-xs text-slate-400 mt-1">Built with Angular 21 Signals & Zoneless Reactivity</p>
            </div>
            <div class="text-xs font-mono text-slate-400">
              Showing {{ portfolio.filteredProjects().length }} projects
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (project of portfolio.filteredProjects(); track project.id) {
              <article class="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
                  <p class="text-xs text-slate-400 mt-1 mb-3">{{ project.tagline }}</p>
                  <p class="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">{{ project.summary }}</p>
                </div>

                <div class="pt-4 border-t border-slate-800/80">
                  <div class="flex flex-wrap gap-2 text-xs text-slate-400">
                    @for (tech of project.technologies; track tech) {
                      <span class="text-slate-400">{{ tech }}</span>
                    }
                  </div>
                </div>
              </article>
            } @empty {
              <p class="text-slate-500 py-12 text-center col-span-full">No projects found.</p>
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

      <!-- Footer -->
      <footer class="border-t border-slate-800 py-12 text-center text-xs text-slate-500">
        © 2026 Roxhers Bozali · Built with Angular 21
      </footer>
    </div>
  `
})
export class AppComponent {
  portfolio = inject(PortfolioService);
}
