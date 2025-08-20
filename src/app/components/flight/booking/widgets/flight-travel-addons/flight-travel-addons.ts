import { Component, inject, input } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-travel-addons',
    templateUrl: './flight-travel-addons.html',
    styleUrl: './flight-travel-addons.scss',
    imports: [CurrencySymbolPipe]
})
export class FlightTravelAddons {

  readonly title = input<string>();

  public hotelService = inject(HotelService);

}
