import { Component } from '@angular/core';

import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';

@Component({
  selector: 'app-mix-classic-home-section',
  templateUrl: './mix-classic-home-section.html',
  styleUrls: ['./mix-classic-home-section.scss'],
  imports: [SearchBox],
})
export class MixClassicHomeSection {
  public activeTab: string = 'hotel';
  public searchBoxType: string;

  constructor() {
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
  }
}
