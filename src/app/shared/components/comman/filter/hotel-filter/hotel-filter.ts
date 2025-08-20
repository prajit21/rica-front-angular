import { NgStyle } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';

import { HotelDistrict } from './hotel-district/hotel-district';
import { HotelFacility } from './hotel-facility/hotel-facility';
import { HotelLanguage } from './hotel-language/hotel-language';
import { HotelPrice } from './hotel-price/hotel-price';
import { HotelRating } from './hotel-rating/hotel-rating';
import { Hotels } from './hotels/hotels';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { GetHotels } from '../../../../../shared/store/action/hotel.action';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.html',
  styleUrls: ['./hotel-filter.scss'],
  imports: [NgStyle, HotelDistrict, HotelFacility, HotelRating, HotelPrice, HotelLanguage, Hotels],
})
export class HotelFilter {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public hotelService = inject(HotelService);

  readonly mapFilter = input<boolean>();
  readonly district = input<boolean>();
  readonly facility = input<boolean>();
  readonly rating = input<boolean>();
  readonly price = input<boolean>();
  readonly language = input<boolean>();
  readonly hotels = input<boolean>();

  public isOpenFilter: boolean = true;
  public getDistrictParams: string[] = [];
  public getFacilityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getLanguageParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.getDistrictParams = params['district'] ? params['district'].split(',') : [];
      this.getFacilityParams = params['facility'] ? params['facility'].split(',') : [];
      this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
      this.getLanguageParams = params['language'] ? params['language'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
      this.priceData = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      };

      this.paramsTag = [
        ...this.getDistrictParams,
        ...this.getFacilityParams,
        ...this.getRatingParams,
        ...this.getLanguageParams,
      ];

      this.store.dispatch(new GetHotels(this.paramsTag, this.priceData));
    });
  }

  openFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  closeResponsiveFilter() {
    this.hotelService.isOpenResponsiveFilter = false;
  }
}
