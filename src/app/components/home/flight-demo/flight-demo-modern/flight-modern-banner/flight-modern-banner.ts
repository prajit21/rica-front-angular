import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-modern-banner',
  templateUrl: './flight-modern-banner.html',
  styleUrls: ['./flight-modern-banner.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class FlightModernBanner {
  public hotelService = inject(HotelService);
}
