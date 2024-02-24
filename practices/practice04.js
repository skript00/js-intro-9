const {CharacterHelper} = require('../utils/CharacterHelper.js');
const {generateRandomNumber} = require('../utils/MathHelper.js');


console.log('\n============TASK-1============\n');
//TASK-1

let t1num1 = 0;
let t1num2 = 1;

console.log(t1num1 === t1num2); // false

//TASK-2
console.log('\n============TASK-2============\n');

let t2char = '9';

let t2ascii = t2char.charCodeAt(0);

if ((t2ascii >= 65 && t2ascii <= 90) || (t2ascii >= 97 && t2ascii <= 122)) console.log(`${t2char} is a letter`);
else if (48 <= t2ascii || t2ascii <= 57) console.log(`${t2char} is a digit`);
else console.log('INVALID INPUT');

//TASK-3
console.log('\n============TASK-3============\n');

let t3char = 'T';

let t3ascii = t3char.charCodeAt(0);

if (t3ascii >= 65 && t3ascii <= 90) console.log(`"${t3char}" is an uppercase letter`);
else if (t3ascii >= 97 && t3ascii <= 122) console.log(`"${t3char}" is a lowercase letter`);
else console.log('INVALID INPUT');

//TASK-4
console.log('\n============TASK-4============\n');

let t4char = ' ';

let t4ascii = t4char.charCodeAt(0);

if ((t4ascii >= 65 && t2ascii <= 90) || (t2ascii >= 97 && t2ascii <= 122)) {
    console.log(`'${t4char}' is not a special character`);
}
else if (48 <= t4ascii || t4ascii <= 57) {
    console.log(`'${t4char}' is not a special character`);
}
else if (t4ascii = 32) {
    console.log(`'${t4char}' is not a special character`);
}

//TASK-5
console.log('\n============TASK-5============\n');

let t5char = '6';

t5vowel = t5char.toLowerCase();

if ('AEIOUaeiou'.includes(t5char)) {
    console.log(`${t5char} is a vowel`);
}
else {
    console.log(`${t5char} is not a vowel`);
}

//

console.log(CharacterHelper.isVowel('A'));
console.log(CharacterHelper.isVowel('b'));


