// Searching in strings

let company = 'TechGlobal';

// startsWith() method

/*
TASK: used to check if the string starts with another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: doesn't change the original value
STATIC or NON-STATIC: non-static
*/
company.startsWith('T'); // true
company.startsWith('t'); // false
company.startsWith('Tech'); // true
company.startsWith('TechGlobal'); // true
company.startsWith('Global'); // false
console.log(company.startsWith('')); // true (EVERY STRING HAS AN EMPTY STRING BEFORE/AFTER EVERY CHARACTER)

/*
TASK: used to check if the string ends with another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: doesn't change the original value
STATIC or NON-STATIC: non-static
*/

company.endsWith('Global'); // true
company.endsWith('l'); // true
company.endsWith('al'); // true


console.log(company.startsWith('Global', 4)); // true

/* TASk: used to check if the string includes another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: doesn't change the original value
STATIC or NON-STATIC: non-static
*/

company.includes('hGL'); // true
company.includes('GL'); // false

