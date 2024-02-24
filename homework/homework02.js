//Task-1
console.log('\n============Task-1============\n');

let str1 = "5", str2 = "2";

console.log(`The sum of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) * Number(str2)}`);
console.log(`The division of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of ${Number(str1)} and ${Number(str2)} is = ${Number(str1) ** Number(str2)}`);

//Task-2
console.log('\n============Task-2============\n');

let s1 = "200", s2 = "-50";

console.log(`The greatest value is = ${(Math.max(Number(s1), (Number(s2))))}`);
console.log(`The smallest value is = ${(Math.min(Number(s1), (Number(s2))))}`);
console.log(`The average is = ${(Number (s1) + (Number(s2))) / 2 }`);
console.log(`The absolute difference is = ${(Number (s1) + (Math.abs(Number(s2))))}`);

//Task-3
console.log('\n============Task-3============\n');

let r1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let r2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let absDif = (Math.abs(r1)) - (Math.abs(r2));

console.log(`${r1}\n${r2}`);
console.log(`The absolute difference between numbers is = ${Math.abs(absDif)}`);

//Task-4
console.log('\n============Task-4============\n');

let random1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let random2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let random3 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let random4 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
let random5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);

let max1 = Math.max(random1, random2, random3, random4, random5);
let min1 = Math.min(random1, random2, random3, random4, random5);

console.log(random1, random2, random3, random4, random5);
console.log(`The max value = ${max1}\nThe min value = ${min1}`);

//Task-5
console.log('\n============Task-5============\n');

let ranNum1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ranNum2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let ranNum3 = Math.floor(Math.random() * (100 - 50 + 1) + 50);

let ranNumSum = ranNum1 + ranNum2 + ranNum3;

console.log(`The number 1 = ${ranNum1}\n
The number 2 = ${ranNum2}\n
The number 3 = ${ranNum3}`);

console.log(`\nThe sum of numbers is = ${ranNumSum}`);

//Task-6
console.log('\n============Task-6============\n');

let rn1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let rn2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let rn3 = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(rn1);
console.log(rn2);
console.log(rn3);

let allAreGreater = (rn1 > 25) && (rn2 > 25) && (rn3 > 25);
console.log(allAreGreater);

//Task-7
console.log('\n============Task-7============\n');

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name[0] + name[1] + name[2]}`);
console.log(`The last 3 characters in the name are = ${name.at(-3) + name.at(-2) + name.at(-1)}`);















