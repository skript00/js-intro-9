/*
Create a function named as sayHi which outputs "Hi" to the console when invoked.
If the function does not RETURN something, then you cannot store the result of the function
in a variable
*/

function sayHi() {
    console.log('Hi');
}

sayHi();

/*
Write a function named as sayHello which takes a name (string) and outputs 'Hello {name}!'

sayHello('John'); // Output : 'Hello John!'
sayHello('Ali'); // Output : 'Hello Ali!'
*/

function sayHello (name) {
    console.log(`Hello ${name}!`);

}

sayHello('Ameer');

/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greet}, ${name}!'

greet('Good Morning', 'John'); // Output : 'Good Morning John!'
*/

function greet(name, greeting) {
    console.log(`${greeting}, ${name}!`);
}
greet ('Ameer', 'Good Morning'); // Good Morning, Ameer!
greet ('James', 'Hello'); // Helo, James!

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(-2, 3)  -> 1
sum(4, 7)   -> 11

*/

function sum(num1, num2) {

    return num1 + num2;
    
}
console.log(sum(10, 12,) * 2); // 44


/*
Write a function named as product which takes 3 number arguments and returns their product

product(2, 4, 5)    -> 40
product(3, 7, 6)    -> 126
*/

function product(number1, number2, number3) {

    return number1 * number2 * number3;


}

console.log(product(2, 4, 5)); // 40


function nTimestr(str, n) {
    for(let i = 1; i <= n; i++) {
        console.log(str);
    }
}

nTimestr('TechGlobal', 5);
/*
TechGlobal
TechGlobal
TechGlobal
TechGlobal
TechGlobal
*/

function king(name, n) {
    console.log(`${name} the ${n}th`);

}

king('Henry', 5);

