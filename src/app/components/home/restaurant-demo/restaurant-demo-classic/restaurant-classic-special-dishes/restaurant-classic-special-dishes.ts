import { Component, inject, Input, input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-restaurant-classic-special-dishes',
    templateUrl: './restaurant-classic-special-dishes.html',
    styleUrls: ['./restaurant-classic-special-dishes.scss'],
    imports: [CarouselModule, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class RestaurantClassicSpecialDishes {

  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly id = input<number[]>();
  @Input() dishes: category[];
  readonly rounded = input<boolean>(true);

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      949: {
        items: 3
      },
    }
   }

   constructor() {
		this.config.max = 5;
		this.config.readonly = true;
	}

  ngOnChanges(){
    if (Array.isArray(this.id())) {
      this.dishes = this.dishes?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
