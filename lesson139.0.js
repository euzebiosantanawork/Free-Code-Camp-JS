/*. Destructing assignment is special sytax intorduced in ES6, for neatly assinginig values taken 
directly from an object */
// Consider the following ES5 code:

const user = { name: 'John Doe' , age: 34};

const name = user.name;
const age = user.age;

/*

nmae would have value of the string John Doe, and age would have the number 34. Here`s an equivalent assingment
statement using the ES6 destructuring sytax:



*/

const { name , age } = user;

/*

Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assgned the values of their respective value from the user object. 
You can see how much cleaner this is.

You can extract as many or few values from the object as you want.


Replace the two assignments with an equivalent destruturing assignment. It should still asign the variable today
and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

*/
