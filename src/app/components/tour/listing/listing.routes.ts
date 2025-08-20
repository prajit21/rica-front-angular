import { Routes } from '@angular/router';
import { TourGrid2 } from './grid/tour-grid2/tour-grid2';
import { TourGrid3 } from './grid/tour-grid3/tour-grid3';
import { TourGrid4 } from './grid/tour-grid4/tour-grid4';
import { TourListMultipleImages } from './list-view/tour-list-multiple-images/tour-list-multiple-images';
import { TourListSlider } from './list-view/tour-list-slider/tour-list-slider';
import { TourListVideo } from './list-view/tour-list-video/tour-list-video';
import { TourListView } from './list-view/tour-list-view/tour-list-view';
import { TourLeftSidebar } from './sidebar/tour-left-sidebar/tour-left-sidebar';
import { TourNoSidebar } from './sidebar/tour-no-sidebar/tour-no-sidebar';
import { TourRightSidebar } from './sidebar/tour-right-sidebar/tour-right-sidebar';
import { TourClassic } from './tour-classic/tour-classic';
import { TourMinimal } from './tour-minimal/tour-minimal';
import { TourWithSlider } from './tour-with-slider/tour-with-slider';

export default [
  {
    path: 'grid/2-grid',
    component: TourGrid2
  },
  {
    path: 'grid/3-grid',
    component: TourGrid3
  },
  {
    path: 'grid/4-grid',
    component: TourGrid4
  },
  {
    path: 'sidebar/left-sidebar',
    component: TourLeftSidebar
  },
  {
    path: 'sidebar/right-sidebar',
    component: TourRightSidebar
  },
  {
    path: 'sidebar/no-sidebar',
    component: TourNoSidebar
  },
  {
    path: 'list-view/list-view',
    component: TourListView
  },
  {
    path: 'list-view/slider',
    component: TourListSlider
  },
  {
    path: 'list-view/multiple-images',
    component: TourListMultipleImages
  },
  {
    path: 'list-view/video',
    component: TourListVideo
  },
  {
    path: 'slider',
    component: TourWithSlider
  },
  {
    path: 'minimal',
    component: TourMinimal
  },
  {
    path: 'classic',
    component: TourClassic
  }
] as Routes;
