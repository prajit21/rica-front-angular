import { Component } from '@angular/core';
import { topPlacesData } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-places',
    templateUrl: './top-places.html',
    styleUrls: ['./top-places.scss'],
    imports: [RouterLink]
})
export class TopPlaces {

  public topPlacesData = topPlacesData;

}
