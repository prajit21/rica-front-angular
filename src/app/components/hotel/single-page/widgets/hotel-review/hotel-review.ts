import { Component, inject, input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { hotelReview } from '../../../../../shared/interface/hotel';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-review',
    templateUrl: './hotel-review.html',
    styleUrls: ['./hotel-review.scss'],
    imports: [NgClass, BarRatingModule]
})
export class HotelReview {

  private config = inject(NgbRatingConfig);

  readonly hotelReview = input<hotelReview[]>();
  readonly type = input<string>();

  constructor() {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
