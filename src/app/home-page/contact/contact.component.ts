import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.updateParallax();
    window.addEventListener('scroll', this.updateParallax);
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
