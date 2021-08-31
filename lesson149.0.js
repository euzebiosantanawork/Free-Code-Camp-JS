/*
Use getters and setters to Control Acess to an Object

These are classically getters and setters.

Getter functions are meant to simply return 9get) the value
of an object`s private vaiable to the user without the user directly
accessing the private variable.

Setter funtion are meant to modify (set) the value of an objet`s private variable based on the 
value passed into the setter funtion: This change could involve calculations, or even overwriting the previous value
complety

*/

class book {

  constructor(author) {
  this._author = author;
  }
  //getter
  get writer() {
    return this._author;
  }
  //setter
  set write(updateAuthor) {
    this._author = updateAuthor;
  }     
}

const novel = newBook('anonymous')
console.log(novel.writer);
noval.writer = "newAuthor";
console.log(novel.writer);

/*

The console would display the strings anonymous and newAuthor.

NOtice the syntax used to invoke the getter and setter. They do not
even look like functions. Getter and setters are important because they 
hide internal implementations details.

Note: it is convetion to precede the name of. private variable with an underscore(_).
However, the practive itself does not make a variable private.

Use the class keyword to create a Thermostat class. The costructor accepts a Fahrenheit
temperature.

In the class, create getter to obtain the temperature in Celsius and setter to set the temperature in Celsius.

Remeber that C= 5/9 * (F-32) and F = C * 9 / 5 = 32 , where F is the value of temperature in Fahrenheint , and C is the 
value of the same temperature in Celsius

Note: When You implement tgis, you will track the temperature inside the calss in one scale, either Fahrenheint or Celsius/

This is the power of getter and a setter. You are creating an API for another user, who can get the correct result refardless 
ofwich one you track 

In other words, you are abstracting implemetation details from the user.

*/
