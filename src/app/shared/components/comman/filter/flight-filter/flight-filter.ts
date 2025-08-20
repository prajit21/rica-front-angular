import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';

import { FlightAirlines } from './widgets/flight-airlines/flight-airlines';
import { FlightArrivalTime } from './widgets/flight-arrival-time/flight-arrival-time';
import { FlightDepartureTime } from './widgets/flight-departure-time/flight-departure-time';
import { FlightPrice } from './widgets/flight-price/flight-price';
import { FlightStops } from './widgets/flight-stops/flight-stops';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { FlightService } from '../../../../../shared/services/flight.service';
import { GetFlights } from '../../../../../shared/store/action/flight.action';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.html',
  styleUrl: './flight-filter.scss',
  imports: [
    NgStyle,
    FlightStops,
    FlightPrice,
    FlightAirlines,
    FlightDepartureTime,
    FlightArrivalTime,
  ],
})
export class FlightFilter {
  private route = inject(ActivatedRoute);
  public flightService = inject(FlightService);
  private store = inject(Store);

  public isOpenStops: boolean = true;
  public isOpenPrice: boolean = true;
  public isOpenAirLines: boolean = true;
  public isOpenDepartureTime: boolean = true;
  public isOpenArrivalTime: boolean = true;
  public isOpenFilter: boolean = true;

  public getStopParams: string[] = [];
  public getAirlineParams: string[] = [];
  public getArrivalTimeParams: string[] = [];
  public getDepartureTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor() {
    this.flightService.isOpenResponsiveFilter = false;

    this.route.queryParams.subscribe(params => {
      this.getStopParams = params['stop'] ? params['stop'].split(',') : [];
      this.getAirlineParams = params['airline'] ? params['airline'].split(',') : [];
      this.getArrivalTimeParams = params['arrival_time'] ? params['arrival_time'].split(',') : [];
      this.getDepartureTimeParams = params['departure_time']
        ? params['departure_time'].split(',')
        : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
      this.priceData = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      };

      this.paramsTag = [
        ...this.getStopParams,
        ...this.getAirlineParams,
        ...this.getArrivalTimeParams,
        ...this.getDepartureTimeParams,
      ];

      this.store.dispatch(new GetFlights(this.paramsTag, this.priceData));
    });
  }

  openFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  openStops() {
    this.isOpenStops = !this.isOpenStops;
  }

  openPrice() {
    this.isOpenPrice = !this.isOpenPrice;
  }

  openAirLines() {
    this.isOpenAirLines = !this.isOpenAirLines;
  }

  openDepartureTime() {
    this.isOpenDepartureTime = !this.isOpenDepartureTime;
  }

  openArrivalTime() {
    this.isOpenArrivalTime = !this.isOpenArrivalTime;
  }

  closeResponsiveFilter() {
    this.flightService.isOpenResponsiveFilter = false;
  }
}
