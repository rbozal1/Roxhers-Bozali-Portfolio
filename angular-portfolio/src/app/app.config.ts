import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular 21 Zoneless Change Detection powered by fine-grained Signals
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch())
  ]
};
