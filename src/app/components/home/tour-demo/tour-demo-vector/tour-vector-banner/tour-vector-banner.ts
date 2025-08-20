import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-vector-banner',
  templateUrl: './tour-vector-banner.html',
  styleUrls: ['./tour-vector-banner.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class TourVectorBanner {
  public hotelService = inject(HotelService);
}
