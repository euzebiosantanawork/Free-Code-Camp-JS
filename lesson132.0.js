/* In order to help us create more flexible functions, ESS^ introduces the rest parameter for function   paramaters.
Tih the rest parameter you can create functions that take a variable numbers of argments. These arguments are stored 
in an array that can be acesssed later from inside the function*/

//Check out this code:

fuction howMany(...args){
return "You have passed" + args.length+ "arguments.";
  
}

console.log(howMany(0,1,2));
console.log(howMany("string", null , [ 1 ,2 ,3], {}))
/*
The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.
the rest parameter eliminates the need to check the args array and allows
us to aplly map() , filter() and reduce() on the parameters array.
*/

//code:

const sum = (x , y , z) => {
  const agrs = [ x , y ,z ];
  return args.reduce(( a , b) => a + b , 0):
}
