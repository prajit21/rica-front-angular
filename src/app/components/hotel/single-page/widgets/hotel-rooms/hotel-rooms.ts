import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { hotelRooms } from '../../../../../shared/interface/hotel';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.html',
  styleUrls: ['./hotel-rooms.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class HotelRooms {
  readonly hotelRooms = input<hotelRooms[]>();
  readonly type = input<string>();

  public hotelService = inject(HotelService);
}
