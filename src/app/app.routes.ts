import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];
