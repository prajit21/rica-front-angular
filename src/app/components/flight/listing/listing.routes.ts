import { Routes } from '@angular/router';

import { FlightListLeftSidebar } from './flight-list-left-sidebar/flight-list-left-sidebar';
import { FlightListNotFound } from './flight-list-not-found/flight-list-not-found';
import { FlightListRightSidebar } from './flight-list-right-sidebar/flight-list-right-sidebar';
import { FlightListRoundTrip } from './flight-list-round-trip/flight-list-round-trip';
import { FlightListTopFilter } from './flight-list-top-filter/flight-list-top-filter';

export default [
  {
    path: 'left-sidebar',
    component: FlightListLeftSidebar,
  },
  {
    path: 'right-sidebar',
    component: FlightListRightSidebar,
  },
  {
    path: 'top-filter',
    component: FlightListTopFilter,
  },
  {
    path: 'round-trip',
    component: FlightListRoundTrip,
  },
  {
    path: 'not-found',
    component: FlightListNotFound,
  },
] as Routes;
