import { Component, Input } from '@angular/core';
import { restaurantCategory } from '../../../../../shared/interface/restaurant-minimal';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-restaurant-minimal-category',
    templateUrl: './restaurant-minimal-category.html',
    styleUrls: ['./restaurant-minimal-category.scss'],
    imports: [CarouselModule, RouterLink]
})
export class RestaurantMinimalCategory {

  @Input() category: restaurantCategory[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      456: {
        items: 3
      },
      668: {
        items: 4
      },
      900: {
        items: 5
      },
      999: {
        items: 6
      }
    }
  }
}
