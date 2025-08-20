import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';

@Component({
  selector: 'app-flight-minimal-home-section',
  templateUrl: './flight-minimal-home-section.html',
  styleUrls: ['./flight-minimal-home-section.scss'],
  imports: [SearchBox, RouterLink],
})
export class FlightMinimalHomeSection {
  public selectedValue: string = 'option1';

  changeValue(event: Event) {
    this.selectedValue = (event.target as HTMLInputElement).value;
  }
}
