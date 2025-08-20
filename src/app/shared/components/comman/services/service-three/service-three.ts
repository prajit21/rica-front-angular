import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from 'angular-svg-icon';

import { service } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-service-three',
  templateUrl: './service-three.html',
  styleUrls: ['./service-three.scss'],
  imports: [SvgIconComponent, NgbRating, RouterLink],
})
export class ServiceThree {
  @Input() service: service;
}
