import { Component } from '@angular/core';
import { flightSeats } from '../../../../../shared/components/data/data/filter/flight';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-flight-selected-seats',
    templateUrl: './flight-selected-seats.html',
    styleUrl: './flight-selected-seats.scss',
    imports: [NgClass]
})
export class FlightSelectedSeats {

  public flightSeats = flightSeats;

}
