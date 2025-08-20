import { Component, input } from '@angular/core';
import { hotelPolicy } from '../../../../../shared/interface/hotel';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-policy',
    templateUrl: './hotel-policy.html',
    styleUrls: ['./hotel-policy.scss'],
    imports: [NgClass]
})
export class HotelPolicy {

  readonly hotelPolicy = input<hotelPolicy[]>();
  readonly type = input<string>();

}
