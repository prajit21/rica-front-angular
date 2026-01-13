import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hotel-breadcrumb',
  templateUrl: './hotel-breadcrumb.html',
  styleUrls: ['./hotel-breadcrumb.scss'],
})
export class HotelBreadcrumb {
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly subParent = input<string>();
  readonly child = input<string>();
  readonly tourBreadcrumb = input<boolean>();
}
