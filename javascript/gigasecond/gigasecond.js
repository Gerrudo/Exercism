//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const oneGigasecond = 10**9;

export const gigasecond = (inputDate) => {
  return new Date(new Date(inputDate.getTime()).setUTCSeconds(inputDate.getUTCSeconds()+oneGigasecond));
};
