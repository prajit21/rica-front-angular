import { inject, Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { flight } from '../../interface/flight';
import { FlightService } from '../../services/flight.service';
import { GetFlights } from '../action/flight.action';

export class FlightModal {
  data: {
    flight: flight[];
  };
}

@State<FlightModal>({
  name: 'flight',
  defaults: {
    data: {
      flight: [],
    },
  },
})
@Injectable()
export class FlightState {
  private flightService = inject(FlightService);

  public flights: flight[];

  @Selector()
  static flight(state: FlightModal) {
    return state.data.flight;
  }

  @Action(GetFlights)
  getData(ctx: StateContext<FlightModal>, action: GetFlights) {
    return this.flightService.getFlightDetails(action.filter).pipe(
      tap(res => {
        if (action.price.minPrice || action.price.maxPrice) {
          this.flights = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice,
          );
        } else {
          this.flights = res;
        }

        ctx.setState({
          data: {
            flight: this.flights,
          },
        });
      }),
    );
  }
}
