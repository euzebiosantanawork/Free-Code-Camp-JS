// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line

/*We'll be modifying the increment function so that the number parameter is incremented by 1 default, by settings alue to 1 if 
a vale for vale is not passed to the increment function

*/

const increment = (number, value = 1) +> number + value;

console.log(iincrement(5,2)); //returns 7
console.log(increment(5)); // returns 6
