//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    let [a, b, c] = [...this.sides];
    if (this.sides.reduce(function(a, b){return a + b;}, 0) === 0) {
      return false;
    }else if (a === b && b === c && c === a) {
      return true;
    }
    return false;
  }

  get isIsosceles() {
    let [a, b, c] = [...this.sides];
    if (this.sides.reduce(function(a, b){return a + b;}, 0) === 0) {
      return false;
    }else if (a+b<c || b+c<a || c+a<b) {
      return false;
    }else if (a === b || b === c || c === a) {
      return true;
    }
    return false;
  }

  get isScalene() {
    let [a, b, c] = [...this.sides];
    if (this.sides.reduce(function(a, b){return a + b;}, 0) === 0) {
      return false;
    }else if (a+b<c || b+c<a || c+a<b) {
      return false;
    }else if (a !== b && b !== c && c !== a) {
      return true;
    }
    return false;
  }
}
