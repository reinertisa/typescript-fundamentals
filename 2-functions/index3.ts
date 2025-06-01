
// example - 1 function signature
let setNames: (n1: string, n2: string) => void;

setNames = (name1: string, name2: string) => console.log(name1, name2);


// example - 2 function signature
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string): number => {
    if (action === 'add') {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

// example - 3 function signature
let logDetailsFour: (obj: {name: string, age: number}) => void;

type PersonTwo = {
    name: string
    age: number
}

logDetailsFour = (ninja: PersonTwo): void => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}