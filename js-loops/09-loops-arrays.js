const numbers = [3, 4, 7, 3, 2, 2, 7];
console.log(numbers);

// Find the sum of all the numbers -> 28
// Find the average of all the numbers -> 4
console.log('\n============Find the Sum and Average of all the Numbers in the Array============\n');

// for loop

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const avg = sum / numbers.length
console.log('Sum is =', sum);
console.log('Average is =', avg);

// for...of loop

sum = 0;
for(const num of numbers) {
    sum += num;
}

console.log('Sum is =', sum);
console.log('Average is =', avg);

// Find the product of all the numbers starting from the index of the second 3 -> 3 * 2 * 2 * 7 -> 84
console.log('\n============Find the Product of all the Numbers starting from the second 3============\n');

let product = 1;

for (let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log('The product from numbers after second 3 =', product);


// Find the sum of the first 3 and the last 3 elements
console.log('\n============Find the sum of the first 3 and the last 3 elements============\n');

const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

let first3sum = 0;
let last3sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (i < 3) {
        first3sum += nums[i];
    }
    else if (i >= nums.length - 3) {
        last3sum += nums[i];
    }
}

const finalSum = first3sum + last3sum;

console.log(finalSum);

// other ways

// nums[0]          nums[1]           nums[2]
// nums.at(-1)      nums.at(-2)       nums.at(-3)
let result = 0;
for(let i = 0; i <= 2; i++) {
    // result += nums[i] + nums[nums.length - (i + 1)];
    result += nums[i] + nums.at(-i-1);
}
console.log(result);
result = 0;
for(let i = 0; i < nums.length; i++) {
    if(i <= 2 || i >= nums.length - 3) result += nums[i];
}
console.log(result);
const newArr = [...nums.slice(0, 3), ...nums.slice(-3)];
result = 0;
for(const num of newArr) {
    result += num;
}
console.log(result);