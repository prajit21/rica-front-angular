import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-booking-summary',
  templateUrl: './flight-booking-summary.html',
  styleUrl: './flight-booking-summary.scss',
  imports: [CurrencySymbolPipe],
})
export class FlightBookingSummary {
  public hotelService = inject(HotelService);
}
