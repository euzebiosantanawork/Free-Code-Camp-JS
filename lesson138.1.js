const sum, = (...args) => {
  return args.reduce(( a , b)
                    => a + b , 0);
}
console.log(sum(...args)); //6

// solution

const arr1 = ["JAN" , "FEB" , "MAR" , "APR" , "MAY" ];
let arr2

arr2 = [...arr1]; // Change this line

console.log(arr2);
