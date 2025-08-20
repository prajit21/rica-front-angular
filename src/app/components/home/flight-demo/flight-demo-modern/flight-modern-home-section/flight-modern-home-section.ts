import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';

@Component({
  selector: 'app-flight-modern-home-section',
  templateUrl: './flight-modern-home-section.html',
  styleUrls: ['./flight-modern-home-section.scss'],
  imports: [SearchBox, RouterLink],
})
export class FlightModernHomeSection {}
