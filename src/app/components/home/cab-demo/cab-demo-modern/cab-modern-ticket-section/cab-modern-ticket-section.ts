import { Component, Input, input } from '@angular/core';
import { cabDetails } from '../../../../../shared/interface/cab-modern';
import { TicketSection } from '../../../../../shared/components/comman/ticket-section/ticket-section';
import { Title } from '../../../../../shared/components/comman/title/title';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-cab-modern-ticket-section',
    templateUrl: './cab-modern-ticket-section.html',
    styleUrls: ['./cab-modern-ticket-section.scss'],
    imports: [Animation, Title, TicketSection]
})
export class CabModernTicketSection {

  readonly id = input<number[]>();
  @Input() cab: cabDetails[];

  ngOnChanges(){
    if(Array.isArray(this.id())){
      this.cab = this.cab.filter((item) => {
        return this.id()?.includes(item.id)
      })
    }
  }
}
