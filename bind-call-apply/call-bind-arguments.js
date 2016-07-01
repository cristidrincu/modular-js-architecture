var object1 = { number: 2 };

var addToThis = function(numberArgument) {
    return this.number + numberArgument;
};

var addToThisMultipleArguments = function(numberArg1, numberArg2, numberArg3) {
    return Array.prototype.map.call(arguments, function(argument) {
        return argument * this.number;
    }.bind(object1));
};

//functionName.call(objectToReplaceThis, argument(s) for the function)
console.log(addToThis.call(object1, 8));

var resultArray = addToThisMultipleArguments(1, 2, 3);
console.log(resultArray);