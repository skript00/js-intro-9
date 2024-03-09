// 1. function declaration

function greeting1() {
    console.log('Hello');
}


greeting1();

// 2. function expression (a.k.a 'anonymous function)
const greeting2 = function () {
    console.log('Hello');
}

greeting2();


// 3. arrow functions - ES6 feature
const greeting3 = () => {
    console.log('Hello');
}

greeting3();



/*
Write a function called product1 which takes 2 numbers and returns their product

product1(3, 5)   -> 15
product1(2, 0)   -> 0
product1(4, 3)   -> 12
*/
// product1 with function declaration
console.log('\n============Task-X============\n');

function product1(num1, num2) {
    return num1 * num2;
}
console.log(product1(3, 5)); // 15
console.log(product1(2, 0)); // 0
console.log(product1(4, 3)); // 12

//Write product2 function with expression
console.log('\n============Task-X============\n');

const product2 = function (num1, num2) {
    return num1 * num2
}

console.log(product1(3, 5)); // 15
console.log(product1(2, 0)); // 0
console.log(product1(4, 3)); // 12

// Write product3 function with arrow function 
console.log('\n============Task-X============\n');

const product3 = (num1,num2) => {
    return num1 * num2;
}

console.log(product1(3, 5)); // 15
console.log(product1(2, 0)); // 0
console.log(product1(4, 3)); // 12

// Enhanced arrow function
console.log('\n============Task-X============\n');

const product4 = (num1, num2) => num1 * num2;

console.log(product4(2, 5)) // 10



/*
Write an arrow function which takes a name string as an argyment and returns it uppercased

upperCaseName('John') -> 'JOHN'
upperCaseName('TechGlobal') -> 'TECHGLOBAL'
*/
console.log('\n============Task-X============\n');

const upperCaseName = name => name.toUpperCase() 

console.log(upperCaseName('TechGlobal')); // 'TECHGLOBAL'
// 1 argument doesn't need parenthesis
// 1 line of code - don't need brackets
// return key word not necessary








//extra
const names = ['mustafa', 'hicran', 'tania', 'ameer'];

names.forEach(name => console.log(upperCaseName(name)));