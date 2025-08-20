import { Component, inject, input } from '@angular/core';
import { hotelRooms } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-rooms',
    templateUrl: './hotel-rooms.html',
    styleUrls: ['./hotel-rooms.scss'],
    imports: [NgClass, RouterLink, CurrencySymbolPipe]
})
export class HotelRooms {

  readonly hotelRooms = input<hotelRooms[]>();
  readonly type = input<string>();

  public hotelService = inject(HotelService);

}
