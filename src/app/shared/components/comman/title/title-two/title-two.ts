import { Component, input } from '@angular/core';

@Component({
    selector: 'app-title-two',
    templateUrl: './title-two.html',
    styleUrls: ['./title-two.scss'],
    
})
export class TitleTwo {

  readonly title = input<string>();
  readonly subTitle = input<string>();
  readonly textWhite = input<boolean>();

}
