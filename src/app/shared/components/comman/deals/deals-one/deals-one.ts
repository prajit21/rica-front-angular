import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { deal } from '../../../../../shared/interface/tour-trending';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-deals-one',

  templateUrl: './deals-one.html',
  styleUrls: ['./deals-one.scss'],
  imports: [CarouselModule, RouterLink, NgbRating, NgClass, CurrencySymbolPipe],
})
export class DealsOne {
  readonly hotelService = inject(HotelService);

  readonly deals = input<deal[] | null>(null);
  readonly text = input<boolean>(false);

  readonly options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: { items: 1 },
      668: { items: 2 },
      999: { items: 3 },
    },
  };
}
