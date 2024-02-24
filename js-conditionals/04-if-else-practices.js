const { generateRandomNumber } = require('../utils/MathHelper.js');

console.log(generateRandomNumber(3, 5));

console.log('\n========================\n');

let num1 = generateRandomNumber(1, 10);
console.log(num1);

if (num1 % 2 === 0) {

    console.log('EVEN');
} else {
    console.log('ODD');
}

console.log('\n========================\n');

let num2 = generateRandomNumber(0, 1);
console.log(num2);

if (num2 < 1) {
    console.log('The number is ZERO');
} else {
    console.log('The number is ONE');
}

console.log('\n========================\n');

let num3 = generateRandomNumber(-10, 10);
console.log(`Randomly generated number is = ${num3}`);

if (num3 > 0) {
    console.log('The number is POSITIVE');
} else if (num3 < 0) {
    console.log('The number is NEGATIVE');
} else {    // don't put condition for else{} since it's already implied !(num3 > 0 && !(num3 > 0)
    console.log('The number is ZERO');
}

// OR
console.log(`Randomly generated number is = ${num3}`);
if (num3 > 0) {
    console.log('The number is POSITIVE');
}
    else {
        if (num3 < 0) {
        console.log('The number is NEGATIVE');
    }
    else {
        console.log('The number is ZERO');
    }
}
