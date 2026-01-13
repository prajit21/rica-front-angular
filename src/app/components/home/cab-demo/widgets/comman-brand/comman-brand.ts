import { Component, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { brand } from '../../../../../shared/interface/cab-modern';

@Component({
  selector: 'app-comman-brand',
  templateUrl: './comman-brand.html',
  styleUrls: ['./comman-brand.scss'],
  imports: [CarouselModule],
})
export class CommanBrand {
  readonly brand = input<brand[]>();

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      396: {
        items: 3,
      },
      548: {
        items: 4,
      },
      1100: {
        items: 5,
      },
    },
  };
}
