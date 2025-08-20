import { Component, inject, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { carTypes } from '../../../../../shared/interface/cab-classic';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-cab-classic-car-type',
  templateUrl: './cab-classic-car-type.html',
  styleUrls: ['./cab-classic-car-type.scss'],
  imports: [Title, CarouselModule, CurrencySymbolPipe],
})
export class CabClassicCarType {
  public hotelService = inject(HotelService);

  readonly carTypes = input<carTypes[]>();

  public description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    center: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      999: {
        items: 3,
      },
      1199: {
        items: 3,
      },
    },
  };
}
