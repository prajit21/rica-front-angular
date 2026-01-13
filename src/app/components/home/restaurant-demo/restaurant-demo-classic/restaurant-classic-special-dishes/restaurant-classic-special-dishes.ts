import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { category } from '../../../../../shared/interface/tour-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-restaurant-classic-special-dishes',
  templateUrl: './restaurant-classic-special-dishes.html',
  styleUrls: ['./restaurant-classic-special-dishes.scss'],
  imports: [CarouselModule, RouterLink, NgbRating, CurrencySymbolPipe],
})
export class RestaurantClassicSpecialDishes {
  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly id = input<number[] | null>(null);
  readonly dishes = input<category[]>([]);
  readonly rounded = input<boolean>(true);

  readonly filteredDishes = computed(() => {
    const ids = this.id();
    const list = this.dishes();

    if (!ids || !ids.length) {
      return list;
    }

    return list.filter(item => ids.includes(item.id));
  });

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: { items: 1 },
      550: { items: 2 },
      949: { items: 3 },
    },
  };

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
