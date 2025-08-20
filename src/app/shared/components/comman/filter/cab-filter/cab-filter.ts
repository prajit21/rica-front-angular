import { NgStyle, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';

import { CabCapacity } from './cab-capacity/cab-capacity';
import { CabCarType } from './cab-car-type/cab-car-type';
import { CabOption } from './cab-option/cab-option';
import { CabPrice } from './cab-price/cab-price';
import { CabRating } from './cab-rating/cab-rating';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { CabService } from '../../../../../shared/services/cab.service';
import { GetCab } from '../../../../../shared/store/action/cab.action';

@Component({
  selector: 'app-cab-filter',
  templateUrl: './cab-filter.html',
  styleUrl: './cab-filter.scss',
  imports: [NgStyle, NgClass, CabCarType, CabRating, CabPrice, CabCapacity, CabOption],
})
export class CabFilter {
  public cabService = inject(CabService);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  readonly cabHorizontal = input<boolean>();
  readonly shadowClass = input<boolean>();

  public isOpenCab: boolean = true;

  public getCarTypeParams: string[] = [];
  public getCarCapacityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getCarOptionParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor() {
    this.cabService.isOpenResponsiveFilter = false;

    this.route.queryParams.subscribe(params => {
      this.getCarTypeParams = params['car_type'] ? params['car_type'].split(',') : [];
      this.getCarCapacityParams = params['capacity'] ? params['capacity'].split(',') : [];
      this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
      this.getCarOptionParams = params['car_option'] ? params['car_option'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
      this.priceData = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      };

      this.paramsTag = [
        ...this.getCarTypeParams,
        ...this.getCarCapacityParams,
        ...this.getRatingParams,
        ...this.getCarOptionParams,
      ];

      this.store.dispatch(new GetCab(this.paramsTag, this.priceData));
    });
  }

  openCab() {
    this.isOpenCab = !this.isOpenCab;
  }

  closeResponsiveFilter() {
    this.cabService.isOpenResponsiveFilter = false;
  }

  closeResponsiveHorizontalFilter() {
    this.cabService.isOpenHorizontalFilter = false;
  }
}
