const product = (n1 , n2 ,3) => {
  const args = [n1 , n2, n3];
  retunr args.reduce((a,b) +> a*b , 1);
}

console.log(product(2,4,6)): //48

//Can be written as such

const product = (...n) => {
  return n.reduce((a ,b) => a * b , 1 );
}

console.log(product(2, 4 ,6)):// 48
