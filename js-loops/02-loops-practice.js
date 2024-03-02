const {generateRandomNumber} = require('../utils/MathHelper.js');

// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ….

/*
start: 100
end: 0
update: --
*/
console.log('\n============Task-1============\n');

for(let i = 100; i >= 0; i--) {
    console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 2 4 6 8 …. 50
/*
start: 0
end: 50
update: +2
*/
console.log('\n============Task-2============\n');

for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i);
}

for(let i = 0; i <= 25; i++) {
    console.log(i * 2);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 …. 50
console.log('\n============Task-3============\n');

for(let i = 0; i <= 50; i += 5) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

for(let i = 0; i <= 10; i++) {
    console.log(i * 5);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15
console.log('\n============Task-4============\n');


let sum = 0;

for(let i = 1; i <= 5; i++) { 
    sum += i; 
}

console.log(sum); // 15


// Find sum of the numbers from 10 to 15 (both inclusive) -> 75
console.log('\n============Task-5============\n');

sum = 0;

for(let i = 10; i <= 15; i++) {
    sum += i;
}

console.log(sum); // 75


// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
console.log('\n============Task-6============\n');

let school = 'TECHGLOBAL School'; 

for(let i = 0; i <= school.length - 1; i++) { // or i < school.length
    console.log(school[i]);
}

// Count the total occurrences of letter o in TechGlobal School  -> 3
console.log('\n============Task-7============\n');


let countO = 0;

for(let i = 0; i <= school.length - 1; i++) { // 'o'
    if(school[i].toLowerCase() === 'o') countO++;
}

console.log(countO); // 3

// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9 …. random
console.log('\n============Task-8============\n');


let randomNumber = generateRandomNumber(10, 20);

console.log('The random number is =', randomNumber);

for(let i = 1; i <= randomNumber; i += 2) {
    console.log(i);
}


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/
console.log('\n============Task-9============\n');

let r1 = generateRandomNumber(1, 10);
let r2 = generateRandomNumber(1, 10);
let difference = Math.max(r1,r2) - Math.min(r1, r2);
console.log(`The random numbers are ${r1} and ${r2}`);

for (let i = 0; i <= difference; i++) {
    console.log(Math.min(r1,r2) + i);
}

console.log('\n============Task-10============\n');

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let ran = generateRandomNumber(1,10);
let product = 1;
console.log(`Random number is =`, ran);
for (let i = 1; i <= ran; i++) { // result = 1, i = 1
    product *= i;
}

console.log(`The product is = `, product);

