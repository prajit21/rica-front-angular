import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box-four',
    templateUrl: './search-box-four.html',
    styleUrls: ['./search-box-four.scss'],
    imports: [FormsModule, NgbInputDatepicker, RouterLink]
})
export class SearchBoxFour {

}
