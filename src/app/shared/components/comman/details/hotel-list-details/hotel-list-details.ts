import { Component, inject, Input, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { HotelListImages } from './hotel-list-images/hotel-list-images';
import { pagination } from '../../../../../shared/interface/cab';
import { hotels } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { HotelState } from '../../../../../shared/store/state/hotel.state';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NoData } from '../../../ui/no-data/no-data';
import { Pagination } from '../../../ui/pagination/pagination';

@Component({
  selector: 'app-hotel-list-details',
  templateUrl: './hotel-list-details.html',
  styleUrls: ['./hotel-list-details.scss'],
  imports: [HotelListImages, RouterLink, NgbRating, NoData, Pagination, CurrencySymbolPipe],
})
export class HotelListDetails {
  private paginationService = inject(PaginationService);
  public hotelService = inject(HotelService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private config = inject(NgbRatingConfig);

  readonly responsiveLatestFilter = input<boolean>();
  readonly selectedTabValue = input<string>();
  @Input() imageSlider: boolean;
  @Input() thumbnailImages: boolean;
  readonly description = input<boolean>();
  @Input() thumbnailVideo: boolean;

  public hotelDetails: hotels[];
  public hotels: hotels[];

  public paginate: pagination;
  public pageNo: number = 1;

  public getDistrictParams: string[] = [];
  public getFacilityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getLanguageParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public icon: string = 'assets/images/icon/hotel.png';
  public title: string = 'hotel';
  public descriptionData: string = 'no hotels were found. modify your search and try again';

  hotel$: Observable<hotels[]> = inject(Store).select(HotelState.hotel);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.getDistrictParams = params['district'] ? params['district'].split(',') : [];
      this.getFacilityParams = params['facility'] ? params['facility'].split(',') : [];
      this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
      this.getLanguageParams = params['language'] ? params['language'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

      this.tags = [
        ...this.getDistrictParams,
        ...this.getFacilityParams,
        ...this.getRatingParams,
        ...this.getLanguageParams,
      ];

      // Rating
      this.config.max = 5;
      this.config.readonly = true;

      this.hotel$.subscribe(res => {
        this.hotelDetails = res;

        this.paginate = this.paginationService.getPager(this.hotelDetails?.length, +this.pageNo);

        this.hotelDetails = this.hotelDetails?.slice(
          this.paginate.startIndex,
          this.paginate.endIndex + 1,
        );
      });
    });
  }

  removeTag(value: string) {
    this.getDistrictParams = this.getDistrictParams.filter((district: string) => district != value);
    this.getFacilityParams = this.getFacilityParams.filter((facility: string) => facility != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getLanguageParams = this.getLanguageParams.filter((language: string) => language != value);

    let params = {
      district: this.getDistrictParams.length ? this.getDistrictParams.join(',') : null,
      facility: this.getFacilityParams.length ? this.getFacilityParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      language: this.getLanguageParams.length ? this.getLanguageParams.join(',') : null,
    };

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  setPage(page: number) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  openResponsiveFilter() {
    this.hotelService.isOpenResponsiveFilter = true;
  }
}
