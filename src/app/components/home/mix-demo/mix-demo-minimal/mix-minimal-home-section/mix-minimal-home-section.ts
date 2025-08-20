import { Component, Input } from '@angular/core';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';

@Component({
    selector: 'app-mix-minimal-home-section',
    templateUrl: './mix-minimal-home-section.html',
    styleUrls: ['./mix-minimal-home-section.scss'],
    imports: [SearchBox]
})
export class MixMinimalHomeSection {

  @Input() searchBoxType: string;

}
