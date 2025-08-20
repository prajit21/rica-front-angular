import { Component, inject, Input } from '@angular/core';
import { continents } from '../../../../../shared/interface/tour-trending';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-tour-trending-explore-continents',
    templateUrl: './tour-trending-explore-continents.html',
    styleUrls: ['./tour-trending-explore-continents.scss'],
    imports: [Title, CarouselModule, CurrencySymbolPipe]
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
        items: 1
      },
      668: {
        items: 3
      }
    }
  }

}
