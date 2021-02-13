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
    const format = toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    if (this.hour < 24 && this.minutes < 60) {
      return `${(this.hour).format}:${(this.minutes).format}`
    }
  }

  plus() {

  }

  minus() {

  }

  equals() {

  }
}
