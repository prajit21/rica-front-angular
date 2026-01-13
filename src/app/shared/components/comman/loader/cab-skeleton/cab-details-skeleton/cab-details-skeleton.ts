import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cab-details-skeleton',
  templateUrl: './cab-details-skeleton.html',
  styleUrl: './cab-details-skeleton.scss',
})
export class CabDetailsSkeleton {
  readonly gridType = input<string>();
}
