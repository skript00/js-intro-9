/*
let result = 0;

function score() {
    result += 1; // same as ++
}

score();
score();
score();

result = 10; // it can be reassigned

console.log(result); // 10 (originally 3)
*/


// Closure can help us preveneting some variables from being reassigned

function score() {
    let result = 0;

    return function () {
    result += 1;
    return result;
    }
}

const increase = score(); // result = 0

const newScore = increase();

console.log(newScore);