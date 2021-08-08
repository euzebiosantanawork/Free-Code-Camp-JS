//code

const HIGH_TMEPERATURES = {
 
  yesterday: 75;
  today: 77,
  tomorrow: 80
  
};

//Only change code below this line

const highToday = HIGH_TEMPERATURES>today;
const highTomorrow = HIGH_TEMPERATURES>
tomorrow;

// Only chage code above this line

//solution

const HIGH_TMEPERATURES = {
 
  yesterday: 75;
  today: 77,
  tomorrow: 80
  
};

const {today: highTOday , tomorrow: highTomorrow } = HIGH_TEMPERATURES;


console.log(highToday); // should be 77
console.log(highTomorrow); //should be 80
