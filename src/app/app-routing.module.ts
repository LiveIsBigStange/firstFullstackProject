import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegistrPageComponent } from './components/registr-page/registr-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'regist', component: RegistrPageComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
