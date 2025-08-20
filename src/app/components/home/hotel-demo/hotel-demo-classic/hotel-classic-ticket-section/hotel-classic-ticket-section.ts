import { Component, Input, input } from '@angular/core';
import { specialRoom } from '../../../../../shared/interface/hotel-classic';
import { TicketSection } from '../../../../../shared/components/comman/ticket-section/ticket-section';
import { Title } from '../../../../../shared/components/comman/title/title';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-hotel-classic-ticket-section',
    templateUrl: './hotel-classic-ticket-section.html',
    styleUrls: ['./hotel-classic-ticket-section.scss'],
    imports: [Animation, Title, TicketSection]
})
export class HotelClassicTicketSection {

  readonly id = input<number[]>();
  @Input() ticketSection: specialRoom[];

  ngOnChanges(){
     if (Array.isArray(this.id())) {
      this.ticketSection = this.ticketSection?.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
