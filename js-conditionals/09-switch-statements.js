let num = 1;

let letter;

switch (num) {
    case 1:
        letter = 'A';
        break;
    case 2:
        letter = 'B';
    case 3:
        letter = 'C';
        break;
    default:
        letter = '';
}
console.log(letter);

let name = 'John';

switch (name) {
    case 'Jane':
        console.log('Hello')
        break;
    case "John":
        console.log("Good Morning");
        break;
    case "Max'":
        console.log('Good Morning');
        break;
    default:
        console.log('GoodBye!');
}

const date = new Date(); // built-in JS object

console.log(date.getDate()); // 12 
console.log(date.getMonth()); // 1
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1
console.log(date.getHours()); // 19
console.log(date.getMinutes()); // 27

console.log(date.toLocaleTimeString());
console.log(date.getSeconds());
console.log(date.toLocaleDateString());

/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday 

in case it returns 0 or 6, print 'Weekend'
otherwise, print 'Weekday'
*/

let day = date.getDay(); // returns 0 to 6 inclusive

// if-else solution
if (day === 0 || day === 6) console.log('Weekend');
else console.log('Weekday');

// Ternary
day === 0 || day === 6 ? console.log('Weekend') : console.log('Weekday');

switch (day) {
    case 0:
        console.log('Weekend');
        break;
    case 6:
        console.log('Weekend');
        break;
    case 1:
        console.log('Weekday');
    case 2:
        console.log('Weekday');
        break;
    case 3:
        console.log('Weekday');
        break;
    case 4:
        console.log('Weekday');
        break;
    case 5:
        console.log('Weekday');
        break;

}

switch (day) {
    case 0:
    case 6:
        console.log('Weekend')
        break;
    default:
        console.log('Weekday');
}

switch (true) {
    case day === 0 || day === 6:
        console.log('Weekend');
        break;
    case day >= 1 || day <= 5:
        break;
    default:
        throw Error('Unexpected day');
}

/*
Find and print the quarter that our r1 is in
1 and 25 inclusive -> 'FIRST'
26 and 50 inclusive -> 'SECOND'
51 and 75 inclusive -> 'THIRD'
76 and 100 inclusive -> 'FOURTH'
*/

let r1 = Math.floor(Math.random() * 100) + 1;
console.log('The random number = ' + r1);

switch (true) {
    case r1 >= 1 && r1 <= 25:
        console.log('FIRST');
        break;
    case r1 >= 26 && r1 <= 50:
        console.log('SECOND');
        break;
    case r1 >= 51 && r1 <= 75:
        console.log('THIRD');
        break;
    case r1 >= 76 && r1 <= 100:
        console.log('FOURTH');
}

if(r1 <= 25) console.log('FIRST');
else if (r1 <= 50) console.log('SECOND');
else if (r1 <= 75) console.log('THIRD');
else console.log('FOURTH');


let result = r1 <= 25 ? 'FIRST' : r1 <=50 ? 'SECOND' : r1 <= 75 ? 'THIRD' : 'FOURTH';