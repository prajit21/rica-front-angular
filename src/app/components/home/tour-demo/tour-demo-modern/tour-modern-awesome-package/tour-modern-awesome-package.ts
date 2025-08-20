import { Component, Input, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { Category } from '../../../../../shared/components/comman/category/category';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-tour-modern-awesome-package',
    templateUrl: './tour-modern-awesome-package.html',
    styleUrls: ['./tour-modern-awesome-package.scss'],
    imports: [Title, Category]
})
export class TourModernAwesomePackage {

  readonly id = input<number[]>();
  @Input() package: category[];

  public description = "Trips, experiences, and places. All in one service.";

   ngOnChanges(){
    if (Array.isArray(this.id())) {
      this.package = this.package?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }

}
