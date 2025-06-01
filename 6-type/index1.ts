// type aliases

// example 1 - tuple

type Rgb = [number, number, number];
function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}
console.log(getRandomColor());

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);


// example 2 - object literal
type User = {
    name: string
    score: number
}

const userOne: User = {
    name: 'Benjamin',
    score: 99
}
console.log(userOne);

function formatUser(user: User): void {
    console.log(`Name: ${user.name} Score: ${user.score}`);
}

formatUser(userOne);
formatUser({name: 'Zehra', score: 88});