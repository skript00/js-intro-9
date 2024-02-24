console.log('Hello ' + 1 + 1); // 'Hello 11'
console.log('Hello ' + (1 + 1)); // 'Hello 2'

console.log('abc' - 1 + 1);
console.log('abc' - (1 + 1));
console.log('1' - 1 + 1); // 2
console.log('a100' - (1 + 1)); // NaN

let var1 = 'Hello', var2 = 5, var3 = 10;

console.log(var1 + var2 + var3); // 'Hello 510'

console.log(3 + 5 + 'a' + 3 + 5); // '8a35'

console.log(3 * '3'); // 9
console.log(3 * '$'); // Nan
console.log(3 * ' '); // Nan


console.log('35' / '7' % 2); // 1

/*5, 2

The product is = 10
*/

console.log('The product is ' + 5 * 2); // 10 because multiplication gets prioritized already in OOP