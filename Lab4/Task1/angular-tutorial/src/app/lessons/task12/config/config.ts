import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './routes/routes';

export const Config: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

