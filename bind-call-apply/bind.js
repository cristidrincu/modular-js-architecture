var person = {
    firstname: 'Cristian',
    lastname: 'Drincu',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

//we bind the person object to the 'this' keyword
//resulting in console.log("Logged: " + person.getFullName())

//what bind() does is create a copy of the function, in our case logName
//and replaces any 'this' keywords inside logName with what we pass as a parameter to bind, in our case the person object
var logName = function(lang1, lang2) {    
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + ' ' + lang2);
    console.log('------------------')
}.bind(person);

logName('english', 'espanol');

