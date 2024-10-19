// B) Problem: Check the data type.
//   - Task: Write a function that takes any input and
//  returns its type using `typeof`.

function checkDataTypes(input) {
    const type = typeof input;
    if (input === null) {
        return "null";
    } else if (Array.isArray(input)) {
        return "array";
    } else {
        return type;
    }
}

console.log(checkDataTypes(32));
console.log(checkDataTypes("Hello"));
console.log(checkDataTypes(true));
console.log(checkDataTypes(false));
console.log(checkDataTypes(null));
console.log(checkDataTypes({name: 'Alex'}));
console.log(checkDataTypes([9, 6, 1]));
console.log(checkDataTypes(undefined));
console.log(checkDataTypes(Symbol('sym')));
console.log(checkDataTypes(function() {}));

