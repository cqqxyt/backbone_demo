/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("anchor",function(e){var t=this,n="anchor",r=t.lang(n+".");t.plugin.anchor={edit:function(){var i=['<div style="padding:20px;">','<div class="ke-dialog-row">','<label for="keName">'+r.name+"</label>",'<input class="ke-input-text" type="text" id="keName" name="name" value="" style="width:100px;" />',"</div>","</div>"].join(""),s=t.createDialog({name:n,width:300,title:t.lang(n),body:i,yesBtn:{name:t.lang("yes"),click:function(e){t.insertHtml('<a name="'+u.val()+'">').hideDialog().focus()}}}),o=s.div,u=e('input[name="name"]',o),a=t.plugin.getSelectedAnchor();a&&u.val(unescape(a.attr("data-ke-name"))),u[0].focus(),u[0].select()},"delete":function(){t.plugin.getSelectedAnchor().remove()}},t.clickToolbar(n,t.plugin.anchor.edit)});