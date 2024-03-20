/* Task-1
Write a function named countPos() which takes an array of numbers as an argument and returns 
how many elements are positive​ when invoked. 

countPos([-45, 0, 0, 34, 5, 67]) 	    -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		        -> 0
*/
console.log('\n============Task-1============');

function countPos(arr) {
    return arr.filter(num => num > 0).length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/* Task-2
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked.
    NOTE: Ignore case sensitivity. 

countA("TechGlobal is a QA bootcamp") 	    -> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			                -> 0
*/
console.log('\n============Task-2============');

function countA(str) {
    let counter = 0;
    for(const char of str.toLowerCase()) {
        counter += char === 'a' ? 1 : 0;
    }
    return counter;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/* Task-3
Write a function named as countVowels() which takes a string word as an argument and returns the
count of the vowel letters when invoked.
    NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

countVowels("Hello") 		        -> 2
countVowels("Hello World") 		    -> 3
countVowels("JavaScript is fun") 	-> 5
countVowels("") 			        -> 0
*/
console.log('\n============Task-3============\n');

function countVowels(str) {
    let counter = 0;
    for (const char of str.toLowerCase()) {
        counter += 'aeiou'.includes(char) ? 1 : 0;
    }
    return counter;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/* Task-4
Write a function named as countConsonants() which takes a string word as an argument and returns 
the count of the consonant letters when invoked.
    NOTE: A letter that is not vowel is considered as a consonant letter.

countConsonants("Hello") 		        -> 3
countConsonants("Hello World") 		    -> 8
countConsonants("JavaScript is fun") 	-> 12
countConsonants("") 		        	-> 0
*/
console.log('\n============Task-4============');

function countConsonants(str) {
    let counter = 0;
    for (const char of str.toLowerCase()) {
        counter += !'aeiou'.includes(char) ? 1 : 0;
    }
    return counter;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));


/* Task-5
Write a function named countWords() which takes a string argument and returns 
the total count of words in the given string when invoked.
    NOTE: Be careful about the extra whitespaces before and after the string.

countWords("    Javascript is fun   ") 		    -> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				                    -> 4
*/
console.log('\n============Task-5============');

function countWords(str) {
    return str.trim().split(' ').length;
}
console.log(countWords("    Javascript is fun   "));
console.log(countWords("Cypress is an UI automation tool.  "));
console.log(countWords("1 2 3 4"));

/* Task-6
Write a function named as factorial() which takes a number as an argument and returns
the factorial of the number when invoked.
    NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
    n! = n × (n-1) × (n-2) × ... × 2 × 1
    Assume you will not be given a negative number.

factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/
console.log('\n============Task-6============');

function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/* Task-7
Write a function named as isPalindrome() which takes a string word as an argument and returns
true if the word is palindrome or returns false otherwise when invoked.
    NOTE: Palindrome: It is a word that is read the same backward as forward
    Examples: kayak, civic, madam
    NOTE: your function should ignore case sensitivity

isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		    -> true
isPalindrome("") 		    -> true
*/
console.log('\n============Task-7============');

function isPalindrome(str) {
    str = str.trim().toLowerCase();
    let newStr = str.split('').reverse().join('');
    return str === newStr;
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

/* Task-8
Write a function named as countMultipleWords() which takes an array as an argument and returns 
the count of the elements that has multiple words when invoked.
    NOTE: Be careful about the extra whitespaces before and after the array element.

countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					                            -> 0
*/
console.log('\n============Task-8============');
//attempt 1    return arr.filter(ele => ele.trim().length > 0).length;

function countMultipleWords(arr) {
    let counter = 0;
    for (let ele of arr) {
        ele = ele.trim();
        if (ele.split(' ').length > 1) counter++;
    }
    return counter;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));


/* Task-9
Write a function named as count3OrLess() which takes a string word as an argument and returns 
the count of the words that has 3 characters or less when invoked.

count3OrLess("Hello") 			        -> 0
count3OrLess("Hi John") 			    -> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			            -> 0
*/
console.log('\n============Task-9============');

function count3OrLess(str) {
    let counter = 0;
    if (str.length === 0) return counter;
    str = str.split(' ');
    for (const word of str) {
        if (word.length <= 3) counter++;
    }
    return counter;
}
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));


/* Task-10
Write a function named as isPrime() which takes a number as an argument and returns 
true if the number is prime or returns false otherwise when invoked.
    NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
    It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
    Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
    NOTE: The smallest prime number is 2 and there is no negative prime numbers.
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/
console.log('\n============Task-10============');
/*
function isPrime(num) {
    for (let i = 2; i < 7; i++) {
        console.log(num,i);
        if (num < 2) return false;
        else if (num == i) return true;
        else if (num % i === 0) return false;
    }
    return true;
}
*/

const isPrime = num => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;

    while(i < num) {
        if(num % i === 0) return false;
        i += 2;
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


/* Task-11
Write a function named add() which takes two array of numbers as argument and returns 
a new array with sum of given arrays elements.
    NOTE: Be careful about the array sizes as they could be different.

add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		             -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		            -> [0, 0, 0, 0]
*/
console.log('\n============Task-11============');

function add(arr1, arr2) {
    const shorterArr = arr1.length < arr2.length ? arr1 : arr2;
    const longerArr =  arr1.length < arr2.length ? arr2 : arr1;
    const newArr = [];
    
    for (let i = 0; i < longerArr.length; i++) {
        if (shorterArr[i] !== undefined) {
            newArr.push(shorterArr[i] + longerArr[i]);
        }
        else {
            newArr.push(longerArr[i]);
        }
    }
    return newArr;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));


