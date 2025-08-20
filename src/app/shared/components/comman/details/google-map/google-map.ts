import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.html',
    styleUrls: ['./google-map.scss'],
    imports: [GoogleMapsModule]
})
export class GoogleMap {

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  };
}
