import { Component, ViewEncapsulation } from '@angular/core';

import { CalendarView, CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';

@Component({
  selector: 'app-date-calender',
  templateUrl: './date-calender.html',
  styleUrl: './date-calender.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CalendarCommonModule, CalendarMonthModule],
})
export class DateCalender {
  public isOpenCalender: boolean = false;
  public view: CalendarView = CalendarView.Month;
  public viewDate: Date = new Date();
  public activeDayIsOpen: boolean = true;

  openCalender() {
    this.isOpenCalender = !this.isOpenCalender;
  }

  clickOutside() {
    this.isOpenCalender = false;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
