import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-information',
    templateUrl: './cab-information.html',
    styleUrl: './cab-information.scss',
    imports: [CurrencySymbolPipe]
})
export class CabInformation {

  public hotelService = inject(HotelService);

}
