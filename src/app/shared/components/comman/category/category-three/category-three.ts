import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-category-three',
  templateUrl: './category-three.html',
  styleUrls: ['./category-three.scss'],
  imports: [CarouselModule, NgbRating, RouterLink, CurrencySymbolPipe],
})
export class CategoryThree {
  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  @Input() category: category[];

  public options: OwlOptions = {
    loop: false,
    nav: true,
    dots: false,
    margin: 50,
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
        items: 4,
      },
    },
  };

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
