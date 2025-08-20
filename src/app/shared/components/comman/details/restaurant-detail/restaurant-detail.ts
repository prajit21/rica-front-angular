import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Store } from '@ngxs/store';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';

import { pagination } from '../../../../../shared/interface/cab';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { GridService } from '../../../../../shared/services/grid.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { RestaurantState } from '../../../../../shared/store/state/restaurant.state';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NoData } from '../../../ui/no-data/no-data';
import { Pagination } from '../../../ui/pagination/pagination';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.html',
  styleUrl: './restaurant-detail.scss',
  imports: [CarouselModule, RouterLink, NgClass, NoData, Pagination, CurrencySymbolPipe],
})
export class RestaurantDetail {
  private paginationService = inject(PaginationService);
  public hotelService = inject(HotelService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private gridService = inject(GridService);
  private restaurantService = inject(RestaurantService);

  readonly selectedTabValue = input<string>();
  readonly gridType = input<string>();
  readonly responsiveLatestFilter = input<boolean>();
  readonly imageSlider = input<boolean>();

  public restaurantDetails: restaurantDetail[];
  public restaurant: restaurantDetail[];

  public getTagParams: string[] = [];
  public getCuisinesParams: string[] = [];
  public getRatingParams: string[] = [];
  public getDeliveryTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public paginate: pagination;
  public pageNo: number = 1;

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;

  public icon: string = 'assets/images/restaurant/serving-dish.png';
  public title: string = 'food or restaurant';
  public description: string =
    'We can’t find anything related to your search. Try a different search.';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  restaurant$: Observable<restaurantDetail[]> = inject(Store).select(RestaurantState.restaurant);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.getTagParams = params['tag'] ? params['tag'].split(',') : [];
      this.getCuisinesParams = params['cuisines'] ? params['cuisines'].split(',') : [];
      this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
      this.getDeliveryTimeParams = params['delivery_time']
        ? params['delivery_time'].split(',')
        : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

      this.tags = [
        ...this.getTagParams,
        ...this.getCuisinesParams,
        ...this.getRatingParams,
        ...this.getDeliveryTimeParams,
      ];

      this.restaurant$.subscribe(res => {
        this.restaurantDetails = res;

        if (this.restaurantDetails) {
          this.restaurant = this.restaurantDetails.filter(data => {
            const selectedTabValue = this.selectedTabValue();
            if (selectedTabValue == 'all') {
              return data;
            } else {
              return data.restaurantType == selectedTabValue;
            }
          });
          // Pagination
          this.paginate = this.paginationService.getPager(this.restaurant?.length, +this.pageNo);

          this.restaurant = this.restaurant?.slice(
            this.paginate.startIndex,
            this.paginate.endIndex + 1,
          );
        }
      });
    });
  }

  ngOnInit() {
    const gridType = this.gridType();
    if (gridType == '2-grid') {
      this.gridService.col_sm_6 = true;
    } else if (gridType == '3-grid') {
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_4 = true;
    } else if (gridType == '4-grid') {
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_3 = true;
      this.gridService.col_lg_4 = true;
      this.gridService.col_xl_4 = false;
    }
  }

  openResponsiveFilter() {
    this.restaurantService.isOpenResponsiveFilter = true;
  }

  ngOnChanges() {
    this.route.queryParams.subscribe(params => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;

      if (this.restaurantDetails) {
        this.restaurant = this.restaurantDetails.filter(data => {
          const selectedTabValue = this.selectedTabValue();
          if (selectedTabValue) {
            if (selectedTabValue == 'all') {
              return data;
            } else {
              return data.restaurantType == selectedTabValue;
            }
          } else {
            return data;
          }
        });
        // Pagination
        this.paginate = this.paginationService.getPager(this.restaurant?.length, +this.pageNo);

        this.restaurant = this.restaurant?.slice(
          this.paginate.startIndex,
          this.paginate.endIndex + 1,
        );
      }
    });
  }

  setPage(page: number) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  removeTag(value: string) {
    this.getTagParams = this.getTagParams.filter((tag: string) => tag != value);
    this.getCuisinesParams = this.getCuisinesParams.filter((cuisines: string) => cuisines != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getDeliveryTimeParams = this.getDeliveryTimeParams.filter(
      (delivery_time: string) => delivery_time != value,
    );

    let params = {
      tag: this.getTagParams.length ? this.getTagParams.join(',') : null,
      cuisines: this.getCuisinesParams.length ? this.getCuisinesParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      delivery_time: this.getDeliveryTimeParams.length
        ? this.getDeliveryTimeParams.join(',')
        : null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  ngDoCheck() {
    this.listView = this.gridService.listView;
    this.col_sm_6 = this.gridService.col_sm_6;
    this.col_xl_4 = this.gridService.col_xl_4;
    this.col_xl_3 = this.gridService.col_xl_3;
    this.col_lg_4 = this.gridService.col_lg_4;
    this.col_12 = this.gridService.col_12;
  }

  ngOnDestroy() {
    this.gridService.col_sm_6 = false;
    this.gridService.col_xl_4 = false;
    this.gridService.col_xl_3 = false;
    this.gridService.col_lg_4 = false;
    this.gridService.col_12 = false;
  }
}
