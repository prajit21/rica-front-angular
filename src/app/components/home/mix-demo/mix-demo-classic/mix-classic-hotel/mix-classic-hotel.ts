import { Component, input } from '@angular/core';

import { AnimatedImages } from '../../../../../shared/components/comman/animated-images/animated-images';
import { Title } from '../../../../../shared/components/comman/title/title';
import { animatedImage } from '../../../../../shared/interface/cab-modern';

@Component({
  selector: 'app-mix-classic-hotel',
  templateUrl: './mix-classic-hotel.html',
  styleUrls: ['./mix-classic-hotel.scss'],
  imports: [Title, AnimatedImages],
})
export class MixClassicHotel {
  readonly hotelImages = input<animatedImage[]>();
}
