import { Component, inject, Input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { continents } from '../../../../../shared/interface/tour-trending';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-trending-explore-continents',
  templateUrl: './tour-trending-explore-continents.html',
  styleUrls: ['./tour-trending-explore-continents.scss'],
  imports: [Title, CarouselModule, CurrencySymbolPipe],
})
export class TourTrendingExploreContinents {
  public hotelService = inject(HotelService);

  @Input() continents: continents[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 3,
      },
    },
  };
}
