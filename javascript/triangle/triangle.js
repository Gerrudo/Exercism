//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }
  get isEquilateral() {
    //this will not work if one of the sides equal 1, as I think it's checking the total of all values
    if (this.sides[0,1,2] === 0) {
      return false;
    }else if  (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return true;
    }else {
      return false;
    }
  }

  get isIsosceles() {

  }

  get isScalene() {

  }
}
