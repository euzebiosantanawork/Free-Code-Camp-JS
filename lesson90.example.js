/*
Another use of bracket notation on objects is to access a property
which is stored as the value of a variable. This can be very useful
for iterating through an object's properties or when accessing a 
lookup table.

Here is an example of using a variable to access a property:


*/

var dogs = {
  Fido: "Mutt" , Hunter: "Doberman" , Snoopie: "Beagle",
};

var myDog = "Hounter";
var myBreed= dogs[myDog];
conole.log(myBreed);
/*

The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's 
name is collected dynamically during the program execution, as follows:



*/

var someObj = {
propNmae: 'John"
};

function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);


                          
