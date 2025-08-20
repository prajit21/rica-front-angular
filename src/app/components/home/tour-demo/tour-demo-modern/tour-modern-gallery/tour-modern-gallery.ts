import { Component, input } from '@angular/core';
import { tourGallery } from '../../../../../shared/interface/tour-modern';
import { Gallery } from '../../../../../shared/components/comman/gallery/gallery';

@Component({
    selector: 'app-tour-modern-gallery',
    templateUrl: './tour-modern-gallery.html',
    styleUrls: ['./tour-modern-gallery.scss'],
    imports: [Gallery]
})
export class TourModernGallery {

  readonly gallery = input<tourGallery[]>();
  readonly title = input<boolean>(false);
  readonly sectionClass = input<boolean>(false);
  
}
