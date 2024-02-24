// These are ++ or -- and used to increase or decrease number by 1

let n1 = 10, n2 = 10, n3 = 10, n4 = 10;

console.log(n1++); // 10 -> variable++ is known as post-increment (I will increase this value, but the next time it is run)
console.log(++n2); // 11 -> ++variable is known as pre-increment (increasing the value right now)

console.log(n1); // 11
console.log(n2); // 11

console.log(n3--); // 10
console.log(--n4); // 9

console.log(n3); // 10
console.log(n4); // 9

let number = 5;

number++; // 5

--number; // 5

number *= 2; // 10

console.log(++number ** 2); // 121


for(let num = 1; num <= 100; num++) {
    console.log(num);
} // this starts a list from 1 -> 100

console.log((false !== false) && false || false || false && (false && false) || true);

