import { Component, input } from '@angular/core';

import { TitleFour } from './title-four/title-four';
import { TitleOne } from './title-one/title-one';
import { TitleThree } from './title-three/title-three';
import { TitleTwo } from './title-two/title-two';

@Component({
  selector: 'app-title',
  templateUrl: './title.html',
  styleUrls: ['./title.scss'],
  imports: [TitleOne, TitleTwo, TitleThree, TitleFour],
})
export class Title {
  readonly type = input<string>();
  readonly title = input<string>();
  readonly subTitle = input<string>();
  readonly background_text = input<string>();
  readonly description = input<string>();
  readonly textWhite = input<boolean>(false);
  readonly titleClass = input<string>();
  readonly rounded = input<boolean>(false);
}
