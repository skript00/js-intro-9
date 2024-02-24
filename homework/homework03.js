const { generateRandomNumber } = require('../utils/MathHelper.js');

//Task-1
console.log('\n============Task-1============\n');

let num1 = generateRandomNumber(1, 100);
let num2 = generateRandomNumber(1, 100);
let num3 = generateRandomNumber(1, 100);
let avg1 = (num1 + num2 + num3) / 3;

console.log(`The numbers are ${num1}, ${num2}, and ${num3}.`);
console.log(`The average = ${avg1.toFixed(2)}`);
if (avg1 >= 50) {
    console.log(true);
}
else {
    console.log(false);
}

//Task-2
console.log('\n============Task-2============\n');

let n1 = generateRandomNumber(1, 3);
let n2 = generateRandomNumber(1, 3);
let n3 = generateRandomNumber(1, 3);

console.log(`The numbers are ${n1}, ${n2}, and ${n3}`);

if (n1 === n3 && n1 === n2) {
    console.log('TRIPLE MATCH');
} else if (n1 === n3 || n1 === n2 || n2 === n3) {
    console.log('DOUBLE MATCH');
} else {
    console.log('NO MATCH');
}

//Task-3
console.log('\n============Task-3============\n');

function hasA(string) {
    return string.includes('A') || string.includes('a');
}
console.log(hasA('Tech'));
console.log(hasA('Global'));

//Task-4
console.log('\n============Task-4============\n');

function doubleOrTripleWord(string) {
    if (string.length % 2 == 0) {
        return string.repeat(3);
    } else {
        return string.repeat(2);
    }
}
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));

//Task-5
console.log('\n============Task-5============\n');

function firstWord(string) {
    return string.charAt(0, (string.indexOf(" ")))
}
console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord(''));
console.log(firstWord(' '));

//Task-6
console.log('\n============Task-6============\n');

function lastWord(string) {
    const last_Index = string.lastIndexOf(' ');
    return string.slice(last_Index + 1);
}
console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord(''));
console.log(lastWord(' '));

//Task-7
console.log('\n============Task-7============\n');

function firstLastWord(string) {
    const firstSpace = string.indexOf(' ');
    const lastSpace = string.lastIndexOf(' ');
    const firstWord = string.slice(0, firstSpace);
    const lastWord = string.slice(lastSpace + 1);
    return firstWord + lastWord;
}
console.log(firstLastWord('Hello World'));
console.log(firstLastWord('I like JavaScript'));
console.log(firstLastWord(''));
console.log(firstLastWord(' '));

//Task-8
console.log('\n============Task-8============\n');

function startVowel(string) {
    const firstChar = string.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
}
console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel(' '));
console.log(startVowel('123'));

//Task-9
console.log('\n============Task-9============\n');

function swap4(string) {
    if (string.length >= 8) {
        const first4 = string.slice(0, 4);
        const last4 = string.slice(-4);
        return last4 + string.slice(4, -4) + first4;
    } else {
        return '';
    }
}
console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4(' '));
console.log(swap4('Apple'));

//Task-10 
console.log('\n============Task-10============\n');

function swapFirstLastWord(sentence) {
    sentence = sentence.trim();
    if (sentence.includes(' ')) {
        let firstWord = sentence.slice(0, sentence.indexOf(' '));
        let lastWord = sentence.slice(sentence.lastIndexOf(' ') + 1);
        return lastWord + sentence.slice(sentence.indexOf(' '), sentence.lastIndexOf(' ')) + ' ' + firstWord;
    } else {
        return '';
    }
}
console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord(' '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello '));


/* OTHER METHODS

task-3 (using an if-else conditional statement)

function hasA(string) {
    if (string.includes('A') || string.includes('a')) {
        return true;
    } else {
        return false;
    }
}
console.log(hasA('Tech')); // false
console.log(hasA('Global')); // true


task-10 using .join()

function swapFirstLastWord(sentence) {
    const trimmedSentence = sentence.trim();
    const words = trimmedSentence.split(' ');
    if (words.length >= 2) {
        const swappedWords = [words[words.length - 1], ...words.slice(1, -1), words[0]];
        return swappedWords.join(' ');
    } else {
        return "";
    }
}

console.log(swapFirstLastWord("Hello World"));            // "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));      // "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));        // "bar bar foo foo"
console.log(swapFirstLastWord(""));                        // ""
console.log(swapFirstLastWord("    "));                    // ""
console.log(swapFirstLastWord("Hello"));                   // ""
console.log(swapFirstLastWord("Hello   "));              

*/

//task-10
console.log('\n============Task-10 also ============\n');

function swapFirstLastWords(words) {
    words = words.trim()
    if (!words.includes(' ')) return '';
    else {
        let firstWord = words.slice(0, indexOf(' '));
        let lastWord = words.slice(lastIndexOf(' ') + 1);
        let middle = words.slice(words.indexOf(' '), words.lastIndexOf(' ') + 1);
        return lastWord + middle + firstWord
    }
}

console.log(swapFirstLastWords('Hello World'));
console.log(swapFirstLastWords('I like JavaScript'));
console.log(swapFirstLastWords('foo bar foo bar'));
console.log(swapFirstLastWords(''));
console.log(swapFirstLastWords(' '));
console.log(swapFirstLastWords('Hello'));
console.log(swapFirstLastWords('Hello '));