define([
  'adminIndexView'
], function(index) {
  var initialize = function() {
	  index.setKeyWordDialogShow();
  };
  return { 
    initialize: initialize
  };
});
