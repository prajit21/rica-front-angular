import { Component, input } from '@angular/core';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { booking } from '../../../../../shared/interface/hotel-vector';

@Component({
  selector: 'app-hotel-vector-booking',
  templateUrl: './hotel-vector-booking.html',
  styleUrls: ['./hotel-vector-booking.scss'],
  imports: [Animation],
})
export class HotelVectorBooking {
  readonly booking = input<booking[]>();
}
