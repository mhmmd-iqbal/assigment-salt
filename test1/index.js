// Implement the unique names function and the unit testing. When passed two
// arrays of names, it will return an array containing the names that appear in
// either or both arrays. The return array should have no duplicates.
// For example: calling unique names ([‘Ava’, ’Emma’, ‘Olivia’], [‘Olivia’, ‘Sophia’,
// ‘Emma’] should return [‘Emma’, ‘Olivia’, [‘Sophia’].


function uniqueNames(arr1, arr2) {
    const uniqueSet = new Set([...arr1, ...arr2]);
    return Array.from(uniqueSet);
}