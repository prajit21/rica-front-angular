import { Component, inject, Input, input } from '@angular/core';
import { FlightService } from '../../../../../shared/services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { FlightDetails } from './widgets/flight-details/flight-details';
import { DateCalender } from './widgets/date-calender/date-calender';
import { DateSlider } from './widgets/date-slider/date-slider';

@Component({
    selector: 'app-flight-list-details',
    templateUrl: './flight-list-details.html',
    styleUrl: './flight-list-details.scss',
    imports: [DateSlider, DateCalender, FlightDetails, CurrencySymbolPipe]
})
export class FlightListDetails {

  private flightService = inject(FlightService); 
  public hotelService = inject(HotelService);
  private router = inject(Router); 
  private route = inject(ActivatedRoute);

  readonly calender = input<boolean>();
  readonly flightClass = input<boolean>();
  @Input() roundTrip: boolean;

  public getStopParams: string[] = [];
  public getAirlineParams: string[] = [];
  public getArrivalTimeParams: string[] = [];
  public getDepartureTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  constructor(){
    this.route.queryParams.subscribe((params) => {
      this.getStopParams = params['stop'] ? params['stop'].split(',') : [];
      this.getAirlineParams = params['airline'] ? params['airline'].split(',') : [];
      this.getArrivalTimeParams = params['arrival_time'] ? params['arrival_time'].split(',') : [];
      this.getDepartureTimeParams = params['departure_time'] ? params['departure_time'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
    })}

  openResponsiveFilter(){
    this.flightService.isOpenResponsiveFilter = true;
  }

  tagData(event: string[]){
    this.tags = event;
  }

  removeTag(value: string){
    this.getStopParams = this.getStopParams.filter((stop: string) => stop != value);
    this.getAirlineParams = this.getAirlineParams.filter((airline: string) => airline != value);
    this.getArrivalTimeParams = this.getArrivalTimeParams.filter((arrival_time: string) => arrival_time != value);
    this.getDepartureTimeParams = this.getDepartureTimeParams.filter((departure_time: string) => departure_time != value);


    let params = {
      stop: this.getStopParams.length ? this.getStopParams.join(',') : null,
      airline: this.getAirlineParams.length ? this.getAirlineParams.join(',') : null,
      arrival_time: this.getArrivalTimeParams.length ? this.getArrivalTimeParams.join(',') : null,
      departure_time: this.getDepartureTimeParams.length ? this.getDepartureTimeParams.join(',') : null
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge"
    });

  }
}
