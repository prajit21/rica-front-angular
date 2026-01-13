import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { socialGallery } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-restaurant-classic-social-gallery',
  templateUrl: './restaurant-classic-social-gallery.html',
  styleUrls: ['./restaurant-classic-social-gallery.scss'],
  imports: [CarouselModule, RouterLink],
})
export class RestaurantClassicSocialGallery {
  readonly id = input<number[]>();
  readonly socialGallery = input<socialGallery[]>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      767: {
        items: 4,
      },
      999: {
        items: 5,
      },
      1199: {
        items: 6,
      },
    },
  };
}
