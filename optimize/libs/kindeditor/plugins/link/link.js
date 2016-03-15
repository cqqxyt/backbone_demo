/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("link",function(e){var t=this,n="link";t.plugin.link={edit:function(){var r=t.lang(n+"."),i='<div style="padding:20px;"><div class="ke-dialog-row"><label for="keUrl" style="width:60px;">'+r.url+"</label>"+'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div>'+'<div class="ke-dialog-row"">'+'<label for="keType" style="width:60px;">'+r.linkType+"</label>"+'<select id="keType" name="type"></select>'+"</div>"+"</div>",s=t.createDialog({name:n,width:450,title:t.lang(n),body:i,yesBtn:{name:t.lang("yes"),click:function(n){var r=e.trim(u.val());if(r=="http://"||e.invalidUrl(r)){alert(t.lang("invalidUrl")),u[0].focus();return}t.exec("createlink",r,a.val()).hideDialog().focus()}}}),o=s.div,u=e('input[name="url"]',o),a=e('select[name="type"]',o);u.val("http://"),a[0].options[0]=new Option(r.newWindow,"_blank"),a[0].options[1]=new Option(r.selfWindow,""),t.cmd.selection();var f=t.plugin.getSelectedLink();f&&(t.cmd.range.selectNode(f[0]),t.cmd.select(),u.val(f.attr("data-ke-src")),a.val(f.attr("target"))),u[0].focus(),u[0].select()},"delete":function(){t.exec("unlink",null)}},t.clickToolbar(n,t.plugin.link.edit)});