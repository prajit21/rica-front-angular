import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { flightLocation, seatType } from '../../../../../shared/components/data/data/flight';
import { ClickOutsideDirective } from '../../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-flight-left-sidebar',
  templateUrl: './flight-left-sidebar.html',
  styleUrls: ['./flight-left-sidebar.scss'],
  imports: [ClickOutsideDirective, NgbInputDatepicker, NgClass, RouterLink],
})
export class FlightLeftSidebar {
  readonly selectedValue = input<string>();

  public flightLocation = flightLocation;
  public seatType = seatType;
  public isFrom: boolean = false;
  public isTo: boolean = false;
  public isTraveler: boolean = false;
  public fromLocation: string = '';
  public toLocation: string = '';

  public adults = 1;
  public child = 1;

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

  selectLocation(value: string, id: number) {
    this.flightLocation.filter(item => {
      if (item.id === id) {
        if (value == 'from') {
          this.fromLocation = item.city;
          this.isFrom = false;
        } else if (value == 'to') {
          this.toLocation = item.city;
          this.isTo = false;
        }
      }
    });
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
