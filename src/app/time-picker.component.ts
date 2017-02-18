import {
         Component,
         EventEmitter,
         Input,
         OnChanges,
         Output,
         SimpleChanges
        } from '@angular/core';

@Component({
  selector: 'dt-time-picker',
  templateUrl: './time-picker.component.html',
  styles: ['']
})
export class TimepickerComponent implements OnChanges {
  time: any = {};

  @Output('timeChange') changeEvent: EventEmitter<Object>; 

  @Input('time') timeString: string;


  maxValues = {
    hours: 23,
    minutes: 59,
    seconds: 60
  };


  constructor() {
    this.changeEvent = new EventEmitter();
    this.time = {
      hours: 20,
      minutes: 33,
      seconds: 0
    };
  }
  getMinutes() {
    return this.time.minutes;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('(C 1) In TimepickerComponent in ngOnChanges: ', changes);
    const timeParts = this.timeString.split(':');
    if (timeParts.length === 3) {
      this.time = {
        hours: parseInt(timeParts[0], 10),
        minutes: parseInt(timeParts[1], 10),
        seconds: parseInt(timeParts[2], 10)
      };
    }
  }

  incrementTime(field: string) {
    const maxValue = this.maxValues[field];
    this.time[field] = (this.time[field] + 1) % (maxValue + 1);
    this.changeEvent.emit(this.getTime());
  }

  decrementTime(field: string) {
    if (this.time[field] === 0) {
      this.time[field] = this.maxValues[field];
    } else {
      this.time[field] = this.time[field] - 1;
    }
  }

  changeTime(field: string, inputValue: number) {
    let value = Math.max(inputValue, 0);
    value = Math.min(value, this.maxValues[field]);
    this.time[field] = value;
  }

  fillUpZeros(value) {
    return `0${value}`.slice(-2);
  }

  setSameTime(field: string, value) {
    this.time[field] = value - 1;
  }

  getTime() {
    const hours = this.fillUpZeros(this.time.hours);
    const minutes = this.fillUpZeros(this.time.minutes);
    const seconds = this.fillUpZeros(this.time.seconds);
    return `${hours}:${minutes}:${seconds}:`;
  }

  emitTimeChange() {
    this.changeEvent.emit(this.getTime());
  }

  private reset(): void {
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.emitTimeChange();
    console.log('(C 2) In TimepickerComponent hit reset(): ', this.time);
  }
}
