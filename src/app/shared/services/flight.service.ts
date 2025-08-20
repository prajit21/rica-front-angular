import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { flight, flights } from '../interface/flight';
import { flightLeftSidebar } from '../interface/flight-left-sidebar';
import { flightMinimal } from '../interface/flight-minimal';
import { flightModern } from '../interface/flight-modern';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  public isOpenResponsiveFilter: boolean = false;

  private http = inject(HttpClient);

  // Flight Modern
  flightModern(): Observable<flightModern> {
    return this.http.get<flightModern>('assets/json/theme/flight-modern.json');
  }

  // Flight Minimal
  flightMinimal(): Observable<flightMinimal> {
    return this.http.get<flightMinimal>('assets/json/theme/flight-minimal.json');
  }

  // Flight Left Sidebar
  flightLeftSidebar(): Observable<flightLeftSidebar> {
    return this.http.get<flightLeftSidebar>('assets/json/theme/flight-left-sidebar.json');
  }

  // Flights
  flight(): Observable<flights> {
    return this.http.get<flights>('assets/json/grid/flight.json');
  }

  // Flight Filter
  public flights: string | undefined;
  getFlightDetails(filter: string[]): Observable<flight[]> {
    return this.flight().pipe(map((flight) =>
      flight.flight.filter((item) => {
        if (!filter.length) {
          return true
        }
        this.flights = filter.find((data: string) => {
          if (item.tags) {
            if (item.tags.includes(data))
              return data
          }
        })
        return this.flights;
      })
    ));
  }

  // Get Max Price
  getMaxPrice(): Observable<number> {
    return this.flight().pipe(map((flight) => Math.max(...flight.flight.map((price) => price.price))));
  }
}

