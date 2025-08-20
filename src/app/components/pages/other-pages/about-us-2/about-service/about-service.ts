import { Component, inject, input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { aboutService } from '../../../../../shared/interface/pages';
import {  SvgIconComponent } from 'angular-svg-icon';

@Component({
    selector: 'app-about-service',
    templateUrl: './about-service.html',
    styleUrl: './about-service.scss',
    imports: [SvgIconComponent, NgbRating]
})
export class AboutService {

  private config = inject(NgbRatingConfig); 

  readonly services = input<aboutService[]>();

  constructor() {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
