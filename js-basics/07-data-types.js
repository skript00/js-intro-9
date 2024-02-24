// 1. string
let favCoffe = 'Mocha'; // "Mocha" or 'Mocha'
let itemName = 'Mouse';

console.log(favCoffe); // Mocha
console.log(itemName); // Mouse


// 2. number -> floating numbers & absolute numbers (whole #s)
let favCoffePrice = 4.00;
let itemPrice = 16.99;

console.log(favCoffePrice); // 4.00
console.log(itemPrice); // 16.99

let age = 25;
let itemQuantity = 5;


// 3. boolean
let b1 = true;
let b2 = false;
let isItRainingToday = false;


let isThereMocha = true; // Mocha ... False = Caramel

if(isThereMocha) {
    console.log('Can I get a Mocha?');
}
else {
    console.log('Can I get a Caramel?');
}


// 4. undefined - a variable declared but not assigned with any value
let favBook;
console.log(favBook); // undefined
console.log(typeof favBook); // undefined



// 5. null - absence of data 
let middleName = null;
console.log(middleName); // null


// 6. bigint 9007199254740991 biggest #
let num1 = 9007199254740991; // works
console.log(num1);

let num2 = 92345678912345678; // too big (notice the dots under first 9)
console.log(num2);

let bigNumber = BigInt(90071992547409927236453745n); // n represents *this* is a bigint number
console.log(bigNumber);
// review this (timestamp @12:50pm)


// 7. symbol
let star = Symbol('*');

console.log(star);
console.log(typeof star); // symbol


//typeof operator
console.log(typeof 5); // number
console.log(typeof 5n); // small number, but in a BIG CONTAINER (one chair in a big room etc.)
console.log(typeof true); // boolean
console.log(typeof !false); // boolean
console.log(typeof (3 == 3 && 5 !=5)); // double parenthesis to return 'boolean', otherwise it'll return 'false'
console.log(typeof '123'); // string
console.log(typeof ''); // string (empty)
console.log(typeof null); // null - object
console.log(typeof undefined); // undefined

