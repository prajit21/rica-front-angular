import { Component, inject } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { dateSlider } from '../../../../../../../shared/components/data/data/filter/flight';
import { HotelService } from '../../../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../../pipe/currency.pipe';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.html',
  styleUrl: './date-slider.scss',
  imports: [CarouselModule, CurrencySymbolPipe],
})
export class DateSlider {
  public hotelService = inject(HotelService);

  public dateSlider = dateSlider;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      500: {
        items: 4,
      },
      668: {
        items: 5,
      },
      999: {
        items: 7,
      },
    },
  };
}
