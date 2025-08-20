import { Component, input } from '@angular/core';
import { faqDetails } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-faq-details',
    templateUrl: './faq-details.html',
    styleUrl: './faq-details.scss',
    
})
export class FaqDetails {

  readonly faqDetails = input<faqDetails[]>();

}
