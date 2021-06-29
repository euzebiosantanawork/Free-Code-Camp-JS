/*
When a return statement is reached,
the execution of the current function
stops and control returns to the 
calling location.
*/
function myFunc() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
