import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // Using array literal for better readability
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
