/*
this keyword refers to the current object and might give different results in different context
*/
console.log('\n============Task-X============');

const person1 = {
    fname: 'Tania',
    lname: 'abc',
    fullname: function () {
        console.log(this.fname, this.lname);
    }
};

person1.fullname(); // Tania abc


const person2 = {
    fname: 'John',
    lname: 'Doe'
};


const person3 = {
    fname: 'Alex',
    lname: 'Smith'
};

person1.fullname.call(person2); // John Doe
person1.fullname.call(person3); // Alex Smith

console.log('\n============Task-X============');

function sayHi(fname, lname) {
    console.log('Hello', fname, lname);
}

sayHi('Hicran', 'abc'); // 'Hello Hicran abc'

sayHi.call(person3, person3.fname, person3.lname); // Hello Alex Smith

sayHi.apply(person2, [person2.fname, person2.lname]); // Hello John Doe

console.log('\n============Task-X============');

function info () {
    const age = new Date().getFullYear() - this.dateOfBirth;

    return `${this.fullname} is ${age} years old and lives in ${this.address}.`;
}

const student = {
    fullname: 'James xyz',
    dateOfBirth: 2000,
    address: 'Miami'
};

const teacher = {
    fullname: 'Teacher xyz',
    dateOfBirth: 1980,
    address: 'US'
}

const result2 = info.call(student, student.fullname, student.dateOfBirth, student.address);

console.log(result2);

console.log(info.call(teacher));



// console.log(new Date().getFullYear());




/*
console.log(this);

const person = {
    fname: 'John',
    lname: 'Doe',
    func: function () {
        console.log(this.fname);
    },
    kid: {
        fname: 'Alex',
        lname: 'Doe',
        func() {
            console.log(this.fname);
        }
    }
}

person.func(); // 'John'
person.kid.func(); // 'Alex'
*/