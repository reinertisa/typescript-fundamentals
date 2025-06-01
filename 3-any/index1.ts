// any type

let age1: any

age1 = 20;
console.log(age1);
age1 = false;
console.log(age);

let title
title = 25;
console.log(title);
title = {
    hello: 'world'
}
console.log(title);

// any type in arrays
let things: any[] = [1, 'hello', true];
console.log(things);
things.push(100);
console.log(things);

// functions and any

function addTogether(value: any): any {
    return value + value;
}

const result = addTogether(10);
console.log(result);

const resultTwo = addTogether('hello');
console.log(resultTwo);

// useful when migrating from JS to TS
// because using any won't cause error initially



