/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("preview",function(e){var t=this,n="preview",r;t.clickToolbar(n,function(){var r=t.lang(n+"."),i='<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>',s=t.createDialog({name:n,width:750,title:t.lang(n),body:i}),o=e("iframe",s.div),u=e.iframeDoc(o);u.open(),u.write(t.fullHtml()),u.close(),e(u.body).css("background-color","#FFF"),o[0].contentWindow.focus()})});