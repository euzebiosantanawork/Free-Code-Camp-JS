/*
destruturing allows to assing a new variable name when extrecting vaslues, You can do this by puttting the new name after a colon when assiging
the value.

Using the same object from the last example:
*/

const user = {name: 'John Doe' , age: 34}

// Here`s how you can give new variable names in the asisgnment:

const {name: userName , age: userAge } = user;

/*
You may read it as "get the value of user.name and assing it to a new 
variable named userName"  and so on. The vlaue of userName would be the string. John Doe. and the vlaue of
userAge would be the number 34.

Replace the two assignments with an equivalent destructuring assingment, It should still assign the variables 
highToday and highTomorrow the values of today and tomorow from the HIGH_TEMPERATURES object.
*/
