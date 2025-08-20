import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flightDepartureTime } from '../../../../../../../shared/components/data/data/filter/flight';

@Component({
  selector: 'app-flight-departure-time',
  templateUrl: './flight-departure-time.html',
  styleUrl: './flight-departure-time.scss',
})
export class FlightDepartureTime {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public flightDepartureTime = flightDepartureTime;
  public selectedDepartureTime: string[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedDepartureTime = params['departure_time']
        ? params['departure_time'].split(',')
        : [];
    });
  }

  applyFilter(event: Event) {
    const index = this.selectedDepartureTime.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedDepartureTime.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedDepartureTime.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        departure_time: this.selectedDepartureTime.length
          ? this.selectedDepartureTime.join(',')
          : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedDepartureTime?.includes(item)) {
      return true;
    }
    return false;
  }
}
