
function addLike(pictureObj) {
    //Object.assign(newObject, currentObject) - copy the properties of the current object to a newObject
    var newPictureObj = Object.assign({}, pictureObj);
    newPictureObj.likes++;
    console.log(newPictureObj);
    return newPictureObj;
}

var post = { name: 'A new post object', likes: 10 };
addLike(post); //likes=11
addLike(post); //likes=11
addLike(post); //likes=11