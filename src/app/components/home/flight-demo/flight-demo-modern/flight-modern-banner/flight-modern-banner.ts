import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-modern-banner',
    templateUrl: './flight-modern-banner.html',
    styleUrls: ['./flight-modern-banner.scss'],
    imports: [RouterLink, CurrencySymbolPipe]
})
export class FlightModernBanner {

  public hotelService = inject(HotelService);

}
