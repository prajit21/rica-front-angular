import { Component, inject, input } from '@angular/core';

import { booking } from '../../../../../shared/interface/pages';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-user-dashboard-booking',
  templateUrl: './user-dashboard-booking.html',
  styleUrl: './user-dashboard-booking.scss',
  imports: [CurrencySymbolPipe],
})
export class UserDashboardBooking {
  readonly booking = input<booking[]>();

  public hotelService = inject(HotelService);
}
