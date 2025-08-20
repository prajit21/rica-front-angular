import { Component, input } from '@angular/core';

@Component({
  selector: 'app-flight-booking-breadcrumb',
  templateUrl: './flight-booking-breadcrumb.html',
  styleUrl: './flight-booking-breadcrumb.scss',
})
export class FlightBookingBreadcrumb {
  readonly bg_image = input<string>();
  readonly parent = input<string>();
  readonly subParent = input<string>();
  readonly child = input<string>();
}
