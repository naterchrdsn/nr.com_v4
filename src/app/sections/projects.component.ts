import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section
      id="projects"
      class="bg-linear-to-br from-slate-100 to-slate-300 min-h-full w-full flex flex-col px-0 md:px-0 lg:px-12 py-26"
    >
      <div class="mx-auto format mb-18">
        <h2 class="text-4xl">Projects</h2>
      </div>

      <div>
        <div
          *ngFor="let project of projects"
          class="w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mx-auto mt-10 px-8 py-12 bg-gray-50 shadow-md rounded-box"
        >
          <div class="format">
            <h5>
              <strong>{{ project.title }}</strong>
            </h5>
            <p [innerHTML]="project.description"></p>
            <p>
              <strong>Technologies used:</strong><br /><span
                [innerHTML]="project.technologies"
              ></span>
            </p>
          </div>
          <div class="format justify-center items-center flex flex-col">
            <img
              [src]="project.image"
              [alt]="project.title + ' Screenshot'"
              class="w-full h-full object-cover border border-gray-300 rounded-lg mb-4"
            />
            <a
              *ngIf="project.link"
              [href]="project.link"
              class="no-underline justify-center mt-8 flex text-white bg-gradient-to-br from-yellow-600 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 items-center mx-auto font-bold py-2 px-4 rounded"
            >
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
              &nbsp; View Project
            </a>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col mt-10">
        <div class="mx-auto format mb-18">
          <h3>Websites</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          <div class="p-4 flex w-full flex-col format">
            <img
              src="img/portfolio/Deanne-Burch-Photography_Version-2.png"
              alt="Deanne Burch Photography"
              class="h-full object-cover border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <div class="p-4 flex w-full flex-col format">
            <img
              src="img/portfolio/GReY_all.png"
              alt="GReY"
              class="h-full object-cover border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <div class="p-4 flex w-full flex-col format">
            <img
              src="img/portfolio/HACC-Foundation.png"
              alt="HACC Foundation"
              class="h-full object-cover border border-gray-300 rounded-lg mb-4"
            />
          </div>
          <div class="p-4 flex w-full flex-col format">
            <img
              src="img/portfolio/Revolving-Bear.png"
              alt="Revolving Bear"
              class="h-full object-cover border border-gray-300 rounded-lg mb-4"
            />
          </div>
        </div>
      </div>

      <section id="companies" class="h-full flex flex-col justify-center items-center p-8">
        <div class="mx-auto format mb-18">
          <h3>I've worked with</h3>
        </div>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-500 p-12 rounded-lg shadow-md rounded-box"
        >
          <div *ngFor="let logo of clientLogos" class="flex justify-center items-center format">
            <img [src]="logo.src" [alt]="logo.title" class="w-full object-cover mb-4" />
          </div>
        </div>
      </section>
    </section>
  `,
  styles: [],
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Spudnik',
      description: `Spudnik is a discord bot focused on guild management and adding interesting and useful functionality to your server. It was built on top of some of the most popular and widely used frameworks for extendibility and written with organization and customization in mind.<br>At the bot’s peak, it was in almost 200 servers and was successfully scaled to handle thousands of concurrent user interactions on Heroku. With the bot being depended on by so many users, I took the time to implement excellent CI/CD practices and downtime was minimal.`,
      technologies:
        '– Typescript<br>– mongoDB<br>– discord.js + klasa framework<br>– Github Pages<br>– nodemon<br>– TravisCI<br>– Heroku',
      image: 'img/portfolio/spudnik.png',
      link: 'https://github.com/Spudnik-Group/Spudnik',
    },
    {
      title: 'Kirbi',
      description: `Kirbi is a self-hosted, modular chat bot for Slack and Discord. While there was an official Kirbi bot serving a few servers, the goal was for anyone to host their own instance of Kirbi and only add the functionality they are interested in.<br>I also created multiple modules for integration with Kirbi instances ranging from platform integration (Discord/Slack), to fun (random cat facts, xkcd comics, etc), and also some more involved lookup commands (wikipedia, dictionary, and other 3rd party apis). The focus of the project started to be on adding modules specific to Discord, adding features that were not available on the platform at the time.`,
      technologies: '– Javascript<br>– @slack/client + discord.js<br>– TravisCI<br>– GCP',
      image: 'img/portfolio/kirbi.png',
      link: 'https://github.com/Kirbi-bot/Kirbi',
    },
  ];
  clientLogos = [
    { src: 'img/client_logos/cuda_logo.png', title: 'cuda logo' },
    { src: 'img/client_logos/dancy_chiro_logo.png', title: 'dancy chiro logo' },
    { src: 'img/client_logos/dbp_logo.png', title: 'dbp logo' },
    { src: 'img/client_logos/gadg_logo.png', title: 'gadg logo' },
    { src: 'img/client_logos/grey_logo.png', title: 'grey logo' },
    { src: 'img/client_logos/kh_logo.png', title: 'kh logo' },
    { src: 'img/client_logos/pg_logo.png', title: 'pg logo' },
    { src: 'img/client_logos/tiig_logo.png', title: 'tiig logo' },
  ];

  constructor(private router: Router) {}

  goToProject(link: string) {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener');
    } else {
      this.router.navigate([link]);
    }
  }
}
