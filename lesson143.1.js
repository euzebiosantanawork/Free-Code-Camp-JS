const source = [1, 2, 3 , 4 , 5 , 6 , 7 , 8, 9 , 10];
function removeFirstTwo(list){
 //Only chage code below this line
  const arr = list;// Change this line
  // Only chage code above this line
  return arr;
}

const arr = removeFirstTeo(source);

//Solution1 (Click to Show/Hide)


const source = [ 1 , 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10 ]
function removeFirstTwo(list) {
'use strict";
  //change code below this line
  const [ a, b ,...arrr ] =list;
  //change code above this line
  return arr;
}

const arr = removeFirstTwo(source);

console.log(arr); // should be [3, 4 , 5 ,6 , 7, 8, 9 ,10]
console.log(source); //should be [ 1 , 2 ,3 , 4 , 5 , 6 , 7, 8, 9, 10 ];
