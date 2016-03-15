/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("wordpaste",function(e){var t=this,n="wordpaste";t.clickToolbar(n,function(){var r=t.lang(n+"."),i='<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'+r.comment+"</div>"+'<iframe class="ke-textarea" frameborder="0" style="width:408px;height:260px;"></iframe>'+"</div>",s=t.createDialog({name:n,width:450,title:t.lang(n),body:i,yesBtn:{name:t.lang("yes"),click:function(n){var r=a.body.innerHTML;r=e.clearMsWord(r,t.filterMode?t.htmlTags:e.options.htmlTags),t.insertHtml(r).hideDialog().focus()}}}),o=s.div,u=e("iframe",o),a=e.iframeDoc(u);e.IE||(a.designMode="on"),a.open(),a.write("<!doctype html><html><head><title>WordPaste</title></head>"),a.write('<body style="background-color:#FFF;font-size:12px;margin:2px;">'),e.IE||a.write("<br />"),a.write("</body></html>"),a.close(),e.IE&&(a.body.contentEditable="true"),u[0].contentWindow.focus()})});