import { Component, inject, input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LeafletMap } from '../../details/leaflet-map/leaflet-map';
import { Filter } from '../../filter/filter';

@Component({
    selector: 'app-leaflet-map-modal',
    templateUrl: './leaflet-map-modal.html',
    styleUrls: ['./leaflet-map-modal.scss'],
    imports: [Filter, LeafletMap]
})
export class LeafletMapModal {

  readonly filterType = input<string>();

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
