import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-four',
  templateUrl: './title-four.html',
  styleUrls: ['./title-four.scss'],
})
export class TitleFour {
  readonly title = input<string>();
  readonly subTitle = input<string>();
  readonly description = input<string>();
}
