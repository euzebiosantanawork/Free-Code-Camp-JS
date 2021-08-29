/*

ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax, and not a full-fledged class-based implemetation of an 
object-oriented paradigm, unlike in languages such as Java, python, Ruby, etc
In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

*/

var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupter');

/* The class syntax simply replaces the constructor function creation */

class   SpaceShuttle {
  constructor (targetPlanet) {
    this.targetPlanet = targetPlanet ;
  }
}

const zeus = new SpaceShuttle('Jupter');

/*

   It should be noted that the classs keyword declares a new function, to wich a constructor is added. this constructor
is invoked when new is called to create a new object/

Note: UpperCamelCase should be used by convetion for ES6 class name, as in. SpaceShuttle used above.

  The constructor method is a special method for creating and initializing an object created with class. You will learn
  more about in the Object Oriented Programming a section of the JavaScript Algorithms And DataStructures Certification
  
  Use class keyword and write a costructor to create the Vegetable class. 
  
  The Vegetable class allows you tu create a vegetable object with property name that gets 
  passed to the costructor

*/
