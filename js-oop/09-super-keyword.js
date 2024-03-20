class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        console.log('PARENT CONSTRUCTOR')

    }

    // methods
}

// allowed but all info is undefined
// const person1 = new Person();
// console.log(person1);

class Customer extends Person {
    constructor(fname, lname, age, id) {
        super(fname, lname, age)
        this.id = id;
        console.log('CHILD CONSTRUCTOR')
    } 
}

const cust = new Customer('John', 'Doe', 25, 1);

console.log(cust);