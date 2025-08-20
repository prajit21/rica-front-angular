import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner-one',
    templateUrl: './banner-one.html',
    styleUrls: ['./banner-one.scss'],
    imports: [RouterLink, CurrencySymbolPipe]
})
export class BannerOne {

  public hotelService = inject(HotelService);

}
