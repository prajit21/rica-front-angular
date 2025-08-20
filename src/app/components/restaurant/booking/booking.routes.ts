import { Routes } from '@angular/router';

import { RestaurantCheckout } from './restaurant-checkout/restaurant-checkout';
import { RestaurantOrderFailed } from './restaurant-order-failed/restaurant-order-failed';
import { RestaurantOrderSuccess } from './restaurant-order-success/restaurant-order-success';

export default [
  {
    path: 'checkout',
    component: RestaurantCheckout,
  },
  {
    path: 'order-failed',
    component: RestaurantOrderFailed,
  },
  {
    path: 'order-success',
    component: RestaurantOrderSuccess,
  },
] as Routes;
