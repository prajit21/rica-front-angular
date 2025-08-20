import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { Details } from '../../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-leaflet-onclick-map',
    templateUrl: './restaurant-leaflet-onclick-map.html',
    styleUrl: './restaurant-leaflet-onclick-map.scss',
    imports: [Header, Breadcrumbs, GridPanel, Details, Filter, Footer, Layout]
})
export class RestaurantLeafletOnclickMap {
  
  public selectedTabValue: string;
  public isOpenMap: boolean;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }

  openMap(value: boolean){
    this.isOpenMap = value;
  }
}
