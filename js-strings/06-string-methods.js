// Indexes of substring or characters

// indexOf()


let company = 'TechGlobal';

company.charAt(4); // 'G'

company.indexOf('G'); // 4
company.indexOf('l'); // 5
company.lastIndexOf('l'); // 9

company.indexOf('X'); // -1
company.lastIndexOf('X'); // -1

'aaa'.indexOf('a'); // 0
'aaa'.lastIndexOf('a'); // 2

company.indexOf('Tech'); // 0
company.lastIndexOf('Tech'); // 0
company.indexOf('Tech'); // 4
company.lastIndexOf('Global'); // 4

/*
indexOf()
Tasl: used to get the FIRST occurence (index) of the matching substring
RETURN: returns the found index of the substring as a number
    it returns -1 if the substring is not found within the original string
ARGUMENTS: it takes a substring to search within the original substring
CHANGE ORIGINAL VALUE: doesn't change the original value
STATIC or NON-STATIC: non-static

indexOf()
Tasl: used to get the LAST occurence (index) of the matching substring
RETURN: returns the found index of the substring as a number
    it returns -1 if the substring is not found within the original string
ARGUMENTS: it takes a substring to search within the original substring
CHANGE ORIGINAL VALUE: doesn't change the original value
STATIC or NON-STATIC: non-static

*/

let day = 'Sunday';

// check if the day includes 'Sun'
console.log(day.includes('Sun')); // true
console.log(day.indexOf('Sun') >= 0); // true
console.log(day.indexOf('Wed') === -1); // true

// search()

let sentence = 'I go back to back';
console.log(sentence.indexOf('back')); // 5
console.log(sentence.lastIndexOf('back')); // 13

