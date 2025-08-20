import { Component, input } from '@angular/core';

import { PopularDestination } from '../../../../../shared/components/comman/popular-destination/popular-destination';
import { Title } from '../../../../../shared/components/comman/title/title';
import { exploreTheme } from '../../../../../shared/interface/tour-vector';

@Component({
  selector: 'app-tour-vector-explore-themes',
  templateUrl: './tour-vector-explore-themes.html',
  styleUrls: ['./tour-vector-explore-themes.scss'],
  imports: [Title, PopularDestination],
})
export class TourVectorExploreThemes {
  readonly themes = input<exploreTheme[]>();
}
