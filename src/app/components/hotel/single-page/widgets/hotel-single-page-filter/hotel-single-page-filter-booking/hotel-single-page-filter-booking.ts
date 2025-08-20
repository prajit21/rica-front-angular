import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective } from '../../../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-hotel-single-page-filter-booking',
  templateUrl: './hotel-single-page-filter-booking.html',
  styleUrls: ['./hotel-single-page-filter-booking.scss'],
  imports: [NgbInputDatepicker, ClickOutsideDirective, RouterLink],
})
export class HotelSinglePageFilterBooking {
  public adults = 1;
  public child = 1;

  public isShow: boolean = false;

  open() {
    this.isShow = !this.isShow;
  }

  changeValue(value: string, number: number) {
    if (number == -1) {
      if (value == 'adult' && this.adults > 1) {
        this.adults -= 1;
      } else if (value == 'children' && this.child > 1) {
        this.child -= 1;
      }
    } else if (number == 1) {
      if (value == 'adult') {
        this.adults += 1;
      } else if (value == 'children') {
        this.child += 1;
      }
    }
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
