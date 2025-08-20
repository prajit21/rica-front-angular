import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-details-skeleton',
    templateUrl: './cab-details-skeleton.html',
    styleUrl: './cab-details-skeleton.scss',
    imports: [NgClass]
})
export class CabDetailsSkeleton {

  readonly gridType = input<string>();
}
