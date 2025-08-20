import { Component, input } from '@angular/core';

import { AnimatedImages } from '../../../../../shared/components/comman/animated-images/animated-images';
import { Title } from '../../../../../shared/components/comman/title/title';
import { animatedImage } from '../../../../../shared/interface/cab-modern';

@Component({
  selector: 'app-hotel-classic-about-hotel',
  templateUrl: './hotel-classic-about-hotel.html',
  styleUrls: ['./hotel-classic-about-hotel.scss'],
  imports: [Title, AnimatedImages],
})
export class HotelClassicAboutHotel {
  readonly hotelImages = input<animatedImage[]>();
}
