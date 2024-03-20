// BEFORE ES6
// Create a template with constructor function 

function Person () {

}

Person.prototype.eat = function () {
    console.log('EAT');
}

Person.prototype.sleep = function () {
    console.log('SLEEP');
}


function Programmer () {

}

// Inherit all the Person methods into programmer
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function() {
    console.log('CODE');
}

const programmer_mustafa = new Programmer();

programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();

console.log('\n========================');
// Create Singer template which inherits from Person and add sing method to it.
// Create a Singer object and execute sing(), eat(), and sleep() method

// PROTOTYPE SINGER
// constructor
function Singer () {

}
// Inheriting all the Person Protoype function into Singer prototype
Singer.prototype = Object.create(Person.prototype);

// Creating a new Singer Prototype function
Singer.prototype.sing = function() {
    console.log('SING')
}

const singer_ameer = new Singer();

singer_ameer.eat();
singer_ameer.sing();
singer_ameer.sleep();