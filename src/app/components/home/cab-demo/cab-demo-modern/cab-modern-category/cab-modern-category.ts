import { Component, inject, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { TourService } from '../../../../../shared/services/tour.service';
import { Category } from '../../../../../shared/components/comman/category/category';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-cab-modern-category',
    templateUrl: './cab-modern-category.html',
    styleUrls: ['./cab-modern-category.scss'],
    imports: [Title, Category]
})
export class CabModernCategory {

  private tourService = inject(TourService);

  readonly id = input<number[]>();

  public category: category[];

  constructor() {

    this.tourService.category().subscribe(response => {
      this.category = response.category;

      if(Array.isArray(this.id())){
        this.category = this.category?.filter((item) => {
          return this.id()?.includes(item.id)
        })
      }
    })
  }
}
