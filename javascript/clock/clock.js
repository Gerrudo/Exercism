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
      if (this.hour !== 24) {
        this.hour %= 24;
      }
      if (this.minutes !== 60) {
        this.minutes %= 60;
      }
      //24:00 is 00:00
      if (this.hour >= 24){
        this.hour = 0
      }
      //60 minutes is new hour
      if (this.minutes >= 60){
        this.hour++
        this.minutes = 0
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
