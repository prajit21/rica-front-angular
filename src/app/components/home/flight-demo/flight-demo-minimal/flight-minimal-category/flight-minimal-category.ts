import { Component, Input, input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { Category } from '../../../../../shared/components/comman/category/category';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-flight-minimal-category',
    templateUrl: './flight-minimal-category.html',
    styleUrls: ['./flight-minimal-category.scss'],
    imports: [Title, Category]
})
export class FlightMinimalCategory {

  readonly id = input<number[]>();
  @Input() package: category[];

  public description = "View all live offers for your flight bookings";

   ngOnChanges(){
    if (Array.isArray(this.id())) {
      this.package = this.package?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
