function multiply(a, b) {
    return a*b;
}

console.log(multiply.bind(this));
var multiplyByTwo = multiply.bind(this, 2); //sets a permanent value for the first parameter of multiply
console.log(multiplyByTwo(4));