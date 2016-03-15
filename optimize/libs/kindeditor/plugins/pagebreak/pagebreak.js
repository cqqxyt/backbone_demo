/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("pagebreak",function(e){var t=this,n="pagebreak",r=e.undef(t.pagebreakHtml,'<hr style="page-break-after: always;" class="ke-pagebreak" />');t.clickToolbar(n,function(){var n=t.cmd,i=n.range;t.focus();var s=t.newlineTag=="br"||e.WEBKIT?"":'<span id="__kindeditor_tail_tag__"></span>';t.insertHtml(r+s);if(s!==""){var o=e("#__kindeditor_tail_tag__",t.edit.doc);i.selectNodeContents(o[0]),o.removeAttr("id"),n.select()}})});