import { Routes } from '@angular/router';

import { FlightListTopFilter } from '../../flight/listing/flight-list-top-filter/flight-list-top-filter';
import { HotelGoogleMap } from '../../hotel/listing/map/hotel-google-map/hotel-google-map';
import { TourGrid4 } from '../../tour/listing/grid/tour-grid4/tour-grid4';
import { TourLeftSidebar } from '../../tour/listing/sidebar/tour-left-sidebar/tour-left-sidebar';

export default [
  {
    path: 'sidebar',
    component: TourLeftSidebar,
  },
  {
    path: 'popup',
    component: HotelGoogleMap,
  },
  {
    path: 'slide-down',
    component: TourGrid4,
  },
  {
    path: 'top-filter',
    component: FlightListTopFilter,
  },
] as Routes;
