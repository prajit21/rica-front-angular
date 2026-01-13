import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';

import { priceFilter } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { GetHotels } from '../../../../../shared/store/action/hotel.action';
import { HotelDistrict } from '../hotel-filter/hotel-district/hotel-district';
import { HotelFacility } from '../hotel-filter/hotel-facility/hotel-facility';
import { HotelLanguage } from '../hotel-filter/hotel-language/hotel-language';
import { HotelPrice } from '../hotel-filter/hotel-price/hotel-price';
import { HotelRating } from '../hotel-filter/hotel-rating/hotel-rating';

@Component({
  selector: 'app-hotel-filter-horizontal',
  templateUrl: './hotel-filter-horizontal.html',
  styleUrls: ['./hotel-filter-horizontal.scss'],
  imports: [HotelFacility, HotelLanguage, HotelRating, HotelPrice, HotelDistrict],
})
export class HotelFilterHorizontal {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public hotelService = inject(HotelService);

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

  closeResponsiveHorizontal() {
    this.hotelService.isOpenHorizontalFilter = false;
    this.hotelService.isOpenResponsiveHorizontal = false;
  }
}
