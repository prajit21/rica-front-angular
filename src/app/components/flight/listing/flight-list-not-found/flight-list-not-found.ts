import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { RouterLink } from '@angular/router';
import { FlightSearch } from '../../widgets/flight-search/flight-search';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-list-not-found',
    templateUrl: './flight-list-not-found.html',
    styleUrl: './flight-list-not-found.scss',
    imports: [Header, Breadcrumbs, FlightSearch, RouterLink, Footer, Layout]
})
export class FlightListNotFound {
  
  public bg_image: string = 'assets/images/flights/flight-breadcrumb2.jpg';

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
