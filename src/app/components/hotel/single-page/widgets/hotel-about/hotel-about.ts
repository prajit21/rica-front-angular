import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { hotelAbout } from '../../../../../shared/interface/hotel';

@Component({
  selector: 'app-hotel-about',
  templateUrl: './hotel-about.html',
  styleUrls: ['./hotel-about.scss'],
  imports: [NgClass],
})
export class HotelAbout {
  readonly hotelAbout = input<hotelAbout[]>();
  readonly type = input<string>();
}
