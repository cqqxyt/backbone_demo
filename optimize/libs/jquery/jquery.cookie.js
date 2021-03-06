/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

(function(e,t,n){function i(e){return e}function s(e){return o(decodeURIComponent(e.replace(r," ")))}function o(e){return e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),e}function u(e){return a.json?JSON.parse(e):e}var r=/\+/g,a=e.cookie=function(r,o,f){if(o!==n){f=e.extend({},a.defaults,f),o===null&&(f.expires=-1);if(typeof f.expires=="number"){var l=f.expires,c=f.expires=new Date;c.setDate(c.getDate()+l)}return o=a.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(r),"=",a.raw?o:encodeURIComponent(o),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}var h=a.raw?i:s,p=t.cookie.split("; "),d=r?null:{};for(var v=0,m=p.length;v<m;v++){var g=p[v].split("="),y=h(g.shift()),b=h(g.join("="));if(r&&r===y){d=u(b);break}r||(d[y]=u(b))}return d};a.defaults={},e.removeCookie=function(t,n){return e.cookie(t)!==null?(e.cookie(t,null,n),!0):!1}})(jQuery,document);