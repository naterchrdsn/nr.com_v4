import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="bg-transparent static w-full z-40 transition-opacity" *ngIf="!showFixedNav">
      <div
        class="max-w-screen-xl flex flex-row mx-auto p-4 justify-between md:justify-center items-center"
      >
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false"
          (click)="toggleMobileMenu()"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul class="hidden md:flex flex-row gap-6 font-medium">
          <li>
            <a
              href="#about"
              [ngClass]="{
                'text-yellow-400': activeSection === 'about',
                'text-yellow-600': activeSection !== 'about',
              }"
              class="hover:text-yellow-400"
              >About</a
            >
          </li>
          <li>
            <a
              href="#experience"
              [ngClass]="{
                'text-yellow-400': activeSection === 'experience',
                'text-yellow-600': activeSection !== 'experience',
              }"
              class="hover:text-yellow-400"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#projects"
              [ngClass]="{
                'text-yellow-400': activeSection === 'projects',
                'text-yellow-600': activeSection !== 'projects',
              }"
              class="hover:text-yellow-400"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              [ngClass]="{
                'text-yellow-400': activeSection === 'contact',
                'text-yellow-600': activeSection !== 'contact',
              }"
              class="hover:text-yellow-400"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div
        class="md:hidden"
        [ngClass]="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
        id="mobile-menu"
      >
        <ul
          class="flex flex-col gap-4 font-medium p-4 bg-white border border-gray-200 rounded-lg shadow mt-2"
        >
          <li>
            <a
              href="#about"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'about',
                'text-yellow-600': activeSection !== 'about',
              }"
              class="hover:text-yellow-400"
              >About</a
            >
          </li>
          <li>
            <a
              href="#experience"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'experience',
                'text-yellow-600': activeSection !== 'experience',
              }"
              class="hover:text-yellow-400"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#projects"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'projects',
                'text-yellow-600': activeSection !== 'projects',
              }"
              class="hover:text-yellow-400"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'contact',
                'text-yellow-600': activeSection !== 'contact',
              }"
              class="hover:text-yellow-400"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="fixed top-0 left-0 w-full bg-slate-800 z-40 transition-opacity"
      *ngIf="showFixedNav"
    >
      <div
        class="max-w-screen-xl flex flex-row mx-auto p-4 justify-between md:justify-center items-center"
      >
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-controls="mobile-menu-fixed"
          aria-expanded="false"
          (click)="toggleMobileMenu()"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul class="hidden md:flex flex-row gap-6 font-medium">
          <li>
            <a
              href="#about"
              [ngClass]="{
                'text-yellow-400': activeSection === 'about',
                'text-white': activeSection !== 'about',
              }"
              class="hover:text-yellow-400"
              >About</a
            >
          </li>
          <li>
            <a
              href="#experience"
              [ngClass]="{
                'text-yellow-400': activeSection === 'experience',
                'text-white': activeSection !== 'experience',
              }"
              class="hover:text-yellow-400"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#projects"
              [ngClass]="{
                'text-yellow-400': activeSection === 'projects',
                'text-white': activeSection !== 'projects',
              }"
              class="hover:text-yellow-400"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              [ngClass]="{
                'text-yellow-400': activeSection === 'contact',
                'text-white': activeSection !== 'contact',
              }"
              class="hover:text-yellow-400"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div
        class="md:hidden"
        [ngClass]="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
        id="mobile-menu-fixed"
      >
        <ul
          class="flex flex-col gap-4 font-medium p-4 bg-slate-800 border border-gray-700 rounded-lg shadow mt-2"
        >
          <li>
            <a
              href="#about"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'about',
                'text-white': activeSection !== 'about',
              }"
              class="hover:text-yellow-400"
              >About</a
            >
          </li>
          <li>
            <a
              href="#experience"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'experience',
                'text-white': activeSection !== 'experience',
              }"
              class="hover:text-yellow-400"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#projects"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'projects',
                'text-white': activeSection !== 'projects',
              }"
              class="hover:text-yellow-400"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              (click)="closeMobileMenu()"
              [ngClass]="{
                'text-yellow-400': activeSection === 'contact',
                'text-white': activeSection !== 'contact',
              }"
              class="hover:text-yellow-400"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavigationComponent implements OnInit {
  showFixedNav = false;
  activeSection: string = '';
  mobileMenuOpen = false;

  ngOnInit(): void {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, true);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  onScroll = (): void => {
    const intro = document.getElementById('intro');
    const scrollY = window.scrollY;
    this.showFixedNav = intro
      ? scrollY > intro.offsetHeight - 60
      : scrollY > window.innerHeight * 0.8;
    this.updateActiveSection();
  };

  updateActiveSection() {
    const sections = ['about', 'experience', 'projects', 'contact'];
    let found = '';
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          found = section;
          break;
        }
      }
    }
    this.activeSection = found;
  }
}
