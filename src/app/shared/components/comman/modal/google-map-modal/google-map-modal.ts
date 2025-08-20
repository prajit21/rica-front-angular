import { Component, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMap } from '../../details/google-map/google-map';
import { Filter } from '../../filter/filter';

@Component({
    selector: 'app-google-map-modal',
    templateUrl: './google-map-modal.html',
    styleUrls: ['./google-map-modal.scss'],
    imports: [Filter, GoogleMap]
})
export class GoogleMapModal {

  readonly filterType = input<string>();

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
