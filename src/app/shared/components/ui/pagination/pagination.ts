import { Component, Input, input, output } from '@angular/core';
import { cab, pagination } from '../../../../shared/interface/cab';
import { flight } from '../../../../shared/interface/flight';
import { restaurantDetail } from '../../../../shared/interface/restaurant-minimal';
import { hotels } from '../../../../shared/interface/hotel';
import { tours } from '../../../../shared/interface/tour';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.html',
    styleUrls: ['./pagination.scss'],
    imports: [NgClass]
})
export class Pagination {

  readonly products = input<hotels[]>([]);
  readonly productsTour = input<tours[]>([]);
  readonly productsFlight = input<flight[]>([]);
  readonly cabDetails = input<cab[]>([]);
  readonly restaurantDetails = input<restaurantDetail[]>([]);
  @Input() paginate: pagination;
  readonly total = input<number>();
  readonly currentPage = input<number>();
  readonly pageSize = input<number>();

  readonly setPage = output<number>();

  constructor() {}

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
