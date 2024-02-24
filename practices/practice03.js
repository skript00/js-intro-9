// Task-1
console.log('\n============Task-1============\n');

function tripleWord(string) {

    return string.repeat(3);

}

console.log(tripleWord('Tech'));

// Task-2
console.log('\n============Task-2============\n');


function has4(string1) {

 return string1.length > 3

}

console.log(has4("Tech"));

// Task-3
console.log('\n============Task-3============\n');


function celciusToFarenheit(celsius) {

    return (celsius * 9) / 5 + 32;


}
console.log(celciusToFarenheit(20));
console.log(celciusToFarenheit(25));
console.log(celciusToFarenheit(0));
console.log(celciusToFarenheit(-10));

// Task-4 
console.log('\n============Task-4============\n');

function kgToPounds(kilogram) {

    return kilogram * 2.2

}
console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(Math.floor(kgToPounds(100)));

// Task-5
console.log('\n============Task-5============\n');

function rectangleArea(x, y) {
    return x * y
}

function rectanglePerimeter(x, y) {
    return 2 * (x+y)
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));

// Task-6
console.log('\n============Task-6============\n');

function squareArea(x) {
    return x * x
}

function squarePerimeter(x) {
    return 4 * x
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));
