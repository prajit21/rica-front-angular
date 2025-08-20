import { Routes } from '@angular/router';

import { HotelGrid2 } from './grid/hotel-grid2/hotel-grid2';
import { HotelGrid3 } from './grid/hotel-grid3/hotel-grid3';
import { HotelGrid4 } from './grid/hotel-grid4/hotel-grid4';
import { HotelSlider } from './hotel-slider/hotel-slider';
import { HotelGoogleLeftsideMap } from './leftside-map/hotel-google-leftside-map/hotel-google-leftside-map';
import { HotelLeafletLeftsideMap } from './leftside-map/hotel-leaflet-leftside-map/hotel-leaflet-leftside-map';
import { HotelListMultipleImage } from './list-view/hotel-list-multiple-image/hotel-list-multiple-image';
import { HotelListSlider } from './list-view/hotel-list-slider/hotel-list-slider';
import { HotelListVideo } from './list-view/hotel-list-video/hotel-list-video';
import { Listview } from './list-view/listview/listview';
import { HotelListGoogleMap } from './list-view/map/hotel-list-google-map/hotel-list-google-map';
import { HotelListLeafletMap } from './list-view/map/hotel-list-leaflet-map/hotel-list-leaflet-map';
import { HotelGoogleMap } from './map/hotel-google-map/hotel-google-map';
import { HotelLeafletMap } from './map/hotel-leaflet-map/hotel-leaflet-map';
import { HotelGoogleMapModal } from './map-modal/hotel-google-map-modal/hotel-google-map-modal';
import { HotelLeafletMapModal } from './map-modal/hotel-leaflet-map-modal/hotel-leaflet-map-modal';
import { HotelGoogleOnclick } from './onclick-map/hotel-google-onclick/hotel-google-onclick';
import { HotelLeafletOnclick } from './onclick-map/hotel-leaflet-onclick/hotel-leaflet-onclick';
import { HotelLeftSidebar } from './sidebar/hotel-left-sidebar/hotel-left-sidebar';
import { HotelNoSidebar } from './sidebar/hotel-no-sidebar/hotel-no-sidebar';
import { HotelRightSidebar } from './sidebar/hotel-right-sidebar/hotel-right-sidebar';

export default [
  {
    path: 'grid/2-grid',
    component: HotelGrid2,
  },
  {
    path: 'grid/3-grid',
    component: HotelGrid3,
  },
  {
    path: 'grid/4-grid',
    component: HotelGrid4,
  },
  {
    path: 'sidebar/left-sidebar',
    component: HotelLeftSidebar,
  },
  {
    path: 'sidebar/right-sidebar',
    component: HotelRightSidebar,
  },
  {
    path: 'sidebar/no-sidebar',
    component: HotelNoSidebar,
  },
  {
    path: 'map/google-map',
    component: HotelGoogleMap,
  },
  {
    path: 'map/leaflet-map',
    component: HotelLeafletMap,
  },
  {
    path: 'map-modal/google-map',
    component: HotelGoogleMapModal,
  },
  {
    path: 'map-modal/leaflet-map',
    component: HotelLeafletMapModal,
  },
  {
    path: 'onclick-map/google-map',
    component: HotelGoogleOnclick,
  },
  {
    path: 'onclick-map/leaflet-map',
    component: HotelLeafletOnclick,
  },
  {
    path: 'leftside-map/google-map',
    component: HotelGoogleLeftsideMap,
  },
  {
    path: 'leftside-map/leaflet-map',
    component: HotelLeafletLeftsideMap,
  },
  {
    path: 'list-view/list-view',
    component: Listview,
  },
  {
    path: 'list-view/map/google-map',
    component: HotelListGoogleMap,
  },
  {
    path: 'list-view/map/leaflet-map',
    component: HotelListLeafletMap,
  },
  {
    path: 'list-view/slider',
    component: HotelListSlider,
  },
  {
    path: 'list-view/multiple-image',
    component: HotelListMultipleImage,
  },
  {
    path: 'list-view/video',
    component: HotelListVideo,
  },
  {
    path: 'hotel-slider',
    component: HotelSlider,
  },
] as Routes;
