/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("template",function(e){function s(t){return i+t+"?ver="+encodeURIComponent(e.DEBUG?e.TIME:e.VERSION)}var t=this,n="template",r=t.lang(n+"."),i=t.pluginsPath+n+"/html/";t.clickToolbar(n,function(){var r=t.lang(n+"."),i=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',r.selectTemplate+" <select>"];e.each(r.fileList,function(e,t){i.push('<option value="'+e+'">'+t+"</option>")}),html=[i.join(""),"</select></div>",'<div class="ke-right">','<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'+r.replaceContent+"</label>","</div>",'<div class="ke-clearfix"></div>',"</div>",'<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>',"</div>"].join("");var o=t.createDialog({name:n,width:500,title:t.lang(n),body:html,yesBtn:{name:t.lang("yes"),click:function(n){var r=e.iframeDoc(f);t[a[0].checked?"html":"insertHtml"](r.body.innerHTML).hideDialog().focus()}}}),u=e("select",o.div),a=e('[name="replaceFlag"]',o.div),f=e("iframe",o.div);a[0].checked=!0,f.attr("src",s(u.val())),u.change(function(){f.attr("src",s(this.value))})})});