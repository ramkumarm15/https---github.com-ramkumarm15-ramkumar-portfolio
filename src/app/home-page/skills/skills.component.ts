import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
@ViewChild('slider', { static: false }) slider!: ElementRef<HTMLDivElement>;

  onSliderWheel(event: WheelEvent) {
    event.preventDefault();
    const slider = this.slider?.nativeElement;
    if (slider) {
      // Scroll horizontally by wheel delta (support both axes)
      slider.scrollLeft += event.deltaY !== 0 ? event.deltaY : event.deltaX;
    }
  }
}
