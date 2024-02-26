// Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

// Print true if the average of the random numbers is greater or equals 50. 
// Print false if the average of the random numbers is less than 50.
console.log('\n============Task-1============\n');

let t1r1 = Math.floor(Math.random() * (100) + 1);
let t1r2 = Math.floor(Math.random() * (100) + 1);
let t1r3 = Math.floor(Math.random() * (100) + 1);
let t1avg = (t1r1 + t1r2 + t1r3) / 3;
console.log(t1r1, t1r2, t1r3);
console.log(`The average of the numbers = ${Math.round(t1avg)}`)
console.log(t1avg >= 50);

// Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

// -If all numbers are different, then print “NO MATCH”
// -If any of those 2 numbers are equal, then print “DOUBLE MATCH”
// -If all 3 numbers are equal, then print “TRIPLE MATCH”
console.log('\n============Task-2============\n');

let t2r1 = Math.floor(Math.random() * (3) + 1);
let t2r2 = Math.floor(Math.random() * (3) + 1);
let t2r3 = Math.floor(Math.random() * (3) + 1);
console.log(t2r1, t2r2, t2r3);

if (t2r1 === t2r2 && t2r2 === t2r3) {
    console.log('TRIPLE MATCH');
} 
else if (t2r1 === t2r2 || t2r1 === t2r3 || t2r2 === t2r3) {
    console.log('DOUBLE MATCH');
} 
else {
    console.log('NO MATCH');
}

// Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.
// NOTE: Assume you will not be given an empty word.
console.log('\n============Task-3============\n');

function hasA(str) {
    let word = str.toLowerCase()
    return word.includes('a');
}

console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));

// Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.
console.log('\n============Task-4============\n');

function doubleOrTripleWord(str) {
    let even = (str.length % 2 === 0);
    let odd = (str.length % 2 !== 0);
    if (even) {
        return str.repeat(3);
    } 
    else if (odd) {
        return str.repeat(2);
    } 
    else {
        throw Error;
    }
}
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));
console.log(doubleOrTripleWord(''));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('22'));

// Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.
// NOTE: Return empty string if the given string does not have any word.
console.log('\n============Task-5============\n');

function firstWord(str) {
    let sentence = str.trim();
    let spaceIndex = sentence.indexOf(' ');
    if (sentence.length === 0){
        return '';
    }
    else if (spaceIndex === -1) {
        return sentence;
    }
    else {
        let fword = sentence.slice(0, spaceIndex);
        return fword;
    }
}
console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord(' '));

// Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.
// NOTE: Return empty string if the given string does not have any word.
console.log('\n============Task-6============\n');

function lastWord(str) {
    let sentence = str.trim();
    let spaceIndex = sentence.lastIndexOf(' ');
    if (sentence.length === 0) {
        return sentence;
    }
    else if (spaceIndex === -1) {
        return sentence;
    }
    else {
        let lword = sentence.slice(spaceIndex + 1);
        return lword;
    }
}
console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord('Hello'));
console.log(lastWord(''));
console.log(lastWord(' '));

// Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
// NOTE: Return empty string if the given string does not have any word.
console.log('\n============Task-7============\n');

function firstlastWord(str) {
    let sentence = str.trim()
    if (sentence.length === 0) {
        return sentence;
    }
    else if (sentence.indexOf(' ') === -1) {
        return sentence.repeat(2);
    }
    else {
    let firstWord = sentence.slice(0, sentence.indexOf(' '));
    let lastWord = sentence.slice(sentence.lastIndexOf(' ') + 1);
    return firstWord + lastWord;
    }
}
console.log(firstlastWord('Hello World'));
console.log(firstlastWord('I like JavaScript'));
console.log(firstlastWord('Hello'));
console.log(firstlastWord(''));
console.log(firstlastWord(' '));

// Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
// NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
console.log('\n============Task-8============\n');

function startVowel(str) {
    let word = str.toLowerCase();
    return 'aeiou'.includes(word[0]);
}
console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel(' '));
console.log(startVowel('123'));

// Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
// NOTE: Return empty string if the given string does not have 8 or more characters.
console.log('\n============Task-9============\n');

function swap4(str) {
    if (str.length < 8){
        return '';
    }
    else {
    let first4 = str.slice(0, 4);
    let middle = str.slice(4, -4);
    let last4 = str.slice(-4);
    return last4 + middle + first4
    }
}
console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4(' '));
console.log(swap4('Apple'));

/*

// Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
// NOTE: Return empty string if the given string does not have 2 or more words.
console.log('\n============Task-10============\n');

*/




