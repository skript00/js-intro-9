const {generateRandomNumber} = require('../utils/MathHelper.js');

/* Task-1
-Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
*/
console.log('\n============Task-1============\n');

for (let i = 1; i <= 100; i++ ) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

/* Task-2
-Write a program that outputs all the numbers that are divisible by both 2 and 3 
starting from 1 to 50 (both inclusive).
*/
console.log('\n============Task-2============\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

/* Task-3
-Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
*/
console.log('\n============Task-3============\n');

for (let i = 100; i >=50; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

/* Task-4
-Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
*/
console.log('\n============Task-4============\n');

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}

/* Task-5
-Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/
console.log('\n============Task-5============\n');

let t5sum = 0
for (let i = 1; i <=10; i ++) {
    t5sum = i + t5sum;
}
console.log(t5sum); // 55

/* Task-6
-Write a program generates a random number between 1 and 10 (both inclusive). 
-Find the factorial of the number.
*/
console.log('\n============Task-6============\n');

let t6r1 = Math.floor(generateRandomNumber(1,10));
let t6factorial = 1;
for (let i = t6r1; i >=1; i--) {
    t6factorial = i * t6factorial;
}
console.log(t6r1 + '! = ' + t6factorial);

/* Task-7
-Write a program generates a random number between 1 and 100 (both inclusive).
-Keep generating a new number till you get a number that is divisible by 5.
-The program should also count how many attempts it takes to generate such a number.
-Eventually, print the random number divisible by 5 with the number of attempts as below.
*/
console.log('\n============Task-7============\n');

let t7r1;
let attempts = 1;

while(true) {
    t7r1 = generateRandomNumber(1,100);
    if (t7r1 % 5 === 0) {
        break;
        
    } else 
   console.log(`This is attempt ${attempts}, the number ${t7r1} isn't divisible by 5`);
    attempts++;
}
console.log(`The random number is ${t7r1} and it took ${attempts} attempt/s to generate it`);

/*OR
for (attempts = 1; ; attempts++) {
    t7r1 = generateRandomNumber(1,100);
    if (t7r1 % 5 === 0) {
        break;
    }
}
*/

/* Task-8
-Create an array that stores countries: Germany, Argentina, Ukraine, Romania
-Output the entire array
-Ouput the entire array sorted lexicographically
*/
console.log('\n============Task-8============\n');

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);

console.log(countries.sort()); // .sort() manipulates the array. countries will be sorted in every log moving forward

/* Task-9
-Create a String array that stores cartoon dogs: Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false
*/
console.log('\n============Task-9============\n');

const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(dogs);

console.log(dogs.includes('Pluto')); // true

/* Task-10
-Create an array that stores cartoon cats; Garfield, Tom, Sylvester, Azrael
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false
*/
console.log('\n============Task-10============\n');

const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cats.sort());

console.log(cats.includes('Garfield' && 'Felix')); // false

/* Task-11
-Create an array that stores numbers: 10.5, 20.75, 70, 80, 15.75
-Output the entire array
-Ouput each element
*/
console.log('\n============Task-11============\n');

const numbers = [10.5, 20.75, 80, 15.75];

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


/* Task-12
-Create an array that stores objects: Pen, notebook, Book, paper, bag, pencil, Ruler
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.
*/
console.log('\n============Task-12============\n');

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'ruler'];

console.log(objects);

let countBorP = 0;

let countBookOrPen = 0;
//Loop checking for b or p
for (let i = 0; i < objects.length; i++) { 
    if (objects[i][0].toLowerCase().includes('b') || objects[i][0].toLowerCase().includes('p')) {
        countBorP++;
    }
}

for (let i = 0; i < objects.length; i++) {
    if (objects[i].toLowerCase().includes('book') || objects[i].toLowerCase().includes('pen')) {
        countBookOrPen++;
    }
}

console.log(`Elements starting with 'B' or 'P' = ${countBorP}`); // 5
console.log(`Elements having 'book' or 'pen' = ${countBookOrPen}`); // 4

/* Task-13
-Create an array that stores numbers: 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/
console.log('\n============Task-13============\n');

const numbers2 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(numbers2);

let moreThan10 = 0;
let lessThan10 = 0;
let equalTo10 = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
    moreThan10++;
    }
    else if (numbers2[i] < 10) {
        lessThan10++;
    }
    else {
        equalTo10++;
    }
}
console.log(`Elements that are more than 10 = ${moreThan10}`); // 5
console.log(`Elements that are less than 10 = ${lessThan10}`); // 4
console.log(`Elements that are 10 = ${equalTo10}`); // 2

/* Task-14
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays 
and output the third array as well.

*/
console.log('\n============Task-14============\n');

const firstArr = [5, 8, 13, 1, 2];
const secondArr = [9, 3, 67, 1, 0];
const thirdArr = []

for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] >= secondArr[i]) {
        thirdArr.push(firstArr[i]);
    }
    else {
        thirdArr.push(secondArr[i]);

    }
}

console.log(firstArr);
console.log(secondArr);
console.log(thirdArr)

/* Task-15
-Write a function named as firstDuplicate() which takes an array argument and returns 
the first duplicated number in the array when invoked.
-NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array.
For two elements to be considered as duplicated, value and data types of the elements must be same.
*/
console.log('\n============Task-15============\n');

function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return arr[i];
        }
     }
    return -1
    }

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

/* Task-16
-Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.
*/
console.log('\n============Task-16============\n');

function getDuplicates(arr) {
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicate.includes(arr[i])) {
            duplicate.push(arr[i]);
        }
    }
    return duplicate;
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); // [ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7])); // []
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])); // [ 'foo', 'a' ]
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a'])); // []


/* Task-17
Write a function named as reverseStringWords() which takes a string as an argument and
 returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider 
extra spaces before and after words in the given string.
*/

function reverseStringWords(str) {
    str.trim()
    let wordArray = str.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].split('').reverse().join('');
    }
    return wordArray.join(' ')
}


console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords(' '));



/* Task-18
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the 
range of given 2 numbers. Assume you will not be given negative numbers.
*/
function getEvens(num1, num2) {
    let arr = [];
    let max = Math.max(num1,num2);
    let min = Math.min(num1, num2);

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/* Task-19
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.
*/
function getMultipleOf5(num1, num2) {
    let arr = [];
    let max = Math.max(num1,num2);
    let min = Math.min(num1, num2);

    for (let i = min; i <= max; i++) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    if (max === num1) arr.reverse();
    return arr;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

/* Task-20
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/
function fizzBuzz(num1, num2) {
    let numbers = [];

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    for(let i = min; i <= max; i++) {
        if(i % 3 === 0 && i % 5 === 0) numbers.push('FizzBuzz');
        else if(i % 3 === 0) numbers.push('Fizz');
        else if(i % 5 === 0) numbers.push('Buzz');
        else numbers.push(i);
    }
    return numbers.join(' | ');
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));