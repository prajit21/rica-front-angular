import { Component, input } from '@angular/core';

import {
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from '@ng-bootstrap/ng-bootstrap';

import { tourItinerary } from '../../../../../shared/interface/tour';

@Component({
  selector: 'app-tour-itinerary',
  templateUrl: './tour-itinerary.html',
  styleUrl: './tour-itinerary.scss',
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionButton,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ],
})
export class TourItinerary {
  readonly itinerary = input<tourItinerary[]>();
}
