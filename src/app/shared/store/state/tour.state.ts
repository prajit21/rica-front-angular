import { inject, Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { tours } from '../../interface/tour';
import { TourService } from '../../services/tour.service';
import { GetTours } from '../action/tour.action';

export class TourModal {
  data: {
    tour: tours[];
  };
}

@State<TourModal>({
  name: 'tour',
  defaults: {
    data: {
      tour: [],
    },
  },
})
@Injectable()
export class TourState {
  private tourService = inject(TourService);

  public tours: tours[];

  @Selector()
  static tour(state: TourModal) {
    return state.data.tour;
  }

  @Action(GetTours)
  getData(ctx: StateContext<TourModal>, action: GetTours) {
    return this.tourService.getTourDetails(action.filter).pipe(
      tap(res => {
        if (action.price.minPrice != 0 || action.price.maxPrice != 0) {
          this.tours = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice,
          );
        } else {
          this.tours = res;
        }

        ctx.setState({
          data: {
            tour: this.tours,
          },
        });
      }),
    );
  }
}
