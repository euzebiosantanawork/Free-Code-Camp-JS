/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:


*/

var myObj = {
  "space Name": "Kirk"',
  "More  Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["space Name"];
myObj["More  Space"];
myObj["NoSpace"];

