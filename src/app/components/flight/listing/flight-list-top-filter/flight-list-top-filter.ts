import { Component } from '@angular/core';
import { Footer } from '../../../../shared/components/footer/footer';
import { Details } from '../../../../shared/components/comman/details/details';
import { Filter } from '../../../../shared/components/comman/filter/filter';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightSearch } from '../../widgets/flight-search/flight-search';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-list-top-filter',
    templateUrl: './flight-list-top-filter.html',
    styleUrl: './flight-list-top-filter.scss',
    imports: [Header, Breadcrumbs, FlightSearch, Layout, Filter, Details, Footer]
})
export class FlightListTopFilter {
  
  public bg_image: string = 'assets/images/flights/flight-breadcrumb2.jpg';
  public title: string = 'about';
  public parent: string = 'elements';
  public child: string = 'Flight top Filter';

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
