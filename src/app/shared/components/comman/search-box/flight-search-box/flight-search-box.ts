import { Component, input } from '@angular/core';
import { flightLocation, seatType } from '../../../data/data/flight';
import { NgClass } from '@angular/common';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../../directives/outside.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-flight-search-box',
    templateUrl: './flight-search-box.html',
    styleUrls: ['./flight-search-box.scss'],
    imports: [FormsModule, ClickOutsideDirective, NgbInputDatepicker, NgClass]
})
export class FlightSearchBox {

  readonly selectedValue = input<string>();

  public flightLocation = flightLocation;
  public seatType = seatType;
  public isFrom: boolean = false;
  public isTo: boolean = false;
  public isTraveler: boolean = false;
  public fromLocation : string = '';
  public toLocation : string = '';

  public adults = 1;
  public child = 1;

  openLocation(value: string){
    if(value == 'from'){
      this.isFrom =! this.isFrom;
    }else if(value == 'to'){
      this.isTo =! this.isTo
    }
  }

  openTraveler(){
    this.isTraveler =! this.isTraveler;
  }

  selectLocation(value: string,id: number){
    this.flightLocation.filter((item) =>{
      if(item.id === id){
        if(value == 'from'){
          this.fromLocation = item.city;
          this.isFrom = false;
        }else if(value == 'to'){
          this.toLocation = item.city;
          this.isTo = false;
        }
      }
    })
  }

  changeValue(value: string, number:number){
    if(number == -1){
      if(value == 'adult' && this.adults > 1){
        this.adults -= 1;
      }else if(value == 'children' && this.child > 1){
        this.child -= 1;
      }
    }else if(number == 1){
      if(value == 'adult'){
        this.adults += 1;
      }else if(value == 'children'){
        this.child += 1;
      }
    }
  }

  clickOutside(): void {
    this.isFrom = false;
    this.isTo = false;
    this.isTraveler = false;
  }
}
