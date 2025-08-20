import { Component, inject } from '@angular/core';
import { tourTripDuration } from '../../../../../../shared/components/data/data/filter/tour';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-trip-duration',
    templateUrl: './tour-trip-duration.html',
    styleUrls: ['./tour-trip-duration.scss'],
    imports: [NgStyle]
})
export class TourTripDuration {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public tourTripDuration = tourTripDuration;
  public isOpenTripDuration: boolean = true;
  public selectedTripDuration: string[] = []

  constructor(){
      this.route.queryParams.subscribe((params) => {
        this.selectedTripDuration = params['trip_duration'] ? params['trip_duration'].split(",") : []
      })
    }

  openTripDuration(){
    this.isOpenTripDuration = !this.isOpenTripDuration;
  }

  applyFilter(event: Event){
    const index = this.selectedTripDuration.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedTripDuration.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedTripDuration.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { trip_duration: this.selectedTripDuration.length ? this.selectedTripDuration.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedTripDuration?.includes(item)){
      return true;
    }
    return false;
  }
}
