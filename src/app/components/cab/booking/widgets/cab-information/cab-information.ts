import { Component, inject } from '@angular/core';

import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-cab-information',
  templateUrl: './cab-information.html',
  styleUrl: './cab-information.scss',
  imports: [CurrencySymbolPipe],
})
export class CabInformation {
  public hotelService = inject(HotelService);
}
