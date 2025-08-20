import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-tour-booking-details',
    templateUrl: './tour-booking-details.html',
    styleUrl: './tour-booking-details.scss',
    imports: [CurrencySymbolPipe]
})
export class TourBookingDetails {

  public hotelService = inject(HotelService);
  
}
