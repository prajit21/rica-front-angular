import { Component, input } from '@angular/core';
import { animatedImage } from '../../../../../shared/interface/cab-modern';
import { AnimatedImages } from '../../../../../shared/components/comman/animated-images/animated-images';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.html',
    styleUrl: './introduction.scss',
    imports: [AnimatedImages]
})
export class Introduction {

  readonly gallery = input<animatedImage[]>();
  readonly classic = input<boolean>(false);

}
