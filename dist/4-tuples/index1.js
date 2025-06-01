"use strict";
// tuples
let person = ['Inigo', 20, true];
console.log(person);
let hsla = [200, 'red', '50%', 0.5];
console.log(hsla);
let xy = [10, 20];
console.log(xy);
function useCoords() {
    return [10, 20];
}
const [lat, long] = useCoords();
console.log(lat, long);
// named tuples
let user;
user = ['Inigo', 20];
console.log(user.name, user.age);
console.log(user[0], user[1]);
