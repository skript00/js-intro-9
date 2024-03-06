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
}
console.log(`The random number is ${t7r1} and it took ${attempts} attempt/s to generate it`);

// Task-8
console.log('\n============Task-8============\n');

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);
console.log(countries.sort()); // .sort() manipulates the array. countries will be sorted in every log moving forward

// Task-9
console.log('\n============Task-9============\n');

const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(dogs);
console.log(dogs.includes('Pluto'));

// Task-10
console.log('\n============Task-10============\n');

const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cats.sort());
console.log(cats.includes('Garfield' && 'Felix'));

// Task-11
console.log('\n============Task-11============\n');

const numbers = [10.5, 20.75, 80, 15.75];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// Task-12 
console.log('\n============Task-12============\n');

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'ruler'];
let countBorP = 0;
let countBookOrPen = 0;

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

console.log(`Elements starting with 'B' or 'P' = ${countBorP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookOrPen}`); 

// Task-13 
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
console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${equalTo10}`);

// Task-14
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

// Task-15
console.log('\n============Task-15============\n');

function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        // let duplicate = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                // duplicate++;
                return arr[j];
            }
            // if (duplicate === 2) {
                
            // }
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

// Task-16 
console.log('\n============Task-16============\n');

function getDuplicates(arr) {
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] )  
        }
    }
}

