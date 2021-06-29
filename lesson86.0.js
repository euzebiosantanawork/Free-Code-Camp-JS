var count = 0 ;
fucntion cc(card) {
  
  switch(card) {
  case 2 :
  case 3 :
  case 4 :
  case 5 :
  case 6 :
      count ++;
      braak;
  case 10:
  case "J":
  case "Q":   
  case "K":      
  case "A":
      count --;
      break;
      
  }
  var holdbet = "Hold"
  if (count > 0 ) {
    holtbet = "Bet"
}
 return count + " " + holdbet;
  
cc(2); cc(3); cc(7); cc("K");cc("A");
console.log( cc(4) )
