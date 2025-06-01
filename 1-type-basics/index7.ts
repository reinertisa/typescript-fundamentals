// explicit types
let character: string;
let age2: number;
let isLoggedIn: boolean;

character = 'Inigo';
age2 = 20;
isLoggedIn = true;
console.log(character, age2, isLoggedIn);

// arrays
let ninjasTwo: string[] = []
ninjasTwo.push('sade');
ninjasTwo.push('luigi');
console.log(ninjasTwo);

// union types
let mixed2: (string | number)[] = [];
mixed2.push('hello');
mixed2.push(10);
console.log(mixed2);


let uid: string | number | boolean
uid = 1;
console.log(uid);
uid = 'hello';
console.log(uid);
uid = true;
console.log(uid);


// objects
let ninjaOne: object;
ninjaOne = {name: 'isa', age: 20};
console.log(ninjaOne);
ninjaOne = {name: 'isa', age: 20, isAdmin: true};
console.log(ninjaOne);

let ninjaThree: {
    name: string,
    age: number,
    beltColor: string,
} = {
    name: 'isa',
    age: 20,
    beltColor: 'black'
}
console.log(ninjaThree);