import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { topDestination } from '../../../../../shared/interface/flight-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-modern-top-destination',
  templateUrl: './flight-modern-top-destination.html',
  styleUrls: ['./flight-modern-top-destination.scss'],
  imports: [Title, CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class FlightModernTopDestination {
  public hotelService = inject(HotelService);

  readonly topDestination = input<topDestination[]>();

  public description =
    'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......';

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeOut: 700,
    responsive: {
      0: {
        items: 1,
      },
      456: {
        items: 2,
      },
      668: {
        items: 3,
      },
      960: {
        items: 4,
      },
      999: {
        items: 5,
      },
    },
  };
}
