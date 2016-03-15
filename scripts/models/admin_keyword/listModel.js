define(['backbone', 'underscore', 'constUtil'], function(Backbone, _, constUtil) {
	var list = Backbone.Model.extend({
		url: constUtil.domain + constUtil.adminAjaxKeywordUrl,
		defaults: { 
			data:{ pclass:'', pmodel:'', ptype:'', txt:''}
		},
		initialize: function() {

        },
		validate: function(attributes, options) {
			if(_.isEmpty(attributes.pclass) || attributes.pclass == 0) {
				return '请选择类型！';
			}
			if(_.isEmpty(attributes.pmodel) || attributes.pmodel == 0) {
				return '请选择版块！';
			}
			if(_.isEmpty(attributes.ptype) || attributes.ptype == 0) {
				return '请选择分类！';
			}
			if(!_.isUndefined(attributes.word) && _.isEmpty(attributes.word)) {
				return '请输入关键字！';
			}
			if(!_.isUndefined(attributes.key) && _.isEmpty(attributes.key)) {
				return '请输入关键字类别！';
			}
		}
	});
	return list;
});