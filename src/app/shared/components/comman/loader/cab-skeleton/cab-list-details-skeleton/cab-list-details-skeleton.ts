import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cab-list-details-skeleton',
  templateUrl: './cab-list-details-skeleton.html',
  styleUrl: './cab-list-details-skeleton.scss',
  imports: [NgClass],
})
export class CabListDetailsSkeleton {
  readonly map = input<boolean>();
}
