import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-category-one',
  templateUrl: './category-one.html',
  styleUrls: ['./category-one.scss'],
  imports: [CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class CategoryOne {
  public hotelService = inject(HotelService);
  readonly category = input<category[]>();

  public options: OwlOptions = {
    loop: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      999: {
        items: 3,
      },
    },
  };
}
