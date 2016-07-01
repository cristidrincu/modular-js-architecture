var obj2 = {
    number: 2
};

var addToThis = function(number1, number2, number3) {
    return this.number + number1 + number2 + number3;
};

//apply does the same thing as call, the only difference being that the second parameter is an array of parameters
var arr = [2, 3, 4];
console.log(addToThis.apply(obj2, arr));
