import { Component, inject } from '@angular/core';

import { FlightLeftSidebar } from './flight-left-sidebar/flight-left-sidebar';
import { FlightLeftSidebarAirlineDeals } from './flight-left-sidebar-airline-deals/flight-left-sidebar-airline-deals';
import { FlightLeftSidebarAirlineDestination } from './flight-left-sidebar-airline-destination/flight-left-sidebar-airline-destination';
import { FlightLeftSidebarAirlineDetails } from './flight-left-sidebar-airline-details/flight-left-sidebar-airline-details';
import { FlightLeftSidebarHomeSection } from './flight-left-sidebar-home-section/flight-left-sidebar-home-section';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { flightLeftSidebar } from '../../../../shared/interface/flight-left-sidebar';
import { categoryModel } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-flight-demo-left-sidebar',
  templateUrl: './flight-demo-left-sidebar.html',
  styleUrls: ['./flight-demo-left-sidebar.scss'],
  imports: [
    Header,
    FlightLeftSidebarHomeSection,
    FlightLeftSidebar,
    FlightLeftSidebarAirlineDetails,
    FlightLeftSidebarAirlineDestination,
    FlightLeftSidebarAirlineDeals,
    Footer,
    Layout,
  ],
})
export class FlightDemoLeftSidebar {
  public tourService = inject(TourService);
  private flightService = inject(FlightService);

  public selectedValue: string = 'option1';

  public flightLeftSidebar: flightLeftSidebar;
  public category: categoryModel;

  constructor() {
    this.flightService.flightLeftSidebar().subscribe(response => {
      return (this.flightLeftSidebar = response);
    });

    this.tourService.category().subscribe(response => {
      return (this.category = response);
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '143, 203, 215');
    document.documentElement.style.setProperty('--theme-color2', '239, 63, 62');
  }

  changeValue(event: Event) {
    this.selectedValue = (event.target as HTMLInputElement).value;
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
