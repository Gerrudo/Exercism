//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (...int) => {
  const map = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
  /*
  let roman ='';
  for(let i in map){
    
    while(int >= map[i]){
      roman += i;
      int -= map[i];
    }
  }
*/
  const roman = int.map(x => (
      map[x],
      int.splice(map[x])
    )
  );
  
  return roman;
};
