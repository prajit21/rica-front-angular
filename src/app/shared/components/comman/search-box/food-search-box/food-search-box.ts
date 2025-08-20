import { NgClass } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';

@Component({
  selector: 'app-food-search-box',
  templateUrl: './food-search-box.html',
  styleUrls: ['./food-search-box.scss'],
  imports: [NgClass],
})
export class FoodSearchBox {
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
