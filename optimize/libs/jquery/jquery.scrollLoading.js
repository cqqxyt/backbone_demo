/*!
 * jquery.scrollLoading.js
 * 2010-11-19 v1.0
 * 2012-01-13 v1.1 偏移值计算修改 position → offset
 * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
 * 2014-02-21 v1.3 增加其他绑定函数
*/

(function(e){e.fn.scrollLoading=function(t){var n={attr:"data-url",container:e(window),callback:e.noop,eventObjects:[]},r=e.extend({},n,t||{});r.cache=[],e(this).each(function(){var t=this.nodeName.toLowerCase(),n=e(this).attr(r.attr),i={obj:e(this),tag:t,url:n};r.cache.push(i)});var i=function(t){e.isFunction(r.callback)&&r.callback.call(t.get(0))},s=function(){var t=r.container.height();e(window).get(0)===window?contop=e(window).scrollTop():contop=r.container.offset().top,e.each(r.cache,function(e,n){var r=n.obj,s=n.tag,o=n.url,u,a;if(r){u=r.offset().top-contop,u+r.height();if(u>=0&&u<t||a>0&&a<=t)o?s==="img"?i(r.attr("src",o)):r.load(o,{},function(){i(r)}):i(r),n.obj=null}})};s(),r.container.bind("scroll",function(){s();var t=r.eventObjects;if(e.isFunction(t)){t.apply(this);return}if(!e.isArray(t)||t.length===0)return;var n=t.length;for(var i=0;i<n;i++){if(!e.isFunction(t[i]))continue;t[i].apply(this)}})}})(jQuery);