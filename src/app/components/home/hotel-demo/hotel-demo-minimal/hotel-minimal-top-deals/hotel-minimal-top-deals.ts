import { Component, inject, input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { hotels } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-hotel-minimal-top-deals',
    templateUrl: './hotel-minimal-top-deals.html',
    styleUrls: ['./hotel-minimal-top-deals.scss'],
    imports: [Title, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class HotelMinimalTopDeals {

  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly hotels = input<hotels[]>();

  constructor() {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
