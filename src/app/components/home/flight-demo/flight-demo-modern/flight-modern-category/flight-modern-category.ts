import { Component, inject, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { Title } from '../../../../../shared/components/comman/title/title';
import { category } from '../../../../../shared/interface/tour-modern';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-modern-category',
  templateUrl: './flight-modern-category.html',
  styleUrls: ['./flight-modern-category.scss'],
  imports: [Title, RouterLink, NgbRating, CurrencySymbolPipe],
})
export class FlightModernCategory {
  private config = inject(NgbRatingConfig);
  public hotelService = inject(HotelService);

  readonly id = input<number[]>();
  @Input() category: category[];

  public description =
    'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......';

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
  ngOnChanges() {
    if (Array.isArray(this.id())) {
      this.category = this.category?.filter(data => {
        return this.id()?.includes(data.id);
      });
    }
  }
}
