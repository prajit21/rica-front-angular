import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { tourFlights } from '../../../../../../shared/components/data/data/filter/tour';

@Component({
  selector: 'app-tour-flights',
  templateUrl: './tour-flights.html',
  styleUrls: ['./tour-flights.scss'],
})
export class TourFlights {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public tourFlights = tourFlights;
  public isFlight: boolean = true;
  public selectedFlight: string[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedFlight = params['flight'] ? params['flight'].split(',') : [];
    });
  }

  openFlights() {
    this.isFlight = !this.isFlight;
  }

  applyFilter(event: Event) {
    const index = this.selectedFlight.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedFlight.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedFlight.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        flight: this.selectedFlight.length ? this.selectedFlight.join(',') : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedFlight?.includes(item)) {
      return true;
    }
    return false;
  }
}
