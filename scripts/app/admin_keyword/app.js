define([
  'adminKeywordListView',
  'adminKeywordListModel'
], function(listView, listModel) {
  var initialize = function() {
	var model = new listModel();
	var view = new listView({model: model});
	//list.setKeyWordReturn();
  };
  return { 
    initialize: initialize
  };
});
