class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }

    // Getter methods which are usually return type and don't take arguments
    getTitle(pin) {
        if(pin === 1234) return this.title;
        else throw Error('PIN is wrong');
    }

    getPage() {
        return this.page;
    }

    getGenre() {
        return this.genre;
    }

    // Setters
    setTitle(title) {
        if(title.trim().length !== 0) this.title = title;
        else throw Error('Title CANNOT be empty!')
    }

    // create a setter method called setPage which allows re-assigning page number if the given number is more than zero
    setPage(page) {
        if(page > 0) this.page = page;
        else throw Error('Page CANNOT be 0 or less!');
    }
}

const book1 = new Book('JS 101', 'Journal', 1000);

console.log(book1.getTitle(1234)); // JS 101
book1.setTitle('TS 101'); // updating title for the book1
console.log(book1.getTitle(1234)); // TS 101

book1.setPage(10);

console.log(book1.getPage());

// We still have direct access
// book1.page = -10;
// console.log(book1.page)


/*
Sometimes programmer wants to add more levels of accessing and updating data 
as anything is allowed with this direct access

book1.page = -5;
book1.title = '';
book1.genre = '';

console.log(book1); // Book { title: '', genre: '', page: -5 }
*/
