import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-information',
    templateUrl: './flight-information.html',
    styleUrl: './flight-information.scss',
    imports: [CurrencySymbolPipe]
})
export class FlightInformation {

  public hotelService = inject(HotelService);

}
