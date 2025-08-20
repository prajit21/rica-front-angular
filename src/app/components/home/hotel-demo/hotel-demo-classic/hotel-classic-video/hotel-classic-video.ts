import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModal } from '../../../../../shared/components/comman/modal/video-modal/video-modal';

@Component({
    selector: 'app-hotel-classic-video',
    templateUrl: './hotel-classic-video.html',
    styleUrls: ['./hotel-classic-video.scss'],
})
export class HotelClassicVideo {

  private modal = inject(NgbModal);

  openModal(){
    this.modal.open(VideoModal, { size: "lg", centered: true })
  }
}
