//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const isPangram = (sentence) => {
  const checkSentence = (letter) => sentence.replace("[^a-zA-Z]", "").toLowerCase().includes(letter);
  return alphabet.every(checkSentence);
};
