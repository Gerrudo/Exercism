//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  let gsDate = new Date(inputDate);
  return new Date(gsDate.setUTCSeconds(gsDate.getUTCSeconds() + 10**9));
};
