import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-three',
  templateUrl: './title-three.html',
  styleUrls: ['./title-three.scss'],
  imports: [NgClass],
})
export class TitleThree {
  readonly title = input<string>();
  readonly subTitle = input<string>();
  readonly description = input<string>();
  readonly titleClass = input<string>();
}
