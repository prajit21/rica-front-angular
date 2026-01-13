import { Component, input, computed } from '@angular/core';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { TicketSection } from '../../../../../shared/components/comman/ticket-section/ticket-section';
import { Title } from '../../../../../shared/components/comman/title/title';
import { specialRoom } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-hotel-classic-ticket-section',
  templateUrl: './hotel-classic-ticket-section.html',
  styleUrls: ['./hotel-classic-ticket-section.scss'],
  imports: [Animation, Title, TicketSection],
})
export class HotelClassicTicketSection {
  readonly id = input<number[]>([]);
  readonly ticketSection = input<specialRoom[]>([]);

  readonly filteredTicketSection = computed(() => {
    const ids = this.id();
    const tickets = this.ticketSection();

    if (!ids.length) return tickets;

    return tickets.filter(item => ids.includes(item.id));
  });
}
