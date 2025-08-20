import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { topCities } from '../../../../../shared/interface/hotel-minimal';

@Component({
  selector: 'app-hotel-minimal-top-city',
  templateUrl: './hotel-minimal-top-city.html',
  styleUrls: ['./hotel-minimal-top-city.scss'],
  imports: [CarouselModule, RouterLink],
})
export class HotelMinimalTopCity {
  @Input() topCity: topCities[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      456: {
        items: 3,
      },
      668: {
        items: 4,
      },
      924: {
        items: 5,
      },
      1367: {
        items: 6,
      },
    },
  };
}
