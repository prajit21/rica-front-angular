import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hotel-title-section',
    templateUrl: './hotel-title-section.html',
    styleUrls: ['./hotel-title-section.scss'],
    imports: [RouterLink, CurrencySymbolPipe]
})
export class HotelTitleSection {

  public hotelService = inject(HotelService);

}
