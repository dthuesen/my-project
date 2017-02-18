import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TimepickerComponent } from './time-picker.component';

@Component({
  selector: 'dt-calendar',
  templateUrl: './calendar.component.html',
  styles: ['']
})
export class CalendarComponent implements AfterViewInit {
  time: string;
  calendarEntry = { startTime: '0'};

  @ViewChildren(TimepickerComponent) timePickers: QueryList<TimepickerComponent>;
  timePicker: TimepickerComponent;

  constructor() {
    this.calendarEntry = {
      startTime: '20:34:05',
    };
    console.log('(B 1) In CalendarComponent constructor() this.calendarEntry.startTime: ' + this.calendarEntry.startTime);
  }

  ngAfterViewInit() {
    this.timePicker = this.timePickers.first;
    console.log('(B 2) In CalendarComponent - Ausgewählte Zeit: ' + this.timePicker.getTime())
    console.log('(B 3) In CalendarComponent ngAfterViewInit this.calendarEntry.startTime: ' + this.calendarEntry.startTime);
  }

  onTimeChanged(time: string) {
    console.log('(B 4) In CalendarComponent \'onTimeChanged\' - Time changed: ', time);
    this.calendarEntry.startTime = time;
  }
}

