// Use the Spread Operator to Evalute Arrays in-Place

/*

ES6 introduces the spread operator, wich allows
us to expands arrays and other expression in places where multiple parameters 
or elements are expected

The ES5 code below use apply() to compute the maximum value in an array:
*/

var arr = [ 6 , 89. , 3 ,45 ];
var maximus = Math.max.apply( null , arr );
/*

maximus would have a value of 89.
 We had to use Math.max.apply(null,arr) because Math.max(arr) return NAn. Math .max(0 expects comma-separated arguments
, but not an array. the spread operator makes this syntax much better to read an dmaitain.

*/

const arr = [ 6, 89 , 3 , 45 ];
const maximus = Math.max(...arr);

/*
maximus would have a value of 89.

...arr return an unpacked array. In other words, it spreads the array. Hwever, the spread operator 
only works in plae, like in an arguments to a function or in an array literal. The following code will not work:


*/

const spreaded = ...arr;


