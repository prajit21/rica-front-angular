import { Component, input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';

@Component({
    selector: 'app-cab-classic-booking',
    templateUrl: './cab-classic-booking.html',
    styleUrls: ['./cab-classic-booking.scss'],

})
export class CabClassicBooking {

  readonly booking = input<booking[]>();

}
