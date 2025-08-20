import { Routes } from '@angular/router';

import { CabNotFound } from './cab-not-found/cab-not-found';
import { CabSlider } from './cab-slider/cab-slider';
import { CabGrid3 } from './grid-view/cab-grid3/cab-grid3';
import { CabGrid4 } from './grid-view/cab-grid4/cab-grid4';
import { CabListLeftSidebar } from './list-view/cab-list-left-sidebar/cab-list-left-sidebar';
import { CabListRightSidebar } from './list-view/cab-list-right-sidebar/cab-list-right-sidebar';
import { CabGoogleMap } from './map/cab-google-map/cab-google-map';
import { CabLeafletMap } from './map/cab-leaflet-map/cab-leaflet-map';
import { CabLeftSidebar } from './sidebar/cab-left-sidebar/cab-left-sidebar';
import { CabNoSidebar } from './sidebar/cab-no-sidebar/cab-no-sidebar';
import { CabRightSidebar } from './sidebar/cab-right-sidebar/cab-right-sidebar';

export default [
  {
    path: 'list-view/left-sidebar',
    component: CabListLeftSidebar,
  },
  {
    path: 'list-view/right-sidebar',
    component: CabListRightSidebar,
  },
  {
    path: 'grid-view/3-grid',
    component: CabGrid3,
  },
  {
    path: 'grid-view/4-grid',
    component: CabGrid4,
  },
  {
    path: 'sidebar/left-sidebar',
    component: CabLeftSidebar,
  },
  {
    path: 'sidebar/right-sidebar',
    component: CabRightSidebar,
  },
  {
    path: 'sidebar/no-sidebar',
    component: CabNoSidebar,
  },
  {
    path: 'map/google-map',
    component: CabGoogleMap,
  },
  {
    path: 'map/leaflet-map',
    component: CabLeafletMap,
  },
  {
    path: 'slider',
    component: CabSlider,
  },
  {
    path: 'not-found',
    component: CabNotFound,
  },
] as Routes;
