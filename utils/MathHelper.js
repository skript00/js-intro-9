function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporting your reusable methods (prior to ES6)
module.exports.generateRandomNumber = generateRandomNumber; 