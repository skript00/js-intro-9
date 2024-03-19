/*
Create a class called Cat
Create a constructor which takes below information and defines template to create many objects from the class
name, color, age

Create 3 functions as below
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'

*/

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    makesSound() {
        console.log('MEOW');
    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }
}

const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);

const allCats = [cat1, cat2, cat3];
const oldest = allCats.reduce((acc, curr) => {
    return curr.age > acc.age ? curr : acc;
});

for(const cat of allCats) {
    console.log(cat);
    cat.makesSound();
    cat.eat();
    console.log('========================');
}
console.log(`${oldest.name} is the oldest with the age of ${oldest.age}.`);
