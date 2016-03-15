/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("quickformat",function(e){function i(e){var t=e.first();while(t&&t.first())t=t.first();return t}var t=this,n="quickformat",r=e.toMap("blockquote,center,div,h1,h2,h3,h4,h5,h6,p");t.clickToolbar(n,function(){t.focus();var n=t.edit.doc,s=t.cmd.range,o=e(n.body).first(),u,a=[],f=[],l=s.createBookmark(!0);while(o){u=o.next();var c=i(o);if(!c||c.name!="img"){r[o.name]?(o.html(o.html().replace(/^(\s|&nbsp;|　)+/ig,"")),o.css("text-indent","2em")):f.push(o);if(!u||r[u.name]||r[o.name]&&!r[u.name])f.length>0&&a.push(f),f=[]}o=u}e.each(a,function(t,r){var i=e('<p style="text-indent:2em;"></p>',n);r[0].before(i),e.each(r,function(e,t){i.append(t)})}),s.moveToBookmark(l),t.addBookmark()})});