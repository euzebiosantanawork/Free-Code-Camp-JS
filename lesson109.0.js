/*

The next type of loop you will
learn is called a do...while loop. It is called
a do...while loop because it will first do one pass of the
code inside the loop no matter what, and then continue to run the 
loop while the specified condition evaluates to true.

var


*/

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while ( i < 5);

/*

 The example above behaves similar to other
 types of loops, and the resulting array will 
 look like [0, 1, 2, 3, 4]. However, what
 makes the do...while different from other 
 loops is how it behaves when the condition
 fails on the first check. Let's see this in 
 action: Here is a regular while loop that will 
 run the code in the loop as long as i < 5:



*/

var ourArray = [];
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}

/*

In this example, we initialize the value of ourArray to 
an empty array and the value of i to 5. When we execute 
the while loop, the condition evaluates to false because 
i is not less than 5, so we do not execute the code inside
the loop. The result is that ourArray will end up with no
values added to it, and it will still look like [] 
when all of the code in the example above has completed
running. Now, take a look at a do...while loop:

*/

var ourArray= [];
var i = 5;
do {
  ourarray.push(i);
  i++;
} while ( i < 5);
