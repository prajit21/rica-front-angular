import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { hotel, hotelDetails, hotels } from '../interface/hotel';
import { homeSectionModel, hotelRooms, services, testimonials } from '../interface/hotel-classic';
import { blog, hotelMinimal } from '../interface/hotel-minimal';
import { hotelVector } from '../interface/hotel-vector';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private http = inject(HttpClient);

  public isOpenResponsiveFilter: boolean = false;
  public isOpenHorizontalFilter: boolean = false;
  public isOpenResponsiveHorizontal: boolean = false;
  public isOpenMapFilter: boolean = false;

  // Get Currency
  public currencyItem = localStorage.getItem('currency');

  public currency: string = 'usd';

  constructor() {
    if (!localStorage.getItem('currency')?.length) {
      this.currency = 'usd';
      localStorage.setItem('currency', 'usd');
    } else {
      if (this.currencyItem !== null) {
        this.currency = this.currencyItem;
      }
    }
  }

  // Home Classic Data
  hotelClassic(): Observable<homeSectionModel> {
    return this.http.get<homeSectionModel>('assets/json/theme/hotel-classic.json');
  }

  // Rooms
  hotelRooms(): Observable<hotelRooms> {
    return this.http.get<hotelRooms>('assets/json/hotel.json');
  }

  // Service
  services(): Observable<services> {
    return this.http.get<services>('assets/json/service.json');
  }

  // Testimonial
  testimonial(): Observable<testimonials> {
    return this.http.get<testimonials>('assets/json/testimonial.json');
  }

  // Hotel Minimal
  hotelMinimal(): Observable<hotelMinimal> {
    return this.http.get<hotelMinimal>('assets/json/theme/hotel-minimal.json');
  }

  // Blog
  blog(): Observable<blog> {
    return this.http.get<blog>('assets/json/blog.json');
  }

  // Hotel Vector
  hotelVector(): Observable<hotelVector> {
    return this.http.get<hotelVector>('assets/json/theme/hotel-vector.json');
  }

  // Hotel Filter
  hotel(): Observable<hotel> {
    return this.http.get<hotel>('assets/json/grid/hotel.json');
  }

  // Hotel Details
  hotelDetails(): Observable<hotelDetails> {
    return this.http.get<hotelDetails>('assets/json/pages/hotel-details.json');
  }

  public hotels: string | undefined;
  GetHotelsDetails(filter: string[]): Observable<hotels[]> {
    return this.hotel().pipe(
      map(hotel =>
        hotel.hotels.filter(item => {
          if (!filter.length) {
            return true;
          }
          this.hotels = filter.find((data: string) => {
            if (item.tags) {
              if (item.tags.includes(data)) return data;
            }
          });
          return this.hotels;
        }),
      ),
    );
  }

  getMaxPrice(): Observable<number> {
    return this.hotel().pipe(map(hotel => Math.max(...hotel.hotels.map(price => price.price))));
  }
}
