const names = ['John', 'Jane', 'Alex', 'Max', 'james'];

// looping array elements using for loop
for(let i = 0; i < names.length ; i++) {
    console.log(names[i]);
}

// looping array elements with for...of loop
console.log('\n============for...of loop============\n');

for(const name of names) {
    console.log(name);
}

// Count how many names start with j or J -> 3
// for..of
let counter = 0;
for(const name of names) {
    if (name.toLowerCase().startsWith('j')) {
        counter++
    }
}
console.log(counter);
// for loop
counter = 0;
for(let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().startsWith('j')) {
        counter++;
    }

}
console.log(counter);

