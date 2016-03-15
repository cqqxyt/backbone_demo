/*!
 * popupjs
 * Date: 2014-01-15
 * https://github.com/aui/popupjs
 * (c) 2009-2013 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */

define(["require","jquery"],function(e){function s(){this.destroyed=!1,this.__popup=t("<div />").attr({tabindex:"-1"}).css({display:"none",position:"absolute",left:0,top:0,bottom:"auto",right:"auto",margin:0,padding:0,outline:0,border:"0 none",background:"transparent"}).html(this.innerHTML).appendTo("body"),this.__backdrop=t("<div />"),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],n++}var t=e("jquery"),n=0,r=!("minWidth"in t("html")[0].style),i=!r;return t.extend(s.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",backdropBackground:"#000",backdropOpacity:.7,innerHTML:"",className:"ui-popup",show:function(e){if(this.destroyed)return this;var n=this,i=this.__popup;return this.__activeElement=this.__getActive(),this.open=!0,this.follow=e||this.follow,this.__ready||(i.addClass(this.className),this.modal&&this.__lock(),i.html()||i.html(this.innerHTML),r||t(window).on("resize",this.__onresize=function(){n.reset()}),this.__ready=!0),i.addClass(this.className+"-show").attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute").show(),this.__backdrop.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(e){return!this.destroyed&&this.open&&(e!==undefined&&(this.returnValue=e),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),s.current===this&&(s.current=null),this.__unlock(),this.__popup.remove(),this.__backdrop.remove(),this.blur(),r||t(window).off("resize",this.__onresize),this.__dispatchEvent("remove");for(var e in this)delete this[e];return this},reset:function(){var e=this.follow;return e?this.__follow(e):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var e=this.node,n=s.current;n&&n!==this&&n.blur(!1);if(!t.contains(e,this.__getActive())){var r=this.__popup.find("[autofocus]")[0];!this._autofocus&&r?this._autofocus=!0:r=e,this.__focus(r)}return s.current=this,this.__popup.addClass(this.className+"-focus"),this.__zIndex(),this.__dispatchEvent("focus"),this},blur:function(){var e=this.__activeElement,t=arguments[0];return t!==!1&&this.__focus(e),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(e,t){return this.__getEventListener(e).push(t),this},removeEventListener:function(e,t){var n=this.__getEventListener(e);for(var r=0;r<n.length;r++)t===n[r]&&n.splice(r--,1);return this},__getEventListener:function(e){var t=this.__listener;return t||(t=this.__listener={}),t[e]||(t[e]=[]),t[e]},__dispatchEvent:function(e){var t=this.__getEventListener(e);this["on"+e]&&this["on"+e]();for(var n=0;n<t.length;n++)t[n].call(this)},__focus:function(e){try{this.autofocus&&!/^iframe$/i.test(e.nodeName)&&e.focus()}catch(t){}},__getActive:function(){try{var e=document.activeElement,t=e.contentDocument,n=t&&t.activeElement||e;return n}catch(r){}},__zIndex:function(){var e=s.zIndex++;this.__popup.css("zIndex",e),this.__backdrop.css("zIndex",e-1),this.zIndex=e},__center:function(){var e=this.__popup,n=t(window),r=t(document),i=this.fixed,s=i?0:r.scrollLeft(),o=i?0:r.scrollTop(),u=n.width(),a=n.height(),f=e.width(),l=e.height(),c=(u-f)/2+s,h=(a-l)*382/1e3+o,p=e[0].style;p.left=Math.max(parseInt(c),s)+"px",p.top=Math.max(parseInt(h),o)+"px"},__follow:function(e){var n=e.parentNode&&t(e),r=this.__popup;this.__followSkin&&r.removeClass(this.__followSkin);if(n){var i=n.offset();if(i.left*i.top<0)return this.__center()}var s=this,o=this.fixed,u=t(window),a=t(document),f=u.width(),l=u.height(),c=a.scrollLeft(),h=a.scrollTop(),p=r.width(),d=r.height(),v=n?n.outerWidth():0,m=n?n.outerHeight():0,g=this.__offset(e),y=g.left,b=g.top,w=o?y-c:y,E=o?b-h:b,S=o?0:c,x=o?0:h,T=S+f-p,N=x+l-d,C={},k=this.align.split(" "),L=this.className+"-",A={top:"bottom",bottom:"top",left:"right",right:"left"},O={top:"top",bottom:"top",left:"left",right:"left"},M=[{top:E-d,bottom:E+m,left:w-p,right:w+v},{top:E,bottom:E-d+m,left:w,right:w-p+v}],_={left:w+v/2-p/2,top:E+m/2-d/2},D={left:[S,T],top:[x,N]};t.each(k,function(e,t){M[e][t]>D[O[t]][1]&&(t=k[e]=A[t]),M[e][t]<D[O[t]][0]&&(k[e]=A[t])}),k[1]||(O[k[1]]=O[k[0]]==="left"?"top":"left",M[1][k[1]]=_[O[k[1]]]),L+=k.join("-"),s.__followSkin=L,n&&r.addClass(L),C[O[k[0]]]=parseInt(M[0][k[0]]),C[O[k[1]]]=parseInt(M[1][k[1]]),r.css(C)},__offset:function(e){var n=e.parentNode,r=n?t(e).offset():{left:e.pageX,top:e.pageY};e=n?e:e.target;var i=e.ownerDocument,s=i.defaultView||i.parentWindow;if(s==window)return r;var o=s.frameElement,u=t(i),a=u.scrollLeft(),f=u.scrollTop(),l=t(o).offset(),c=l.left,h=l.top;return{left:r.left+c-a,top:r.top+h-f}},__lock:function(){var e=this,n=this.__popup,r=this.__backdrop,o={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",opacity:0,background:this.backdropBackground};n.addClass(this.className+"-modal"),s.zIndex=s.zIndex+2,this.__zIndex(),i||t.extend(o,{position:"absolute",width:t(window).width()+"px",height:t(document).height()+"px"}),r.css(o).animate({opacity:this.backdropOpacity},150).insertAfter(n).attr({tabindex:"0"}).on("focus",function(){e.focus()})},__unlock:function(){this.modal&&(this.__popup.removeClass(this.className+"-modal"),this.__backdrop.remove(),delete this.modal)}}),s.zIndex=1024,s.current=null,s});