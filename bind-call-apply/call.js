var warbringer = {
    firstname: 'Cristian',
    lastname: 'Drincu',
    nickname: 'warbringer81',
    height: 1.78,
    weight: 90,
    getNickname: function() {
        return this.nickname;
    }
}

//call actually executes the function, does not do any copying whatsoever
//it accepts the arguments of the function, see callsign and achievements
//warbringer is what the "this" keyword refers to inside the function
var printNickname = function(callsign, achievements) {
    console.log("Nickname is: " + this.getNickname() + callsign + ', ' + achievements);
}.call(warbringer, "bob's your uncle", "total domination");

//Can be called as below as well
//printNickname.call(warbringer, "bob's your uncle", "total domination");