let program = 'SDET';
let batch = 9;

// Before ES6
const student_rabe = {
    program: program,
    batch: batch,
    fullName: 'Rabe A'
} 

// After ES6 - enhanced object literals
const student_ameer = {
    program,
    batch,
    fullName: 'Ameer S'
}

console.log(student_rabe);
console.log(student_ameer);