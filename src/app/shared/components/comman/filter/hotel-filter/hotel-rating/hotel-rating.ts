import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { hotelRating } from '../../../../../../shared/components/data/data/filter/hotel';

@Component({
  selector: 'app-hotel-rating',
  templateUrl: './hotel-rating.html',
  styleUrls: ['./hotel-rating.scss'],
  imports: [NgbRating],
})
export class HotelRating {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private config = inject(NgbRatingConfig);

  readonly filter = input<Params>();

  public hotelRating = hotelRating;
  public isOpenRating: boolean = true;
  public selectedRating: string[] = [];

  openRating() {
    this.isOpenRating = !this.isOpenRating;
  }

  constructor() {
    // Rating
    this.config.max = 5;
    this.config.readonly = true;

    this.route.queryParams.subscribe(params => {
      this.selectedRating = params['rating'] ? params['rating'].split(',') : [];
    });
  }

  applyFilter(event: Event) {
    const index = this.selectedRating.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedRating.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedRating.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        rating: this.selectedRating.length ? this.selectedRating.join(',') : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedRating?.includes(item)) {
      return true;
    }
    return false;
  }
}
