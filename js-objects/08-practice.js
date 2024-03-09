/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/
console.log('\n============Task============\n');

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90,
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching movies' ]
console.log(student.exam_scores); // { midterm: 60, final: 90 }
console.log(student.hobbies[0]); // Soccer


/*
Find and print average of exam scores -> 75
*/
console.log('\n============Task============\n');

console.log((student.exam_scores.midterm + student.exam_scores.final) / 2); // 75

const allScores = Object.values(student.exam_scores) // [60, 90]
let sum = 0;
for (const score of allScores) {
    sum += score;
}

console.log(sum / allScores.length); // 75




/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/
console.log('\n============Task============\n');

const book = {
    name: 'Amok',
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    genre: 'Novella'
};
console.log(book);
console.log(book.author);


// Count the books where Author first name has an 'a' -> 2
console.log('\n============Task============\n');

const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lname: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lname: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lname: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

let authorFnamesWithA = 0;

for(const book of books) {
    if (book.author.fname.toLowerCase().includes('a')) {
        authorFnamesWithA++;
    }
}
console.log(authorFnamesWithA); // 2


// Get all the names of the books in an array -> ['Amok', 'My Name Is Red', '1984']
console.log('\n============Task============\n');

let bookNames = []

for(const book of books) {
    bookNames.push(book.name);
}

console.log(bookNames);