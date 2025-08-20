import { inject, Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { cab } from '../../interface/cab';
import { CabService } from '../../services/cab.service';
import { GetCab } from '../action/cab.action';

export class CabModal {
  data: {
    cab: cab[];
  };
}

@State<CabModal>({
  name: 'cab',
  defaults: {
    data: {
      cab: [],
    },
  },
})
@Injectable()
export class CabState {
  private cabService = inject(CabService);

  public cabs: cab[];

  @Selector()
  static cab(state: CabModal) {
    return state.data.cab;
  }

  @Action(GetCab)
  getData(ctx: StateContext<CabModal>, action: GetCab) {
    return this.cabService.GetCabDetails(action.filter).pipe(
      tap(res => {
        if (action.price.minPrice != 0 || action.price.maxPrice != 0) {
          this.cabs = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice,
          );
        } else {
          this.cabs = res;
        }

        ctx.setState({
          data: {
            cab: this.cabs,
          },
        });
      }),
    );
  }
}
