import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tour-skeleton-details',
    templateUrl: './tour-skeleton-details.html',
    styleUrls: ['./tour-skeleton-details.scss'],
    imports: [NgClass]
})
export class TourSkeletonDetails {

  readonly gridType = input<string>();
}
