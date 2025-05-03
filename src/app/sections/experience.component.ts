import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

interface ExperienceTab {
  id: string;
  label: string;
  ariaLabelledBy: string;
  period: string;
  description: string;
  tech: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgClass],
  template: `
    <section
      id="experience"
      class="bg-linear-to-tr from-slate-100 to-slate-300 flex mh-full w-full flex-col px-12 py-26"
    >
      <div class="mx-auto format mb-18">
        <h2 class="text-4xl">Experience</h2>
      </div>
      <div class="justify-center mx-auto mb-18 hidden md:block">
        <div class="flex px-8">
          <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-col space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
              id="default-tab"
              role="tablist"
            >
              <li *ngFor="let tab of tabs" class="me-2" role="presentation">
                <button
                  class="text-left p-4 border-b-2"
                  [ngClass]="{ 'border-blue-500 text-blue-600': selectedTab === tab.id }"
                  [id]="tab.id + '-tab'"
                  type="button"
                  role="tab"
                  [attr.aria-controls]="tab.id"
                  [attr.aria-selected]="selectedTab === tab.id"
                  (click)="selectedTab = tab.id"
                >
                  {{ tab.label }}
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content" class="w-4/5">
            <div
              *ngFor="let tab of tabs"
              [class.hidden]="selectedTab !== tab.id"
              class="p-8 shadow-md rounded-lg bg-[url(/img/funky-lines.webp)] bg-repeat"
              [id]="tab.id"
              role="tabpanel"
              [attr.aria-labelledby]="tab.id + '-tab'"
            >
              <div class="format">
                <p>
                  <em>{{ tab.period }}</em>
                </p>
                <p>{{ tab.description }}</p>
                <p><strong>Tech used includes:</strong></p>
                <ul>
                  <li *ngFor="let t of tab.tech">{{ t }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block md:hidden mb-18">
        <div id="accordion-experience" data-accordion="collapse">
          <div *ngFor="let tab of tabs; let i = index">
            <h2 id="accordion-heading-{{ i }}">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                [attr.data-accordion-target]="'#accordion-body-' + i"
                [attr.aria-expanded]="accordionOpenIndex === i"
                [attr.aria-controls]="'accordion-body-' + i"
                (click)="toggleAccordion(i)"
              >
                <span>{{ tab.label }}</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-{{ accordionOpenIndex === i ? '180' : '0' }} shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              [id]="'accordion-body-' + i"
              class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              [ngClass]="{ hidden: accordionOpenIndex !== i }"
              [attr.aria-labelledby]="'accordion-heading-' + i"
            >
              <div class="format">
                <p>
                  <em>{{ tab.period }}</em>
                </p>
                <p>{{ tab.description }}</p>
                <p><strong>Tech used includes:</strong></p>
                <ul>
                  <li *ngFor="let t of tab.tech">{{ t }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col mb-18">
        <div class="mx-auto format mb-18">
          <h3>Case Studies</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 justify-center">
          <div class="p-4 flex w-full flex-col items-center bg-gray-50 shadow-md format">
            <h4>Home Depot Design Center</h4>
            <img
              src="img/portfolio/hddc.png"
              alt="Home Depot Design Center"
              class="h-full object-cover rounded mb-4"
            />
            <button
              type="button"
              (click)="showModal('hddc')"
              class="flex text-white bg-gradient-to-br from-yellow-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 items-center mx-auto font-bold py-2 px-4 rounded"
            >
              View
            </button>
          </div>
          <div class="p-4 flex w-full flex-col items-center bg-gray-50 shadow-md format">
            <h4>Charter Up</h4>
            <img
              src="img/portfolio/charterup.png"
              alt="charterUP"
              class="h-full object-cover rounded mb-4"
            />
            <button
              type="button"
              (click)="showModal('charterup')"
              class="flex text-white bg-gradient-to-br from-yellow-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 items-center mx-auto font-bold py-2 px-4 rounded"
            >
              View
            </button>
          </div>
          <div class="p-4 flex w-full flex-col items-center bg-gray-50 shadow-md format">
            <h4>Test Runner UI</h4>
            <img
              src="img/portfolio/test-runner-ui.png"
              alt="Test Runner UI"
              class="h-full object-cover rounded mb-4"
            />
            <button
              type="button"
              (click)="showModal('testRunnerUi')"
              class="flex text-white bg-gradient-to-br from-yellow-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 items-center mx-auto font-bold py-2 px-4 rounded"
            >
              View
            </button>
          </div>
        </div>
        <div
          #modalEl
          id="case-study-modal"
          tabindex="-1"
          aria-hidden="true"
          [ngClass]="{ hidden: !openModal }"
          class="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden"
        >
          <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                (click)="hideModal()"
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                aria-label="Close"
              >
                <span class="sr-only">Close modal</span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1l12 12M13 1L1 13"
                  />
                </svg>
              </button>
              <div class="p-6">
                <ng-container [ngSwitch]="openModal">
                  <ng-container *ngSwitchCase="'hddc'">
                    <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      Home Depot Design Center
                    </h3>
                    <img
                      src="img/portfolio/hddc.png"
                      alt="Home Depot Design Center"
                      class="h-full object-cover rounded mb-4"
                    />
                    <p>
                      Interactive booking platform for the new Home Depot Design Center store,
                      featuring a design preferences selection process. I led frontend development,
                      refactored the codebase to leverage the latest Angular features, and
                      standardized frontend practices across the team and company. A key challenge
                      was implementing a backend queuing system to ensure booking availability at
                      scale. The app launched for customers and scaled to handle hundreds of
                      thousands of bookings, with page load speed improved by 140%.
                    </p>
                    <p class="mt-4">
                      <strong>Tech used:</strong> Angular, TypeScript, JavaScript, Docker, AWS, GCP,
                      Concourse CI, Java
                    </p>
                  </ng-container>
                  <ng-container *ngSwitchCase="'charterup'">
                    <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Charter Up</h3>
                    <img
                      src="img/portfolio/charterup.png"
                      alt="charterUP"
                      class="h-full object-cover rounded mb-4"
                    />
                    <p>
                      Customer-facing charter bus booking platform with a conversational interface
                      and Google Maps-powered address verification. I led the project, delivering
                      features end-to-end and helping shape the product’s direction.
                    </p>
                    <p class="mt-4">
                      <strong>Tech used:</strong> Vue.js, JavaScript, TypeScript, AWS, Jenkins CI,
                      Python
                    </p>
                  </ng-container>
                  <ng-container *ngSwitchCase="'testRunnerUi'">
                    <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      Test Runner UI
                    </h3>
                    <img
                      src="img/portfolio/test-runner-ui.png"
                      alt="Test Runner UI"
                      class="h-full object-cover rounded mb-4"
                    />
                    <p>
                      Internal tool for searching and visualizing integration test framework data,
                      with advanced metadata-based search and interactive AG Grid visualizations. I
                      architected, developed, and deployed the app independently, and contributed
                      improvements back to the company’s component library based on this work.
                    </p>
                    <p class="mt-4">
                      <strong>Tech used:</strong> Angular, TypeScript, JavaScript, AG Grid, NX,
                      Docker, Nginx, Concourse CI
                    </p>
                  </ng-container>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ExperienceComponent {
  tabs: ExperienceTab[] = [
    {
      id: 'adp',
      label: 'ADP, Inc.',
      ariaLabelledBy: 'adp-tab',
      period: 'Feb. 2020 – Present',
      description:
        'Architected and led development of enterprise applications, mentored team members, and contributed to internal tools and design systems.',
      tech: [
        'Angular/React + NX',
        'Tailwind/SCSS',
        'Jest/Playwright',
        'AG-Grid',
        'Docker + Nginx',
        'Concourse CI',
      ],
    },
    {
      id: 'charterup',
      label: 'charterUP',
      ariaLabelledBy: 'charterup-tab',
      period: 'May 2019 – Jan. 2020',
      description:
        'Led and developed core features for a new customer-facing product, helping shape the company’s technology direction.',
      tech: ['VueJS', 'Python/Java', 'Jenkins'],
    },
    {
      id: 'homedepot',
      label: 'The Home Depot',
      ariaLabelledBy: 'homedepot-tab',
      period: 'May 2018 – May 2019',
      description:
        'Helped transform a proof-of-concept booking system into a scalable web application supporting thousands of users.',
      tech: ['Angular', 'Java', 'Concourse CI/Docker', 'AWS/GCP', 'Github'],
    },
    {
      id: 'premierlogic',
      label: 'Premier Logic',
      ariaLabelledBy: 'pl-tab',
      period: 'Nov. 2016 – Mar. 2018',
      description:
        'Led a small front-end team and delivered end-to-end features for multiple client projects.',
      tech: ['Angular', 'NodeJS', '.Net Core', 'AWS/GCP/Azure'],
    },
    {
      id: 'merchante',
      label: 'Merchant e-Solutions',
      ariaLabelledBy: 'me-tab',
      period: 'May 2014 – Oct. 2016',
      description:
        'Developed flagship and third-party integrations, supporting key business operations and revenue growth.',
      tech: ['AngularJS', 'SCSS', 'Java', 'AWS', 'PHP'],
    },
  ];
  selectedTab = this.tabs[0].id;
  accordionOpenIndex: number | null = 0;
  openModal: string | null = null;

  protected showModal(caseStudy: string): void {
    this.openModal = caseStudy;
  }

  protected hideModal(): void {
    this.openModal = null;
  }

  protected toggleAccordion(index: number): void {
    this.accordionOpenIndex = this.accordionOpenIndex === index ? null : index;
  }
}
