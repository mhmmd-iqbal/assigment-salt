const Book = require('./book');

describe('Book class tests', () => {
    let book;

    beforeEach(() => {
        book = new Book();
    });

    test('Borrowing a book should return true for an available book', () => {
        book.setTempBookName('Book A');
        expect(book.borrowBook()).toBe(true);
    });

    test('Returning a book should return true for a loaned book', () => {
        book.setTempBookName('Book A');
        book.borrowBook();
        expect(book.returnBook()).toBe(true);
    });

    test('Borrowing an unavailable book should return false', () => {
        book.setTempBookName('Non-existent Book');
        expect(book.borrowBook()).toBe(false);
    });

    test('Returning a book that is not loaned should return false', () => {
        book.setTempBookName('Book A');
        expect(book.returnBook()).toBe(false);
    });

    test('Available books should not include loaned books', () => {
        book.setTempBookName('Book A');
        book.borrowBook();
        expect(book.availableBook()).toEqual(['Book B', 'Book C']);
    });

    test('getIndexBook should return the correct index for a loaned book', () => {
        book.setTempBookName('Book B');
        book.borrowBook();
        expect(book.getIndexBook()).toBe(1);
    });

    test('getIndexBook should return -1 for a book that is not loaned', () => {
        book.setTempBookName('Non-existent Book');
        expect(book.getIndexBook()).toBe(-1);
    });

    test('isHasBook should return true for an existing book', () => {
        book.setTempBookName('Book A');
        expect(book.isHasBook()).toBe(true);
    });

    test('isHasBook should return false for a non-existing book', () => {
        book.setTempBookName('Non-existent Book');
        expect(book.isHasBook()).toBe(false);
    });

    test('isLoaned should return true for a loaned book', () => {
        book.setTempBookName('Book A');
        book.borrowBook();
        expect(book.isLoaned()).toBe(true);
    });

    test('isLoaned should return false for a book that is not loaned', () => {
        book.setTempBookName('Book A');
        expect(book.isLoaned()).toBe(false);
    });
});
