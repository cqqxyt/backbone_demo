define([
	'jquery',
	'dialogPlus',
	'constUtil'
], function($, dialog, constUtil) {
	var index = {};
	//关键字弹出层显示
	index.setKeyWordDialogShow = function() {
		var dialogUrl = constUtil.domain + constUtil.adminKeywordUrl;
		var title = '关键字列表';
		window.dialog = dialog;
		$('#showKeyword').click(function() {
			var link = this;
			var input = $(link).siblings('input[type=text]');
			//var dialog = top.dialog.get(window);
			var transferData = {
				'pclass': $('#ddlClass').val(),
				'pmodel': $('#ddlModel').val(), 
				'ptype': $('#ddlType').val(), 
				'txt': input.val()
			};
			//console.log(transferData);
			top.dialog({
				url: dialogUrl,
				title: title,
				padding: 0,
				height: 500,
				width: 900,
				scrolling: 'auto', //iframe显示滚动条
				data: transferData, // 给 iframe 的数据
				onclose: function () {
					if(!this.returnValue) return;
					$('#ddlClass option[value='+ this.returnValue.pclass +']').attr("selected", true);
					$('#ddlModel option[value='+ this.returnValue.pmodel +']').attr("selected", true);
					$('#ddlType option[value='+ this.returnValue.ptype +']').attr("selected", true);
					input.val(this.returnValue.txt);
				}
			}).showModal();
			return false;
		});
	};
	return index;
});