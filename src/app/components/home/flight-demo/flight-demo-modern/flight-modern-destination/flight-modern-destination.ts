import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { destination } from '../../../../../shared/interface/flight-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-modern-destination',
  templateUrl: './flight-modern-destination.html',
  styleUrls: ['./flight-modern-destination.scss'],
  imports: [Title, CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class FlightModernDestination {
  public hotelService = inject(HotelService);

  readonly destination = input<destination[]>();

  public description =
    'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......';

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 60,
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
