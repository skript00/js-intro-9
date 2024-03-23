class Author {
    // Private properties - can only be used within the class
    #isKnown = true;

    getIsKnown() {
        return this.#isKnown;
    }

    setIsKnown(newValue) {
        this.#isKnown = newValue;
    }

    // Another way to create getter and setter
    //     get isKnown() {
    //         return this.#isKnown;
    //     }

    //     set isKnown(newValue) {
    //         this.#isKnown = newValue;
    //     }
    
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

const author1 = new Author('John', 'Doe');

author1.setIsKnown(false);

console.log(author1.getIsKnown()); // false