/*Spread Operator? Rest Operator*/

// add the elements of an existing array into a new array

var certsTpAdd = ['Algorithms and Data Structures' , 'Fron End Libraries'];

var cerfications = ['Responsive Web Design ' , .... certsToAdd, "DataVisualization', 'APIs and Microservices',
                    'Quality Assurance and Infomation Security'];
                    console.log(certifications);

/*console

["Responsive Web Design", "Algorithms and Data Structures , "Front End Libraries" , " Data Visualization" , "API and Microservices" , "Quality Assurance
and Information Security"]
*/

// pass elemens of an array as arguments to a function

function addThreeNumbers( x , y , z) {
console.log(x + y + z)

}

var args = [ 0 , 1 , 2];
addThreeNumbers(...args);

/*
console

3
*/

console.log(x + y + z)

}

var args = [ 0 , 1 , 2, 3];
addThreeNumbers(...args);

/*
console

3
*/

//copy arrys

var arr = [ 1 2 , 3 ];
var arr2 = [...arr]; // ali arr.slice()
arr2.push(4);
console.log(arr);
console.log(arr2);
//concatenate arrays\

var arr1 = [0 , 1 , 2];
var arr2 = [ 3, 4 ,5 ];
//arr1.concat(arr2);
arr1 = [...arr1 , ...arr2];
console.log(arr1);

//REST: condense multiple elements in an array
function multiply (multiplier , ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier*element;
  });
}

var arr = multiply(2 , 1 ,2 ,3);
console.log(arr);
