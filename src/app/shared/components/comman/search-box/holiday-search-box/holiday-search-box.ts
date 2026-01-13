import { Component, HostListener, input } from '@angular/core';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday-search-box',
  templateUrl: './holiday-search-box.html',
  styleUrls: ['./holiday-search-box.scss'],
  imports: [NgbInputDatepicker],
})
export class HolidaySearchBox {
  readonly text = input<boolean>();
  readonly borderClass = input<boolean>();
  readonly searchFix = input<boolean>();

  public searchFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }
}
