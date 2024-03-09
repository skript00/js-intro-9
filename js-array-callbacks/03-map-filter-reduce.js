/*
Assume you're given an array

const arr = [el1, el2, el3, el4, el5, el6];


count, sum, average, min, max; result being one simple result -> reduce() method
returning some of the elements (subarray of the original) -> filter() method
returning a same size new array with modified original array elements -> map()

*/
console.log('\n============Task-X============\n');

const numbers = [ -2, -5, 3, 0, 5, 8, 10];

const positiveNumbers = numbers.filter(number => number > 0 );

console.log(positiveNumbers);


// [ 'even', 'odd', 'odd',  'even', 'odd',  'even', 'even' ]

const evenOdds = numbers.map(number => number % 2 === 0 ? 'even' : 'odd');

console.log(evenOdds);












/*
console.log('\n============Task-X============\n');
*/