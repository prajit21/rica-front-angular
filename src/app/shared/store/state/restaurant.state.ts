import { inject, Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { restaurantDetail } from '../../interface/restaurant-minimal';
import { RestaurantService } from '../../services/restaurant.service';
import { GetRestaurant } from '../action/restaurant.action';

export class RestaurantModal {
  data: {
    restaurant: restaurantDetail[];
  };
}

@State<RestaurantModal>({
  name: 'restaurant',
  defaults: {
    data: {
      restaurant: [],
    },
  },
})
@Injectable()
export class RestaurantState {
  private restaurantService = inject(RestaurantService);

  public restaurants: restaurantDetail[];

  @Selector()
  static restaurant(state: RestaurantModal) {
    return state.data.restaurant;
  }

  @Action(GetRestaurant)
  getData(ctx: StateContext<RestaurantModal>, action: GetRestaurant) {
    return this.restaurantService.GetRestaurantDetails(action.filter).pipe(
      tap(res => {
        if (action.price.minPrice || action.price.maxPrice) {
          this.restaurants = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice,
          );
        } else {
          this.restaurants = res;
        }

        ctx.setState({
          data: {
            restaurant: this.restaurants,
          },
        });
      }),
    );
  }
}
