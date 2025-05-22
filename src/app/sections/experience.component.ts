import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
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
          (click)="hideModal()"
        >
          <div
            #modalContent
            class="relative p-4 w-full max-w-5xl max-h-[90vh]"
            (click)="$event.stopPropagation()"
          >
            <div class="relative bg-white rounded-lg shadow-xl dark:bg-gray-800">
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
              <div class="p-8 overflow-y-auto max-h-[calc(90vh-6rem)]">
                <ng-container [ngSwitch]="openModal">
                  <ng-container *ngSwitchCase="'hddc'">
                    <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Home Depot Design Center - Interactive Booking Platform
                    </h3>
                    <img
                      src="img/portfolio/hddc.png"
                      alt="Home Depot Design Center"
                      class="h-full object-cover rounded-lg mb-6 shadow-md"
                    />
                    <div class="prose max-w-none">
                      <p>
                        Home Depot was launching their flagship Design Center store, and our scheduling system wasn't just a nice-to-have feature—it was the backbone of how they operate. This new retail concept needed customers to book design consultations in advance, and the entire business model depended on seamless appointment scheduling.
                      </p>
                      
                      <h4 class="text-xl font-semibold mt-6 mb-3">The Challenge</h4>
                      <p>
                        What started as a proof of concept quickly needed to scale into a robust system supporting not just the flagship location, but eventually stores across the country. The original app was buckling under real-world usage, with page load times stretching over 15 seconds—completely unacceptable for a customer-facing booking system.
                      </p>
                      <p class="mt-3">
                        We were essentially building two interconnected systems: a customer-facing booking platform where people could select their design preferences and schedule visits, and an internal management tool for Design Center employees to actually handle those appointments day-to-day.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">The Technical Transformation</h4>
                      <p>
                        I led the frontend development and took on the challenge of refactoring the entire codebase to leverage the latest Angular features. This wasn't just about updating dependencies—it was about transforming a fragile POC into a scalable, maintainable system that could handle hundreds of thousands of bookings.
                      </p>
                      <p class="mt-3">
                        The backend queuing system was critical to solve the scaling challenge. Without it, we'd have booking conflicts, double-bookings, and a system that would crash under load. I worked closely with the backend team to ensure our frontend could handle the asynchronous nature of the booking process gracefully.
                      </p>
                      <p class="mt-3">
                        Beyond just building features, I took on the broader challenge of standardizing frontend practices across the entire organization. This meant giving tech talks, organizing developer meetings to establish code standards, linting rules, and consistent patterns that every team could implement. It was about building sustainable development practices, not just a single app.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">The Impact</h4>
                      <p>
                        The transformation was dramatic: page load times dropped from over 15 seconds to milliseconds—a 140% improvement that fundamentally changed the user experience. The platform successfully launched and scaled to handle hundreds of thousands of bookings, supporting Home Depot's expansion of the Design Center concept to multiple locations.
                      </p>
                    </div>
                    <p class="mt-6 text-sm text-gray-600 dark:text-gray-300">
                      <strong>Tech used:</strong> Angular, TypeScript, JavaScript, Docker, AWS, GCP, Concourse CI, Java
                    </p>
                  </ng-container>
                  <ng-container *ngSwitchCase="'charterup'">
                    <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">CharterUp - Conversational Bus Booking Platform</h3>
                    <img
                      src="img/portfolio/charterup.png"
                      alt="CharterUp"
                      class="h-full object-cover rounded-lg mb-6 shadow-md"
                    />
                    <div class="prose max-w-none">
                      <p>
                        CharterUp wanted to revolutionize the charter bus booking experience by making it feel more human and approachable. We were inspired by the massive success of companies like Lemonade Insurance, who proved that conversational interfaces could transform traditionally painful transactional processes.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">The Product Vision</h4>
                      <p>
                        Instead of the typical form-heavy booking process, we created a friendly customer service persona that guided users through booking their charter bus. The conversational interface made the entire process feel easy and personal, like chatting with a helpful representative rather than filling out endless forms.
                      </p>
                      <p class="mt-3">
                        I worked closely with a talented UX designer to flesh out not just the conversational booking flow, but also the dashboard and broader user functionality. We wanted to capture that friendly, guided experience throughout the entire platform.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">End-to-End Development</h4>
                      <p>
                        This project gave me the opportunity to work across the full stack. I handled the frontend implementation in Vue.js, but also coded Python endpoints to process and save booking details, then wired those endpoints into the UI for a seamless experience.
                      </p>
                      <p class="mt-3">
                        The Google Maps integration was crucial for address verification—charter buses need accurate pickup and dropoff locations, and we couldn't afford address-related booking failures. I implemented the maps functionality to provide real-time address validation and suggestions.
                      </p>
                      <p class="mt-3">
                        I also set up the CI/CD pipeline for the new application, ensuring we could deploy reliably and frequently as we iterated on the conversational experience.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">Shaping the Product</h4>
                      <p>
                        Beyond just implementing features, I helped shape the product's direction by working directly with stakeholders to refine the conversational flow and identify which parts of the booking process benefited most from the guided approach. This hands-on product involvement helped ensure we were building something users actually wanted, not just something that sounded good in theory.
                      </p>
                    </div>
                    <p class="mt-6 text-sm text-gray-600 dark:text-gray-300">
                      <strong>Tech used:</strong> Vue.js, JavaScript, TypeScript, AWS, Jenkins CI, Python
                    </p>
                  </ng-container>
                  <ng-container *ngSwitchCase="'testRunnerUi'">
                    <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Test Runner UI - Internal Testing Platform
                    </h3>
                    <img
                      src="img/portfolio/test-runner-ui.png"
                      alt="Test Runner UI"
                      class="h-full object-cover rounded-lg mb-6 shadow-md"
                    />
                    <div class="prose max-w-none">
                      <p>
                        Our company's end-to-end testing process was a nightmare. To set up and view test scenarios for the entire backbone of our systems, developers had to make manual Postman requests, dig through specific bits of metadata, and trace through Splunk logs to find what they needed. It was time-consuming, error-prone, and frankly, a terrible developer experience.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">The Problem</h4>
                      <p>
                        The existing process meant that debugging test failures or understanding test coverage required deep tribal knowledge and a lot of patience. New team members struggled to navigate the system, and even experienced developers found it frustrating. For a company that depended on reliable testing of our core systems, this manual process was holding everyone back.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">The Solution</h4>
                      <p>
                        I architected and developed a comprehensive UI that streamlined this entire debugging process. The tool featured advanced metadata-based search capabilities and interactive AG Grid visualizations that made it easy to find exactly what you were looking for.
                      </p>
                      <p class="mt-3">
                        Rather than piecing together information from multiple sources, developers could now search, filter, and visualize all their test data in one place. The interactive grids made it simple to drill down into specific test runs, compare results, and understand patterns in test behavior.
                      </p>

                      <h4 class="text-xl font-semibold mt-6 mb-3">Independent Development and Beyond</h4>
                      <p>
                        I took this project on independently—from initial architecture through deployment. Working solo meant I had to think carefully about maintainability and documentation, since I'd be the primary point of contact for questions and issues.
                      </p>
                      <p class="mt-3">
                        One unexpected benefit was that this work led to improvements in our company-wide component library. As I built the UI, I identified enhancements to existing components and proposed architectural improvements. I completed this additional work and got involved in the external review process, contributing back to tools that benefited the entire engineering organization.
                      </p>
                      <p class="mt-3">
                        The tool fundamentally changed how our teams approached testing and debugging, turning a frustrating manual process into a streamlined, visual experience.
                      </p>
                    </div>
                    <p class="mt-6 text-sm text-gray-600 dark:text-gray-300">
                      <strong>Tech used:</strong> Angular, TypeScript, JavaScript, AG Grid, NX, Docker, Nginx, Concourse CI
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
  @ViewChild('modalEl') modalEl!: ElementRef;
  @ViewChild('modalContent') modalContent!: ElementRef;
  private clickListener!: (event: MouseEvent) => void;

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

    // Add click outside listener after a small delay to avoid immediate close
    setTimeout(() => {
      this.clickListener = (event: MouseEvent) => {
        if (
          this.openModal &&
          this.modalContent &&
          !this.modalContent.nativeElement.contains(event.target as Node)
        ) {
          this.hideModal();
        }
      };
      document.addEventListener('click', this.clickListener);
    });
  }

  protected hideModal(): void {
    this.openModal = null;

    // Remove click listener when modal is closed
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
  }

  protected toggleAccordion(index: number): void {
    this.accordionOpenIndex = this.accordionOpenIndex === index ? null : index;
  }
}
