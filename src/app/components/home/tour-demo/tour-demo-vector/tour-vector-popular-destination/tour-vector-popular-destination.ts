import { Component, input } from '@angular/core';

import { PopularDestination } from '../../../../../shared/components/comman/popular-destination/popular-destination';
import { Title } from '../../../../../shared/components/comman/title/title';
import { popularDestination } from '../../../../../shared/interface/hotel-vector';

@Component({
  selector: 'app-tour-vector-popular-destination',
  templateUrl: './tour-vector-popular-destination.html',
  styleUrls: ['./tour-vector-popular-destination.scss'],
  imports: [Title, PopularDestination],
})
export class TourVectorPopularDestination {
  readonly popularDestination = input<popularDestination[]>();
}
