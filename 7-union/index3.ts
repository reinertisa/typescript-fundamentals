// tagged interfaces

type Id = number | string;

interface User {
    type: 'user'
    username: string
    email: string
    id: Id
}

interface Person {
    type: 'person'
    firstName: string
    age: number
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.username, value.email);
    }

    if (value.type === 'person') {
        console.log(value.firstName, value.age);
    }
}

logDetails({
    type: 'user',
    username: 'Kevin',
    email: 'test@gmail.com',
    id: 1
});

logDetails({
    type: 'person',
    firstName: 'Sade',
    age: 30,
    id: 1
})