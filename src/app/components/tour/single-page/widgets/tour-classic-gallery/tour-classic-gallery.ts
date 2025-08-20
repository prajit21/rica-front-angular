import { Component, input } from '@angular/core';
import { tourClassicGallery } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-classic-gallery',
    templateUrl: './tour-classic-gallery.html',
    styleUrl: './tour-classic-gallery.scss',
    
})
export class TourClassicGallery {

  readonly classicGallery = input<tourClassicGallery[]>();

}
