/*
Just like a regular function, you can pass arguments into an arrow function.


*/

const doubler = (item) => item * 2;
doubler(4)

/*
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

*/

const doubler = item => item * 2;

/*
It is possible to pass more than one argument into an arrow function.
*/

const mutiplier = (item , multi) => item
multiplier( 4 ,2 );
