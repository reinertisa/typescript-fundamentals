// mixed arrays
let mixed = [1, 'isa', true];
mixed.push('hello');

let ninja: {
    name: string,
    belt: string,
    age: number,
} = {
    name: 'Inigo',
    belt: 'black',
    age: 20
}
console.log(ninja);

let ninjas: {
    name: string,
    belt: string,
    age: number,
}[] = [
    {name: 'Inigo', belt: 'black', age: 20},
    {name: 'Isa', belt: 'red', age: 21},
    {name: 'Sade', belt: 'blue', age: 22}
]
console.log(ninjas);