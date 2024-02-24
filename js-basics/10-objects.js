const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: 'Chicago'
};

// Get student1 information
console.log(student1);


// Get a specific information about the student1
console.log(student1.firstName); // 'John'      .dot notation
console.log(student1['firstName']); // 'John'   square bracket notation
console.log(student1.age); // 25                .dot notation
console.log(student1['age']); // 25             square bracket notation

// undefined properties or keys will return undefined

console.log(student1.ssn); // undefined
console.log(student1.lastname); // undefined (spelling mistake)


// Update properties of the object
student1.address = 'Miami';

console.log(student1.address);

// Adding a new property 
student1.phonenumber = '000-000-0000';
student1.ssn = '000-00-0000';
student1.favMovie = 'Lord of The Rings';

console.log(student1);

// Deleting existing properties
delete student1.phonenumber;
delete student1.ssn;
delete student1.favMovie;
delete student1.favClass; // no error - it'll just 'not' delete this property

console.log(student1);