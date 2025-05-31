// functions

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => a - b;

console.log(addTwoNumbers(1, 3));
console.log(subtractTwoNumbers(1, 3));

function addAllNumbers(items: number[]): number {
    return items.reduce((acc, item) => acc + item, 0);
}
console.log(addAllNumbers([1, 2, 3]));

function subtractAllNumbers(items: number[]): void {
    console.log(items.reduce((acc, item) => acc - item, 0));
}

subtractAllNumbers([1, 2, 3]);

const multiplyAllNumbers = (items: number[]): number => items.reduce((acc, item) => acc * item, 1);
console.log(multiplyAllNumbers([1, 2, 3]));

// return type inference

function formatGreeting(name: string, greeting: string) {
    return `${greeting} ${name}`;
}

const result = formatGreeting('Inigo', 'Hello');
console.log(result);