import { Component, inject, Input, input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tours } from '../../../../../shared/interface/tour';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { TourService } from '../../../../../shared/services/tour.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Select } from '@ngxs/store';
import { tourState } from '../../../../../shared/store/state/tour.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { pagination } from '../../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { Pagination } from '../../../ui/pagination/pagination';
import { NoData } from '../../../ui/no-data/no-data';
import { TourListImages } from './tour-list-images/tour-list-images';

@Component({
    selector: 'app-tour-list-details',
    templateUrl: './tour-list-details.html',
    styleUrls: ['./tour-list-details.scss'],
    imports: [TourListImages, RouterLink, NoData, Pagination, CurrencySymbolPipe]
})
export class TourListDetails {

  private paginationService = inject(PaginationService); 
  public hotelService = inject(HotelService);
  private router = inject(Router); 
  private route = inject(ActivatedRoute);
  private tourService = inject(TourService);
  private config = inject(NgbRatingConfig);

  readonly selectedTabValue = input<string>();
  readonly responsiveLatestFilter = input<boolean>();
  @Input() imageSlider: boolean;
  @Input() thumbnailImages: boolean;
  readonly description = input<boolean>();
  @Input() thumbnailVideo: boolean;

  public tourDetails: tours[];
  public tours: tours[];

  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public paginate: pagination; 
  public pageNo: number = 1;

  public icon: string = 'assets/images/icon/tour/tour-not-found.jpg';
  public title: string = 'tour';
  public descriptionData: string = 'no tours were found. modify your search and try again';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  @Select(tourState.tour) tour$: Observable<tours[]>;

  constructor(){
      this.route.queryParams.subscribe((params) => {
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

        this.tags = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams]

        // Rating
        this.config.max = 5;
        this.config.readonly = true;

        this.tour$.subscribe((res) => {
          this.tourDetails = res

          if(this.tourDetails){
            this.tours = this.tourDetails.filter((data) => {
              const selectedTabValue = this.selectedTabValue();
              if(selectedTabValue == 'all'){
                return data
              }else{
                return data.category == selectedTabValue;
              }
            })
            // Pagination
          this.paginate = this.paginationService.getPager(this.tours?.length, +this.pageNo );

          this.tours = this.tours?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
          }
        })
      })
  }

  ngOnChanges(){

  if(this.tourDetails){
      this.tours = this.tourDetails.filter((data) => {
        const selectedTabValue = this.selectedTabValue();
        if(selectedTabValue == 'all'){
          return data
        }else{
          return data.category == selectedTabValue;
        }
      })
    }
    // Pagination
      this.paginate = this.paginationService.getPager(this.tours?.length, +this.pageNo );

      this.tours = this.tours?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
  }

  setPage(page: number){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge"
    });
  }

  removeTag(value: string){
    this.getFlightParams = this.getFlightParams.filter((flight: string) => flight != value);
    this.getTravelTypeParams = this.getTravelTypeParams.filter((travel_type: string) => travel_type != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getTripDurationParams = this.getTripDurationParams.filter((trip_duration: string) => trip_duration != value);


    let params = {
      flight: this.getFlightParams.length ? this.getFlightParams.join(',') : null,
      travel_type: this.getTravelTypeParams.length ? this.getTravelTypeParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      trip_duration: this.getTripDurationParams.length ? this.getTripDurationParams.join(',') : null
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge"
    });
  }

  openResponsiveFilter(){
    this.tourService.isOpenResponsiveFilter = true;
  }

}
