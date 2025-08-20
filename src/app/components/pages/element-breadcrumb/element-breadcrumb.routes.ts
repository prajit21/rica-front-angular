import { Routes } from '@angular/router';
import { CabListLeftSidebar } from '../../cab/listing/list-view/cab-list-left-sidebar/cab-list-left-sidebar';
import { FlightListRightSidebar } from '../../flight/listing/flight-list-right-sidebar/flight-list-right-sidebar';
import { HotelGrid2 } from '../../hotel/listing/grid/hotel-grid2/hotel-grid2';
import { RestaurantGrid3 } from '../../restaurant/listing/grid-view/restaurant-grid3/restaurant-grid3';
import { TourGrid2 } from '../../tour/listing/grid/tour-grid2/tour-grid2';
import { PortfolioGrid2 } from '../portfolio/portfolio-grid2/portfolio-grid2';

export default[
  {
    path: 'basic',
    component: HotelGrid2
  },
  {
    path: 'image-with-effect',
    component: PortfolioGrid2
  },
  {
    path: 'right-content',
    component: CabListLeftSidebar
  },
  {
    path: 'only-image',
    component: FlightListRightSidebar
  },
  {
    path: 'with-searchbar',
    component: RestaurantGrid3
  },
  {
    path: 'bird-flying',
    component: TourGrid2
  }
] as Routes;
