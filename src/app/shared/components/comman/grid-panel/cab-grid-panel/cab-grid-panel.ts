import { Component, inject, output } from '@angular/core';
import { CabService } from '../../../../../shared/services/cab.service';
import { GridService } from '../../../../../shared/services/grid.service';
import { Filter } from '../../filter/filter';

@Component({
    selector: 'app-cab-grid-panel',
    templateUrl: './cab-grid-panel.html',
    styleUrl: './cab-grid-panel.scss',
    imports: [Filter]
})
export class CabGridPanel {

  private cabService = inject(CabService);
  private gridService = inject(GridService);

  readonly selectedTabValue = output<string>();

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;
  public activeTab: string = 'all';
  public isOpenTab: boolean = false;


  ngOnInit(){
    this.selectedTabValue.emit('all');
  }

  grid2(){
    this.gridService.grid2();
  }

  grid3(){
    this.gridService.grid3();
  }

  grid4(){
    this.gridService.grid4();
  }

  openHorizontalFilter(){
    this.cabService.isOpenHorizontalFilter =! this.cabService.isOpenHorizontalFilter;
  }

  openResponsiveTab(){
    this.isOpenTab =! this.isOpenTab;
  }

  changedValue(value: string){
    this.activeTab = value;
    this.selectedTabValue.emit(value);
  }

  ngDoCheck(){
    this.listView = this.gridService.listView;
    this.col_sm_6 = this.gridService.col_sm_6;
    this.col_xl_4 = this.gridService.col_xl_4;
    this.col_xl_3 = this.gridService.col_xl_3;
    this.col_lg_4 = this.gridService.col_lg_4;
    this.col_12 = this.gridService.col_12;
  }
}
