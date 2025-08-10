import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-floating-nav-buttons',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="floating-nav">
      <button *ngIf="prevRoute" class="nav-btn prev" [routerLink]="prevRoute" aria-label="Previous">
        &#8592;
      </button>
      <button *ngIf="nextRoute" class="nav-btn next" [routerLink]="nextRoute" aria-label="Next">
        &#8594;
      </button>
    </div>
  `,
  styles: [`
    .floating-nav {
      position: fixed;
      bottom: 32px;
      right: 32px;
      display: flex;
      gap: 16px;
      z-index: 1000;
    }
    .nav-btn {
      background: #000;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      font-size: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      cursor: pointer;
      transition: background 0.2s;
    }
  `]
})
export class FloatingNavButtonsComponent {
  @Input() prevRoute?: string;
  @Input() nextRoute?: string;
}
