import { Component, inject, Input, input, output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GridService } from '../../../../../shared/services/grid.service';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { Filter } from '../../filter/filter';
import { GoogleMapModal } from '../../modal/google-map-modal/google-map-modal';
import { LeafletMapModal } from '../../modal/leaflet-map-modal/leaflet-map-modal';

@Component({
  selector: 'app-restaurant-grid-panel',
  templateUrl: './restaurant-grid-panel.html',
  styleUrl: './restaurant-grid-panel.scss',
  imports: [Filter],
})
export class RestaurantGridPanel {
  private gridService = inject(GridService);
  private restaurantService = inject(RestaurantService);
  private modal = inject(NgbModal);

  @Input() horizontalFilter: boolean = false;
  readonly gridOptions = input<boolean>();
  @Input() mapFilter: boolean;
  readonly mapModal = input<boolean>();
  readonly mapType = input<string>();
  readonly onClickMap = input<boolean>(false);
  readonly grid = input<boolean>();

  readonly selectedTabValue = output<string>();
  readonly map = output<boolean>();

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;
  public activeTab: string = 'all';
  public isOpenTab: boolean = false;
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

  openHorizontalFilter() {
    this.restaurantService.isOpenHorizontalFilter = !this.restaurantService.isOpenHorizontalFilter;
  }

  openResponsiveTab() {
    this.isOpenTab = !this.isOpenTab;
  }

  openMapFilter() {
    this.restaurantService.isOpenMapFilter = !this.restaurantService.isOpenMapFilter;
  }

  openMap() {
    this.isOpenMap = !this.isOpenMap;
    this.map.emit(this.isOpenMap);
  }

  openMapModal(mapType: string) {
    if (mapType == 'googleMap') {
      const modal = this.modal.open(GoogleMapModal, {
        size: 'xl',
        centered: true,
        modalDialogClass: 'xxl-custom',
      });
      modal.componentInstance.filterType = 'restaurant';
    } else if (mapType == 'leafletMap') {
      const modal = this.modal.open(LeafletMapModal, {
        size: 'xl',
        centered: true,
        modalDialogClass: 'xxl-custom',
      });
      modal.componentInstance.filterType = 'restaurant';
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
}
