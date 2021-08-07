/*
Just like a regular function, you can pass arguments into an arrow function
*/

const doubler  = (item) +> item * 2 ;
doubler(4);

/*
doubler(4) would return the value 8.
 If an arrow function has a sigle parameter, the parentheses enclosing the parameter may
 be omitted.
 
 
*/

const doubler = item => item * 2;
/*
It is possible to pass more that one arguments into an arrow function.
*/

const mutiplier = (item, multi) => item * multi:
multiplier(4,2);
/*
multiplier(4,2) would return the value 8.

Rewrite the myConcat function wich appends contes of arr2 to arr1 so that the function
uses arrow function sytax.

*/

