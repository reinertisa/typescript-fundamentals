// union types

let someId: number | string
someId = 1;
console.log(someId);
someId = 'hello';
console.log(someId);

let email: string | null;
email = null;
console.log(email);
email = 'test@gmail.com';
console.log(email);

type Id = number | string;
let anotherId: Id;
anotherId = 1;
console.log(anotherId);
anotherId = 'hello';
console.log(anotherId);

