import { Component, input } from '@angular/core';

import { AnimationBird } from './animation-bird/animation-bird';
import { AnimationDots } from './animation-dots/animation-dots';

@Component({
  selector: 'app-animations',
  templateUrl: './animation.html',
  styleUrls: ['./animation.scss'],
  imports: [AnimationDots, AnimationBird],
})
export class Animation {
  readonly type = input<string>();
}
