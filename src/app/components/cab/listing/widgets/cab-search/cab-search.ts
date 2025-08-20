import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-cab-search',
  templateUrl: './cab-search.html',
  styleUrl: './cab-search.scss',
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule, RouterLink],
})
export class CabSearch {
  public isShow: boolean = false;

  openSearchBox() {
    this.isShow = true;
  }

  closeSearchBox() {
    this.isShow = false;
  }
}
