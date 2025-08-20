import { Component, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hotelLocation } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-restaurant-location',
    templateUrl: './restaurant-location.html',
    styleUrl: './restaurant-location.scss',
    
})
export class RestaurantLocation {

  public sanitizer = inject(DomSanitizer); 

  readonly restaurantLocation = input<hotelLocation>();

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
