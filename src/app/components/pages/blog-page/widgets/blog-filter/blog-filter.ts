import { Component, input } from '@angular/core';

import { blogFilter } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.html',
  styleUrl: './blog-filter.scss',
})
export class BlogFilter {
  readonly blogFilter = input<blogFilter[]>();
}
