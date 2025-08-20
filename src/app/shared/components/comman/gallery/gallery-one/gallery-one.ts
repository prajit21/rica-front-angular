import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { gallery } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.html',
  styleUrls: ['./gallery-one.scss'],
  imports: [CarouselModule, RouterLink],
})
export class GalleryOne {
  @Input() gallery: gallery[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      586: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
}
