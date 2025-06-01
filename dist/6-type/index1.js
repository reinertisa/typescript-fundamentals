"use strict";
// type aliases
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}
console.log(getRandomColor());
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: 'Benjamin',
    score: 99
};
console.log(userOne);
function formatUser(user) {
    console.log(`Name: ${user.name} Score: ${user.score}`);
}
formatUser(userOne);
formatUse({ name: 'Zehra', score: 88 });
