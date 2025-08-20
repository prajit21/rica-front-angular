import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box-three',
    templateUrl: './search-box-three.html',
    styleUrls: ['./search-box-three.scss'],
    imports: [FormsModule, NgbInputDatepicker, RouterLink]
})
export class SearchBoxThree {

}
