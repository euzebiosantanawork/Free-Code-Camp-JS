/*

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

For example:



*/

var numArray = [];
for (var i = 0 ; i < 3 ; i++) {
numArray.push(i);
}
console.log(numArray);
console.log(i);

/*
Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:
*/

var numArray = [];
var i;
for (i = 0 ; i < 3 ; i++ ) {
numArray.push(i);
}
console.log(numArray);
console.log(i);

/*
Here the console will display the values [0, 1, 2] and 3.

This behavior will cause problems if you were to create a 
function and store it for later use inside a for loop that
uses the i variable. This is because the stored function
will always refer to the value of the updated global i variable.


*/

var printNumTwo;
for (var i = 0 ; i < 3 ; i++) {
  if(i===2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
/*
As you can see, printNumTwo()
prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo()
returns the global i and not the value i had when the function was created in the for loop.
The let keyword does not follow this behavior:


*/

let printNumTwo;
for (let i = 0; i < 3; i++) {

  if(i===2) {
    printNumTwo = function() {
      return i;

};
    
}
  
}

console.log(printNumTwo());
console.log(i);
