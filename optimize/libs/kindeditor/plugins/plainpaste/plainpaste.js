/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("plainpaste",function(e){var t=this,n="plainpaste";t.clickToolbar(n,function(){var r=t.lang(n+"."),i='<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'+r.comment+"</div>"+'<textarea class="ke-textarea" style="width:408px;height:260px;"></textarea>'+"</div>",s=t.createDialog({name:n,width:450,title:t.lang(n),body:i,yesBtn:{name:t.lang("yes"),click:function(n){var r=o.val();r=e.escape(r),r=r.replace(/ {2}/g," &nbsp;"),t.newlineTag=="p"?r=r.replace(/^/,"<p>").replace(/$/,"</p>").replace(/\n/g,"</p><p>"):r=r.replace(/\n/g,"<br />$&"),t.insertHtml(r).hideDialog().focus()}}}),o=e("textarea",s.div);o[0].focus()})});