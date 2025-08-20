import { Component, input } from '@angular/core';

@Component({
    selector: 'app-hotel-skeleton-details',
    templateUrl: './hotel-skeleton-details.html',
    styleUrls: ['./hotel-skeleton-details.scss'],
    
})
export class HotelSkeletonDetails {

  readonly gridType = input<string>();
  readonly filter = input<boolean>();
}
