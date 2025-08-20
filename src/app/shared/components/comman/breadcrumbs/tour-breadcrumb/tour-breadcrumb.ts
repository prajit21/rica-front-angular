import { Component, input } from '@angular/core';

import { Animation } from '../../animation/animation';

@Component({
  selector: 'app-tour-breadcrumb',
  templateUrl: './tour-breadcrumb.html',
  styleUrl: './tour-breadcrumb.scss',
  imports: [Animation],
})
export class TourBreadcrumb {
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly child = input<string>();
}
