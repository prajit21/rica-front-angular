import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Header } from '../../../../../shared/components/header/header';
import { Layout } from '../../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-restaurant-google-map',
  templateUrl: './restaurant-google-map.html',
  styleUrl: './restaurant-google-map.scss',
  imports: [Header, Breadcrumbs, GridPanel, Details, Footer, Layout],
})
export class RestaurantGoogleMap {
  public selectedTabValue: string;

  constructor() {}

  ngOnInit() {
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string) {
    this.selectedTabValue = value;
  }
}
