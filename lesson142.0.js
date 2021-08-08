/*

Use Destructuring Assigment to Assign Variables from Arrays

ES^ make destructurind arrays as easy as destructuring objects. One key difference between the spread operator
and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. 

Consequently, you cannot pick or choose wich elements yu want to assing to variables. Desturcturing an array lets us
do exactly that:

*/

const [ a, b ] = [ 1 , 2 , 3 ,4 ,5 6 ];
console.log(a,b);

/*

The console will display values a and b as 1 , 2.

The variable a is assigned-the first value of the array, and b is assigned the second value of the array. We 
can also access the value at any index in  an array with destructuring by using commas to reach the desired index:

*/

const [a , b , , , c] = [ 1 , 2 ,3  4, 5, 6];
console. log(a , b , c);
// The console will display the values of a, b and c as 1, 2 , 5

/*
#NOTE:
 u can change the assing and u see the same process:
 
 
*/

const [x , y,,, z] = [2,3,5,7,11,13];
console.log( x , y, z );
