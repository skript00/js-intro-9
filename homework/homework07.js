const {CharacterHelper} = require('../utils/CharacterHelper.js');
const {factorial} = require('../js-es6/03-arrow-functions.js');
console.log(factorial(4))


/* Task-1
Write a function named hasUpperCase() which takes a string argument and return 
true if there is an uppercase letter and false otherwise.

hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	    -> false
hasUpperCase("") 		    -> false
*/
console.log('\n============Task-1============');

const hasUpperCase = (str) => {
    let UpperCounter = 0
    str.split('').forEach(elem => {
        if (CharacterHelper.isUpperCase(elem)) UpperCounter++
    });
    return UpperCounter > 0 ? true : false;
}
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

/* Task-2
Write a function named noDigit() which takes a string argument and returns 
a new string with all digits removed from the original string​.

noDigit("") 			        -> ""
noDigit("Javascript") 		    -> "Javascript"
noDigit("123Hello") 		    -> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/
console.log('\n============Task-2============');

const noDigit = (str) => {
    return str.split('').filter(elem => {
        if (!CharacterHelper.isDigit(elem)) return elem;
    }).join('');
};
console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

/* Task-3
Write a function named noVowel() which takes a string argument and returns 
a new string with all vowels removed from the original string​.

noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	    -> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	        -> ""
noVowel("125$") 	    -> "125$"
*/
console.log('\n============Task-3============');

const noVowel = (str) => {
    return str.split('').filter(elem => {
        if (!CharacterHelper.isVowel(elem)) return elem
    }).join('');
};
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/* Task-4
Write a function named no13() which takes an array of numbers as argument and return 
a new array with all 13s replaced with 0s. ​

no13([1, 2, 3 ,4]) 		        -> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		        -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			            -> []
*/
console.log('\n============Task-4============');

const no13 = (arr) => {
    return arr.map(num => {
        if(num === 13) return 0;
        else return num;
    });
};
console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

/* Task-5
Write a function named middleInt() which takes three number arguments and return the middle number. ​

middleInt(1, 2, 2) 	    -> 2
middleInt(5, 5, 8) 	    -> 5
middleInt(5, 3, 5) 	    -> 5
middleInt(1, 1, 1) 	    -> 1
middleInt(-1, 25, 10) 	-> 10
*/
console.log('\n============Task-5============');

const middleInt = (num1, num2, num3) => {
    if ((num1 <= num2 && num1 >= num3) || (num1 >= num2 && num1 <= num3)) return num1;
    else if (num2 >= num1 && num2 <= num3 || num2 <= num1 && num2 >= num3) return num2
    else return num3;
};

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

/* Task-6
Write a function named sumOfDigits() which takes a string argument and returns 
sum of all digits from the original string. ​

sumOfDigits("Javascript") 	        -> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		        -> 8
sumOfDigits("") 		            -> 0
*/
console.log('\n============Task-6============');

const sumOfDigits = (str) => str.split('').reduce((sum, char) => (CharacterHelper.isDigit(char) ? sum + Number(char) : sum), 0); 

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

/* Task-7
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials.

arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		    -> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		        -> []
*/

console.log('\n============Task-7============');
// first & second solo attempts are at the bottom, this is post-receiving support condensing my code (:
const arrFactorial = (arr) => arr.map(factorial);

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]));

/* Task-8
Write a function named categorizeCharacters() which takes a string word as argument and return 
an array as letters at index of 0, digits at index of 1 and specials at index of 2. 

categorizeCharacters("1234") 	    -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/
console.log('\n============Task-8===========');

const categorizeCharacters = (str) => {
    return 'null';// placeholder until i come back
}
console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));



/* TASK-6 W/OUT TERNARY

const sumOfDigits = (str) => str.split('').reduce((sum, char) => {
    if (CharacterHelper.isDigit(char)) return sum + Number(char);
    return sum;
}, 0); 

*/

/* TASK-7 RAW

const arrFactorial = (arr) => {
    let newArr = [];
    arr.forEach((num) => {
        let result = 1;

        for(let i = 2; i <= num; i++) {
            result *= i;
        }
        newArr.push(result);
    });
    return newArr;
};

*/

/* TASK-7 W/ function import & forEach() method

const arrFactorial = (arr) => {
    let newArr = [];
    arr.forEach((num) => {
        newArr.push(factorial(num));
    });
    return newArr;
};

*/