"use strict";
// functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => a - b;
console.log(addTwoNumbers(1, 3));
console.log(subtractTwoNumbers(1, 3));
function addAllNumbers(items) {
    return items.reduce((acc, item) => acc + item, 0);
}
console.log(addAllNumbers([1, 2, 3]));
function subtractAllNumbers(items) {
    console.log(items.reduce((acc, item) => acc - item, 0));
}
subtractAllNumbers([1, 2, 3]);
const multiplyAllNumbers = (items) => items.reduce((acc, item) => acc * item, 1);
console.log(multiplyAllNumbers([1, 2, 3]));
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting} ${name}`;
}
const result = formatGreeting('Inigo', 'Hello');
console.log(result);
