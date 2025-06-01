// tuples

let person1: [string, number, boolean] = ['Inigo', 20, true];
console.log(person1);

let hsla: [number, string, string, number] = [200, 'red', '50%', 0.5];
console.log(hsla);

let xy: [number, number] = [10, 20];
console.log(xy);

function useCoords(): [number, number] {
    return [10, 20];
}
const [lat, long] = useCoords();
console.log(lat, long);

// named tuples
let user1: [name: string, age: number]
user1 = ['Inigo', 20];
console.log(user1[0], user1[1]);
