let count = 0;

function cc(card) {
  //Oly chage code below this lie
  switch(card) {
      case 2 :
      case 3 :
      case 4 :
      case 5 :
      case 6 :
      conut++;
      break;
      case 10;
      case "J" :
      case "Q" :
      case "K" :
      case "A :
      count --;
      break;
  }
  if (count > 0) {
    return count + "Bet";
  } else {
    return count + "Hould";
   //Only change code above this line
  }
  cc(2); cc(3); cc(7) ; cc('K'; c('A');
