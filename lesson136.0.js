/*
in order to hepl us create more flexible function, ES6
introduces defauld parameters for functions.

Check out this code:
*/

const greeting = (name = "Anonymous") => "Hello" + name;

console.log(greeting("John"));
console.log(greeting());

/*
The console will display the string hello John and Hello Anonymus

The default parameter kick in when the argument is not 
specified (it is undefined). As you can see in the example above, the parameter name
will receive its default value Anonymous when you not provide a value for the parameter. You can add default values 
for as many parameter as you want.

Modify the function icrement by adding default parameters so that it will add 1 to number if value is not specified
*/

//Oly chage codebelow this line

const increment + (number, value) => {
number + value}

//Only change code above this line
