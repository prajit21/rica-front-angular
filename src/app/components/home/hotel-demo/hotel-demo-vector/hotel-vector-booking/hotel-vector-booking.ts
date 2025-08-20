import { Component, input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-hotel-vector-booking',
    templateUrl: './hotel-vector-booking.html',
    styleUrls: ['./hotel-vector-booking.scss'],
    imports: [Animation]
})
export class HotelVectorBooking {

  readonly booking = input<booking[]>();

}
