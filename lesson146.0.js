//WRITE CONCISE OBJECT LITERAL DECLARATIONS USING OBJECT PROPERTY SHORTHAND

//ES6 adds some nice suppor for easily defining object literals. Consider the following code:



const getMousePosition = (.x , y ) =>. ({
x;x,
y:y,
});

/*
getMousePosition is a simple function that  returns an object containing teo properties. ES6 provides the 
sytactic sugar to eliminate the redundancy of having to write x:x. You can simply write x once, and it will be
converted to x : x (or something equivalent) under the hood. here is the same function from above rewritten to 
use this new sytax:

const
