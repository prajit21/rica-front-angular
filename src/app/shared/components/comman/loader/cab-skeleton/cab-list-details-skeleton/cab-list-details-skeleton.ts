import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-list-details-skeleton',
    templateUrl: './cab-list-details-skeleton.html',
    styleUrl: './cab-list-details-skeleton.scss',
    imports: [NgClass]
})
export class CabListDetailsSkeleton {

  readonly map = input<boolean>();

}
