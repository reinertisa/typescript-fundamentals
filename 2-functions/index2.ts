let greet: Function

greet = (): void => {
    console.log('hello')
}

const add = (a: number, b: number): void => {
    console.log(a + b);
}
add(1, 2);

const addTwo = (a: number, b: number): number => a + b;
console.log(addTwo(1, 2));

const addWords = (a: string = 'hi', b: string = 'baby') => a + b;
console.log(addWords('hello', 'world'));
console.log(addWords('hello'));
console.log(addWords());

const multiply = (a: number, b: number, c: number = 10) => a * b * c;
console.log(multiply(1, 2));
multiply(1, 2);

const combineFn = (a: number | string = 10, b: number | string = 'hello') => `${a} ${b}`;
combineFn();

const combineFn2 = (a: number, b?: number) => `${a} ${b}`;
combineFn2(10, 20);
combineFn2(10);




