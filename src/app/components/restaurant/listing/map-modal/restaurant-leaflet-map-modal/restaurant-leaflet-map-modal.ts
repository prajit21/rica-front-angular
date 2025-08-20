import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Details } from '../../../../../shared/components/comman/details/details';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-leaflet-map-modal',
    templateUrl: './restaurant-leaflet-map-modal.html',
    styleUrl: './restaurant-leaflet-map-modal.scss',
    imports: [Header, Breadcrumbs, GridPanel, Filter, Details, Footer, Layout]
})
export class RestaurantLeafletMapModal {
  
  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
