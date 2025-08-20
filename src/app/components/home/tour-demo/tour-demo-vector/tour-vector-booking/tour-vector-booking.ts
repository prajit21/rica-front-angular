import { Component, input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-tour-vector-booking',
    templateUrl: './tour-vector-booking.html',
    styleUrls: ['./tour-vector-booking.scss'],
    imports: [Animation]
})
export class TourVectorBooking {

  readonly booking = input<booking[]>();

}
