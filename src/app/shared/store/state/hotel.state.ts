import { Action, Selector, State, StateContext } from "@ngxs/store";
import { hotels } from "../../interface/hotel";
import { inject, Injectable } from "@angular/core";
import { HotelService } from "../../services/hotel.service";
import { getHotels } from "../action/hotel.action";
import { tap } from "rxjs";

export class hotelModal {
  data: {
    hotel: hotels[];
  };
}

@State<hotelModal>({
  name: 'hotel',
  defaults: {
    data: {
      hotel: [],
    },
  },
})

@Injectable()
export class hotelState{

  private hotelService = inject(HotelService);


  public hotels: hotels[];

  @Selector()
  static hotel(state: hotelModal) {
    return state.data.hotel;
  }

  @Action(getHotels)
  getData( ctx: StateContext<hotelModal>, action: getHotels ){
    return this.hotelService.getHotelsDetails(action.filter).pipe(
      tap((res) => {
        if (action.price.minPrice != 0  || action.price.maxPrice != 0 ) {
          this.hotels = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice
          );
        }else {
          this.hotels = res
        }

        ctx.setState({
          data: {
            hotel: this.hotels,
          },
        });

      })
    )
  }
}
