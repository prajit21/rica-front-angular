import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-booking-summary',
    templateUrl: './cab-booking-summary.html',
    styleUrl: './cab-booking-summary.scss',
    imports: [CurrencySymbolPipe]
})
export class CabBookingSummary {

  public hotelService = inject(HotelService);

}
