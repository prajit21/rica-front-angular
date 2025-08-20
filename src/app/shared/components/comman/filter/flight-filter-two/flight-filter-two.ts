import { Component, inject } from '@angular/core';
import { FlightService } from '../../../../../shared/services/flight.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getFlights } from '../../../../../shared/store/action/flight.action';
import { FlightArrivalTime } from '../flight-filter/widgets/flight-arrival-time/flight-arrival-time';
import { FlightDepartureTime } from '../flight-filter/widgets/flight-departure-time/flight-departure-time';
import { FlightAirlines } from '../flight-filter/widgets/flight-airlines/flight-airlines';
import { FlightPrice } from '../flight-filter/widgets/flight-price/flight-price';
import { FlightFare } from '../flight-filter/widgets/flight-fare/flight-fare';
import { FlightStops } from '../flight-filter/widgets/flight-stops/flight-stops';
import { ClickOutsideDirective } from '../../../../directives/outside.directive';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-flight-filter-two',
    templateUrl: './flight-filter-two.html',
    styleUrl: './flight-filter-two.scss',
    imports: [NgStyle, ClickOutsideDirective, FlightStops, FlightFare, FlightPrice, FlightAirlines, FlightDepartureTime, FlightArrivalTime]
})
export class FlightFilterTwo {

  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public flightService = inject(FlightService);

  public isOpenStops: boolean = false;
  public isOpenFare: boolean = false;
  public isOpenPrice: boolean = false;
  public isOpenAirLines: boolean = false;
  public isOpenDepartureTime: boolean = false;
  public isOpenArrivalTime: boolean = false;
  public isOpenFilter: boolean = false;

  public getStopParams: string[] = [];
  public getFareParams: string[] = [];
  public getAirlineParams: string[] = [];
  public getArrivalTimeParams: string[] = [];
  public getDepartureTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor(){
    this.flightService.isOpenResponsiveFilter = false;

    this.route.queryParams.subscribe((params) => {
        this.getStopParams = params['stop'] ? params['stop'].split(',') : [];
        this.getFareParams = params['fare'] ? params['fare'].split(',') : [];
        this.getAirlineParams = params['airline'] ? params['airline'].split(',') : [];
        this.getArrivalTimeParams = params['arrival_time'] ? params['arrival_time'].split(',') : [];
        this.getDepartureTimeParams = params['departure_time'] ? params['departure_time'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getStopParams, ...this.getFareParams, ...this.getAirlineParams, ...this.getArrivalTimeParams, ...this.getDepartureTimeParams];

        this.store.dispatch(new getFlights(this.paramsTag, this.priceData));

      })
  }

  openFilter(){
    this.isOpenFilter =! this.isOpenFilter;
  }

  openStops(){
    this.isOpenStops =! this.isOpenStops;
    this.isOpenFare = false;
    this.isOpenPrice = false;
    this.isOpenAirLines = false;
    this.isOpenDepartureTime = false;
    this.isOpenArrivalTime = false;
  }

  openFare(){
    this.isOpenFare =! this.isOpenFare;
    this.isOpenStops = false;
    this.isOpenPrice = false;
    this.isOpenAirLines = false;
    this.isOpenDepartureTime = false;
    this.isOpenArrivalTime = false;
  }

  openPrice(){
    this.isOpenPrice =! this.isOpenPrice;
    this.isOpenStops = false;
    this.isOpenFare = false;
    this.isOpenAirLines = false;
    this.isOpenDepartureTime = false;
    this.isOpenArrivalTime = false;
  }

  openAirLines(){
    this.isOpenAirLines =! this.isOpenAirLines;
    this.isOpenStops = false;
    this.isOpenFare = false;
    this.isOpenPrice = false;
    this.isOpenDepartureTime = false;
    this.isOpenArrivalTime = false;
  }

  openDepartureTime(){
    this.isOpenDepartureTime =! this.isOpenDepartureTime;
    this.isOpenStops = false;
    this.isOpenFare = false;
    this.isOpenPrice = false;
    this.isOpenAirLines = false;
    this.isOpenArrivalTime = false;
  }

  openArrivalTime(){
    this.isOpenArrivalTime =! this.isOpenArrivalTime;
    this.isOpenStops = false;
    this.isOpenFare = false;
    this.isOpenPrice = false;
    this.isOpenAirLines = false;
    this.isOpenDepartureTime = false;
  }

  closeResponsiveFilter(){
    this.flightService.isOpenResponsiveFilter = false;
  }

  clickOutside(){
    this.isOpenStops = false;
    this.isOpenFare = false;
    this.isOpenPrice = false;
    this.isOpenAirLines = false;
    this.isOpenDepartureTime = false;
    this.isOpenArrivalTime = false;
  }
}
