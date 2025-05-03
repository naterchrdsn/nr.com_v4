import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section
      id="about"
      class="bg-linear-to-br from-slate-100 to-slate-300 flex mh-full w-full flex-col px-12 py-26"
    >
      <div class="mx-auto format mb-18">
        <h2 class="text-4xl">About</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mb-18 text-center justify-center">
        <div class="format">
          <img
            src="img/nate_richardson_headshot2.jpg"
            alt="Nate Richardson Headshot"
            class="h-75 w-75 rounded-full object-cover mt-8"
          />
        </div>
        <div class="max-w-md mx-auto text-left format">
          <strong>Hey there, I'm Nate!</strong>
          <p class="leading-relaxed">
            I own and operate Nacho Labs, a boutique web solutions company specializing in
            development, hosting, and webmastering services in the Atlanta area. I also work
            full-time as a Lead Application Developer at ADP. When I’m not coding, I’m usually
            tinkering—whether with my home lab or a grill full of something delicious.
          </p>
          <p class="">
            I enjoy video games, spending time with my dog and three cats, and generally finding new
            things to make, break, and improve.
          </p>
          <p class="">
            I believe great software (like great food) should be crafted with care, built to last,
            and enjoyed by the people using it.
          </p>
          <p class="">
            If you want to collaborate, swap ideas, or just talk shop over a good cup of mushroom
            coffee, drop me a line. Let’s build something great.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
