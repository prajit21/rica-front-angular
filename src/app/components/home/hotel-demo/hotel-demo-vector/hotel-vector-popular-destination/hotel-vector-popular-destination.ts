import { Component, input } from '@angular/core';

import { PopularDestination } from '../../../../../shared/components/comman/popular-destination/popular-destination';
import { popularDestination } from '../../../../../shared/interface/hotel-vector';

@Component({
  selector: 'app-hotel-vector-popular-destination',
  templateUrl: './hotel-vector-popular-destination.html',
  styleUrls: ['./hotel-vector-popular-destination.scss'],
  imports: [PopularDestination],
})
export class HotelVectorPopularDestination {
  readonly popularDestination = input<popularDestination[]>();
}
