//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (inputColours) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  //There must be a better way to than using parseInt I believe, but this does work. 
  return parseInt(`${COLORS.indexOf(inputColours[0])}${COLORS.indexOf(inputColours[1])}`);
};