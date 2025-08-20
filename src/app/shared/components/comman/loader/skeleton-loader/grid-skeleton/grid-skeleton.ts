import { Component, input } from '@angular/core';

@Component({
    selector: 'app-grid-skeleton',
    templateUrl: './grid-skeleton.html',
    styleUrls: ['./grid-skeleton.scss'],
    
})
export class GridSkeleton {

  readonly mapFilter = input<boolean>();
  readonly gridType = input<string>();
  readonly horizontalFilter = input<boolean>();

}
