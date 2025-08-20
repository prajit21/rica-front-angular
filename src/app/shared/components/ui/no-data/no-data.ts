import { Component, input } from '@angular/core';

@Component({
    selector: 'app-no-data',
    templateUrl: './no-data.html',
    styleUrl: './no-data.scss',
    
})
export class NoData {

  readonly icon = input<string>();
  readonly title = input<string>();
  readonly description = input<string>();
  readonly ImageClass = input<boolean>(false);
  
}
