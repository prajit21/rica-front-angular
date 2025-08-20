import { Component, inject } from '@angular/core';

import { flightAdditionalLuggage } from '../../../../../shared/components/data/data/filter/flight';
import { additionalLuggage } from '../../../../../shared/interface/flight';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-additional-luggage',
  templateUrl: './flight-additional-luggage.html',
  styleUrl: './flight-additional-luggage.scss',
  imports: [CurrencySymbolPipe],
})
export class FlightAdditionalLuggage {
  public hotelService = inject(HotelService);

  public flightAdditionalLuggage: additionalLuggage[] = flightAdditionalLuggage;
}
