"use strict";
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInd(id) --> not allowed
    if (typeof id === 'string') {
        parseInt(id);
    }
    return id;
}
swapIdType(5);
