//function borrowing
//I would like to use the method getHeight() that warbringer has to print
//the height of robert.
//And then i would like to use the method getWeight() that robert has in order to prin the weight of warbringer

var warbringer = {
    firstname: 'Cristian',
    lastname: 'Drincu',
    nickname: 'warbringer81',
    height: 1.78,
    weight: 90,
    getNickname: function() {
        return this.nickname;
    },
    getHeight: function() {
        return this.height + ' cms';
    }
}

var robert = {
    firstname: 'Robert',
    lastname: 'Caling',
    nickname: 'gurde',
    height: 1.90,
    weight: 110,
    getWeight: function() {
        return this.weight + ' kg';
    }
}

var robertHeight = warbringer.getHeight.call(robert);
var warbringerWeight = robert.getWeight.call(warbringer);

console.log("Robert has a height of: " + robertHeight);
console.log("Warbringer has a weight of: " + warbringerWeight);