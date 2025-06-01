const logDetailsTwo = (uid: string | number, item?: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetTwo = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}

const greetThree = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}


type StringOrNum = string | number;

const logDetailsThree = (uid: StringOrNum, item?: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetFour = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} says hello`);
}

type ObjectWithName = {
    name: string
    uid: StringOrNum
}

const greetFive = (user: ObjectWithName) => {
    console.log(`${user.name} says hello`);
}
