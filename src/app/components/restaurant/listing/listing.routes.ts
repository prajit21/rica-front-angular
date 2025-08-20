import { Routes } from '@angular/router';
import { RestaurantGrid2 } from './grid-view/restaurant-grid2/restaurant-grid2';
import { RestaurantGrid3 } from './grid-view/restaurant-grid3/restaurant-grid3';
import { RestaurantGrid4 } from './grid-view/restaurant-grid4/restaurant-grid4';
import { RestaurantGoogleLeftsideMap } from './leftside-map/restaurant-google-leftside-map/restaurant-google-leftside-map';
import { RestaurantLeafletLeftsideMap } from './leftside-map/restaurant-leaflet-leftside-map/restaurant-leaflet-leftside-map';
import { RestaurantGoogleMapModal } from './map-modal/restaurant-google-map-modal/restaurant-google-map-modal';
import { RestaurantLeafletMapModal } from './map-modal/restaurant-leaflet-map-modal/restaurant-leaflet-map-modal';
import { RestaurantGoogleMap } from './map/restaurant-google-map/restaurant-google-map';
import { RestaurantLeafletMap } from './map/restaurant-leaflet-map/restaurant-leaflet-map';
import { RestaurantGoogleOnclickMap } from './onclick-map/restaurant-google-onclick-map/restaurant-google-onclick-map';
import { RestaurantLeafletOnclickMap } from './onclick-map/restaurant-leaflet-onclick-map/restaurant-leaflet-onclick-map';
import { RestaurantFullWidth } from './restaurant-full-width/restaurant-full-width';
import { RestaurantImageSlider } from './restaurant-image-slider/restaurant-image-slider';
import { RestaurantNotFound } from './restaurant-not-found/restaurant-not-found';
import { RestaurantLeftSidebar } from './sidebar/restaurant-left-sidebar/restaurant-left-sidebar';
import { RestaurantNoSidebar } from './sidebar/restaurant-no-sidebar/restaurant-no-sidebar';
import { RestaurantRightSidebar } from './sidebar/restaurant-right-sidebar/restaurant-right-sidebar';

export default[
  {
    path: 'grid-view/2-grid',
    component: RestaurantGrid2
  },
  {
    path: 'grid-view/3-grid',
    component: RestaurantGrid3
  },
  {
    path: 'grid-view/4-grid',
    component: RestaurantGrid4
  },
  {
    path: 'sidebar/left-sidebar',
    component: RestaurantLeftSidebar
  },
  {
    path: 'sidebar/right-sidebar',
    component: RestaurantRightSidebar
  },
  {
    path: 'sidebar/no-sidebar',
    component: RestaurantNoSidebar
  },
  {
    path: 'map/google-map',
    component: RestaurantGoogleMap
  },
  {
    path: 'map/leaflet-map',
    component: RestaurantLeafletMap
  },
  {
    path: 'map-modal/google-map',
    component: RestaurantGoogleMapModal
  },
  {
    path: 'map-modal/leaflet-map',
    component: RestaurantLeafletMapModal
  },
  {
    path: 'onclick-map/google-map',
    component: RestaurantGoogleOnclickMap
  },
  {
    path: 'onclick-map/leaflet-map',
    component: RestaurantLeafletOnclickMap
  },
  {
    path: 'left-side-map/google-map',
    component: RestaurantGoogleLeftsideMap
  },
  {
    path: 'left-side-map/leaflet-map',
    component: RestaurantLeafletLeftsideMap
  },
  {
    path: 'full-width',
    component: RestaurantFullWidth
  },
  {
    path: 'image-slider',
    component: RestaurantImageSlider
  },
  {
    path: 'not-found',
    component: RestaurantNotFound
  }
] as Routes;

