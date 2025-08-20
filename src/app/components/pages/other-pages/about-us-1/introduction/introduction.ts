import { Component, input } from '@angular/core';

import { AnimatedImages } from '../../../../../shared/components/comman/animated-images/animated-images';
import { animatedImage } from '../../../../../shared/interface/cab-modern';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
  imports: [AnimatedImages],
})
export class Introduction {
  readonly gallery = input<animatedImage[]>();
  readonly classic = input<boolean>(false);
}
