//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  toString() {
    const stringify = toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    
    if (this.hour < 24 && this.minutes < 60) {
      return `${this.hour.stringify}:${this.minutes.stringify}`
    }else {
      return `${Math.floor(this.hour / 24)}:${Math.floor(this.minutes / 60)}`
    }
  }

  plus() {

  }

  minus() {

  }

  equals() {

  }
}
