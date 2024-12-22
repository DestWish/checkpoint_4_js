let array = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'watermelon' },
    { id: 3, name: 'qiwi' },
    { id: 4, name: 'lemon' }
];

function transformArray(arr) {
    return arr.map(obj => Object.values(obj));
}

let result = transformArray(array);
console.log(result);