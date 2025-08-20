import { Component, Input, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { Category } from '../../../../../shared/components/comman/category/category';

@Component({
    selector: 'app-restaurant-classic-category',
    templateUrl: './restaurant-classic-category.html',
    styleUrls: ['./restaurant-classic-category.scss'],
    imports: [Category]
})
export class RestaurantClassicCategory {

  readonly id = input<number[]>();
  @Input() category: category[];

  ngOnChanges(){
    if (Array.isArray(this.id())) {
      this.category = this.category?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
