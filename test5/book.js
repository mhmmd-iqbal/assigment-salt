class Book {
    constructor() {
        this.books = ['Book A', 'Book B', 'Book C'];
        this.bookLoanedList = [];
        this.tempBookName = '';
    }

    setTempBookName(bookName) {
        this.tempBookName = bookName;
    }

    setLoanedList(bookName) {
        this.bookLoanedList.push(bookName);
    }

    availableBook() {
        return this.books.filter(book => !this.bookLoanedList.includes(book));
    }

    getIndexBook() {
        return this.books.indexOf(this.tempBookName);
    }

    isHasBook() {
        return this.books.includes(this.tempBookName);
    }

    isLoaned() {
        return this.bookLoanedList.includes(this.tempBookName);
    }

    borrowBook() {
        if (this.isHasBook() && !this.isLoaned()) {
            this.bookLoanedList.push(this.tempBookName);
            return true;
        }

        return false;
    }

    returnBook() {
        if (this.isHasBook() && this.isLoaned()) {
            const bookIndex = this.getIndexBook();
            this.bookLoanedList.splice(bookIndex, 1);
            return true;
        }

        return false;
    }
}

module.exports = Book;

module.exports = Book;