import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-round-trip-booking-details',
    templateUrl: './flight-round-trip-booking-details.html',
    styleUrl: './flight-round-trip-booking-details.scss',
    imports: [CurrencySymbolPipe]
})
export class FlightRoundTripBookingDetails {

  public hotelService = inject(HotelService);

}
