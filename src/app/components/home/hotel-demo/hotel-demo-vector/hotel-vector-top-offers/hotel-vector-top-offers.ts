import { Component, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { topOffers } from '../../../../../shared/interface/hotel-vector';

@Component({
  selector: 'app-hotel-vector-top-offers',
  templateUrl: './hotel-vector-top-offers.html',
  styleUrls: ['./hotel-vector-top-offers.scss'],
  imports: [CarouselModule],
})
export class HotelVectorTopOffers {
  readonly topOffers = input<topOffers[]>([]);

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      456: {
        items: 2,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      668: {
        items: 3,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      768: {
        items: 4,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      1200: {
        items: 5,
        touchDrag: false,
      },
    },
  };
}
