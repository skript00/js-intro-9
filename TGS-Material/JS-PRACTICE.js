// console.log('\n============ Welcome To The Magic 8-Ball! ============');

// console.log('\n============ Welcome To The Magic 8-Ball! ============');
/*
let userName = 'Rabe';

userName == false ? console.log('Hello!') : console.log(`Hello ${userName}!`);

const userQuestion = 'Will I die today?';

console.log(`\tYou asked "${userQuestion}"`);

const randomNumber = Math.floor(Math.random() * 8 + 1);

let eightBall = '';

switch (randomNumber) {
  case 0: eightBall = 'It is certain';
    break;
  case 1: eightBall = 'It is decidedly so';
    break;
  case 2: eightBall = 'Reply hazy try again';
    break;
  case 3: eightBall = 'Cannot predict now';
    break;
  case 4: eightBall = 'Do not count on it';
    break;
  case 5: eightBall = 'My sources say no';
    break;
  case 6: eightBall = 'Outlook not so good';
    break;
  case 7: eightBall = 'Signs point to yes';
    break;
  case 8: eightBall = 'LUCKY NUMBER! MOST DEFINITELY';
    break;
  default: throw Error('Error! How did this happen?!');
}
console.log(`Eight 8all says:`);

console.log(`\t\t${eightBall}`);
*/

// console.log('\n============ Welcome Racer! ============');
/*
console.log('\n============ Welcome Racer! ============');

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = null;

let runnerAge = null;

runnerAge > 18 ? raceNumber *= 1000 : undefined;

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your number is #${raceNumber} and you will run @ 9:30 am.`);
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your number is #${raceNumber} and you will run @ 11:00 am.`);
}
else if (runnerAge < 18) {
  console.log(`Your number is #${raceNumber} and you will run @ 12:30 pm.`)
}
else {
  console.log('YOU ARE 18. SEE THE REGISTRATION DESK!');
}

*/


const factorial = (num) => {
  if (num <= 2) return num
  else return num * factorial(num - 1);
} 

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
console.log(factorial(11));
console.log(factorial(12));