// Task-1
console.log('\n============Task-1============\n');

for (let i = 1; i <= 100; i++ ) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// Task-2
console.log('\n============Task-2============\n');

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// Task-3 
console.log('\n============Task-3============\n');

for (let i = 100; i >=50; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Task-4
console.log('\n============Task-4============\n');

for (let i = 0; i <= 7; i++) {
    console.log(i ** 2);
}

// Task-5
console.log('\n============Task-5============\n');

let t5sum = 0
for (let i = 1; i <=10; i ++) {
    t5sum = i + t5sum;
}
console.log(t5sum);

// Task-6
console.log('\n============Task-6============\n');

let t6r1 = Math.floor(Math.random() * (10) + 1);
let t6factorial = 1;
for (let i = t6r1; i >=1 ; i -- ) {
    t6factorial = i * t6factorial;
    console.log(t6factorial);
}

// Task-7
console.log('\n============Task-7============\n');
