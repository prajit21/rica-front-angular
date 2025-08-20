import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-flight-left-sidebar-home-section',
  templateUrl: './flight-left-sidebar-home-section.html',
  styleUrls: ['./flight-left-sidebar-home-section.scss'],
  imports: [NgClass],
})
export class FlightLeftSidebarHomeSection {
  readonly displayClass = input<string>();
}
