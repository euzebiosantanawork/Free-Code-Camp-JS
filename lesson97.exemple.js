/*

The sub-properties of objects can be acesseby chaining together the dot or braclet notation
Here is a nested object:


*/

var ourStorage = {
  "desk" : {
  "drawer" : "stapler"
  },
  "cabinet" : {
    "top drawer": {
      "folder1" : " afile",
      "folder 2" "secretes"
  },
   "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer".folder2
ourStorage.desk.drawer;

  // ourSorage.cabinet["top drawer"].folder2  would be the string 
  // secrets, and ourStorage.desk.drawer would be the string stapler
  /*
  Acess the myStorage object and assing the contents of the glove box property
  to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use 
  bracket notation.
  */
                   
