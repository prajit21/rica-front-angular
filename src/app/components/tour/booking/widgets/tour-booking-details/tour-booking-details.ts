import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-booking-details',
  templateUrl: './tour-booking-details.html',
  styleUrl: './tour-booking-details.scss',
  imports: [CurrencySymbolPipe],
})
export class TourBookingDetails {
  public hotelService = inject(HotelService);
}
