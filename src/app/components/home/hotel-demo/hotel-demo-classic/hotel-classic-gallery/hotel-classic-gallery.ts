import { Component, input } from '@angular/core';

import { Gallery } from '../../../../../shared/components/comman/gallery/gallery';
import { Title } from '../../../../../shared/components/comman/title/title';
import { gallery } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-hotel-classic-gallery',
  templateUrl: './hotel-classic-gallery.html',
  styleUrls: ['./hotel-classic-gallery.scss'],
  imports: [Title, Gallery],
})
export class HotelClassicGallery {
  readonly gallery = input<gallery[]>();
  readonly sectionClass = input<boolean>(true);
}
