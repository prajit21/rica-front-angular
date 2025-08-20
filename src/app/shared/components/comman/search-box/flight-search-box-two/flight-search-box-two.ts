import { NgClass } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideDirective } from '../../../../directives/outside.directive';
import { seatType } from '../../../data/data/flight';

@Component({
  selector: 'app-flight-search-box-two',
  templateUrl: './flight-search-box-two.html',
  styleUrls: ['./flight-search-box-two.scss'],
  imports: [ClickOutsideDirective, NgClass, NgbInputDatepicker],
})
export class FlightSearchBoxTwo {
  readonly text = input<boolean>();
  readonly borderClass = input<boolean>();
  readonly searchFix = input<boolean>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }

  public seatType = seatType;
  public isFrom: boolean = false;
  public isTo: boolean = false;
  public isTraveler: boolean = false;
  public fromLocation: string = '';
  public toLocation: string = '';

  public adults = 1;
  public child = 1;

  public searchFixed: boolean = false;

  openLocation(value: string) {
    if (value == 'from') {
      this.isFrom = !this.isFrom;
    } else if (value == 'to') {
      this.isTo = !this.isTo;
    }
  }

  openTraveler() {
    this.isTraveler = !this.isTraveler;
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
    this.isFrom = false;
    this.isTo = false;
    this.isTraveler = false;
  }
}
