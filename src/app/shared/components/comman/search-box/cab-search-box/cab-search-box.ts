import { Component, HostListener, input } from '@angular/core';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-cab-search-box',
  templateUrl: './cab-search-box.html',
  styleUrls: ['./cab-search-box.scss'],
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule],
})
export class CabSearchBox {
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
