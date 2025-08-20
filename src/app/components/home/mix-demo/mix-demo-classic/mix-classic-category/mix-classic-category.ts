import { Component, Input, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { Category } from '../../../../../shared/components/comman/category/category';

@Component({
    selector: 'app-mix-classic-category',
    templateUrl: './mix-classic-category.html',
    styleUrls: ['./mix-classic-category.scss'],
    imports: [Category]
})
export class MixClassicCategory {

  readonly id = input<number[]>();
  @Input() category: category[];

  ngOnChanges(){
    if(Array.isArray(this.id())){
      this.category = this.category?.filter((data) => {
        return this.id()!.includes(data.id)
      })
    }
  }
}
