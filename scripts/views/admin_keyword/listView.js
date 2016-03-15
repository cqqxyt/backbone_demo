define([
	'jquery',
	'backbone',
	'underscore',
	'mustache',
	'dialogPlus',
	'stringUtil'
], function($, Backbone, _, Mustache, dialog, string) {
	var list = Backbone.View.extend({
		template: $('#tpl_keyword_list').html(),
		el: '#main',
		events: {
			'click .button_submit': 'setKeyWordReturn',
			'click .button_search': 'search',
			'click #keyword_types a.del': 'delKeywordType',
			'click #keyword_types a.edit': 'editKeywordType',
			'click #keywords a.del': 'delKeyword',
			'click #keywords a.edit': 'editKeyword',
			'click .edit_keyword': 'submitEditKeyword',
			'click .add_keyword': 'addKeyword',
			'click .add_keyword_type': 'addKeywordType',
			'click .edit_keyword_type': 'submitEditKeywordType',
			'change #ddlClass,#ddlModel,#ddlType': 'render'
		},
		initialize: function() {
			//获取父级页面传过来的参数
			this.topDialog = top.dialog ? top.dialog.get(window) : this.model.defaults;
			this.requestData = this.topDialog.data;
			this.ddlClass = this.$('#ddlClass');
			this.ddlModel = this.$('#ddlModel');
			this.ddlType = this.$('#ddlType');
			//绑定作用域
			_.bindAll(this, 'render', 'renderWithoutDdl');
			this.setSelected();
			//渲染页面
			this.render();
		},
		render: function() {
			var _this = this;
			_this.model.fetch({
				data: $.param(_this.getSelectValues('getKeywords')),//参数变量
				success: function(model, response) {//成功的情况下返回信息
					var keywords = response;//返回的信息
					var html = Mustache.to_html(_this.template, keywords);//模板应用
					_this.$('dl').remove();//移除原先关键字列表
					_this.$el.append(html);
					_this.setKeyWordReference();//选中已选关键字
					//绑定父级类别下拉列表
					var types = keywords.DataList;
					$("#ddlParent option:not(:first)").remove();
					$("#ddlKeywordType option:not(:first)").remove();
					_.each(types, function(data) {
						var option = string.format('<option value="{0}">{1}</option>', data.KeywordTypeId, data.Name);
						$('#ddlParent').append(option);
						$('#ddlKeywordType').append(option);
					});
				}
			});
			return _this;
		},
		renderWithoutDdl: function() {
			var _this = this;
			_this.model.fetch({
				data: $.param(_this.getSelectValues('getKeywords')),//参数变量
				success: function(model, response) {//成功的情况下返回信息
					var keywords = response;//返回的信息
					var html = Mustache.to_html(_this.template, keywords);//模板应用
					_this.$('dl').remove();//移除原先关键字列表
					_this.$el.append(html);
					_this.setKeyWordReference();//选中已选关键字
				}
			});
			return _this;
		},
		setSelected: function() {//选中下拉框
			$('#ddlClass option[value='+ this.requestData.pclass +']').attr("selected", true);
			$('#ddlModel option[value='+ this.requestData.pmodel +']').attr("selected", true);
			$('#ddlType option[value='+ this.requestData.ptype +']').attr("selected", true);
		},
		setKeyWordReference: function() {//默认选中传递过来的参数
			var datas = this.requestData.txt.split(','); // 获取对话框传递过来的数据
			_.each(datas, function(data) {
				$('#keywords dd input[type=checkbox]').each(function() {
					if(_.isEqual($(this).val(), data)) {
						$(this).attr('checked', true);
					}
				});
			});
		},
		setKeyWordReturn: function() {//返回关键字
			var val = [];
			$('#keywords dd input[type=checkbox]').each(function() {
				if($(this).is(':checked')) {
					val.push($(this).val());
				}
			});
			if(!_.isEmpty(val)) {
				var data = this.getSelectValues();
				data = _.extend(data, {txt: ',' + val.join(',') + ','});
				this.topDialog.close(data);
			}else {
				this.topDialog.close('');
			}
			this.topDialog.remove();
		},
		search: function() {//重新搜索关键字列表
			this.render();
		},
		getSelectValues: function(operate) {//获取当前下拉框内容
			return {
				pmodel: this.ddlModel.val(), 
				pclass: this.ddlClass.val(), 
				ptype: this.ddlType.val(), 
				random: Math.random(),
				operate: operate || ''
			};
		},
		delKeywordType: function(e) {
			if(!confirm('您确定删除该关键字类别吗？')) {
				return;
			}
			var otherData = {typeid: e.currentTarget.attributes['keyid'].nodeValue};
			this.postKeyword({operate: 'delKeywordType', otherData: otherData});
		},
		addKeywordType: function(e) {
			var wtype = $(e.currentTarget).siblings('input[type=text]').val();
			var parentid = $('#ddlParent').val();
			var otherData = {wtype: wtype, parentid: parentid, sort: 0};
			this.postKeyword({operate: 'addKeywordType', validate: true, otherData: otherData});
		},
		editKeywordType: function(e) {
			var typeid = e.currentTarget.attributes['keyid'].nodeValue;
			var parentid = e.currentTarget.attributes['parentid'].nodeValue;
			var type = e.currentTarget.previousSibling.nodeValue;
			$('#currentTypeId').val(typeid);
			$('#currentType').val($.trim(type));
			$("#ddlParent ").val(parentid);
		},
		submitEditKeywordType: function() {
			var typeid = $('#currentTypeId').val();
			var wtype = $('#currentType').val();
			var parentid = $('#ddlParent').val();
			var otherData = {typeid: typeid, wtype: wtype, parentid: parentid, sort: 0};
			this.postKeyword({operate: 'editKeywordType', validate: true, otherData: otherData});
		},
		delKeyword: function(e) {
			if(!confirm('您确定删除该关键字吗？')) {
				return;
			}
			var otherData = {wordid: e.currentTarget.attributes['wordid'].nodeValue};
			this.postKeyword({operate: 'delKeyword', otherData: otherData});
		},
		editKeyword: function(e) {
			var wordid = e.currentTarget.attributes['wordid'].nodeValue;
			var typeid = e.currentTarget.attributes['keyid'].nodeValue;
			var word = e.currentTarget.previousSibling.nodeValue;
			$('#currentWordId').val(wordid);
			$('#currentWord').val($.trim(word));
			$('#ddlKeywordType').val(typeid);
		},
		submitEditKeyword: function() {
			var wordid = $('#currentWordId').val();
			var word = $('#currentWord').val();
			var typeid = $('#ddlKeywordType').val();
			var otherData = {wordid: wordid, word: word, typeid: typeid};
			this.postKeyword({operate: 'editKeyword', validate: true, otherData: otherData});
		},
		addKeyword: function(e) {
			//console.log(e);
			var typeid = $('#ddlKeywordType').val();
			var otherData = {word: $(e.currentTarget).siblings('input[type=text]').val(), typeid: typeid};
			this.postKeyword({operate: 'addKeyword', validate: true, otherData: otherData});
		},
		postKeyword: function(options) {//post提交给服务器
			var _this = this;
			var data = this.getSelectValues(options.operate);
			if(!_.isEmpty(options.otherData)) {
				_.extend(data, options.otherData);
			}
			if(options.validate) {
				var msg = this.model.validate(data);
				if(_.isString(msg)) { //错误提示
					this.showDialog({content: msg});
					return;
				}
			}
			$.post(_this.model.url, data, function(response) {
				_this.showDialog({content: response.Msg});
				_this.renderWithoutDdl();
			}, 'json');
		},
		showDialog: function(options) {//提示框
			var defaults = {
				quickClose: true	// 点击空白处快速关闭
			};
			_.extend(defaults, options);
			defaults.title = options.title || '信息提示';
			defaults.width = options.width || 140;
			dialog(defaults).show();
		}
	});
	return list;
});