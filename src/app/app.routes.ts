import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutMeComponent } from './home-page/about-me/about-me.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { ExperienceComponent } from './home-page/experience/experience.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { BannerComponent } from './home-page/banner/banner.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'banner',
    component: BannerComponent,
  }
];
