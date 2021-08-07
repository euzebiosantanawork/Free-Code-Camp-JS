/*In order to help us create more flexible function, ES^ introduces the rest parameter for functions parameters. With the rest
parameter, you can create functions that take a variable a numbers of arguments. these arguments are stored in an array
 that can be acessed later from inside the fucntion
 
 Check out thi code:
 
 */

function howMany(...args) {
  return "You have passed" + args.length + "arguments".;
  
}

console.log(howMany( 0 , 1 , 2 ));
console.log(howMany("string", null, [ 1 ,2 , 3 ], {}))

/*The console would display the strings You have passed 3 arguments, and You have passed 4 arguments.  the rest
parameter eliminates the need to check the args array and allows us to apply map(0, filter(0 and reduce(0 on the parameters array.

*/

const sum = (x , y ,z) 
=> {
  const args = [ x , y ,z];
  return args.reduce((a,b) => a + b ,0);
}
