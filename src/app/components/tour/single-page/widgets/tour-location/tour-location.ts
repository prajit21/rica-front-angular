import { Component, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hotelLocation } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-tour-location',
    templateUrl: './tour-location.html',
    styleUrl: './tour-location.scss',
    
})
export class TourLocation {

  public sanitizer = inject(DomSanitizer); 

  readonly location = input<hotelLocation>();

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
