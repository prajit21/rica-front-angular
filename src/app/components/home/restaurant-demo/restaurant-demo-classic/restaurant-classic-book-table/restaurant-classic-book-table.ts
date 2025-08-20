import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-restaurant-classic-book-table',
    templateUrl: './restaurant-classic-book-table.html',
    styleUrls: ['./restaurant-classic-book-table.scss'],
    imports: [Title, NgbInputDatepicker, RouterLink]
})
export class RestaurantClassicBookTable {

}
