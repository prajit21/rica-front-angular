import { Component, output } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.html',
  styleUrls: ['./search-tab.scss'],
  imports: [SvgIconComponent],
})
export class SearchTab {
  readonly searchBox = output<string>();

  public activeTab: string = 'hotel';
  public searchBoxType: string = '';

  ngOnInit() {
    if (this.activeTab == 'hotel') {
      this.searchBoxType = 'basic';
    } else if (this.activeTab == 'holiday') {
      this.searchBoxType = 'holiday';
    } else if (this.activeTab == 'flight') {
      this.searchBoxType = 'flight-two';
    } else if (this.activeTab == 'cab') {
      this.searchBoxType = 'cab-two';
    } else if (this.activeTab == 'food') {
      this.searchBoxType = 'food';
    }

    this.searchBox.emit(this.searchBoxType);
  }

  tabbed(value: string) {
    this.activeTab = value;

    if (value == 'hotel') {
      this.searchBoxType = 'basic';
    } else if (value == 'holiday') {
      this.searchBoxType = 'holiday';
    } else if (value == 'flight') {
      this.searchBoxType = 'flight-two';
    } else if (value == 'cab') {
      this.searchBoxType = 'cab-two';
    } else if (value == 'food') {
      this.searchBoxType = 'food';
    }

    this.searchBox.emit(this.searchBoxType);
  }
}
