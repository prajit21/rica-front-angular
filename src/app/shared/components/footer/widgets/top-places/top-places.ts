import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { topPlacesData } from '../../../data/data/footer';

@Component({
  selector: 'app-top-places',
  templateUrl: './top-places.html',
  styleUrls: ['./top-places.scss'],
  imports: [RouterLink],
})
export class TopPlaces {
  public topPlacesData = topPlacesData;
}
