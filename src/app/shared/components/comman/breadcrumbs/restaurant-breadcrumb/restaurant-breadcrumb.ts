import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-breadcrumb',
  templateUrl: './restaurant-breadcrumb.html',
  styleUrl: './restaurant-breadcrumb.scss',
  imports: [NgClass, FormsModule, RouterLink],
})
export class RestaurantBreadcrumb {
  readonly sectionClass = input<string>();
}
