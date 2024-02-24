// Task-1
console.log('\n============Task-1============\n');

let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

console.log(sentence1.slice(7, 12).toUpperCase()); // APPLE

console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));

console.log(sentence3.replace(" don't", ''));

// Task-2
console.log('\n============Task-2============\n');

let s1 = "JavaScript";

console.log(`The length is = ${s1.length}`);
console.log(`The first char is = ${s1[0]}`);
console.log(`The last char is = ${s1.at(-1)}`);

console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u') || 
s1.includes('A') || s1.includes('E') || s1.includes('I') || s1.includes('O') || s1.includes('U'));

// Task-3
console.log('\n============Task-3============\n');

let str1 = "Civic" ; 

console.log(str1.at(str1.length / 2)); // always returns the middle value of an odd length string

// Task-4
console.log('\n============Task-4============\n');

let str2 = "AliHagag"; 

console.log(str2[str2.length / 2 - 1] + str2[str2.length / 2]); // always returns middles values of an even length string

console.log(str2.slice(str2.length / 2 -1, str2.length / 2 + 1));

// Task-5
console.log('\n============Task-5============\n');

/*
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 

Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = "Tesla";

console.log(`The first 2 characters are = ${s4.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s4.slice(s4.length -2)}`);
console.log(`The other characters are = ${s4.slice(2, s4.length -2)}`);

// Task-6
console.log('\n============Task-6============\n');

let s5 = "abcdab";
const firstTwo = s5.slice(0, 2);
const lastTwo = s5.slice(-2);
result = firstTwo === lastTwo
console.log(result);


// Task-7
console.log('\n============Task-7============\n');

const s61 = "orange";
const s62 = "6"; 

const s61Trimmed = s61.slice(1, -1)
const s62Trimmed = s62.slice(1, -1);

const result7 = s61Trimmed + s62Trimmed;
console.log(result7);

// Task-8
console.log('\n============Task-8============\n');

let s7 = 'green';

let s7result = s7.startsWith('xx') && s7.endsWith('xx');

console.log(s7result);


// Task-9
console.log('\n============Task-9============\n');

/*
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""

Test Data 2:
let s8 = " ";

Expected Result 2:
" "

Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"

Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"
*/

let s8 = "JavaScript is nice to learn"

let firstWord = s8.slice(0, s8.indexOf(' '))
let lastWord = s8.slice(s8.lastIndexOf(' ') + 1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);

console.log(lastWord + middle + firstWord);

// Task-10
console.log('\n============Task-10============\n');

let s9 = "JavaScript is nice to learn";

console.log((s9.split(' ')).length); // 5
console.log(s9.length - s9.replaceAll(' ', '').length + 1); // 5



