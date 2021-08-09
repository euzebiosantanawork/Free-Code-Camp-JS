//USe Destructuriing Assigment to Pass an Object as Function`s Parameters

/*
 
 In some case, you can desturcture the object in function argument itself.
    Consider the code below:

*/

const profileUpdate = ( profileData ) => {
const ( name , age, nationality , location ) = profileData;
  
}

/* This effectively desturctures the object sent into the function. This can 
also be done in-place:
*/

const profileUpdate = ({ name , age , nationalitty , locaion }) => {

}

/* When profileDate is passed to the aobve function, the values are desturcutred form the function 
parameter  for use within the function 

USe destructuring assignment within the argument to the fucntion
half to send oly max and min isede the function.

*/
