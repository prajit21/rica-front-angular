import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { Details } from '../../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../../shared/components/comman/grid-panel/grid-panel';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-google-onclick',
    templateUrl: './hotel-google-onclick.html',
    styleUrls: ['./hotel-google-onclick.scss'],
    imports: [Header, Breadcrumbs, SearchBox, GridPanel, Details, Filter, Footer, Layout]
})
export class HotelGoogleOnclick {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

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
