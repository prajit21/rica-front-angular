import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GridService } from '../../../../../shared/services/grid.service';
import { TourService } from '../../../../../shared/services/tour.service';
import { Filter } from '../../filter/filter';

@Component({
  selector: 'app-tour-grid-panel',
  templateUrl: './tour-grid-panel.html',
  styleUrls: ['./tour-grid-panel.scss'],
  imports: [NgClass, Filter],
})
export class TourGridPanel {
  private gridService = inject(GridService);
  private tourService = inject(TourService);
  private modal = inject(NgbModal);

  readonly tourHorizontalFilter = input<boolean>();
  readonly filterClass = input<boolean>();
  readonly gridOptions = input<boolean>();

  readonly selectedTabValue = output<string>();

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;
  public activeTab: string = 'all';

  public isOpenTab: boolean = false;
  public isOpenFilter: boolean = false;
  public isOpenMap: boolean = false;

  ngOnInit() {
    this.selectedTabValue.emit('all');
  }

  grid2() {
    this.gridService.grid2();
  }

  grid3() {
    this.gridService.grid3();
  }

  grid4() {
    this.gridService.grid4();
  }

  changedValue(value: string) {
    this.activeTab = value;
    this.selectedTabValue.emit(value);
  }

  openResponsiveTab() {
    this.isOpenTab = !this.isOpenTab;
  }

  openTourHorizontalFilter() {
    if (window.innerWidth > 992) {
      this.tourService.isOpenHorizontalFilter = !this.tourService.isOpenHorizontalFilter;
    }

    if (window.innerWidth < 992) {
      this.tourService.isOpenResponsiveHorizontal = true;
    }
  }

  ngDoCheck() {
    this.listView = this.gridService.listView;
    this.col_sm_6 = this.gridService.col_sm_6;
    this.col_xl_4 = this.gridService.col_xl_4;
    this.col_xl_3 = this.gridService.col_xl_3;
    this.col_lg_4 = this.gridService.col_lg_4;
    this.col_12 = this.gridService.col_12;
  }

  openTourFilter() {
    this.tourService.isOpenFindTours = !this.tourService.isOpenFindTours;
  }
}
