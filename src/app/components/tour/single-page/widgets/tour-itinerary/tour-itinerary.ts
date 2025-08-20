import { Component, input } from '@angular/core';
import { tourItinerary } from '../../../../../shared/interface/tour';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tour-itinerary',
    templateUrl: './tour-itinerary.html',
    styleUrl: './tour-itinerary.scss',
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody]
})
export class TourItinerary {

  readonly itinerary = input<tourItinerary[]>();

}
