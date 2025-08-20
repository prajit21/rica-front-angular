import { Component, inject } from '@angular/core';
import { flightMeals } from '../../../../../shared/components/data/data/filter/flight';
import { flightMeal } from '../../../../../shared/interface/flight';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-meals',
    templateUrl: './flight-meals.html',
    styleUrl: './flight-meals.scss',
    imports: [CurrencySymbolPipe]
})
export class FlightMeals {

  public flightMeals: flightMeal[] = flightMeals;

  public hotelService = inject(HotelService);

  showTouchSpin(id: number){
    this.flightMeals.forEach((items) => {
      if(items.id == id){
        items.active = true;
        items.value = 1;
      }
    })
  }

  changeValue(id: number, value: number){
    this.flightMeals.forEach((items) => {
      if(items.id == id){
        if(value == +1){
          items.value = items.value + 1;
        }else if(value == -1){
          if(items.value >= 1){
            items.value = items.value -1;
          }
          if(items.value == 0){
          items.active = false
        }
        }
      }
    })
  }
}
