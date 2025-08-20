import { Routes } from '@angular/router';
import { TourFullPageDetails } from './tour-full-page-details/tour-full-page-details';
import { TourFullPageSlider } from './tour-full-page-slider/tour-full-page-slider';
import { TourPageClassicDesign } from './tour-page-classic-design/tour-page-classic-design';
import { TourPageLeftSidebar } from './tour-page-left-sidebar/tour-page-left-sidebar';
import { TourPageSlider } from './tour-page-slider/tour-page-slider';
import { TourPageTab } from './tour-page-tab/tour-page-tab';
import { TourPageVideo } from './tour-page-video/tour-page-video';

export default[
  {
    path: 'tab',
    component: TourPageTab
  },
  {
    path: 'full-page-detail',
    component: TourFullPageDetails
  },
  {
    path: 'slider',
    component: TourPageSlider
  },
  {
    path: 'full-page-slider',
    component: TourFullPageSlider
  },
  {
    path: 'classic-design',
    component: TourPageClassicDesign
  },
  {
    path: 'video',
    component: TourPageVideo
  },
  {
    path: 'left-sidebar',
    component: TourPageLeftSidebar
  }
] as Routes;
