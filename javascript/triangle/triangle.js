//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }
  
  get isEquilateral() {
    if (this.sides[0,1,2] === 0) {
      return false;
    }else if (this.sides[0,1,2] && this.sides[1,2,0] === this.sides[2,0,1]) {
      return true;
    }else {
      return false;
    }
  }

  get isIsosceles() {
    if (this.sides[0,1,2] === 0){
      return false
    }else if(this.sides[0] === this.sides[1,2] || this.sides[1] === this.sides[0,2] || this.sides[2] === this.sides[0,1]) {
      return true;
    }else {
      return false
    }
  }

  get isScalene() {

  }
}

/*
We could possibily look at running a for loop in the array, and once the action is finished, if a tringle side doesn't meet equirments,
Then it is spliced from the array, leaving only 2 or less elements to compare. 
*/
