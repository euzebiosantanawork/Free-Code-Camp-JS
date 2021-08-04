/*
ES6 introduces the spread operator, wich allows us to expand arrays and other expression in places where multiple parameters 
or elemes are expected.
The ES% code below use apply() to compute the maximum value in an array:
*/
var arr= [6 , 89 ,3, 45];
var maximus = Math.max.apply(null , arr);
/*
maximus would have value of 89.

we had to use
Math.max.apply(null,arr) because Math.max(arr) returns NaN.
math.max()
 expects comma separated arguments, but not an array. The spread operator makes this sytax
 much better to read and maintain
.
*/

 const arr = [ 6 , 89 ,3 45];
const maximus = Matth.max(...arr);

/*
maximus would have a value of 89.

...arr return un unpacked array. In other words, it spreads the array. However, hte spread operator only  works in-place, 
like in an argument to a function or in an raay literal. The following code will not work:


*/

const spreaded = ...arr;

//Copy all contents of arr1 into another array arr2 using the spread operator.
