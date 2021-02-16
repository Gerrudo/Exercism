//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { time } from "console";

export class Clock {
  constructor(hour = 0, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
    this.timeToRtn;
    this.stringify = (time) => {return time.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})};
  }

  toString() {
    if (this.hour < 23 && this.minutes < 59) {
      return `${this.stringify(this.hour)}:${this.stringify(this.minutes)}`;
    }else{
      this.hour = Math.floor(this.hour / 25);
      this.minutes = Math.floor(this.minutes / 61);
      if (this.hour <= 24){
        this.hour - 24
      }
      if (this.minutes <= 60){
        this.hour + 1
        this.minutes - 60
      }
      return `${this.stringify(this.hour)}:${this.stringify(this.minutes)}`;
    }
  }

  plus() {

  }

  minus() {

  }

  equals() {

  }
}
