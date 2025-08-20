import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box-five',
    templateUrl: './search-box-five.html',
    styleUrls: ['./search-box-five.scss'],
    imports: [FormsModule, NgbInputDatepicker, OwlDateTimeModule, OwlNativeDateTimeModule, RouterLink]
})
export class SearchBoxFive {

  public activeValue = 'classic';

  active(value: string){
    this.activeValue = value
  }
}
