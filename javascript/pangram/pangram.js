//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const isPangram = ([...sentence]) => {

  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  sentence.map(x => {
    if(alphabet.indexOf(x) >= 0) {
      alphabet.splice(sentence.indexOf(x), 1)
    }
  })

  if (alphabet.length <= 26){
    return alphabet.length
    //return true;
  }
  else {
    return alphabet.length;
    //return false;
  }
};
