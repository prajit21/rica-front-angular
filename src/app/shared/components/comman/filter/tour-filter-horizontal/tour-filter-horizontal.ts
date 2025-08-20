import { Component, inject } from '@angular/core';
import { TourService } from '../../../../../shared/services/tour.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getTours } from '../../../../../shared/store/action/tour.action';
import { TourBudget } from '../tour-filter/tour-budget/tour-budget';
import { TourFlights } from '../tour-filter/tour-flights/tour-flights';
import { TourRating } from '../tour-filter/tour-rating/tour-rating';
import { TourTravelType } from '../tour-filter/tour-travel-type/tour-travel-type';
import { TourTripDuration } from '../tour-filter/tour-trip-duration/tour-trip-duration';

@Component({
    selector: 'app-tour-filter-horizontal',
    templateUrl: './tour-filter-horizontal.html',
    styleUrls: ['./tour-filter-horizontal.scss'],
    imports: [TourTripDuration, TourTravelType, TourRating, TourFlights, TourBudget]
})
export class TourFilterHorizontal {

  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public tourService = inject(TourService);

  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public budgetData: priceFilter;
  public paramsTag: string[];

  constructor(){
      this.route.queryParams.subscribe((params) => {
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.budgetData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams];

        this.store.dispatch(new getTours(this.paramsTag, this.budgetData));

      })
    }

  closeTourHorizontal(){
    this.tourService.isOpenHorizontalFilter = false;
    this.tourService.isOpenResponsiveHorizontal = false;
  }

}
