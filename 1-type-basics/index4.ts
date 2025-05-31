// Object literals
let user: {
    firstName: string,
    age: number,
    id: number,
} = {
    firstName: 'Fezzik',
    age: 3,
    id: 1
}
console.log(user);

user.firstName = 'Kevin'
user.age = 40
user.id = 10;

// type inference with object literals
let person = {
    name: 'Sade',
    score: 100
}

person.name = 'Isa';
person.score = 99;
console.log(person);

const score = person.score;
console.log(score);