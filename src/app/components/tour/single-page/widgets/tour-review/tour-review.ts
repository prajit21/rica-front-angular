import { Component, input } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

import { hotelReview } from '../../../../../shared/interface/hotel';

@Component({
  selector: 'app-tour-review',
  templateUrl: './tour-review.html',
  styleUrl: './tour-review.scss',
  imports: [BarRatingModule],
})
export class TourReview {
  readonly review = input<hotelReview[]>();
}
