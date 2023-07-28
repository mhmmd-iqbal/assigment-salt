// import the function
const uniqueNames = require('./index');

describe('uniqueNames function tests', () => {
    test('should return unique names from two arrays', () => {
        const arr1 = ['Ava', 'Emma', 'Olivia'];
        const arr2 = ['Olivia', 'Sophia', 'Emma'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
    });

    test('should handle empty arrays', () => {
        const arr1 = [];
        const arr2 = ['Olivia', 'Sophia', 'Emma'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Olivia', 'Sophia', 'Emma']);
    });

    test('should handle arrays with duplicate names', () => {
        const arr1 = ['Ava', 'Emma', 'Olivia', 'Olivia'];
        const arr2 = ['Olivia', 'Sophia', 'Emma', 'Sophia'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Ava', 'Emma', 'Olivia', 'Sophia']);
    });

    test('should handle arrays with no common names', () => {
        const arr1 = ['Ava', 'Emma', 'Olivia'];
        const arr2 = ['Sophia', 'Isabella', 'Mia'];
        const result = uniqueNames(arr1, arr2);
        expect(result).toEqual(['Ava', 'Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia']);
    });
});