/* Task-12
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns 
the string back with all extra spaces removed when invoked.

removeExtraSpaces("Hello") 		                        -> "Hello" 
removeExtraSpaces("      Hello    World     ")      	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			                        -> "" 
*/
console.log('\n============Task-12============');

function removeExtraSpaces(str) {
    if (str.length === 0) return str;
    let newStr = str.trim().split(' ') // trimming whitespace and converting string to array
    // newStr now looks like this ['word', '', '', '', '', 'word', 'word]
    newStr = newStr.filter(x => x !== ''); 
    // filter is creating a new array with every element of newStr so long as that element isn't an empty string
    return newStr.join(' ');
}
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/* Task-13
Write a function named findClosestTo10() which takes an array of numbers as argument and returns 
the closest element to 10 from the given array.
    NOTE: Assume that length of array is always more than zero.
    NOTE: Ignore the 10 itself.
    NOTE: If there are more than one numbers are close equally, return the smaller number.

findClosestTo10([10, -13, 5, 70, 15, 57]​) 	 -> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		        -> 0
*/
console.log('\n============Task-13============');

function findClosestTo10(arr) {
    return arr.reduce((num1, num2) => {
        let closerNum;
        let num1Difference = Math.abs(num1 - 10);
        let num2Difference = Math.abs(num2 - 10);

        closerNum = num1Difference === num2Difference && num1 < num2 ? num1 : num2;

        if (num1Difference === num2Difference || num1Difference < num2Difference && num1 !== 10) closerNum = num1;
        else closerNum = num2;
        return closerNum;
    });
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));


/* Task-14
Write a function named as isEmailValid() which takes a string email as an argument and returns 
true if the email is valid or returns false otherwise when invoked.

    NOTE: A VALID EMAIL:
    should NOT have any space.
    should not have more than one “@” character.
    should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
    There should be at least characters before @ character.
    There should be at least 2 characters between @ and . Characters.
    There should be at least 2 characters after the . character.

isEmailValid("") 			        -> false
isEmailValid("@gmail.com") 		    -> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 	-> true
*/
console.log('\n============Task-14============');

const isEmailValid = email => {
    if(email.includes(' ')) return false;
    if(email.split('').filter(x => x === '@').length !== 1) return false;
   // if(email.split('').filter(x => x === '.').length === 0) return false;

    let beginning = email.split('@')[0]; // splits email into array whilst removing the @ sign
    let middle = email.split('@')[1]; 
    let end = email.split('@')[1].split('.')[1]

   // if(!beginning || !middle || !end) return false
    return (beginning.length >= 2 && middle >=2 && end >= 2)

}
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

/* Task-15
Write a function named as isPasswordValid() which takes a string email as an argument and returns 
true if the password is valid or returns false otherwise when invoked.

    NOTE: A VALID PASSWORD:
    should have length of 8 to 16 (both inclusive).
    should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
    should NOT have any space.

isPasswordValid("") 			        -> false
isPasswordValid("abcd") 			    -> false
isPasswordValid("abcd1234") 		    -> false
isPasswordValid("Abcd1234") 		    -> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		    -> true
isPasswordValid("Chicago123$") 		    -> true
isPasswordValid("Test1234#") 		    -> true
*/
console.log('\n============Task-15============');

const isPasswordValid = (password) => {
    //checking min/max length of password
    if(password.length <8 || password.length > 16) return false;
    //checks if password has at least 1 number
    if(password.split('').filter(x => x >= '0' && x <= '9').length === 0) return false;
    //checks if password has at least 1 uppercase
    if(password.split('').filter(x => x >= 'A' && x <= 'Z').length === 0) return false;
    //checks if password has at least 1 lowercase
    if(password.split('').filter(x => x >= 'a' && x <= 'z').length === 0) return false;

    // checks if it has at least 1 special charcter
    // not a number = x < '0' && x > '9'
    // not an uppercase letter x < 'A' && 
    // not a lowercase letter x < 'a' && x > 'z'

    if(password.split('').filter(x => (x < '0' || x > '9') && (x < 'A' || x > 'Z') && (x < 'a' || x > 'z')).length === 0) return false;

    if(password.includes(' ')) return false;
    
    return true;
}
console.log(isPasswordValid("")); // false
console.log(isPasswordValid("abcd")); // false
console.log(isPasswordValid("abcd1234")); // false
console.log(isPasswordValid("Abcd1234")); // false
console.log(isPasswordValid("Chicago12345US!#$%")); // false
console.log(isPasswordValid("Abcd1234$")); // true
console.log(isPasswordValid("Chicago123$")); // true
console.log(isPasswordValid("Test1234#")); // true







/* OTHER METHODS
Task1--
function countPos(arr) {
    let count = 0;
    for (num of arr) {
        if (num > 0) count++;
    }
    return count;
}
--Task1

Task--

--Task
*/
