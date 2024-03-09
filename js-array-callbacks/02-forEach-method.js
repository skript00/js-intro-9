const names = ['John', 'Jane', 'Alex', 'Max'];
// Print each name in the array
console.log('\n============Task-X============\n');

names.forEach(name => console.log(name));

// Output first letter of each name
console.log('\n============Task-X============\n');

names.forEach(name => console.log(name[0]));

// Output each name uppercased
console.log('\n============Task-X============\n');

names.forEach(name => console.log(name.toUpperCase()));

// Output names that starts with J -> John and Jane
console.log('\n============Task-X============\n');

names.forEach(name => {
    if(name.toLowerCase().startsWith('j')) console.log(name);
});

// Count how many names have 4 letters -> 3
// This task is better to solve with reduce method and we'll learn
console.log('\n============Task-X============\n');

let count4 = 0;

names.forEach(name => {
    if(name.length === 4) count4++;
});

console.log(count4);



// Print each number
console.log('\n============Task-X============\n');

const numbers = [5, 10, 3, 0, -2];

numbers.forEach(number => console.log(number));

// Print true for even numbers and false for odd numbers -> false, true, false. true, true
console.log('\n============Task-X============\n');

numbers.forEach(number => console.log(number % 2 === 0));

// Create a new array that multiplies and stores each of the number elements by 3 -> [ 15, 30, 9, 0, -6 ]
console.log('\n============Task-X============\n');

const numberTimes3 = []

numbers.forEach(number => numberTimes3.push(number * 3));
// We can solve this with map() method and we'll learn it console.log(numbers.map(number => number * 3));
console.log(numberTimes3);


// Create a new array that stores even numbers -> [ 10, 0, -2 ]
console.log('\n============Task-X============\n');

const evenNums = []

numbers.forEach((number) => {
    if(number % 2 === 0) evenNums.push(number)
});
// We can solve this with filter() method and we'll learn it
console.log(evenNums);
