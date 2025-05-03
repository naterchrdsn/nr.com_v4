import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  template: `
    <section
      id="intro"
      class="bg-[url(/img/hexellence.png)] bg-repeat h-full flex flex-col justify-center space-y-75 p-8"
    >
      <div class="mx-auto items-center text-center">
        <img src="img/logo_cropped.png" alt="Nate Richardson Headshot" class="" />
      </div>
      <div class="mx-auto align-bottom">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white animate-bounce justify-self-end"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19V5m0 14-4-4m4 4 4-4"
          />
        </svg>
      </div>
    </section>
  `,
  styles: [],
})
export class IntroComponent {}
