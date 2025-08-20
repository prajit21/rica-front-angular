import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-title-section',
  templateUrl: './hotel-title-section.html',
  styleUrls: ['./hotel-title-section.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class HotelTitleSection {
  public hotelService = inject(HotelService);
}
