const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
console.log(numbers);

// Count how many positive numbers you have in the array -> 4

console.log('\n============Count Positives============\n');

//for loop
let positiveCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    }
}
console.log('Positives =', positiveCount);

//for...of loop
positiveCount = 0;

for (const x of numbers) {
    if (x > 0) {
        positiveCount++;
    }
}
console.log('Positives =', positiveCount);

// Count how many negative or neutral numbers you have in the array -> 6
console.log('\n============Count Negatives or Neutrals============\n');

//for loop
let negativeOrNeutralCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        negativeOrNeutralCount++;
    }
}
console.log('Negatives or Neutrals =', negativeOrNeutralCount);

//for...of loop
negativeOrNeutralCount = 0;

for (const x of numbers) {
    if (x <= 0) {
        negativeOrNeutralCount++;
    }
}
console.log('Negatives or Neutrals =', negativeOrNeutralCount);

console.log('\n============Count Evens============\n');

let evenCount = 0;

for(const number of numbers) {
    if (number % 2 === 0) {
        evenCount++
    }
}
console.log('Evens =', evenCount);

console.log('\n============Count Even but not Negatives============\n');

let countEButNN = 0;

for(const i of numbers) {
    if (i % 2 === 0 && i >= 0) {
        countEButNN++
    }
}
console.log('Even but no Negatives =', countEButNN);


