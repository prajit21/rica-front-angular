import { Component, input } from '@angular/core';
import { tourHighlight } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-highlight',
    templateUrl: './tour-highlight.html',
    styleUrl: './tour-highlight.scss',
    
})
export class TourHighlight {

  readonly highlights = input<tourHighlight[]>();
  readonly image = input<boolean>(true);
  readonly bottomDetails = input<boolean>(true);
  
}
