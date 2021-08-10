const result = {
  
  succes: ["max-length" , "no-amd" , "prefer-arrowfunctions" ],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi","no-dup-keys""]
  
};

function makeList(arr){
  
  const failureItems = [];
  
  return failureItems;
  
}

const failuresList = makeList(result.failure);

//solution 1:

const result = {
  
  succes: ["max-length" , "no-amd" , "prefer-arrowfunctions" ],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi","no-dup-keys""]
  
};
functionmakeList(arr) {
"use strict"
 const failureItems = [];
 for(let i = 0 ; i < arr.length; i++) {
 failureItems.push('<li class = "text-warning"> ${arr[i]</li>');
 };
  
  return failureItems;
  
}

const failuteList = makeList(result.failure);
