//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    let newSides = this.findType(this.sides);
    if (newSides.length === 0) {
      return true;
    }else {
      return newSides.length;
    }
  }

  get isIsosceles() {
    let newSides = this.findType(this.sides);
    if (newSides.length === 1) {
      return true;
    }else {
      return false;
    }
  }

  get isScalene() {
    let newSides = this.findType(this.sides);
    if (newSides.length === 3) {
      return true;
    }else {
      return false;
    }
  }

  findType(sides) {
    let i;
    for (i = 0; i < 3; i++) {
      //issues lie here, as we can't statically check the elements as it will always return true
      if (sides[i] === sides[0] || sides[i] === sides[1] || sides[i] === sides[2]) {
        sides.splice(sides.indexOf(i), 1);
      }
    }
    return sides;
  }

}

/*
We could possibily look at running a for loop in the array, and once the action is finished, if a tringle side doesn't meet equirments,
Then it is spliced from the array, leaving only 2 or less elements to compare. 

for each in sides 
  if i equal to sides[0,1,2]
    splice.sides[i]
  
if sides.length === 1 //for equalateral value should be 0, for isoceles 1 and for scalene 3
  return true
else
  return false
*/
