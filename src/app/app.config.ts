import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule, provideStore } from '@ngxs/store';
import { MinistryState } from './store/states/ministry.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch()),importProvidersFrom(NgxsModule.forRoot([MinistryState])),
  importProvidersFrom(NgxsLoggerPluginModule.forRoot())]
};
