var people = (function() {
    //ALL PRIVATE FUNCTIONS AND VARIABLES SHOULD START WITH _
    
    var _peopleList = ['Will', 'Steve'];
    var _constants = {
        defaultEmptyValueForInputField: 'Guest'
    }
        
    
    //cache DOM
    var _$el = $('#peopleModule');
    var _$button = _$el.find('button');
    var _$input = _$el.find('input');
    var _$ul = _$el.find('ul');
    var _$errorField = _$el.find('p.errorField');
    var _template = _$el.find('#people-template').html();           
    
    //bind events
    _$button.on('click', _addPerson); 
    _$ul.delegate('i.del', 'click', _deletePerson);
    
    //setup error fields
    validationHelper.hideErrorField(_$errorField);
    _render();
    
    function _render() {
        _$ul.html(Mustache.render(_template, {people: _peopleList}));
    }    
    
    function _addPerson() {        
        if(validationHelper.doesPersonExistInCollection(_peopleList, _$input.val()).length === 1) {
            validationHelper.showErrorField(_$errorField);                
        } else if(validationHelper.isInputFieldEmpty()) {                
            _$input.val(_constants.defaultEmptyValueForInputField);            
        } else {
            validationHelper.hideErrorField(_$errorField);
            _peopleList.push(_capitalizeFirstLetterOfPersonName(_$input.val()));            
            _render();    
            _$input.val('');   
        }                                    
    }        
    
    function _deletePerson(event) {
        var triggerEventElement = $(event.target).closest('li');        
        var i = _$ul.find('li').index(triggerEventElement);
        
        _peopleList.splice(i, 1);
        _render();
    }                        
    
    return {
        addNewPerson: _addPerson,
        deleteExistingPerson: _deletePerson
    }
})();