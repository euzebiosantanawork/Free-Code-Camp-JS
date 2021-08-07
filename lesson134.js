/*

IN JavaScpript, we often dont need to name our functions, especially when passing a fucntion as an argument to another function. Instead,
we create inline functions. We dont need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following sytax:



*/


const myFunc = function() {
  const myVar = "value";
  return myVar;
}
/*
EX6 provides us with the sytactic sugar to not have to write
anonumous functions this way. Instead, you can use arrow function sytax:

*/

const myFunc = () => {
  const myVar = "value"
  return myVar;
}

/*
Where there is no fucntion body, and only a return value, arrow
functionn styax alllos you tu omit the keyword return as well as the breakets surroding the code. This helps 
simplify smaller function into one-line
statements:


*/

const myFync = () => "value";

/*
This code will still return the string value by default

Rewrite  the function assigned to the variable magic wich returns a new Date() to use arrow funcction 
syntax . Also, make sure nothing is defined usind a keyword var


*/

