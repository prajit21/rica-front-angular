import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cab-search-skeleton',
  templateUrl: './cab-search-skeleton.html',
  styleUrl: './cab-search-skeleton.scss',
  imports: [NgClass, FormsModule],
})
export class CabSearchSkeleton {
  readonly skeletonType = input<string>();
  readonly map = input<boolean>();
}
