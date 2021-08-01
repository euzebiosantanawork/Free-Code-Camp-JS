/*
The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using 
const by default, unless they know they will need to reassign
the value. Only in that case, they use let.

However, it is important to understand that objects
(including arrays and functions) assigned to a variable
using const are still mutable. Using the const declaration
only prevents reassignment of the variable identifier.


*/

const s = [ 5 ,6 , 7];
s = [1 ,2, 3 ];
console.log(s);
