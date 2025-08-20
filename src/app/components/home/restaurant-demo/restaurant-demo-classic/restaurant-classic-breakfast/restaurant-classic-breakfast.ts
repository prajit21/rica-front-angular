import { ViewportScroller, NgStyle } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { breakfast } from '../../../../../shared/interface/restaurant-classic';

@Component({
  selector: 'app-restaurant-classic-breakfast',
  templateUrl: './restaurant-classic-breakfast.html',
  styleUrls: ['./restaurant-classic-breakfast.scss'],
  imports: [NgStyle, NgbRating],
})
export class RestaurantClassicBreakfast {
  private config = inject(NgbRatingConfig);
  private viewScroller = inject(ViewportScroller);

  readonly breakfast = input<breakfast[]>();

  public breakfastData: breakfast[] = [];

  public isOpen: boolean = false;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  ngOnInit() {
    this.breakfastData = this.breakfast()!;
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  filterItems(value: string) {
    this.breakfastData = [];
    this.breakfast()?.filter(data => {
      if (value === data.type) {
        this.breakfastData.push(data);
      } else if (value == '') {
        this.breakfastData.push(data);
      }
    });
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
