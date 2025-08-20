import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../../shared/components/comman/details/details';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Header } from '../../../../../shared/components/header/header';
import { Layout } from '../../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-hotel-google-map-modal',
  templateUrl: './hotel-google-map-modal.html',
  styleUrls: ['./hotel-google-map-modal.scss'],
  imports: [Header, Breadcrumbs, SearchBox, GridPanel, Filter, Details, Footer, Layout],
})
export class HotelGoogleMapModal {
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  public selectedTabValue: string;

  constructor() {}

  ngOnInit() {
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string) {
    this.selectedTabValue = value;
  }
}
