// TASK1
console.log('=======TASK-1======');

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];
// Count how many are older than 30
const olderThan30Count = users.filter(user => user.age > 30).length;

console.log(olderThan30Count); // 2


// Count how many live in Chicago
const liveInChicagoCount = users.filter(user => user.address.city === 'Chicago').length;

console.log(liveInChicagoCount); // 2


// Count how many live in Illinois
const liveInIllinoisCount = users.filter(user => user.address.state === 'IL').length;

console.log(liveInIllinoisCount); // 3

// Count how many user emails have the Gmail domain
const usingGmail = users.filter(user => user.email.endsWith('@gmail.com')).length;

console.log(usingGmail); // 2

// Find and store the names of all the users younger than 35
const youngerThan35 = users.filter(user => user.age < 35).map(user => user.firstName);

console.log(youngerThan35);

/* OR
function usersAgeUnder35(array){
const newArr = [];
array.filter(user =>{ if(user.age < 35){
newArr.push(user.firstName)
}})
return newArr
}
console.log(usersAgeUnder35(users));
*/

// Find average age of all users 
const totalAge = users.reduce((count, user) => count + user.age, 0);
const averageAge = totalAge / users.length;

console.log(averageAge);

// TASK-2
console.log('=======TASK-2======');

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];
// Find the most expensive product
const mostExpensive = appleStore.reduce((first, second) => first.price > second.price ? first : second);
console.log(mostExpensive.productName);

// Find the least expensive product
const leastExpensive = appleStore.reduce((first, second) => first.price < second.price ? first : second);
console.log(leastExpensive.productName); 

// Find the product with the biggest quantity
const biggestQuantity = appleStore.reduce()
// Find the product with the smallest quantity  

// Find all the product names 




// TASK-3
console.log('=======TASK-3======');

// Find the cheapest book in the bookstore

// Find the most expensive book in the bookstore

// Find all Classic books

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];


// TASK-4
console.log('=======TASK-4======');

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};


// Calculate the total price of products in the cart
console.log(shoppingCart.items.reduce((sum, elem) => sum + (elem.price * elem.quantity), 0));

// Find the brands of all the products in the cart  
const brands = shoppingCart.items.map(item => item.specifications.brand);
console.log(brands);

// Find all the items in the cart with their quantity 
