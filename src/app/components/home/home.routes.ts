import { Routes } from '@angular/router';
import { CabDemoClassic } from './cab-demo/cab-demo-classic/cab-demo-classic';
import { CabDemoMap } from './cab-demo/cab-demo-map/cab-demo-map';
import { CabDemoModern } from './cab-demo/cab-demo-modern/cab-demo-modern';
import { FlightDemoLeftSidebar } from './flight-demo/flight-demo-left-sidebar/flight-demo-left-sidebar';
import { FlightDemoMinimal } from './flight-demo/flight-demo-minimal/flight-demo-minimal';
import { FlightDemoModern } from './flight-demo/flight-demo-modern/flight-demo-modern';
import { HotelDemoClassic } from './hotel-demo/hotel-demo-classic/hotel-demo-classic';
import { HotelDemoMinimal } from './hotel-demo/hotel-demo-minimal/hotel-demo-minimal';
import { HotelDemoVector } from './hotel-demo/hotel-demo-vector/hotel-demo-vector';
import { MixDemoClassic } from './mix-demo/mix-demo-classic/mix-demo-classic';
import { MixDemoMinimal } from './mix-demo/mix-demo-minimal/mix-demo-minimal';
import { RestaurantDemoClassic } from './restaurant-demo/restaurant-demo-classic/restaurant-demo-classic';
import { RestaurantDemoMinimal } from './restaurant-demo/restaurant-demo-minimal/restaurant-demo-minimal';
import { TourDemoModern } from './tour-demo/tour-demo-modern/tour-demo-modern';
import { TourDemoTrending } from './tour-demo/tour-demo-trending/tour-demo-trending';
import { TourDemoVector } from './tour-demo/tour-demo-vector/tour-demo-vector';

export default[
  {
    path: 'hotel/classic',
    component: HotelDemoClassic
  },
  {
    path: 'hotel/minimal',
    component: HotelDemoMinimal
  },
  {
    path: 'hotel/vector',
    component: HotelDemoVector
  },
  {
    path: 'tour/modern',
    component: TourDemoModern
  },
  {
    path: 'tour/trending',
    component: TourDemoTrending
  },
  {
    path: 'tour/vector',
    component: TourDemoVector
  },
  {
    path: 'cab/modern',
    component: CabDemoModern
  },
  {
    path: 'cab/classic',
    component: CabDemoClassic
  },
  {
    path: 'cab/map-demo',
    component: CabDemoMap
  },
  {
    path: 'flight/modern',
    component: FlightDemoModern
  },
  {
    path: 'flight/minimal',
    component: FlightDemoMinimal
  },
  {
    path: 'flight/left-sidebar',
    component: FlightDemoLeftSidebar
  },
  {
    path: 'restaurant/classic',
    component: RestaurantDemoClassic
  },
  {
    path: 'restaurant/minimal',
    component: RestaurantDemoMinimal
  },
  {
    path: 'mix-demo/classic',
    component: MixDemoClassic
  },
  {
    path: 'mix-demo/minimal',
    component: MixDemoMinimal
  }
] as Routes;
