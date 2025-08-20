import { Component, input } from '@angular/core';
import { tourAccommodation } from '../../../../../shared/interface/tour';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tour-accommodation',
    templateUrl: './tour-accommodation.html',
    styleUrl: './tour-accommodation.scss',
    imports: [RouterLink]
})
export class TourAccommodation {

  readonly accommodations = input<tourAccommodation[]>();
  readonly description = input<boolean>(true);

}
