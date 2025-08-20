import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-travel-insurance',
  templateUrl: './flight-travel-insurance.html',
  styleUrl: './flight-travel-insurance.scss',
  imports: [CurrencySymbolPipe],
})
export class FlightTravelInsurance {
  public hotelService = inject(HotelService);
}
