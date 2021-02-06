//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (int) => {
  const rnMap = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
  let romanNum= '';
  /*
    this foreach/while will compare the int to each number in rmMap, once the number it has reached in rmMap is greater than, 
    or equal to int, it will add the assigned letter to romanNum. Finally, it will subtrack the added value from int, 
    and start the loop again. 
  */
  for(let i in rnMap){
    while(int >= rnMap[i]){
      romanNum += i;
      int -= rnMap[i];
    }
  }
  return romanNum;
};
