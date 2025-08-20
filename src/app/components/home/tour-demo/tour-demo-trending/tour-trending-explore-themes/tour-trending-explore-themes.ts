import { Component, inject, Input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { themes } from '../../../../../shared/interface/tour-trending';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-trending-explore-themes',
  templateUrl: './tour-trending-explore-themes.html',
  styleUrls: ['./tour-trending-explore-themes.scss'],
  imports: [Title, CarouselModule, CurrencySymbolPipe],
})
export class TourTrendingExploreThemes {
  public hotelService = inject(HotelService);

  @Input() themes: themes[];

  public options = {
    loop: false,
    nav: false,
    dots: false,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      530: {
        items: 2,
      },
      950: {
        items: 3,
      },
      999: {
        items: 4,
      },
    },
  };
}
