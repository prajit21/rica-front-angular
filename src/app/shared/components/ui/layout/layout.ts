import { Component, input } from '@angular/core';

import { Loader } from '../../comman/loader/loader';
import { Customizer } from '../customizer/customizer';
import { TapToTop } from '../tap-to-top/tap-to-top';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  imports: [TapToTop, Customizer, Loader],
})
export class Layout {
  readonly loaderType = input<string>();
  readonly gridType = input<string>();
  readonly filter = input<boolean>();
  readonly skeletonType = input<string>();
  readonly filterType = input<string>();
  readonly mapFilter = input<boolean>(false);
  readonly mapSide = input<string>();
  readonly list = input<boolean>(false);
  readonly grid = input<boolean>(true);
  readonly withOutTopPage = input<boolean>(false);
  readonly breadcrumbSection = input<boolean>(true);
  readonly hotel = input<boolean>(false);
  readonly tour = input<boolean>(false);
  readonly tourClassicGallery = input<boolean>(false);
  readonly flight = input<boolean>(false);
  readonly map = input<boolean>();
  readonly horizontalFilter = input<boolean>(false);
  readonly restaurantBreadcrumb = input<boolean>(false);
  readonly creativeList = input<boolean>(false);
  readonly mix = input<boolean>(false);
}
