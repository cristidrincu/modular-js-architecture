//Method signature - array.splice(startIndex, deleteCount, [elements to add starting from startIndex]);

var synetoPeople = ["Cristi", "Robert", "Csaba", "Dan", "Roberto", "Flavius"];
synetoPeople.splice(synetoPeople.indexOf("Robert"), 1); //removes one element found at postion [1], in this case Robert 
console.log(synetoPeople); //["Cristi", "Csaba", "Dan", "Roberto", "Flavius"]

var addToSynetoPeople = ["Cristi", "Robert", "Csaba", "Dan", "Roberto", "Flavius"];
addToSynetoPeople.splice(addToSynetoPeople.length, 0, "Romeo", "Vadim"); //adds "Romeo", "Vadim" at the end of the array. Note that 0 is passed for the delete count
console.log(addToSynetoPeople); 