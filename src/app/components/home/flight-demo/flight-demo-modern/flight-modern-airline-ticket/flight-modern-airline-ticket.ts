import { Component, inject, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { Title } from '../../../../../shared/components/comman/title/title';
import { category } from '../../../../../shared/interface/tour-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-modern-airline-ticket',
  templateUrl: './flight-modern-airline-ticket.html',
  styleUrls: ['./flight-modern-airline-ticket.scss'],
  imports: [Title, CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class FlightModernAirlineTicket {
  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly id = input<number[]>();
  @Input() flightDetails: category[];

  public description =
    'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......';

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
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

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  ngOnChanges() {
    if (Array.isArray(this.id())) {
      this.flightDetails = this.flightDetails?.filter(data => {
        return this.id()?.includes(data.id);
      });
    }
  }
}
