//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export const isPangram = ([...sentence]) => {

  let sentenceCount;

  sentence.map(x => {
    if(ALPHABET.indexOf(x) >= 1) {
      sentenceCount--
    }
  })

  if (sentenceCount <= 0){
    return true;
  }
  else {
    return false;
  }
};
