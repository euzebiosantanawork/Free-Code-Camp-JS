/*
Use Destructuring Assigment to Assing Variavles from Nested Objects

You can use the same priciples from the previuns two lessons to destructure values from nested objects..
Usgin an ovject smiliar to previous examples:
*/

const user = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

/*
Here`s how to extract the values of object properties and assign them to variables
with the same name:
*/

const { johnDoe: {age , email}} = user;
/*
And here`s  how you can asing an object properties values to variable with different names:
*/

const { johnDoe: { age: userAge , email: userEmail } } = user;

/* Replace the two assigments with an equivalent destructuring assigment. It should still asing the variables lowToday 
and highToday the values of today.low and today.high from the LOCAL_FORECAST object/
*/
