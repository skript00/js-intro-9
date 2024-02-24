console.log('Hello, World!'); // single quote
console.log("Hello, World!"); // double quote
console.log(`Hello, World!`); // backticks

console.log('');

console.log(`1. Hello`);
console.log(`2. Hi`);

console.log('1. Hello\n2. Hi'); // backslash n will break to a new line
console.log('1. Hello\n2. Hi');  // option+shift+down duplicates line

console.log('');

console.log('My full name is John Doe');
console.log('My full name is John Doe'); // option+click on separate line = multi-line edit

// Single line comment

/* Multi-line comments


/** 
 * These are documentation comments
 * 
 * 
 * 
 * 
 */

console.log('');

var name; // declaration

name = "John"; // assignment

name = "Jane"; // re-assignment

console.log(name);


let age = 45; // initialization

age = 23; // re-assignment

console.log(age); // 23

console.log('\n============New Practice==========\n');

const numOfSteps = 70;
console.log("You're On Step:");
console.log(numOfSteps + 5+'!'); 
/* here I added a + ater 5 instead of a comma to prevent an unnecessary
space after the result & exclamation (You're On Step: 75!)
*/

console.log("You're On Step:\n"); //backslash \n to do a line break
console.log(numOfSteps + 5+'!');

console.log("You're On Step:",numOfSteps +5+'!');
console.log(`You're On Step:` + (numOfSteps +5) + `!`); 
// order of operations! to concatenize a string w/ a numeric variable whilst adding it to another number

console.log('\n============New Practice==========\n');

const savings = 100;
const interest = 0.04;
console.log(savings * interest);

console.log('\n============New Practice==========\n');


let longString = "This is a long string and I'm just testin' it out (:";
console.log(typeof longString);
console.log(longString.length);
longString = longString.toUpperCase();
console.log(longString);

console.log('\n============New Practice==========\n');

for(i = 0;i<20;i++){

const newAge = Math.floor(Math.random() * 100 + 1);
const isOldEnough = newAge >= 16;

function checkAgeAndPrintResult(theAge, oldEnough) {
console.log(`${theAge}\t-> ${oldEnough}`)
}
checkAgeAndPrintResult(newAge, isOldEnough);
}

const car = {
    color:'Red',
    make: 'Nissan',
    model: 'Altima',
    year: 2018
}
console.log(car);
console.log(car.make);
console.log(car.model);
console.log(car['year']);
console.log(car['color']);

let skript = 'Ameer', age2 = 23, height = "5'10", weight = 160;

