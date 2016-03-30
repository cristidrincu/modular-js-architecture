var validationHelper = (function() {
    
    function _doesPersonExistInCollection(peopleList, personToAdd) {
        var res = peopleList.filter(function(person) {                
                if(typeof personToAdd === typeof person) {                    
                    if(person === _capitalizeFirstLetterOfPersonName(personToAdd)) {                   
                        return true;
                    } else {                
                        return false;   
                    }   
                }                                                
            }); 

            return res;
    }
    
    function _capitalizeFirstLetterOfPersonName(person) {
        var person = person || '';
        return person.charAt(0).toUpperCase() + person.slice(1);
    }
    
    function _isInputFieldEmpty($inputField) {
        if($inputField.val() === '') {
            return true;
        }

        return false;
     }
    
    function _showErrorField($errorField) {
         $errorField.show();
    }
    
    function _hideErrorField($errorField) {
         $errorField.hide();
    }
    
    return {
        doesPersonExistInCollection: _doesPersonExistInCollection,
        capitalizeFirstLetter: _capitalizeFirstLetterOfPersonName,
        isInputFieldEmpty: _isInputFieldEmpty,
        showErrorField: _showErrorField,
        hideErrorField: _hideErrorField
    }
    
})();