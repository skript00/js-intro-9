const numbers = [3, 4, 7, 3, 2, 2, 7];
// Find the sum of numbers that are at an even index -> 3 + 7 + 2 + 7 ->

console.log('\n============Sum of elements that have Even Indexes============\n');

let sumEvenIndexes = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) sumEvenIndexes += numbers[i]
}
console.log(sumEvenIndexes);



// Find the multiplication of numbers that has odd index -> 4 * 3 * 2 -> 24
console.log('\n============Product of elements that have Odd Indexes============\n');

let product = 1;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) product *= numbers[i]
}
console.log(product);



/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/


const firstArr = [5, 8, 13, 1, 2];
const secondArr = [9, 3, 67, 1, 0];
const thirdArr = []

for (let i = 0; i < firstArr.length; i++) {
    thirdArr.push(firstArr[i] * secondArr[i]);
}

console.log(firstArr);
console.log(secondArr);
console.log(thirdArr)


//
const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];

// [ 45, 24, 5, 1, 0 ]

const array3 = [];

const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;

for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));



const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

// Put together all these elements from a1, a2 and a3 in an descending order -> [10, 9, 7, 5, 4, 3, 3, 1, 0]

// const aAll = a1.concat(a2, a3);
// const aAll = [a1, a2, a3].flat();
const aAll = [...a1, ...a2, ...a3];
let aAllSorted = aAll.sort((a,b) => b - a);

console.log(aAll);
console.log(aAllSorted);



const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
        break;
    }
}

// Please find the biggest odd number from the array -> 3
let biggestOdd; // 3
for(const number of nums) { // 0
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)) {
        biggestOdd = number;
    }
}
console.log(biggestOdd); // 3


