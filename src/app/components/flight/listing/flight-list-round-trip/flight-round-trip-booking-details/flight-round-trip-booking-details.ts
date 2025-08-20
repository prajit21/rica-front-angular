import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-round-trip-booking-details',
  templateUrl: './flight-round-trip-booking-details.html',
  styleUrl: './flight-round-trip-booking-details.scss',
  imports: [CurrencySymbolPipe],
})
export class FlightRoundTripBookingDetails {
  public hotelService = inject(HotelService);
}
