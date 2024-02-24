//ternary-> if statement ? if true, do this : if not, do this  



let gender = 'male';
// let fname = '';
// if (gender === 'male') {
//     fname = 'Alex';
// }
// else {
//     fname = 'Emma';
// }

// Using ternary instead of if-else above 
// condition ? true-statement : false-statement;
// gender === 'male' ? fname = 'Alex' : fname = 'Emma';

let fname = gender === 'female' ? 'Emma' : 'Alex';

console.log(fname); // 'Emma'

let number = 1;

number % 2 === 0 ? console.log('Even') : console.log('ODD');
 
let num2 = 5;

if(num2 > 0) {
    console.log('POSITIVE');
}
else if (num2 < 0) {
    console.log('NEGATIVE');
}
else {
    console.log('ZERO');
}

let result = num2 > 0 ? 'POSITIVE' : num2 < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result);

/*

*/

let mood; //will be either GREAT (70+) or TERRIBLE (<70)

let mock_score = 70;

mock_score >= 70 ? console.log('GREAT') : console.log('TERRIBLE');

mood = mock_score >= 70 ? 'GREAT' : 'TERRIBLE';
console.log('The mood is', mood);

if(mood === 'GREAT') {
    console.log('Have fun!');
}
else {
    console.log('Practice more!');
}

