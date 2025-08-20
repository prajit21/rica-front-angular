import { Component, inject } from '@angular/core';
import { TourService } from '../../../../../shared/services/tour.service';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { Details } from '../../../../../shared/components/comman/details/details';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-right-sidebar',
    templateUrl: './tour-right-sidebar.html',
    styleUrls: ['./tour-right-sidebar.scss'],
    imports: [Header, Breadcrumbs, GridPanel, SearchBox, Details, Filter, Footer, Layout]
})
export class TourRightSidebar {

  public tourService = inject(TourService); 

  public bg_image = 'assets/images/inner-pages/breadcrumb1.jpg';
  public title = 'holiday package';
  public parent = 'Home';
  public child = 'holiday package';

  public selectedTabValue: string;

  constructor() {
    this.tourService.isOpenFindTours = false;
  }

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
