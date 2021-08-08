/*

In some situations invoving  array destructuring, we might want to collect the rest of the elements into
separate array. The result is similar to Array.proptotype.slice(), as shown below:

*/

const [ a , b , ...arr] = [ 1 , 2 , 3 , 4, 5, 7];
console.log( a , b );
console.log( arr );

/*

The console would display the values 1, 2 and [ 3 , 4, 5 , 7 ].

variables a and b tak ethe first and second values from the array. Sfter that, because of the rest parameter`s presence,
arr gets the rest of the values in the form of an aray. The rest element only works correctly as last variable in the
list. As in, you cannot use the rest parameter to catch a subarray the leaves out the last element of the 
original array.

Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr
is a sub-array of the original array source with the first two elements omitted.

*/
