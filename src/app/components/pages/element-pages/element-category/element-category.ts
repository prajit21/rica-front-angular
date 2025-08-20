import { Component, inject } from '@angular/core';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { mixClassic } from '../../../../shared/interface/mix-classic';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category, tourModern } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { MixService } from '../../../../shared/services/mix.service';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { FlightModernAirlineTicket } from '../../../home/flight-demo/flight-demo-modern/flight-modern-airline-ticket/flight-modern-airline-ticket';
import { FlightModernCategory } from '../../../home/flight-demo/flight-demo-modern/flight-modern-category/flight-modern-category';
import { MixClassicCategory } from '../../../home/mix-demo/mix-demo-classic/mix-classic-category/mix-classic-category';
import { Category } from '../../../../shared/components/comman/category/category';
import { Title } from '../../../../shared/components/comman/title/title';
import { TourModernAwesomePackage } from '../../../home/tour-demo/tour-demo-modern/tour-modern-awesome-package/tour-modern-awesome-package';
import { TourModernCategory } from '../../../home/tour-demo/tour-demo-modern/tour-modern-category/tour-modern-category';
import { RestaurantClassicSpecialDishes } from '../../../home/restaurant-demo/restaurant-demo-classic/restaurant-classic-special-dishes/restaurant-classic-special-dishes';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-category',
    templateUrl: './element-category.html',
    styleUrl: './element-category.scss',
    imports: [Header, Breadcrumbs, RestaurantClassicSpecialDishes, TourModernCategory, TourModernAwesomePackage, Title, Category, MixClassicCategory, FlightModernCategory, FlightModernAirlineTicket, Footer, Layout]
})
export class ElementCategory {

  private restaurantService = inject(RestaurantService);
  private tourService = inject(TourService);
  private mixService = inject(MixService);
  private flightService = inject(FlightService);
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'category';
  public parent = 'elements';
  public child = 'category';

  public restaurantClassic: restaurantClassic;
  public category: category[];
  public restaurantCategory: category[];
  public tourModern: tourModern;
  public cabCategory: category[];
  public mixClassic: mixClassic;
  public mixClassicCategory: category[];
  public flightModern: flightModern;
  public flightCategory: category[];

  public cabCategoryId = [8,9,10,11,12]

  constructor(){
    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
      this.restaurantCategory = response.category;
      this.mixClassicCategory = response.category;
      this.flightCategory = response.category;

      if(Array.isArray(this.cabCategoryId)){
        this.cabCategory = this.category?.filter((item) => {
          return this.cabCategoryId.includes(item.id)
        })
      }
    })

    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })

    this.mixService.mixClassic().subscribe(response => {
      if(response){
        this.mixClassic = response;
      }
    })

    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })
  }
}
