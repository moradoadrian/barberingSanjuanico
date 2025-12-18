import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Si quitas withHashLocation, recuerda agregar el vercel.json
    provideRouter(routes), 
    // Elimina HttpClientModule si ya usas provideHttpClient()
    provideHttpClient()
  ]
};