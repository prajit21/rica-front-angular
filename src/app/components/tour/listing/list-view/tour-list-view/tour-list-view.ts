import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../../shared/components/comman/details/details';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Header } from '../../../../../shared/components/header/header';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { TourService } from '../../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-list-view',
  templateUrl: './tour-list-view.html',
  styleUrls: ['./tour-list-view.scss'],
  imports: [Header, Breadcrumbs, GridPanel, SearchBox, Filter, Details, Footer, Layout],
})
export class TourListView {
  public tourService = inject(TourService);

  public bg_image = 'assets/images/inner-pages/breadcrumb1.jpg';
  public title = 'holiday package';
  public parent = 'Home';
  public child = 'holiday package';

  public selectedTabValue: string;

  constructor() {
    this.tourService.isOpenFindTours = false;
  }

  ngOnInit() {
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string) {
    this.selectedTabValue = value;
  }
}
