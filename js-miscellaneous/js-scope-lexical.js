function outer() {
    let fullname = 'John Doe';

    function inner() {
        let upper = fullname.toUpperCase(); // accessing to fullname is allowed
        console.log(upper);
    }

    console.log(upper);
    inner();
}

outer();

// 12 is executed
// fullname = 'John Doe'
// 9 is executed
// upper = 'JOHN DOE'
// JOHN DOE