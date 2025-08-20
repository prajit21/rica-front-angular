import { Component, inject, Input } from '@angular/core';
import { airlineDestination } from '../../../../../shared/interface/flight-left-sidebar';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-flight-left-sidebar-airline-destination',
    templateUrl: './flight-left-sidebar-airline-destination.html',
    styleUrls: ['./flight-left-sidebar-airline-destination.scss'],
    imports: [CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class FlightLeftSidebarAirlineDestination {

  public hotelService = inject(HotelService);

  @Input() destination: airlineDestination[];

  public options = {
    loop: false,
    nav: true,
    dots: false,
    margin: 30,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
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
      1200: {
        items: 4
      }
    }
   }

}
