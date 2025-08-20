import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-banner-one',
  templateUrl: './banner-one.html',
  styleUrls: ['./banner-one.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class BannerOne {
  public hotelService = inject(HotelService);
}
