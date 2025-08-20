import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../shared/components/comman/grid-panel/grid-panel';
import { SearchBox } from '../../../../shared/components/comman/search-box/search-box';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-with-slider',
  templateUrl: './tour-with-slider.html',
  styleUrls: ['./tour-with-slider.scss'],
  imports: [Header, Breadcrumbs, GridPanel, SearchBox, Details, Footer, Layout],
})
export class TourWithSlider {
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
