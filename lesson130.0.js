/*
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:
*/

const greeting = (name = "Anonymous") => "Hello" + name;

console.log(greeting("John"));
console.log(greeting());

//The console will display the strings Hello John and Hello Anonymous.
//Modify the function increment by adding default parameters 
//so that it will add 1 to number if value is not specified.

//Code:
const incremet = (number , value) => number + value;
console.log(increment(5,9))

//Solution:

const increment = (number , value = 1) => number + value;

console.log(increment(5 , 2)); // returns 7
console.log(increment (5)); // returns 6
