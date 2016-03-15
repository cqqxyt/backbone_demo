/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("lineheight",function(e){var t=this,n="lineheight",r=t.lang(n+".");t.clickToolbar(n,function(){var i="",s=t.cmd.commonNode({"*":".line-height"});s&&(i=s.css("line-height"));var o=t.createMenu({name:n,width:150});e.each(r.lineHeight,function(n,r){e.each(r,function(e,n){o.addItem({title:n,checked:i===e,click:function(){t.cmd.toggle('<span style="line-height:'+e+';"></span>',{span:".line-height="+e}),t.updateState(),t.addBookmark(),t.hideMenu()}})})})})});