define(function() {
	var object = {};
	object.exist = function(thisObj) {
		//配合Jquery
		if(thisObj.length>=1){
            return true;
        }
        return false;
	};
	return object;
});