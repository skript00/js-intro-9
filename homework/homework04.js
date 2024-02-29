const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task-1
console.log('\n============Task-1============\n');

for (let i = 1; i <= 100; i++ ) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Task-2
console.log('\n============Task-2============\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// Task-3 
console.log('\n============Task-3============\n');

for (let i = 100; i >=50; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Task-4
console.log('\n============Task-4============\n');

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

// Task-5
console.log('\n============Task-5============\n');

let t5sum = 0
for (let i = 1; i <=10; i ++) {
    t5sum = i + t5sum;
}
console.log(t5sum);

// Task-6
console.log('\n============Task-6============\n');

let t6r1 = Math.floor(generateRandomNumber(1,10));
let t6factorial = 1;
for (let i = t6r1; i >=1 ; i -- ) {
    t6factorial = i * t6factorial;
}
console.log(t6r1 + '! = ' + t6factorial);

// Task-7
console.log('\n============Task-7============\n');

let t7r1;
let attempts;
for (attempts = 1; ; attempts++) {
    t7r1 = generateRandomNumber(1,100);
    if (t7r1 % 5 === 0) {
        break;
    }
    console.log(`The random number ${t7r1} isn't divisible by five. This is attempt ${attempts}`);
}
console.log(`The random number is ${t7r1} and it took ${attempts} attempt/s to generate it`);

// Task-8
console.log('\n============Task-8============\n');
