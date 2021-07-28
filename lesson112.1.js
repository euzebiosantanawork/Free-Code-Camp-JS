function randomFraction() {
//Only change code below this line

var result = 0;
  //Match.radom() can generate 0. We dont want to return a 0 ,
  // So keep generating radom numbers util we get one that isnt 0
  while (result === 0) {
    result = Math.random();
  }
  
  return result;
  //Only cahnge code above this line
}
