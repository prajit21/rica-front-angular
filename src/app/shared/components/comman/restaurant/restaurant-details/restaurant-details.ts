import { Component, inject, Input } from '@angular/core';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurant-details',
    templateUrl: './restaurant-details.html',
    styleUrls: ['./restaurant-details.scss'],
    imports: [RouterLink, NgClass, CurrencySymbolPipe]
})
export class RestaurantDetails {

  @Input() restaurantDetails: restaurantDetail;

  public hotelService = inject(HotelService);

}
