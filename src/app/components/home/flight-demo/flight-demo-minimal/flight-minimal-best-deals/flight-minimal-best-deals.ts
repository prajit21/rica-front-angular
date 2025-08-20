import { Component, inject, input } from '@angular/core';
import { deal } from '../../../../../shared/interface/tour-trending';
import { TourService } from '../../../../../shared/services/tour.service';
import { Deals } from '../../../../../shared/components/comman/deals/deals';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-flight-minimal-best-deals',
    templateUrl: './flight-minimal-best-deals.html',
    styleUrls: ['./flight-minimal-best-deals.scss'],
    imports: [Title, Deals]
})
export class FlightMinimalBestDeals {

  private tourService = inject(TourService);

  readonly id = input<number[]>();

  public deals: deal[];
  public description = "View all live offers for your flight bookings"

  constructor(){
    this.tourService.deals().subscribe(response => {
      this.deals = response.deals;

      if (Array.isArray(this.id())) {
       this.deals = this.deals?.filter((item) => {
         return this.id()?.includes(item.id)
       })
     }
    })
  }
}
