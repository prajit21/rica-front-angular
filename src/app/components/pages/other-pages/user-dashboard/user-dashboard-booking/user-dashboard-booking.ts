import { Component, inject, input } from '@angular/core';
import { booking } from '../../../../../shared/interface/pages';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-user-dashboard-booking',
    templateUrl: './user-dashboard-booking.html',
    styleUrl: './user-dashboard-booking.scss',
    imports: [NgClass, NgStyle, CurrencySymbolPipe]
})
export class UserDashboardBooking {

  readonly booking = input<booking[]>();

  public hotelService = inject(HotelService); 

}
