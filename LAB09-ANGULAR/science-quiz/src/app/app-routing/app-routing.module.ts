import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuestionComponent } from '../question/question.component';
import { ResultsComponent } from '../results/results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuestionComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Redirecciona a 'home' si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }