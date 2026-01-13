import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLink } from '@angular/router';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { category } from '../../../../shared/interface/tour-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-cab-demo-map',
  templateUrl: './cab-demo-map.html',
  styleUrls: ['./cab-demo-map.scss'],
  imports: [
    Header,
    GoogleMapsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterLink,
    Layout,
  ],
})
export class CabDemoMap {
  private cabService = inject(CabService);
  private tourService = inject(TourService);

  public selectedValue: string;

  public cabMapDemo: number[];
  public cab: category[];

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 6,
  };

  constructor() {
    this.cabService.cabMapDemo().subscribe(response => {
      this.cabMapDemo = response.cab;
    });

    this.tourService.category().subscribe(response => {
      this.cab = response.category;

      if (Array.isArray(this.cabMapDemo)) {
        this.cab = this.cab?.filter(data => {
          return this.cabMapDemo.includes(data.id);
        });
      }
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '239, 63, 62');
  }

  sameLocation(event: Event) {
    this.selectedValue = (event.target as HTMLInputElement).value;
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
