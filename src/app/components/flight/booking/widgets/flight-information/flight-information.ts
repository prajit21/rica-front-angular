import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.html',
  styleUrl: './flight-information.scss',
  imports: [CurrencySymbolPipe],
})
export class FlightInformation {
  public hotelService = inject(HotelService);
}
