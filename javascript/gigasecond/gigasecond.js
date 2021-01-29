//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const oneGigasecond = 10**9;

export const gigasecond = (inputDate) => {
  //This is multiplied by 1000 as JS Epoch Time is in milliseconds.
  return new Date(inputDate.getTime()+oneGigasecond * 1000);
};
