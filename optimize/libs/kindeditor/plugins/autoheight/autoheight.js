/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/

KindEditor.plugin("autoheight",function(e){function r(){var e=t.edit,n=e.doc.body;e.iframe[0].scroll="no",n.style.overflowY="hidden"}function i(){var r=t.edit,i=r.doc.body;r.iframe.height(n),t.resize(null,Math.max((e.IE?i.scrollHeight:i.offsetHeight)+76,n))}function s(){n=e.removeUnit(t.height),t.edit.afterChange(i),r(),i()}var t=this;if(!t.autoHeightMode)return;var n;t.isCreated?s():t.afterCreate(s)});