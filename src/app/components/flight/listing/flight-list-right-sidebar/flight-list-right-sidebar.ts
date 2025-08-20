import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Details } from '../../../../shared/components/comman/details/details';
import { Filter } from '../../../../shared/components/comman/filter/filter';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightSearch } from '../../widgets/flight-search/flight-search';

@Component({
  selector: 'app-flight-list-right-sidebar',
  templateUrl: './flight-list-right-sidebar.html',
  styleUrl: './flight-list-right-sidebar.scss',
  imports: [Header, Breadcrumbs, FlightSearch, Layout, Details, Filter, Footer],
})
export class FlightListRightSidebar {
  public bg_image: string = 'assets/images/flights/flight-breadcrumb2.jpg';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2', '66, 145, 184');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
