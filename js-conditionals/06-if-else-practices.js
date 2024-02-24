const {generateRandomNumber} = require('../utils/MathHelper.js');

console.log('\n============Practice Task-1============\n');

let r1 = generateRandomNumber(1, 12);
console.log('Randomly generated number is = ' + r1);

if(r1 === 12 || r1 === 1 || r1 === 2) {
    console.log('Winter');
}
else if(r1 === 3 || r1 === 4 || r1 === 5) {
    console.log('Spring');
}
else if(r1 === 6 || r1 === 7 || r1 === 8) {
    console.log('Summer');
}
else {
    console.log('Fall');
}

if (r1 >= 3 && r1 <= 5) { // r1 === 3 || r1 === 4 || r1 === 5
    console.log('Spring');
}
else if (r1 >= 6 && r1 <= 8) { // r1 === 6 || r1 === 7 || r1 === 8
    console.log('Summer');
}
else if (r1 >= 9 && r1 <= 11) { // r1 === 9 || r1 === 10 || r1 === 11
    console.log('Fall');
}
else {
    console.log('Winter'); // r1 === 12 || r1 === 1 || r1 === 2
}

