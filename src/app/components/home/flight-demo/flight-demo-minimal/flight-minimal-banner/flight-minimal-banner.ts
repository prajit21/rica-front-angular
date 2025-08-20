import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-minimal-banner',
    templateUrl: './flight-minimal-banner.html',
    styleUrls: ['./flight-minimal-banner.scss'],
    imports: [RouterLink, CurrencySymbolPipe]
})
export class FlightMinimalBanner {

  public hotelService = inject(HotelService);

}
