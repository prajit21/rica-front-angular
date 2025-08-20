import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-booking-details',
  templateUrl: './hotel-booking-details.html',
  styleUrls: ['./hotel-booking-details.scss'],
  imports: [CurrencySymbolPipe],
})
export class HotelBookingDetails {
  public hotelService = inject(HotelService);
}
