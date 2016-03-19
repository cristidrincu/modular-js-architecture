var robert = {
    firstname: 'Robert',
    lastname: 'Caling',
    nickname: 'gurde',
    height: 1.90,
    weight: 110,
    getNickname: function() {
        return this.nickname;
    }
}

//the apply methods works exactly like call, but it wants an array of parameters
//apply is more useful in mathematical situations, so use it in those situations
//this is the only difference between call and apply
var printNickname = function(callsign, achievements) {
    console.log("Nickname is: " + this.getNickname() + callsign + ', ' + achievements);
}.apply(warbringer, ["bob's your uncle", "total domination"]);

//Can be called as below as well
//printNickname.apply(robert, "bob's your uncle", "total domination");