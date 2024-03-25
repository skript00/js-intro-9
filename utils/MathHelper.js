function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const factorial = (num) => {
    if (num === 0 || num === 1) return 1
    else return num * factorial(num - 1);
  } 

// Exporting your reusable methods (prior to ES6)
module.exports.generateRandomNumber = generateRandomNumber; 

module.exports.factorial = factorial;