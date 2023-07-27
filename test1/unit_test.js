// import the function
const uniqueNames = require('./index.js');

describe('uniqueNames', () => {
    it('should return unique names from two arrays', () => {
        const arr1 = ['Ava', 'Emma', 'Olivia'];
        const arr2 = ['Olivia', 'Sophia', 'Emma'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
    });

    it('should handle arrays with duplicate names', () => {
        const arr1 = ['Ava', 'Emma', 'Olivia'];
        const arr2 = ['Olivia', 'Sophia', 'Emma', 'Ava'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
    });

    it('should handle empty arrays', () => {
        const arr1 = [];
        const arr2 = ['Olivia', 'Sophia', 'Emma'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Olivia', 'Sophia', 'Emma']);
    });
});