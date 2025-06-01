// union type pitfall

type IdTwo = number | string;

function swapIdType(id: IdTwo): IdTwo {
    // can only use props and methods common to
    // both number and string types
    // parseInd(id) --> not allowed

    if (typeof id === 'string') {
       return parseInt(id);
    } else {
        // can use number methods and properties
        return id.toString();
    }
}

const IdOne = swapIdType(5);
const IdTwo = swapIdType('5');
console.log(IdOne, IdTwo);