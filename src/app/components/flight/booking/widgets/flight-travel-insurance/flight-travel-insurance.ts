import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-travel-insurance',
    templateUrl: './flight-travel-insurance.html',
    styleUrl: './flight-travel-insurance.scss',
    imports: [CurrencySymbolPipe]
})
export class FlightTravelInsurance {

  public hotelService = inject(HotelService);

}
