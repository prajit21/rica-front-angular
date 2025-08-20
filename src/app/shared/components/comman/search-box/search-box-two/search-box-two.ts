import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-box-two',
  templateUrl: './search-box-two.html',
  styleUrls: ['./search-box-two.scss'],
  imports: [FormsModule, NgbInputDatepicker],
})
export class SearchBoxTwo {}
