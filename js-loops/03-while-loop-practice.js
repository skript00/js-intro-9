// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
/*
start: 0
end: 50
update: +2
*/


// 1st solution 
let i = 0;

while(i <= 50) {
    if(i % 2 === 0) console.log(i);

    i++;
}

console.log(`The loop is done and i value is`, i); // 51

// 2nd solution - this will break if i doesn't start with zero
i = 0;

while(i <= 50) {
    console.log(i);
    i += 2;
}

console.log(`The loop is done and i value is`, i); // 52

// 3rd solution 
i = 0

while(i <= 25) { // this will break if i doesn't start with zero
    console.log(i * 2);
    i++;
}

console.log(`The loop is done and i value is`, i); // 26


// Infinite while loops 
/* 

i = 0;

while(i >= 0) {
    console.log(i);
    i++;
}
*/

// Infinite while loops 

/* 

while(true) {
    console.log('Hello');
}

*/

// while loop 
// loop that counts all even numbers from 0 to 10 both inclusive

let num = 1;
let counter = 0;
while(num <= 10) {
    if (num % 2 === 0) {
        counter++;
    }
    num++
}

console.log(counter);

//Find sum of the numbers from 3 to 7 both inclusive -> 3 + 4 + 5 + 6 + 7 -> 25

let sum = 0;
let index = 3;

while (index <= 7) {
    sum += index;
    index++;
}
console.log(sum);