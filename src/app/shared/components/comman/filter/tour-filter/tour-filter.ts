import { Component, inject } from '@angular/core';
import { TourService } from '../../../../../shared/services/tour.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getTours } from '../../../../../shared/store/action/tour.action';
import { TourTripDuration } from './tour-trip-duration/tour-trip-duration';
import { TourBudget } from './tour-budget/tour-budget';
import { TourTravelType } from './tour-travel-type/tour-travel-type';
import { TourFlights } from './tour-flights/tour-flights';
import { TourRating } from './tour-rating/tour-rating';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-filter',
    templateUrl: './tour-filter.html',
    styleUrls: ['./tour-filter.scss'],
    imports: [NgStyle, TourRating, TourFlights, TourTravelType, TourBudget, TourTripDuration]
})
export class TourFilter {


  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public tourService = inject(TourService);

  public isOpenTour: boolean = true;
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

  openTour(){
    this.isOpenTour = !this.isOpenTour;
  }

  closeResponsiveFilter(){
    this.tourService.isOpenResponsiveFilter = false;
  }
}
