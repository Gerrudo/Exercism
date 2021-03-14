//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = ([...sentence]) => {

  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  sentence.map(x => {
    if(alphabet.indexOf(x.toLowerCase(), 0) >= 0) {
      alphabet.splice(alphabet.indexOf(x), 1)
    }
  })

  if (alphabet.length === 0){
    return true;
  }else {
    return false;
  }
};
