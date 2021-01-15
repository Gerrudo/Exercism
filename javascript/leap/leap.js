//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  if (year%4 === 0 && year%100 !== 0) {
    return true;
  }else if (year%400 === 0 && year%100 === 0) {
    return true;
  }else {
    return false;
  }
}

/*
Pseudocode:
  if year is divisable by 4 and not divisable by 100
    return true
  if else year is divisable by 400 and 100
    return true
  else
    return false
*/
