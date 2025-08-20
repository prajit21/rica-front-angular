import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Details } from '../../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-leaflet-map',
    templateUrl: './hotel-leaflet-map.html',
    styleUrls: ['./hotel-leaflet-map.scss'],
    imports: [Header, Breadcrumbs, SearchBox, GridPanel, Details, Footer, Layout]
})
export class HotelLeafletMap {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  public selectedTabValue: string;

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  };

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
