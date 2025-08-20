import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { cab, pagination } from '../../../../../shared/interface/cab';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { CabService } from '../../../../../shared/services/cab.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { GetCab } from '../../../../../shared/store/action/cab.action';
import { CabState } from '../../../../../shared/store/state/cab.state';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NoData } from '../../../ui/no-data/no-data';
import { Pagination } from '../../../ui/pagination/pagination';

@Component({
  selector: 'app-cab-list-details',
  templateUrl: './cab-list-details.html',
  styleUrl: './cab-list-details.scss',
  imports: [NgClass, RouterLink, NoData, Pagination, CurrencySymbolPipe],
})
export class CabListDetails {
  private cabService = inject(CabService);
  private paginationService = inject(PaginationService);
  public hotelService = inject(HotelService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  readonly marginClass = input<boolean>();
  readonly responsiveLatestFilter = input<boolean>();
  readonly noSidebar = input<boolean>();

  public getCarTypeParams: string[] = [];
  public getCarCapacityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getCarOptionParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];
  public params: Params;

  public cabDetails: cab[];

  public paginate: pagination;
  public pageNo: number = 1;

  public icon: string = 'assets/images/cab/car/2.png';
  public title: string = 'cars';
  public description: string =
    'no cars were found for this route and date combination. modify your search and try again';

  @Select(CabState.cab) cab$: Observable<cab[]>;

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.params = params;
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
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

      if (!Object.keys(params).length) {
        this.paramsTag = [];
        this.store.dispatch(new GetCab(this.paramsTag, this.priceData));
      }

      this.paramsTag = [
        ...this.getCarTypeParams,
        ...this.getCarCapacityParams,
        ...this.getRatingParams,
        ...this.getCarOptionParams,
      ];

      this.cab$.subscribe(res => {
        this.cabDetails = res;

        this.paginate = this.paginationService.getPager(this.cabDetails?.length, +this.pageNo, 6);

        this.cabDetails = this.cabDetails?.slice(
          this.paginate.startIndex,
          this.paginate.endIndex + 1,
        );
      });
    });
  }

  ngOnChanges() {
    // If No Sidebar
    if (this.noSidebar()) {
      if (!Object.keys(this.params).length) {
        this.paramsTag = [];
        this.store.dispatch(new GetCab(this.paramsTag, this.priceData));
      }
    }
  }

  setPage(page: number) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  removeTag(value: string) {
    this.getCarTypeParams = this.getCarTypeParams.filter((car_type: string) => car_type != value);
    this.getCarCapacityParams = this.getCarCapacityParams.filter(
      (capacity: string) => capacity != value,
    );
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getCarOptionParams = this.getCarOptionParams.filter(
      (car_option: string) => car_option != value,
    );

    let params = {
      car_type: this.getCarTypeParams.length ? this.getCarTypeParams.join(',') : null,
      capacity: this.getCarCapacityParams.length ? this.getCarCapacityParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      car_option: this.getCarOptionParams.length ? this.getCarOptionParams.join(',') : null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  openResponsiveFilter() {
    this.cabService.isOpenResponsiveFilter = true;
  }
}
