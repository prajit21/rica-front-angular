import { Component, inject, input } from '@angular/core';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-category-four',
  templateUrl: './category-four.html',
  styleUrls: ['./category-four.scss'],
  imports: [CarouselModule, NgbRating, CurrencySymbolPipe],
})
export class CategoryFour {
  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly category = input<category[]>();

  public options = {
    loop: false,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2,
      },
      949: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
