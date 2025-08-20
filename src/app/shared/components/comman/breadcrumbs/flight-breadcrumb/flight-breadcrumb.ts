import { Component, input } from '@angular/core';

@Component({
  selector: 'app-flight-breadcrumb',
  templateUrl: './flight-breadcrumb.html',
  styleUrl: './flight-breadcrumb.scss',
})
export class FlightBreadcrumb {
  readonly FlightDetails = input<boolean>();
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly child = input<string>();
}
