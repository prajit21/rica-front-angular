import { Component, HostListener, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-box-one',
  templateUrl: './search-box-one.html',
  styleUrls: ['./search-box-one.scss'],
  imports: [NgbInputDatepicker, RouterLink],
})
export class SearchBoxOne {
  readonly text = input<boolean>(false);
  readonly borderClass = input<boolean>(false);
  readonly searchFix = input<boolean>(false);
  readonly shadow = input<boolean>();

  public searchFixed: boolean = false;
  public guest: number = 1;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }

  changeValue(value: number) {
    if (value == 1) {
      this.guest += 1;
    } else if (value == -1) {
      if (this.guest > 1) {
        this.guest -= 1;
      }
    }
  }
}
