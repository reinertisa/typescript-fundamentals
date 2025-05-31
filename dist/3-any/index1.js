"use strict";
// any type
let age;
age = 20;
console.log(age);
age = false;
console.log(age);
let title;
title = 25;
console.log(title);
title = {
    hello: 'world'
};
console.log(title);
// any type in arrays
let things = [1, 'hello', true];
console.log(things);
things.push(100);
console.log(things);
// functions and any
function addTogether(value) {
    return value + value;
}
const result = addTogether(10);
console.log(result);
const resultTwo = addTogether('hello');
console.log(resultTwo);
// useful when migrating from JS to TS
// because using any won't cause error initially
