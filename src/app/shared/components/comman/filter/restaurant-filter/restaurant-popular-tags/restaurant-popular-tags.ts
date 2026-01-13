import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { restaurantPopularTags } from '../../../../../../shared/components/data/data/filter/restaurant';

@Component({
  selector: 'app-restaurant-popular-tags',
  templateUrl: './restaurant-popular-tags.html',
  styleUrl: './restaurant-popular-tags.scss',
})
export class RestaurantPopularTags {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public restaurantPopularTags = restaurantPopularTags;
  public isOpenTag: boolean = true;
  public selectedTags: string[] = [];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedTags = params['tag'] ? params['tag'].split(',') : [];
    });
  }

  openTag() {
    this.isOpenTag = !this.isOpenTag;
  }

  applyFilter(event: Event) {
    const index = this.selectedTags.indexOf((event.target as HTMLInputElement).value); // checked and unchecked value

    if ((event.target as HTMLInputElement).checked) {
      this.selectedTags.push((event.target as HTMLInputElement).value);
    } else {
      this.selectedTags.splice(index, 1);
    }

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tag: this.selectedTags.length ? this.selectedTags.join(',') : null,
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string) {
    if (this.selectedTags?.includes(item)) {
      return true;
    }
    return false;
  }
}
