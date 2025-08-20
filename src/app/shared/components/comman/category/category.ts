import { Component, input } from '@angular/core';

import { CategoryFour } from './category-four/category-four';
import { CategoryOne } from './category-one/category-one';
import { CategoryThree } from './category-three/category-three';
import { CategoryTwo } from './category-two/category-two';
import { category } from '../../../../shared/interface/tour-modern';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',
  styleUrls: ['./category.scss'],
  imports: [CategoryOne, CategoryTwo, CategoryThree, CategoryFour],
})
export class Category {
  readonly type = input<string>();
  readonly category = input<category[]>();
}
