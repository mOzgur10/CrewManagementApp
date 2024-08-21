import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule,provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');

}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom([
      
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        
      }
    })]),
    provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
