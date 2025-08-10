
import { Component } from '@angular/core';
import { bounceAnimation } from '../animations';
import { BannerComponent } from './banner/banner.component';
import { FloatingNavButtonsComponent } from '../floating-nav-buttons.component';
import { LoadingScreenComponent } from '../loading-screen.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    FloatingNavButtonsComponent,
    LoadingScreenComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [bounceAnimation],
})
export class HomePageComponent {
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 1 second loading screen
  }
}
