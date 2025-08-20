import { Component } from '@angular/core';
import { flightAddOnsDetails } from '../../../../shared/components/data/data/filter/flight';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { FlightTravelAddons } from '../widgets/flight-travel-addons/flight-travel-addons';
import { FlightAdditionalLuggage } from '../widgets/flight-additional-luggage/flight-additional-luggage';
import { FlightMeals } from '../widgets/flight-meals/flight-meals';
import { FlightSelectedSeats } from '../widgets/flight-selected-seats/flight-selected-seats';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';
import { FlightBookingBreadcrumb } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-booking-add-ons',
    templateUrl: './flight-booking-add-ons.html',
    styleUrl: './flight-booking-add-ons.scss',
    imports: [Header, FlightBookingBreadcrumb, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, FlightSelectedSeats, FlightMeals, FlightAdditionalLuggage, FlightTravelAddons, Footer, Layout]
})
export class FlightBookingAddOns {
  
  public bg_image = "assets/images/flights/flight-breadcrumb2.jpg";
  public parent = "Home";
  public subParent = "flights";
  public child = "addons";

  public flightAddOnsDetails = flightAddOnsDetails;

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
