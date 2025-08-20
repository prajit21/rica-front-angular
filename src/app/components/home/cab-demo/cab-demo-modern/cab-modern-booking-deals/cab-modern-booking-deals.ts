import { Component, inject, Input, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { cabDetails } from '../../../../../shared/interface/cab-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-cab-modern-booking-deals',
  templateUrl: './cab-modern-booking-deals.html',
  styleUrls: ['./cab-modern-booking-deals.scss'],
  imports: [Title, CarouselModule, CurrencySymbolPipe],
})
export class CabModernBookingDeals {
  public hotelService = inject(HotelService);

  readonly id = input<number[]>();
  @Input() cab: cabDetails[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 80,
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

  ngOnChanges() {
    if (Array.isArray(this.id())) {
      this.cab = this.cab.filter(item => {
        return this.id()?.includes(item.id);
      });
    }
  }
}
