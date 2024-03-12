function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

function quadruple(num) {
    return num * 4;
}

function product(num1, num2) {
    return num1 * num2;
}

double(5); // 10
product(2, 5) // 10

triple(7); // 21
product(3, 7); // 21 



// product() function using currying
console.log('\n============Task-X============');

function multiply (num1) {
    return function (num2) {
        return num1 * num2;
    }
}


const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);

const result = smth(5); // FIX from GH

//console.log(smth);
console.log(result);

function doMath(operator) {
    if(operator === '+') {
        return function (num1, num2) {
            return num1 + num2;
        }
    }
    else if(operator === '*') {
        return function (num1, num2) {
            return num1 * num2;
        }
    }
    else if(operator === '-') {
        return function (num1, num2) {
            return num1 - num2;
        }
    }
    else if(operator === '/') {
        return function (num1, num2) {
            return num1 / num2;
        }
    }
    else if(operator === '**') {
        return function (num1, num2) {
            return num1 ** num2;
        }
    }
}

const power = doMath('**');
const sum = doMath('+');
const divide = doMath('/');

console.log(power(3, 2)); // 9


function a() {
    return function() {
        console.log('This is inner function!');
    }
}

const b = a();

b();

