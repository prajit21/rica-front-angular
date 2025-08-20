import { Component, input } from '@angular/core';

import { GalleryOne } from './gallery-one/gallery-one';
import { GalleryTwo } from './gallery-two/gallery-two';
import { gallery } from '../../../../shared/interface/hotel-classic';
import { images } from '../../../../shared/interface/tour-modern';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss'],
  imports: [GalleryOne, GalleryTwo],
})
export class Gallery {
  readonly type = input<string>();
  readonly gallery = input<gallery[]>();
  readonly images = input<images[]>();
}
