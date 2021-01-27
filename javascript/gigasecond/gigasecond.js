//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate, outputDate = new Date(inputDate.getTime()), oneGigasecond = 10**9) => {
  return new Date(outputDate.setUTCSeconds(inputDate.getUTCSeconds()+oneGigasecond));
};
