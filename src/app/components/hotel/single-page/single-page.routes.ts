import { Routes } from '@angular/router';
import { HotelPageClassic } from './hotel-page-classic/hotel-page-classic';
import { HotelPageImageBox } from './hotel-page-image-box/hotel-page-image-box';
import { HotelPageImageSlider } from './hotel-page-image-slider/hotel-page-image-slider';
import { HotelPageInfoTab } from './hotel-page-info-tab/hotel-page-info-tab';
import { HotelPageLeftSidebar } from './hotel-page-left-sidebar/hotel-page-left-sidebar';
import { HotelPageThemeBreadcrumb } from './hotel-page-theme-breadcrumb/hotel-page-theme-breadcrumb';
import { HotelPageThumbnailImage } from './hotel-page-thumbnail-image/hotel-page-thumbnail-image';
import { HotelPageWithoutTop } from './hotel-page-without-top/hotel-page-without-top';

export default [
  {
    path: 'classic',
    component: HotelPageClassic
  },
  {
    path: 'without-top',
    component: HotelPageWithoutTop
  },
  {
    path: 'left-sidebar',
    component: HotelPageLeftSidebar
  },
  {
    path: 'info-tab',
    component: HotelPageInfoTab
  },
  {
    path: 'image-slider',
    component: HotelPageImageSlider
  },
  {
    path: 'thumbnail-image',
    component: HotelPageThumbnailImage
  },
  {
    path: 'image-box',
    component: HotelPageImageBox
  },
  {
    path: 'theme-breadcrumb',
    component: HotelPageThemeBreadcrumb
  }
] as Routes;
