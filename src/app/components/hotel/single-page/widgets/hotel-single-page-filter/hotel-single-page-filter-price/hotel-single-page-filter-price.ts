import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-single-page-filter-price',
  templateUrl: './hotel-single-page-filter-price.html',
  styleUrls: ['./hotel-single-page-filter-price.scss'],
  imports: [CurrencySymbolPipe],
})
export class HotelSinglePageFilterPrice {
  public hotelService = inject(HotelService);
}
