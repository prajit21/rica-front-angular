import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Details } from '../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../shared/components/comman/grid-panel/grid-panel';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-full-width',
    templateUrl: './restaurant-full-width.html',
    styleUrl: './restaurant-full-width.scss',
    imports: [Header, Breadcrumbs, GridPanel, Details, Footer, Layout]
})
export class RestaurantFullWidth {
  
  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
