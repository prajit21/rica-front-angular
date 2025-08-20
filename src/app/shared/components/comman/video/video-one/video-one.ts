import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { VideoModal } from '../../modal/video-modal/video-modal';

@Component({
  selector: 'app-video-one',
  templateUrl: './video-one.html',
  styleUrls: ['./video-one.scss'],
  imports: [RouterLink, CurrencySymbolPipe],
})
export class VideoOne {
  private model = inject(NgbModal);
  public hotelService = inject(HotelService);

  public seconds: number;
  public interval: ReturnType<typeof setInterval>;

  constructor() {
    this.interval = setInterval(() => {
      let currentDate = new Date();
      currentDate.setHours(0); // Set the desired hours
      currentDate.setMinutes(0); // Set the desired minutes
      currentDate.setSeconds(0);

      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();

      document.querySelectorAll<HTMLElement>('#days').forEach(element => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      });

      document.querySelectorAll<HTMLElement>('#hours').forEach(element => {
        element.innerHTML = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ).toString();
      });

      document.querySelectorAll<HTMLElement>('#minutes').forEach(element => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      });

      document.querySelectorAll<HTMLElement>('#seconds').forEach(element => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000).toString();
      });
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  openModel() {
    this.model.open(VideoModal, { size: 'lg', centered: true });
  }
}
