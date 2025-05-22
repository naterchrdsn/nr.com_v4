import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { IntroComponent } from './sections/intro.component';
import { AboutComponent } from './sections/about.component';
import { ExperienceComponent } from './sections/experience.component';
import { ProjectsComponent } from './sections/projects.component';
import { ContactComponent } from './sections/contact.component';
import { NavigationComponent } from './navigation.component';

// Constants for SEO
const SITE_TITLE = 'Nate Richardson - Frontend Architect & Developer';
const SITE_DESCRIPTION =
  'Portfolio of Nate Richardson, a frontend-focused architect and developer with experience in building modern web applications.';
const SITE_URL = 'https://naterichardson.com';
const SITE_IMAGE = 'https://naterichardson.com/img/logo_cropped.png';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    NavigationComponent,
  ],
  template: `
    <main class="h-screen">
      <app-nav></app-nav>
      <app-intro></app-intro>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
      <footer class="bg-slate-800 text-white">
        <div class="justify-between flex px-12 py-4">
          <span>© Copyright 2025, Nate Richardson</span>
          <a href="https://github.com/naterchrdsn/nr.com_v4" target="_blank" rel="noopener">
            <svg
              class="inline w-5 h-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
            Source
          </a>
        </div>
      </footer>

      @if (showToTop) {
        <a
          href="#intro"
          class="fixed bottom-15 right-6 z-50 bg-slate-800 text-white rounded-full shadow-lg p-3 hover:bg-slate-600 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>
      }
    </main>
  `,
})
export class AppComponent implements OnInit {
  private meta = inject(Meta);
  private titleService = inject(Title);

  title = 'nr-portfolio-v4';

  showToTop = false;

  ngOnInit(): void {
    initFlowbite();
    this.setupSeo();
    window.addEventListener('scroll', this.onScroll, true);
  }

  private setupSeo(): void {
    // Set document title
    this.titleService.setTitle(SITE_TITLE);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: SITE_DESCRIPTION });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph / Facebook
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: SITE_URL });
    this.meta.updateTag({ property: 'og:title', content: SITE_TITLE });
    this.meta.updateTag({ property: 'og:description', content: SITE_DESCRIPTION });
    this.meta.updateTag({ property: 'og:image', content: SITE_IMAGE });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: SITE_TITLE });
    this.meta.updateTag({ name: 'twitter:description', content: SITE_DESCRIPTION });
    this.meta.updateTag({ name: 'twitter:image', content: SITE_IMAGE });
  }

  onScroll = (): void => {
    this.showToTop = window.scrollY > window.innerHeight;
  };
}
