
//What this module tries to achieve:
//1. Be a self contained module and self executing module
//2. It should not contain jquery spaghetti code - cache the dom elements for this module is the right way to go about it
//3. NO GLOBAL VARIABLES - isolate from global scope
//4. DRY
(function() {
    var people = {
        peopleList: ['Cristian', 'Robert'],
        constants: {
            defaultEmptyValueForInputField: 'Guest'
        },
        
        init: function() {
            //cache dom elements
            this.cacheDom();
            //hide error field on init
            this.hideErrorField();
            //bind events to cached dom elements
            this.bindEvents();
            //render the dom elements(may live inside a template)
            this.render();
        },        
        cacheDom: function() {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.$errorField = this.$el.find('p.errorField');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents: function () {
          this.$button.on('click', this.addPerson.bind(this)); 
          this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        doesPersonExistInCollection: function (personToAdd) {             
            var res = this.peopleList.filter(function(person) {                
                if(typeof personToAdd === typeof person) {
                    return person === this.capitalizeFirstLetterOfPersonName(personToAdd);                    
                }                                                
            }, this); 
                        
            return res;            
        },        
        addPerson: function() {                        
            if(this.doesPersonExistInCollection(this.$input.val()).length === 1) {
                this.showErrorField();                
            } else if(this.isInputFieldEmpty()) {                
                this.$input.val(this.constants.defaultEmptyValueForInputField);                               
            }
                        
            this.hideErrorField();
            this.peopleList.push(this.capitalizeFirstLetterOfPersonName(this.$input.val()));            
            this.render();    
            this.$input.val('');            
        },
        deletePerson: function(event) {            
            var $remove = $(event.target).closest('li');
            var clickedListElementIndex = this.$ul.find('li').index($remove);
            this.peopleList.splice(clickedListElementIndex, 1);
            this.render();
        },
        hideErrorField: function() {
          this.$errorField.hide();  
        },
        showErrorField: function () {
          this.$errorField.show();  
        },
        isInputFieldEmpty: function () {
            if(this.$input.val() === '') {
                return true;
            }
            
            return false;
        },
        capitalizeFirstLetterOfPersonName: function (person) {
            var person = person || '';
            return person.charAt(0).toUpperCase() + person.slice(1);
        },
        render: function() {
            var data = {
                people: this.peopleList
            };
            this.$ul.html(Mustache.render(this.template, data));
        }
    }
    
   
    people.init();
})();