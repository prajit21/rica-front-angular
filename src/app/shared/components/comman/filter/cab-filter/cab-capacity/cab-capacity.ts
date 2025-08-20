import { Component, inject } from '@angular/core';
import { cabCapacity } from '../../../../../../shared/components/data/data/filter/cab';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-cab-capacity',
    templateUrl: './cab-capacity.html',
    styleUrl: './cab-capacity.scss',
    imports: [NgStyle]
})
export class CabCapacity {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public cabCapacity = cabCapacity;

  public isOpenCapacity: boolean = true;
  public selectedCapacity: string[] = [];

  constructor(){
      this.route.queryParams.subscribe((params) => {
        this.selectedCapacity = params['capacity'] ? params['capacity'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedCapacity.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedCapacity.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedCapacity.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { capacity: this.selectedCapacity.length ? this.selectedCapacity.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedCapacity?.includes(item)){
      return true;
    }
    return false;
  }

  openCapacity(){
    this.isOpenCapacity =! this.isOpenCapacity;
  }
}
