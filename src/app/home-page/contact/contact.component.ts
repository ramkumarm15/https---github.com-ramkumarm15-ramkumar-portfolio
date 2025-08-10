import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingNavButtonsComponent } from '../../floating-nav-buttons.component';
import { LoadingScreenComponent } from '../../loading-screen.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FloatingNavButtonsComponent, LoadingScreenComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  isLoading = true;

  ngAfterViewInit() {
    this.updateParallax();
    window.addEventListener('scroll', this.updateParallax);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 1 second loading screen
  }

  updateParallax = () => {
    const bg1 = document.querySelector('.parallax-bg1') as HTMLElement;
    const bg2 = document.querySelector('.parallax-bg2') as HTMLElement;
    const bg3 = document.querySelector('.parallax-bg3') as HTMLElement;
    const scrolled = window.scrollY;
    if (bg1) bg1.style.transform = `translateY(${scrolled * 0.2}px)`;
    if (bg2) bg2.style.transform = `translateY(${scrolled * 0.4}px)`;
    if (bg3) bg3.style.transform = `translateY(${scrolled * 0.7}px)`;
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.updateParallax);
  }
}
