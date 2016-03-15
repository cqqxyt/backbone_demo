(function(e){e.fn.KinSlideshow=function(t){function g(){e(u).css({visibility:"hidden"}),e(a+" a img").css({border:0}),y(),_()}function y(){l=e(a+" a").length,c.push(e(a+" a img").width()),c.push(e(a+" a img").height()),e(a+" a img").each(function(t){f.push(e(this).attr("alt"))}),e(a+" a").wrapAll("<div id='KSS_content'></div>"),e(a).find("#KSS_content").clone().attr("id","KSS_contentClone").appendTo(u),b(),w(),E(),S(),A(t.mouseEvent),e(u).css({visibility:"visible"})}function b(){e(u).css({width:c[0],height:c[1],overflow:"hidden",position:"relative"}),e(u).append("<div class='KSS_titleBar'></div>"),m=t.titleBar.titleBar_height,isNaN(m)?m=40:m<25&&(m=25),e(a+" .KSS_titleBar").css({height:m,width:"100%",position:"absolute",bottom:0,left:0}),t.isHasTitleBar&&e(a+" .KSS_titleBar").css({background:t.titleBar.titleBar_bgColor,opacity:t.titleBar.titleBar_alpha})}function w(){t.isHasTitleFont&&(e(u).append("<div class='KSS_titleBox'><h2 class='title' style='line-height:30px;padding-left:25px;'></h2></div>"),e(a+" .KSS_titleBox").css({height:m,width:"100%",position:"absolute",bottom:0,left:0}),e(a+" .KSS_titleBox h2").css({fontSize:t.titleFont.TitleFont_size,color:t.titleFont.TitleFont_color,fontFamily:t.titleFont.TitleFont_family,fontWeight:t.titleFont.TitleFont_weight}),L(0))}function E(){t.btn.btn_borderWidth>2&&(t.btn.btn_borderWidth=2);if(t.btn.btn_borderWidth<0||isNaN(t.btn.btn_borderWidth))t.btn.btn_borderWidth=0;if(t.isHasBtn&&l>=2){e(u).append("<div class='KSS_btnBox' style='position:absolute;right:10px;bottom:10px; z-index:1'></div>");var n="";for(i=1;i<=l;i++)n+="<li></li>";n="<ul id='btnlistID' style='margin:0;padding:0; overflow:hidden'>"+n+"</ul>",e(a+" .KSS_btnBox").append(n),e(a+" .KSS_btnBox #btnlistID li").css({borderRadius:"8px",listStyle:"none","float":"left",width:10,height:10,borderWidth:t.btn.btn_borderWidth,borderColor:t.btn.btn_borderColor,borderStyle:"solid",background:t.btn.btn_bgColor,textAlign:"center",cursor:"pointer",marginLeft:6,fontSize:12,fontFamily:t.btn.btn_fontFamily,lineHeight:"18px",opacity:t.btn.btn_bgAlpha,color:t.btn.btn_fontColor}),e(a+" #btnlistID li:eq(0)").css({background:t.btn.btn_bgHoverColor,borderColor:t.btn.btn_borderHoverColor,color:t.btn.btn_fontHoverColor})}}function S(){switch(t.moveStyle){case"left":x();break;case"right":T();break;case"up":N();break;case"down":C();break;default:t.moveStyle="left",x()}}function x(){e(a+" div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>"),e(a).find("#KSS_moveBox").css({width:c[0],height:c[1],overflow:"hidden",position:"relative"}),e(a).find("#KSS_content").css({"float":"left"}),e(a).find("#KSS_contentClone").css({"float":"left"}),e(a+" #KSS_moveBox div").wrapAll("<div id='KSS_XposBox'></div>"),e(a).find("#KSS_XposBox").css({"float":"left",width:"2000%"}),d=setInterval(function(){k(t.moveStyle)},p*1e3+t.moveSpeedTime)}function T(){e(a+" div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>"),e(a).find("#KSS_moveBox").css({width:c[0],height:c[1],overflow:"hidden",position:"relative"}),e(a).find("#KSS_content").css({"float":"left"}),e(a).find("#KSS_contentClone").css({"float":"left"}),e(a+" #KSS_moveBox div").wrapAll("<div id='KSS_XposBox'></div>"),e(a).find("#KSS_XposBox").css({"float":"left",width:"2000%"}),e(a).find("#KSS_contentClone").html(""),e(a+" #KSS_content a").wrap("<span></span>"),e(a+" #KSS_content a").each(function(t){e(a).find("#KSS_contentClone").prepend(e(a+" #KSS_content span:eq("+t+")").html())}),e(a).find("#KSS_content").html(e(a).find("#KSS_contentClone").html());var n=(l-1)*c[0];e(a).find("#KSS_moveBox").scrollLeft(n),d=setInterval(function(){k(t.moveStyle)},p*1e3+t.moveSpeedTime)}function N(){e(a+" div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>"),e(a).find("#KSS_moveBox").css({width:c[0],height:c[1],overflow:"hidden",position:"relative"}),e(a).find("#KSS_moveBox").animate({scrollTop:0},1),d=setInterval(function(){k(t.moveStyle)},p*1e3+t.moveSpeedTime)}function C(){e(a+" div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>"),e(a).find("#KSS_moveBox").css({width:c[0],height:c[1],overflow:"hidden",position:"relative"}),e(a).find("#KSS_contentClone").html(""),e(a+" #KSS_content a").wrap("<span></span>"),e(a+" #KSS_content a").each(function(t){e(a).find("#KSS_contentClone").prepend(e(a+" #KSS_content span:eq("+t+")").html())}),e(a).find("#KSS_content").html(e(a).find("#KSS_contentClone").html());var n=(l-1)*c[1];e(a).find("#KSS_moveBox").animate({scrollTop:n},1),d=setInterval(function(){k(t.moveStyle)},p*1e3+t.moveSpeedTime)}function k(n){switch(n){case"left":h>=l?(h=0,e(a).find("#KSS_moveBox").scrollLeft(0),e(a).find("#KSS_moveBox").animate({scrollLeft:c[0]},t.moveSpeedTime)):(sp=(h+1)*c[0],e(a).find("#KSS_moveBox").is(":animated")?(e(a).find("#KSS_moveBox").stop(),e(a).find("#KSS_moveBox").animate({scrollLeft:sp},t.moveSpeedTime)):e(a).find("#KSS_moveBox").animate({scrollLeft:sp},t.moveSpeedTime)),L(h+1);break;case"right":var r=(l-1)*c[0];h>=l?(h=0,e(a).find("#KSS_moveBox").scrollLeft(r+c[0]),e(a).find("#KSS_moveBox").animate({scrollLeft:r},t.moveSpeedTime)):(v&&(h++,v=!1),sp=r-h*c[0],e(a).find("#KSS_moveBox").is(":animated")?(e(a).find("#KSS_moveBox").stop(),e(a).find("#KSS_moveBox").animate({scrollLeft:sp},t.moveSpeedTime)):e(a).find("#KSS_moveBox").animate({scrollLeft:sp},t.moveSpeedTime)),L(h);break;case"up":h>=l?(h=0,e(a).find("#KSS_moveBox").scrollTop(0),e(a).find("#KSS_moveBox").animate({scrollTop:c[1]},t.moveSpeedTime)):(sp=(h+1)*c[1],e(a).find("#KSS_moveBox").is(":animated")?(e(a).find("#KSS_moveBox").stop(),e(a).find("#KSS_moveBox").animate({scrollTop:sp},t.moveSpeedTime)):e(a).find("#KSS_moveBox").animate({scrollTop:sp},t.moveSpeedTime)),L(h+1);break;case"down":var r=(l-1)*c[1];h>=l?(h=0,e(a).find("#KSS_moveBox").scrollTop(r+c[1]),e(a).find("#KSS_moveBox").animate({scrollTop:r},t.moveSpeedTime)):(v&&(h++,v=!1),sp=r-h*c[1],e(a).find("#KSS_moveBox").is(":animated")?(e(a).find("#KSS_moveBox").stop(),e(a).find("#KSS_moveBox").animate({scrollTop:sp},t.moveSpeedTime)):e(a).find("#KSS_moveBox").animate({scrollTop:sp},t.moveSpeedTime)),L(h)}h++}function L(n){n==l&&(n=0),t.isHasTitleFont&&e(a+" .KSS_titleBox h2.title").html(f[n]),e(a+" #btnlistID li").each(function(r){r==n?e(this).css({background:t.btn.btn_bgHoverColor,borderColor:t.btn.btn_borderHoverColor,color:t.btn.btn_fontHoverColor}):e(this).css({background:t.btn.btn_bgColor,borderColor:t.btn.btn_borderColor,color:t.btn.btn_fontColor})})}function A(e){switch(e){case"mouseover":O();break;case"mouseclick":M();break;default:M()}}function O(){e(a+" #btnlistID li").mouseover(function(){var n=e(a+" #btnlistID li").index(e(this));switch(t.moveStyle){case"left":h=n-1;break;case"right":if(v){h=n-1;break}h=n;break;case"up":h=n-1;break;case"down":if(v){h=n-1;break}h=n}k(t.moveStyle),e(a+" #btnlistID li").each(function(r){r==n?e(this).css({background:t.btn.btn_bgHoverColor,borderColor:t.btn.btn_borderHoverColor,color:t.btn.btn_fontHoverColor}):e(this).css({background:t.btn.btn_bgColor,borderColor:t.btn.btn_borderColor,color:t.btn.btn_fontColor})})})}function M(){e(a+" #btnlistID li").click(function(){var n=e(a+" #btnlistID li").index(e(this));switch(t.moveStyle){case"left":h=n-1;break;case"right":if(v){h=n-1;break}h=n;break;case"up":h=n-1;break;case"down":if(v){h=n-1;break}h=n}k(t.moveStyle),e(a+" #btnlistID li").each(function(r){r==n?e(this).css({background:t.btn.btn_bgHoverColor,borderColor:t.btn.btn_borderHoverColor,color:t.btn.btn_fontHoverColor}):e(this).css({background:t.btn.btn_bgColor,borderColor:t.btn.btn_borderColor,color:t.btn.btn_fontColor})})})}function _(){e(a+" #btnlistID li").mouseover(function(){clearInterval(d)}),e(a+" #btnlistID li").mouseout(function(){d=setInterval(function(){k(t.moveStyle)},p*1e3+t.moveSpeedTime)})}t=jQuery.extend({intervalTime:5,moveSpeedTime:400,moveStyle:"left",mouseEvent:"mouseclick",isHasTitleBar:!0,titleBar:{titleBar_height:40,titleBar_bgColor:"#000000",titleBar_alpha:.5},isHasTitleFont:!0,titleFont:{TitleFont_size:12,TitleFont_color:"#FFFFFF",TitleFont_family:"Verdana",TitleFont_weight:"bold"},isHasBtn:!0,btn:{btn_bgColor:"#666666",btn_bgHoverColor:"#CC0000",btn_fontColor:"#CCCCCC",btn_fontHoverColor:"#000000",btn_fontFamily:"Verdana",btn_borderColor:"#999999",btn_borderHoverColor:"#FF0000",btn_borderWidth:1,btn_bgAlpha:.7}},t);var n={titleBar_height:40,titleBar_bgColor:"#000000",titleBar_alpha:.5},r={TitleFont_size:12,TitleFont_color:"#FFFFFF",TitleFont_family:"Verdana",TitleFont_weight:"bold"},s={btn_bgColor:"#666666",btn_bgHoverColor:"#CC0000",btn_fontColor:"#CCCCCC",btn_fontHoverColor:"#000000",btn_fontFamily:"Verdana",btn_borderColor:"#999999",btn_borderHoverColor:"#FF0000",btn_borderWidth:1,btn_bgAlpha:.7};for(var o in n)t.titleBar[o]==undefined&&(t.titleBar[o]=n[o]);for(var o in r)t.titleFont[o]==undefined&&(t.titleFont[o]=r[o]);for(var o in s)t.btn[o]==undefined&&(t.btn[o]=s[o]);var u=this,a=e(u).selector,f=new Array,l=0,c=new Array,h=0,p=t.intervalTime,d,v=!0,m;if(isNaN(p)||p<=1)p=5;return t.moveSpeedTime>500?t.moveSpeedTime=500:t.moveSpeedTime<100&&(t.moveSpeedTime=100),g()}})(jQuery);