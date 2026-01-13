import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { hotelFacility } from '../../../../../../shared/components/data/data/filter/hotel';

@Component({
  selector: 'app-hotel-facility',
  templateUrl: './hotel-facility.html',
  styleUrls: ['./hotel-facility.scss'],
})
export class HotelFacility {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public isOpenFacility: boolean = true;
  public hotelFacility = hotelFacility;
  public selectedFacility: string[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedFacility = params['facility'] ? params['facility'].split(',') : [];
    });
  }

  openFacility() {
    this.isOpenFacility = !this.isOpenFacility;
  }

  applyFilter(event: Event) {
    const index = this.selectedFacility.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedFacility.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedFacility.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        facility: this.selectedFacility.length ? this.selectedFacility.join(',') : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedFacility?.includes(item)) {
      return true;
    }
    return false;
  }
}
