import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-category-two',
  templateUrl: './category-two.html',
  styleUrls: ['./category-two.scss'],
  imports: [CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class CategoryTwo {
  public hotelService = inject(HotelService);

  @Input() package: category[];

  public options: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      892: {
        items: 2,
      },
    },
  };
}
