
/*

Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case,
the following case statement(s) are executed until a break is 
encountered. If you have multiple inputs with the same output, you can
represent them in a switch statement like this:

var result = "";
switch(val){
  case 1:
  case 2:
  case 3:
    result = "1, 2 , or 3";
    break;
  case 4:
    result = "4 alone";
}

*/

function sequentialSizes(answer) {
  var answer = "";
  // Only change code below this line
switch (answer) {
  case 1:
  case 2:
  case 3:
    result = "Low";
    break;
  case 4:
  case 5:
  case 6:
    result = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    result= "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);
