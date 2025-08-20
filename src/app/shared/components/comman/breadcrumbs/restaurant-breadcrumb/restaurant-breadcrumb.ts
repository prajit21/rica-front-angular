import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-breadcrumb',
    templateUrl: './restaurant-breadcrumb.html',
    styleUrl: './restaurant-breadcrumb.scss',
    imports: [NgClass, FormsModule, RouterLink]
})
export class RestaurantBreadcrumb {

  readonly sectionClass = input<string>();

}
