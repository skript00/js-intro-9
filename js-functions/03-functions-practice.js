/*
Write a function which takes a number and returns true if the number is even or 
returns false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)   -> true
isEven(-7)   -> false

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isEven(n1) {
    return (n1 % 2) === 0

}
console.log(isEven(25)); // false
console.log(isEven(26)); // true

/*
Write a function which takes a number and returns true if the number is odd or 
returns false if the number is even

isEven(4)   -> false
isEven(3)   -> true
isEven(0)   -> false
isEven(-2)   -> false
isEven(-7)   -> true

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isOdd(n1) {
    return n1 % 2 !== 0

}
console.log(isOdd(25)); // true
console.log(isOdd(26)); // false
console.log(isOdd(-25)); // true
console.log(isOdd(-26)); // false

/*
Write a function named initials which takes 2 arguments as fname and lname and returns initials

initials('John, 'Doe')      -> J.D.
initials('Adam, 'Smith')    -> A.S.
initials('Max, 'Smith')     -> M.S.
*/

function initials(fname, lname) {
     return `${fname[0]}.${lname[0]}.`;
}

console.log(initials('Ameer', 'Saleh'));


/* ALSO ^^
function initials(fname, lname) {
    // return `${fname[0]}.${lname[0]}.`;
    // return fname.at(0) + '.' + lname.at(0) + '.';
    // return fname.CharAt(0) + '.' + lname.charAt(0) + '.';
    // return fname.slice(0, 1) + '.' + lname.slice(0, 1) + '.';
    // return fname.substring(0, 1) + '.' + lname.substring(0, 1) + '.';
}
console.log(initials('Ameer', 'Saleh'));
/*

/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam Smith')    -> 'AS'
inits('Max Smith')     -> 'MS'
*/

function inits (fullname) {
    fullname2 = fullname.split(' ');
    let fname = fullname2[0];
    let lname = fullname2[1];
    return fname[0] + lname[0];


}
console.log(inits('Ameer Saleh'));

//better
function inits(fullname) {
    return fullname[0] + fullname[fullname.indexOf(' ') + 1];


}

console.log(inits('Ameer Saleh'));
console.log(inits('John Doe'));
console.log(inits('Adam Smith'));

