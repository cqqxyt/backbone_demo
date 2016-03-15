/*!
 * artDialog-plus v6.0.0 
 * Date: 2013-12-25
 * https://github.com/aui/artDialog
 * (c) 2009-2013 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */

define(["require","jquery","artDialog","dialogDrag"],function(e){var t=e("jquery"),n=e("artDialog"),r=e("dialogDrag");return n.oncreate=function(e){var n=e.options,i=n._,s=n.url,o=n.oniframeload,u;s&&(this.padding=n.padding=0,u=t("<iframe />"),u.attr({src:s,name:e.id,width:"100%",height:"100%",allowtransparency:"yes",frameborder:"no",scrolling:n.scrolling||"no"}).on("load",function(){var t;try{t=u[0].contentWindow.frameElement}catch(r){}t&&(n.width||e.width(u.contents().width()),n.height||e.height(u.contents().height())),o&&o.call(e)}),e.addEventListener("beforeremove",function(){u.attr("src","about:blank").remove()},!1),e.content(u[0]),e.iframeNode=u[0]);if(!(i instanceof Object)){var a=function(){e.close().remove()};for(var f=0;f<frames.length;f++)try{if(i instanceof frames[f].Object){t(frames[f]).one("unload",a);break}}catch(l){}}t(e.node).on(r.types.start,"[i=title]",function(t){e.follow||(e.focus(),r.create(e.node,t))})},n.get=function(e){if(e&&e.frameElement){var t=e.frameElement,r=n.list,i;for(var s in r){i=r[s];if(i.node.getElementsByTagName("iframe")[0]===t)return i}}else if(e)return n.list[e]},n});