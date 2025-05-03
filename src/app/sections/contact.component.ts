import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section
      id="contact"
      class="bg-linear-to-tr from-slate-100 to-slate-300 min-h-full w-full flex flex-col  px-12 py-26"
    >
      <div class="mx-auto format mb-18">
        <h2 class="text-4xl">Contact</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mb-18 text-center justify-center">
        <div class="max-w-md mx-auto mt-10 p-4 items-center justify-center format">
          <h4>Want To Collaborate?</h4>
          <p>Contact me at Nacho Labs!</p>

          <a
            href="https://nacholabs.net/contact"
            class="no-underline justify-center mt-8 flex text-white bg-gradient-to-br from-yellow-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 items-center mx-auto font-bold py-2 px-4 rounded"
          >
            <svg
              class="w-6 h-6 text-white"
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
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
            Get In Touch
          </a>
        </div>
        <div class="mt-10 p-4 items-center justify-centerflex flex-col">
          <div class="format text-right mb-4">
            <h4>Links</h4>
          </div>

          <ul>
            <li class="text-right mb-2">
              <a href="https://github.com/naterchrdsn" target="_blank" rel="noopener">
                <svg
                  class="inline w-5 h-5 mr-2 text-gray-800 dark:text-white"
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
                GitHub
              </a>
            </li>
            <li class="text-right mb-2">
              <a href="https://www.linkedin.com/in/naterchrdsn/" target="_blank">
                <svg
                  class="inline w-5 h-5 mr-2 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li class="text-right">
              <a href="https://bsky.app/profile/naterchrdsn.bsky.social" target="_blank">
                <svg
                  class="inline w-5 h-5 mr-2 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.5 19a4.5 4.5 0 0 0 0-9c-.29 0-.57.02-.85.07A6 6 0 1 0 6 18.5h11.5Z"
                  />
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent {}
