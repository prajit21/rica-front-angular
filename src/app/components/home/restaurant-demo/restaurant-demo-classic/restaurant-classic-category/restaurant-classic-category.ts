import { Component, input, computed } from '@angular/core';

import { Category } from '../../../../../shared/components/comman/category/category';
import { category } from '../../../../../shared/interface/tour-modern';

@Component({
  selector: 'app-restaurant-classic-category',
  standalone: true,
  templateUrl: './restaurant-classic-category.html',
  styleUrls: ['./restaurant-classic-category.scss'],
  imports: [Category],
})
export class RestaurantClassicCategory {
  readonly id = input<number[] | null>(null);
  readonly category = input<category[]>([]);

  readonly filteredCategory = computed(() => {
    const ids = this.id();
    const categories = this.category();

    if (!ids || !ids.length) {
      return categories;
    }

    return categories.filter(item => ids.includes(item.id));
  });
}
