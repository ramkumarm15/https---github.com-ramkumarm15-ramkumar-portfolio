import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const bounceAnimation = trigger('bounce', [
  transition(
    '*=>*',
    animate(
      '1s ease-in-out infinite',
      keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(-10px)', offset: 0.5 }),
        style({ transform: 'translateY(0)', offset: 1 }),
      ])
    )
  ),
]);