function startE (fname) {
    if(fname[0] === 'E' || fname[0] === 'e') {
        return true;
    }
    else {
        return false;
    }
}
console.log(startE('Emily')); // true
console.log(startE('emily')); // true 
console.log(startE('Alex')); // false
console.log(startE('')); // false

// or ^
function startE (fname) {
    if(fname.length === 0 || fname[0].toUpperCase() !=='E') {
        return false;
    }
    else {
        return true;
    }
}

console.log(startE('Emily')); // true
console.log(startE('emily')); // true 
console.log(startE('Alex')); // false
console.log(startE('')); // false

console.log('\n========================\n');

// KEEP WATCHING FROM 1:35 

/*
/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisble5 (num) {
    if (num % 5 === 0) { // checks if number is divisble by 5
        return true;
    }
    else {
        return false;
    }
}
console.log(divisble5(7));
console.log(divisble5(0));
console.log(divisble5(10));
console.log(divisble5(99));


console.log('\n============OR============\n');


function divisible5(num) {
    if(num % 5 === 0) return true;
    return false;
}

console.log(divisible5(7)); // false
console.log(divisible5(0)); //  true
console.log(divisible5(10)); // true
console.log(divisible5(99)); // false


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar (num) {
    if (num % 5 === 0 && num % 7 === 0) {
        return 'foobar';
    }
    else if (num % 5 === 0) {
        return 'foo';
    }
    else if (num % 7 === 0) {
        return 'bar';
    }
    else if (num % 5 !== 0 || num % 7 !== 0) {
        return num;
    }
}
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));

console.log('\n============OR============\n');

function fooBar(num) {
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar'; 

    return num;
}

console.log(fooBar(35)); // 'foobar'
console.log(fooBar(70)); // 'foobar'
console.log(fooBar(0)); // 'foobar'
console.log(fooBar(5)); // 'foo'
console.log(fooBar(21)); // 'bar'
console.log(fooBar(8)); // 8
console.log(fooBar(11)); // 11

console.log('\n========================\n');

/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 
getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

function getGrade (num) {
    if (num < 60) {
        return 'F';
    }
    else if (num >= 90) {
        return 'A';
    }
    else if (num >= 80 && num < 90) {
        return 'B';
    }
    else if (num >= 70 && num < 80) {
        return 'C';
    }
    else if (num >= 60 && num < 70) {
        return 'D';
    }
    else return NaN;
}
console.log(getGrade(90));
console.log(getGrade(89));
console.log(getGrade(80));
console.log(getGrade(79));
console.log(getGrade(70));
console.log(getGrade(69));
console.log(getGrade(60));
console.log(getGrade(59));
console.log(getGrade(95));
console.log(getGrade(83));
console.log(getGrade(23));
console.log(getGrade(67));

console.log('\n=============OR===========\n');


function getGrade(num) { // 1 and 100
    if(num < 0 || num > 100) throw Error('INVALID input!!! The score cannot be ' + num);

    if(num >= 90) return 'A';
    else if (num >= 80) return 'B';
    else if (num >= 70) return 'C';
    else if (num >= 60) return 'D';

    return 'F';
}

console.log(getGrade(83)); // 'B'
console.log(getGrade(77)); // 'C'
console.log(getGrade(69)); // 'D'
console.log(getGrade(32)); // 'F'
// console.log(getGrade(101)); // ERROR
// console.log(getGrade(-1)); // ERROR
