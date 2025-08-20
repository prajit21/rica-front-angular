import { Component, Input, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { Category } from '../../../../../shared/components/comman/category/category';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-tour-modern-category',
    templateUrl: './tour-modern-category.html',
    styleUrls: ['./tour-modern-category.scss'],
    imports: [Title, Category]
})
export class TourModernCategory {

  readonly id = input<number[]>();
  @Input() category: category[];

  public description = "Trips, experiences, and places. All in one service.";

  ngOnChanges(){
    if (Array.isArray(this.id())) {
      this.category = this.category?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
