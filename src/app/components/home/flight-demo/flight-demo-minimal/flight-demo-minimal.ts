import { Component, inject } from '@angular/core';
import { flightMinimal } from '../../../../shared/interface/flight-minimal';
import { category } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { FlightMinimalBlog } from './flight-minimal-blog/flight-minimal-blog';
import { FlightMinimalApplication } from './flight-minimal-application/flight-minimal-application';
import { FlightMinimalCategory } from './flight-minimal-category/flight-minimal-category';
import { FlightMinimalBanner } from './flight-minimal-banner/flight-minimal-banner';
import { FlightMinimalBestDeals } from './flight-minimal-best-deals/flight-minimal-best-deals';
import { FlightMinimalHomeSection } from './flight-minimal-home-section/flight-minimal-home-section';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-demo-minimal',
    templateUrl: './flight-demo-minimal.html',
    styleUrls: ['./flight-demo-minimal.scss'],
    imports: [Header, FlightMinimalHomeSection, FlightMinimalBestDeals, FlightMinimalBanner, FlightMinimalCategory, FlightMinimalApplication, FlightMinimalBlog, Footer, Layout]
})
export class FlightDemoMinimal {

  private tourService = inject(TourService);
  private flightService = inject(FlightService);
  
  public flightMinimal: flightMinimal;
  public category: category[];

  constructor() {
    this.flightService.flightMinimal().subscribe(response => {
      return this.flightMinimal = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
