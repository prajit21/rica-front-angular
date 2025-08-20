import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-one',
  templateUrl: './title-one.html',
  styleUrls: ['./title-one.scss'],
  imports: [NgClass],
})
export class TitleOne {
  readonly title = input<string>();
  readonly subTitle = input<string>();
  readonly background_text = input<string>();
  readonly rounded = input<boolean>();
  readonly textWhite = input<boolean>();
}
