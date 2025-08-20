import { Component, input } from '@angular/core';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { booking } from '../../../../../shared/interface/hotel-vector';

@Component({
  selector: 'app-tour-vector-booking',
  templateUrl: './tour-vector-booking.html',
  styleUrls: ['./tour-vector-booking.scss'],
  imports: [Animation],
})
export class TourVectorBooking {
  readonly booking = input<booking[]>();
}
