import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { restaurantCuisines } from '../../../../../../shared/components/data/data/filter/restaurant';

@Component({
  selector: 'app-restaurant-cuisines',
  templateUrl: './restaurant-cuisines.html',
  styleUrl: './restaurant-cuisines.scss',
  imports: [NgStyle],
})
export class RestaurantCuisines {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public restaurantCuisines = restaurantCuisines;
  public isOpenCuisines: boolean = true;
  public selectedCuisines: string[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedCuisines = params['cuisines'] ? params['cuisines'].split(',') : [];
    });
  }

  openCuisines() {
    this.isOpenCuisines = !this.isOpenCuisines;
  }

  applyFilter(event: Event) {
    const index = this.selectedCuisines.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedCuisines.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedCuisines.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        cuisines: this.selectedCuisines.length ? this.selectedCuisines.join(',') : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedCuisines?.includes(item)) {
      return true;
    }
    return false;
  }
}
