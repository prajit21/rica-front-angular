import { inject, Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { hotels } from '../../interface/hotel';
import { HotelService } from '../../services/hotel.service';
import { GetHotels } from '../action/hotel.action';

export class HotelModal {
  data: {
    hotel: hotels[];
  };
}

@State<HotelModal>({
  name: 'hotel',
  defaults: {
    data: {
      hotel: [],
    },
  },
})
@Injectable()
export class HotelState {
  private hotelService = inject(HotelService);

  public hotels: hotels[];

  @Selector()
  static hotel(state: HotelModal) {
    return state.data.hotel;
  }

  @Action(GetHotels)
  getData(ctx: StateContext<HotelModal>, action: GetHotels) {
    return this.hotelService.GetHotelsDetails(action.filter).pipe(
      tap(res => {
        if (action.price.minPrice != 0 || action.price.maxPrice != 0) {
          this.hotels = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice,
          );
        } else {
          this.hotels = res;
        }

        ctx.setState({
          data: {
            hotel: this.hotels,
          },
        });
      }),
    );
  }
}
