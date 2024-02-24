
// random()
console.log(Math.random()); // this will return 0.00 - 0.999-> 

console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
/* random formula -> Math.floor(Math.random() * (b - a + 1) + a);
b = bigger number
a = smaller number
1 is added if both numbers are included in the random range
if both are excluded, subtract one (-1) instead
*/

console.log(Math.floor(Math.random() * 4 + 5)); // random number between 5 and 8 both inclusive

console.log(Math.floor(Math.random() * (267 - 123 + 1) + 123)); // 123-267 both included
