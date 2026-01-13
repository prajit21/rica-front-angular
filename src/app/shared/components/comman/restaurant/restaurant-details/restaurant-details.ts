import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.html',
  styleUrls: ['./restaurant-details.scss'],
  imports: [RouterLink, NgClass, CurrencySymbolPipe],
})
export class RestaurantDetails {
  readonly restaurantDetails = input<restaurantDetail | null>(null);

  public hotelService = inject(HotelService);
}
