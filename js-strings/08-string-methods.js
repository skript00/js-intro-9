// Extracting partial strings (substring)

let language = 'JavaScript ES9';

// slice()
language.slice(0, 4); // 0,1,2,3
console.log(language.slice(0, 4)); // 'Java'
console.log(language.slice(4, 10)); // 'Script'
console.log(language.slice(4)); // 'Script ES9'

let quote = 'Practice makes it perfect!';

console.log(quote.slice(0, 8)); // Practice
console.log(quote.slice(18, 25)); // perfect
console.log(quote.slice(9)); // makes it perfect!


/* 02/04/24 12:44pm extracting partial strings...
TASK:
RETURN:
ARGUMENTS:
CHANGE ORIGINAL VALUE:
STATIC OR NON-STATIC:

The only difference between slice() and substring () is the way they handle the negative...
...


*/

//Tricky Part
console.log('abc'.slice(5)); // ''
console.log('abc'.slice(4, 10)); // ''
console.log('abc'.slice(2, 100)); // 'c'

//  Negative indexes
console.log('JavaScript'.slice(-3)); // 'ipt'
console.log('JavaScript'.slice(-6)); // 'Script'
console.log('JavaScript'.slice(-10, -6)); // 'Java'
console.log('JavaScript'.slice(-5, -7)); // ''


// substring()
let obj = 'Table';
console.log(obj.substring(0, 3)); // 'Tab'
console.log(obj.substring(1)); // 'able'

console.log(obj.slice(0, 3)); // 'Tab'
console.log(obj.slice(1)); // 'able'

console.log(obj.slice(-2)); // 'le'
console.log(obj.substring(-5, -10)); // ''
// substring converts all the negative numbers to zero^^?

// split() method 

let shoppingList = 'Apple, Orange, Bananas, Milk, Eggs';

const shoppingListArray = shoppingList.split(', ');

console.log(shoppingListArray); // [ 'Apple', 'Orange', 'Bananas', 'Milk', 'Eggs' ]

console.log(shoppingListArray[0]); // 'Apple'
console.log(shoppingListArray[2]); // 'Bananas'

/*
Mouse | Computer | Keyboard     -> ' | '

Today is Sunday -> 'is'     -> ['Today ', ' Sunday']
Today is Sunday -> 'ay'     -> ['Tod', is Sund', '']
hello world     -> 'l'      -> ['he', '', 'o wor', 'd']

'JavaScript is fun' -> ''   -> ['JavaScript', 'is', 'fun']

*/

console.log('Mouse | Computer | Keyboard'.split(' | ')); // [ 'Mouse', 'Computer', 'Keyboard' ]


/*
TASK: used to split the string into array elements with the given separator
RETURN: it returns an array
ARGUMENTS: takes one argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/
