import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()
    
//   ]

// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'question', component: QuestionComponent },
      { path: 'home', component: HomeComponent },
      { path: 'results', component: ResultsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    // otros proveedores
  ],
};