/*
CREATING STRING USING TEMPLETE LITERALS

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
Templete literals allow you to crete multi-line strings and to use string interpolation features to create strings/
Consider the code below


*/

const person = {
  name: " Zodiac Hasbro"
  age: 56
};

constr gteeting = 'Hello, my name is ${person.name}\
I am ${person.age}years old.'
console.log(greeting)

/*
The console wil display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old.
A lot of things happened there. Firstly, the example uses backticks(`), not quotes(` or "), to wrap the string. 
Secondly , notie that the string is multi-line, both in the code and the output. This saves iserrting \n within strings. 
the ${variable} sytax used above is a placeholder. Basically, you wont have to use concatenation with the + operator
anymore. to add variables, to strings, you just drop the variable in a template string  and wrap it with${and}. Similary,
you can include other expression in your stirng literal, for example ${ a + b }. This new way of creating string s 
give you more flexibility to create robust strings.

Use template literal sytax with vackticks to create an array of list element (li) string. Each list elemnt`s text 
shuld be one of the array elements fromt he failure property on the result object and have a class attribute eith the value text-warning. The
makeList function should return the array of list item strings.
Use an iterator method (any kind of loop) to get the desired output (shown below)
*/

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
