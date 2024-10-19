
function arithmatic_operation (num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    return {
        sum: sum,
        difference: difference, 
        product: product, 
        quotient: quotient
    }
}

let result = arithmatic_operation(parseFloat(20), parseFloat(3));

// console.log(`Sum is: ${result.sum}`);
// console.log(`Difference is: ${result.difference}`);
// console.log(`Product is: ${result.product}`);
// console.log(`Quotient is: ${result.quotient}`);

for (let key in result) {
    console.log(key + ": " + result[key]);
}