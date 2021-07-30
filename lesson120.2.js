function countdown(n) {
  if(n <1) {
    return[];
  } else {
    const arr=coutdown(n-1);
    arr.splice( 0 , 0 ,n);
    return arr;
    
