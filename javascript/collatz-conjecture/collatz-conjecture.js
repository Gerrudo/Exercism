//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//import { count } from "console";

export const steps = (input) => {
  if(input <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  
  let count = 0;

  while (input !== 1) {
    if (input === 0) {
      return count;
    }
    else if (input%2 === 0) {
      input /= 2;
    }
    else{
     input = 1+input*3;
    }
    count++;
  }
  return count;
};
