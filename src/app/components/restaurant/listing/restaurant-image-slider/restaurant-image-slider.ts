import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../shared/components/comman/details/details';
import { Filter } from '../../../../shared/components/comman/filter/filter';
import { GridPanel } from '../../../../shared/components/comman/grid-panel/grid-panel';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-restaurant-image-slider',
  templateUrl: './restaurant-image-slider.html',
  styleUrl: './restaurant-image-slider.scss',
  imports: [Header, Breadcrumbs, GridPanel, Filter, Details, Footer, Layout],
})
export class RestaurantImageSlider {
  public selectedTabValue: string;

  constructor() {}

  ngOnInit() {
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string) {
    this.selectedTabValue = value;
  }
}
