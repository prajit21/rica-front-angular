import { Routes } from '@angular/router';

import { RestaurantPageClassic } from './restaurant-page-classic/restaurant-page-classic';
import { RestaurantPageImageSlider } from './restaurant-page-image-slider/restaurant-page-image-slider';
import { RestaurantPageLeftCart } from './restaurant-page-left-cart/restaurant-page-left-cart';

export default [
  {
    path: 'classic',
    component: RestaurantPageClassic,
  },
  {
    path: 'image-slider',
    component: RestaurantPageImageSlider,
  },
  {
    path: 'left-cart',
    component: RestaurantPageLeftCart,
  },
] as Routes;
