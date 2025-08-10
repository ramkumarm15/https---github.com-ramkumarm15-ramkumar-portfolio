
import { Component } from '@angular/core';
import { bounceAnimation } from '../animations';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [bounceAnimation],
})
export class HomePageComponent {}
