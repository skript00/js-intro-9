
// BEFORE ES6
console.log(address);

var address = 'Chicago, IL'; // let and const would provide reference errors but var declarations are hoisted to the top

/* 
JS assumes the above code is written as below

var address;

console.log(address); // undefined

address = 'Chicago, IL';

*/


// Function declaration is hoisted as well
console.log(sum(1,2)); // 3

function sum(n1,n2) { 
    return n1 + n2;
}

console.log(sum(3,2)); // 5


// Function expression or arrow function 
// var is hoisted, let and const are not hoisted
// You will get ReferenceError for let or const and TypeError for var

console.log(add(1,2)); // ReferenceError (let or const) or TypeError (var)

const add = (n1, n2) => {
    return n1 + n2;
}

