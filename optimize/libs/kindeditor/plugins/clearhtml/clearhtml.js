/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("clearhtml",function(e){var t=this,n="clearhtml";t.clickToolbar(n,function(){t.focus();var n=t.html();n=n.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/ig,""),n=n.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/ig,""),n=e.formatHtml(n,{a:["href","target"],embed:["src","width","height","type","loop","autostart","quality",".width",".height","align","allowscriptaccess"],img:["src","width","height","border","alt","title",".width",".height"],table:["border"],"td,th":["rowspan","colspan"],"div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6":[]}),t.html(n),t.cmd.selection(!0),t.addBookmark()})});