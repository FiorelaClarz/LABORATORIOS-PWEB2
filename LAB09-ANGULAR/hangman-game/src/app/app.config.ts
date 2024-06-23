// src/app/app.config.ts

import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  // Otras configuraciones

};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      // { path: 'question', component: QuestionComponent },
      { path: 'home', component: HomeComponent },
      // { path: 'results', component: ResultsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    // otros proveedores
  ],
};
