let name = 'John';

console.log(name); // John
console.log(typeof name); // string



const names = ['John', 'Jane', 'Alex', 'Max']; // array notation , array template

// logging out your array
console.log(names); // ['John', 'Jane', 'Alex', 'Max']

// rerieving an individual element from an array 
console.log(names[2]); // 'Alex'
console.log(names[0]); // 'John'

// retrieve and update Max with Mark
names[3] = 'Mark';

console.log(names); // [ 'John', 'Jane', 'Alex', 'Mark' ]
console.log(names[3]); // 'Mark'

const numbers = [10, -3, 25, 67, 99, 100.99];

// you can get array size with the length property
let arraySize = numbers.length;

console.log(arraySize); // 6

/*
Fetch and console log 25, 67, 100.99 elements from the array with their indexes
*/
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[5]);

console.log('\n');

console.log(numbers[2],numbers[3],numbers[5]);

const arr = ['John', true, 25, undefined, null, 45];

console.log(arr.length); // 6

console.log(arr[0]); // 'John'
console.log(arr[5]); // 45
console.log([-1]); // undefined

console.log([6]); // undefined
console.log([7]); // undefined
console.log([1000]); // undefined