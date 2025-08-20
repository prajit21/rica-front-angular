import { Component, input, output } from '@angular/core';
import { RestaurantGridPanel } from './restaurant-grid-panel/restaurant-grid-panel';
import { CabGridPanel } from './cab-grid-panel/cab-grid-panel';
import { TourGridPanel } from './tour-grid-panel/tour-grid-panel';
import { HotelGridPanel } from './hotel-grid-panel/hotel-grid-panel';

@Component({
    selector: 'app-grid-panel',
    templateUrl: './grid-panel.html',
    styleUrls: ['./grid-panel.scss'],
    imports: [HotelGridPanel, TourGridPanel, CabGridPanel, RestaurantGridPanel]
})
export class GridPanel {

  readonly type = input<string>();
  readonly grid4Option = input<boolean>(true);
  readonly horizontalFilter = input<boolean>(false);
  readonly gridOptions = input<boolean>(true);
  readonly mapFilter = input<boolean>(false);
  readonly mapModal = input<boolean>(false);
  readonly mapType = input<string>();
  readonly onClickMap = input<boolean>(false);
  readonly grid = input<boolean>(true);
  readonly tourHorizontalFilter = input<boolean>(false);
  readonly filterClass = input<boolean>();

  readonly selectedTabValue = output<string>();
  readonly map = output<boolean>();

  public isOpenMap: boolean = false;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue.emit('all');
  }

  getTabValue(value: string){
    this.selectedTabValue.emit(value);
  }

  openMap(value: boolean){
    this.isOpenMap = value;
    this.map.emit(this.isOpenMap)
  }
}
