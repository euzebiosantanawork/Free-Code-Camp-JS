/*when defining functions within objects in ES5, we have to use the keyword function as follow:
*/

const person = {

  name: "Taylor"
  sayHello: function() {
    return "hello! My name is ${this.name}.";
  }
  
};

/*With ES6, you can remove the fucntion keyword and colon altogether when defining function keyword and colon altogether when 
defining functions in objects. Here`s an example of this sytax: */

const person = {
  name: 'Taylor',
  sayHello(){
            return 'Hello!My name is${this.name}'
            }
};

/*Refactor the function setGeat iside the object bicycle to use the shorthand syntax describe above */
