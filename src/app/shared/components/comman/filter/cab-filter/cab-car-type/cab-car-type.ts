import { Component, inject } from '@angular/core';
import { carTypes } from '../../../../../../shared/components/data/data/filter/cab';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-cab-car-type',
    templateUrl: './cab-car-type.html',
    styleUrl: './cab-car-type.scss',
    imports: [NgStyle]
})
export class CabCarType {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public carTypes = carTypes;

  public isOpenType: boolean = true;
  public selectedCarType: string[] = [];

  constructor(){
      this.route.queryParams.subscribe((params) => {
        this.selectedCarType = params['car_type'] ? params['car_type'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedCarType.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedCarType.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedCarType.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { car_type: this.selectedCarType.length ? this.selectedCarType.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedCarType?.includes(item)){
      return true;
    }
    return false;
  }

  openType(){
    this.isOpenType =! this.isOpenType;
  }
}
