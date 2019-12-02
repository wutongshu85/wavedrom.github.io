/*! wavedrom 2019-12-02 */

!function o(s,i,c){function l(t,e){if(!i[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var a=i[t]={exports:{}};s[t][0].call(a.exports,function(e){return l(s[t][1][e]||e)},a,a.exports,o,s,i,c)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,t,r){"use strict";t.exports=function(i,c){var l,u;function f(e){var t=parseInt(u.style.left,10),r=parseInt(u.style.top,10);(e.x<t||e.x>t+u.offsetWidth||e.y<r||e.y>r+u.offsetHeight)&&(u.parentNode.removeChild(u),document.body.removeEventListener("mousedown",f,!1))}(l=document.getElementById(c+i)).childNodes[0].addEventListener("contextmenu",function(e){var t,r,n;(u=document.createElement("div")).className="wavedromMenu",u.style.top=e.y+"px",u.style.left=e.x+"px",t=document.createElement("ul"),(r=document.createElement("li")).innerHTML="Save as PNG",t.appendChild(r),(n=document.createElement("li")).innerHTML="Save as SVG",t.appendChild(n),u.appendChild(t),document.body.appendChild(u),r.addEventListener("click",function(){var e,t,r,n,a,o,s;e="",0!==i&&(e+=(t=document.getElementById(c+0)).innerHTML.substring(166,t.innerHTML.indexOf('<g id="waves_0">'))),e=[l.innerHTML.slice(0,166),e,l.innerHTML.slice(166)].join(""),r="data:image/svg+xml;base64,"+btoa(e),(n=new Image).src=r,(a=document.createElement("canvas")).width=n.width,a.height=n.height,a.getContext("2d").drawImage(n,0,0),o=a.toDataURL("image/png"),(s=document.createElement("a")).href=o,s.download="wavedrom.png",s.click(),u.parentNode.removeChild(u),document.body.removeEventListener("mousedown",f,!1)},!1),n.addEventListener("click",function(){var e,t,r,n;e="",0!==i&&(e+=(t=document.getElementById(c+0)).innerHTML.substring(166,t.innerHTML.indexOf('<g id="waves_0">'))),e=[l.innerHTML.slice(0,166),e,l.innerHTML.slice(166)].join(""),r="data:image/svg+xml;base64,"+btoa(e),(n=document.createElement("a")).href=r,n.download="wavedrom.svg",n.click(),u.parentNode.removeChild(u),document.body.removeEventListener("mousedown",f,!1)},!1),u.addEventListener("contextmenu",function(e){e.preventDefault()},!1),document.body.addEventListener("mousedown",f,!1),e.preventDefault()},!1)}},{}],2:[function(e,t,r){"use strict";t.exports=function(e,t,r){var n,a,o=r.x-t.x,s=r.y-t.y,i=(t.x+r.x)/2,c=(t.y+r.y)/2;switch(e.shape){case"-":break;case"~":n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+.3*o+", "+s+" "+o+", "+s;break;case"-~":n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+o+", "+s+" "+o+", "+s,e.label&&(i=t.x+.75*(r.x-t.x));break;case"~-":n="M "+t.x+","+t.y+" c 0, 0 "+.3*o+", "+s+" "+o+", "+s,e.label&&(i=t.x+.25*(r.x-t.x));break;case"-|":n="m "+t.x+","+t.y+" "+o+",0 0,"+s,e.label&&(i=r.x);break;case"|-":n="m "+t.x+","+t.y+" 0,"+s+" "+o+",0",e.label&&(i=t.x);break;case"-|-":n="m "+t.x+","+t.y+" "+o/2+",0 0,"+s+" "+o/2+",0";break;case"->":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none";break;case"~>":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+.3*o+", "+s+" "+o+", "+s;break;case"-~>":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+o+", "+s+" "+o+", "+s,e.label&&(i=t.x+.75*(r.x-t.x));break;case"~->":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="M "+t.x+","+t.y+" c 0, 0 "+.3*o+", "+s+" "+o+", "+s,e.label&&(i=t.x+.25*(r.x-t.x));break;case"-|>":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="m "+t.x+","+t.y+" "+o+",0 0,"+s,e.label&&(i=r.x);break;case"|->":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="m "+t.x+","+t.y+" 0,"+s+" "+o+",0",e.label&&(i=t.x);break;case"-|->":a="marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none",n="m "+t.x+","+t.y+" "+o/2+",0 0,"+s+" "+o/2+",0";break;case"<->":a="marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none";break;case"<~>":a="marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none",n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+.3*o+", "+s+" "+o+", "+s;break;case"<-~>":a="marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none",n="M "+t.x+","+t.y+" c "+.7*o+", 0 "+o+", "+s+" "+o+", "+s,e.label&&(i=t.x+.75*(r.x-t.x));break;case"<-|>":a="marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none",n="m "+t.x+","+t.y+" "+o+",0 0,"+s,e.label&&(i=r.x);break;case"<-|->":a="marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none",n="m "+t.x+","+t.y+" "+o/2+",0 0,"+s+" "+o/2+",0";break;default:a="fill:none;stroke:#F00;stroke-width:1"}return{lx:i,ly:c,d:n,style:a}}},{}],3:[function(e,t,r){t.exports={chars:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,47,74,74,118,89,25,44,44,52,78,37,44,37,37,74,74,74,74,74,74,74,74,74,74,37,37,78,78,78,74,135,89,89,96,96,89,81,103,96,37,67,89,74,109,96,103,89,103,96,89,81,96,89,127,89,87,81,37,37,37,61,74,44,74,74,67,74,74,37,74,74,30,30,67,30,112,74,74,74,74,44,67,37,74,67,95,66,65,67,44,34,44,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,43,74,74,74,74,34,74,44,98,49,74,78,0,98,73,53,73,44,44,44,77,71,37,44,44,49,74,111,111,111,81,89,89,89,89,89,89,133,96,89,89,89,89,37,37,37,37,96,96,103,103,103,103,103,78,103,96,96,96,96,87,89,81,74,74,74,74,74,74,118,67,74,74,74,74,36,36,36,36,74,74,74,74,74,74,74,73,81,74,74,74,74,65,74,65,89,74,89,74,89,74,96,67,96,67,96,67,96,67,96,82,96,74,89,74,89,74,89,74,89,74,89,74,103,74,103,74,103,74,103,74,96,74,96,74,37,36,37,36,37,36,37,30,37,36,98,59,67,30,89,67,67,74,30,74,30,74,39,74,44,74,30,96,74,96,74,96,74,80,96,74,103,74,103,74,103,74,133,126,96,44,96,44,96,44,89,67,89,67,89,67,89,67,81,38,81,50,81,37,96,74,96,74,96,74,96,74,96,74,96,74,127,95,87,65,87,81,67,81,67,81,67,30,84,97,91,84,91,84,94,92,73,104,109,91,84,81,84,100,82,76,74,103,91,131,47,40,99,77,37,79,130,100,84,104,114,87,126,101,87,84,93,84,69,84,46,52,82,52,82,114,89,102,96,100,98,91,70,88,88,77,70,85,89,77,67,84,39,65,61,39,189,173,153,111,105,61,123,123,106,89,74,37,30,103,74,96,74,96,74,96,74,96,74,96,74,81,91,81,91,81,130,131,102,84,103,84,87,78,104,81,104,81,88,76,37,189,173,153,103,84,148,90,100,84,89,74,133,118,103,81],other:114}},{}],4:[function(e,t,r){"use strict";var n=e("onml/lib/stringify.js"),a=e("./w3.js");t.exports=function(e){e[1].xmlns=a.svg,e[1]["xmlns:xlink"]=a.xlink;var t=n(e).replace(/&/g,"&amp;");return(new DOMParser).parseFromString(t,"image/svg+xml").firstChild}},{"./w3.js":33,"onml/lib/stringify.js":36}],5:[function(e,t,r){"use strict";var n=e("./eva"),a=e("./render-wave-form");t.exports=function(){a(0,n("InputJSON_0"),"WaveDrom_Display_")}},{"./eva":6,"./render-wave-form":30}],6:[function(require,module,exports){"use strict";function eva(id){var TheTextBox,source;function erra(e){return{signal:[{name:["tspan",["tspan",{class:"error h5"},"Error: "],e.message]}]}}if(TheTextBox=document.getElementById(id),TheTextBox.type&&"textarea"===TheTextBox.type)try{source=eval("("+TheTextBox.value+")")}catch(e){return erra(e)}else try{source=eval("("+TheTextBox.innerHTML+")")}catch(e){return erra(e)}if("[object Object]"!==Object.prototype.toString.call(source))return erra({message:'[Semantic]: The root has to be an Object: "{signal:[...]}"'});if(source.signal){if("[object Array]"!==Object.prototype.toString.call(source.signal))return erra({message:'[Semantic]: "signal" object has to be an Array "signal:[]"'})}else if(source.assign){if("[object Array]"!==Object.prototype.toString.call(source.assign))return erra({message:'[Semantic]: "assign" object hasto be an Array "assign:[]"'})}else if(!source.reg)return erra({message:'[Semantic]: "signal:[...]" or "assign:[...]" property is missing inside the root Object'});return source}module.exports=eva},{}],7:[function(e,t,r){"use strict";t.exports=function(e){var t=0,r=0,n=[];return e.forEach(function(e){"vvv-2"===e||"vvv-3"===e||"vvv-4"===e||"vvv-5"===e||"vvv-6"===e||"vvv-7"===e||"vvv-8"===e||"vvv-9"===e?r+=1:0!==r&&(n.push(t-(r+1)/2),r=0),t+=1}),0!==r&&n.push(t-(r+1)/2),n}},{}],8:[function(e,t,r){"use strict";t.exports=function(e,t,r){var n,a,o=[];if(4===e.length){for(a=0;a<r;a+=1){for(o.push(e[0]),n=0;n<t;n+=1)o.push(e[1]);for(o.push(e[2]),n=0;n<t;n+=1)o.push(e[3])}return o}for(1===e.length&&e.push(e[0]),o.push(e[0]),n=0;n<r*(2*(t+1))-1;n+=1)o.push(e[1]);return o}},{}],9:[function(e,t,r){"use strict";var a=e("./gen-brick");t.exports=function(e,t,r){var n;switch(n=[],e){case"p":n=a(["pclk","111","nclk","000"],t,r);break;case"n":n=a(["nclk","000","pclk","111"],t,r);break;case"P":n=a(["Pclk","111","nclk","000"],t,r);break;case"N":n=a(["Nclk","000","pclk","111"],t,r);break;case"l":case"L":case"0":n=a(["000"],t,r);break;case"h":case"H":case"1":n=a(["111"],t,r);break;case"=":case"2":n=a(["vvv-2"],t,r);break;case"3":n=a(["vvv-3"],t,r);break;case"4":n=a(["vvv-4"],t,r);break;case"5":n=a(["vvv-5"],t,r);break;case"6":n=a(["vvv-6"],t,r);break;case"7":n=a(["vvv-7"],t,r);break;case"8":n=a(["vvv-8"],t,r);break;case"9":n=a(["vvv-9"],t,r);break;case"d":n=a(["ddd"],t,r);break;case"u":n=a(["uuu"],t,r);break;case"z":n=a(["zzz"],t,r);break;default:n=a(["xxx"],t,r)}return n}},{"./gen-brick":8}],10:[function(e,t,r){"use strict";var x=e("./gen-brick");t.exports=function(e,t,r){var n,a,o,s,i,c,l,u,f,d,h,p,m,v;return n={p:"pclk",n:"nclk",P:"Pclk",N:"Nclk",h:"pclk",l:"nclk",H:"Pclk",L:"Nclk"},a={0:"0",1:"1",x:"x",d:"d",u:"u",z:"z","=":"v",2:"v",3:"v",4:"v",5:"v",6:"v",7:"v",8:"v",9:"v"},o={0:"",1:"",x:"",d:"",u:"",z:"","=":"-2",2:"-2",3:"-3",4:"-4",5:"-5",6:"-6",7:"-7",8:"-8",9:"-9"},s={p:"0",n:"1",P:"0",N:"1",h:"1",l:"0",H:"1",L:"0",0:"0",1:"1",x:"x",d:"d",u:"u",z:"z","=":"v",2:"v",3:"v",4:"v",5:"v",6:"v",7:"v",8:"v",9:"v"},i={p:"",n:"",P:"",N:"",h:"",l:"",H:"",L:"",0:"",1:"",x:"",d:"",u:"",z:"","=":"-2",2:"-2",3:"-3",4:"-4",5:"-5",6:"-6",7:"-7",8:"-8",9:"-9"},c={p:"nclk",n:"pclk",P:"nclk",N:"pclk"},l={p:"000",n:"111",P:"000",N:"111"},u={hp:"111",Hp:"111",ln:"000",Ln:"000",nh:"111",Nh:"111",pl:"000",Pl:"000"},d={p:"111",n:"000",P:"111",N:"000",h:"111",l:"000",H:"111",L:"000",0:"000",1:"111",x:"xxx",d:"ddd",u:"uuu",z:"zzz","=":"vvv-2",2:"vvv-2",3:"vvv-3",4:"vvv-4",5:"vvv-5",6:"vvv-6",7:"vvv-7",8:"vvv-8",9:"vvv-9"}[(f=e.split(""))[1]],void 0===(h=n[f[1]])?void 0===(p=a[f[1]])?x(["xxx"],t,r):(m=s[f[0]],x(void 0===m?["xxx"]:[m+"m"+p+i[f[0]]+o[f[1]],d],t,r)):(void 0!==(v=u[e])&&(h=v),p=c[f[1]],x(void 0===p?[h,d]:[h,d,p,l[f[1]]],t,r))}},{"./gen-brick":8}],11:[function(e,t,r){"use strict";t.exports=function(){return["style",".pinname {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:end; font-family:Helvetica} .wirename {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:start; font-family:Helvetica} .wirename:hover {fill:blue} .gate {color:#000; fill:#ffc; fill-opacity: 1;stroke:#000; stroke-width:1; stroke-opacity:1} .gate:hover {fill:red !important; } .wire {fill:none; stroke:#000; stroke-width:1; stroke-opacity:1} .grid {fill:#fff; fill-opacity:1; stroke:none}"]}},{}],12:[function(e,t,r){"use strict";var p=e("./w3");t.exports=function(e,t,r,n,a,o,s){var i,c,l;for(i in n)break;c=n.default||n[i],t&&t.config&&t.config.skin&&n[t.config.skin]&&(c=n[t.config.skin]),l=0===e?c:["svg",{id:"svg",xmlns:p.svg,"xmlns:xlink":p.xlink},["g"]];var u=r.xg+r.xs*(r.xmax+1),f=a.length*r.yo+r.yh0+r.yh1+r.yf0+r.yf1,d=l[l.length-1];d[1]={id:"waves_"+e},d[2]=["g",{id:"lanes_"+e,transform:"translate("+(r.xg+.5)+", "+(r.yh0+r.yh1+.5)+")"}].concat(o),d[3]=["g",{id:"groups_"+e},s];var h=l[1];return h.id="svgcontent_"+e,h.height=f,h.width=u,h.viewBox="0 0 "+u+" "+f,h.overflow="hidden",l}},{"./w3":33}],13:[function(e,t,r){"use strict";t.exports={xs:20,ys:20,xg:120,yh0:0,yh1:0,yf0:0,yf1:0,y0:5,yo:30,tgo:-10,ym:15,xlabel:6,xmax:1,scale:1,head:{},foot:{}}},{}],14:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n;t.hscale=1,t.hscale0&&(t.hscale=t.hscale0),e&&e.config&&e.config.hscale&&0<(r=Math.round(0<(n=e.config.hscale)?Math.round(n):1))&&(100<r&&(r=100),t.hscale=r),t.yh0=0,t.yh1=0,t.head=e.head,t.xmin_cfg=0,t.xmax_cfg=1e12,e&&e.config&&e.config.hbounds&&2==e.config.hbounds.length&&(e.config.hbounds[0]=Math.floor(e.config.hbounds[0]),e.config.hbounds[1]=Math.ceil(e.config.hbounds[1]),e.config.hbounds[0]<e.config.hbounds[1]&&(t.xmin_cfg=2*Math.floor(e.config.hbounds[0]),t.xmax_cfg=2*Math.floor(e.config.hbounds[1]))),e&&e.head&&((e.head.tick||0===e.head.tick||e.head.tock||0===e.head.tock)&&(t.yh0=20),!e.head.tick&&0!==e.head.tick||(e.head.tick=e.head.tick+t.xmin_cfg/2),!e.head.tock&&0!==e.head.tock||(e.head.tock=e.head.tock+t.xmin_cfg/2),e.head.text&&(t.yh1=46,t.head.text=e.head.text)),t.yf0=0,t.yf1=0,t.foot=e.foot,e&&e.foot&&((e.foot.tick||0===e.foot.tick||e.foot.tock||0===e.foot.tock)&&(t.yf0=20),!e.foot.tick&&0!==e.foot.tick||(e.foot.tick=e.foot.tick+t.xmin_cfg/2),!e.foot.tock&&0!==e.foot.tock||(e.foot.tock=e.foot.tock+t.xmin_cfg/2),e.foot.text&&(t.yf1=46,t.foot.text=e.foot.text))}},{}],15:[function(e,t,r){"use strict";var d=e("./gen-first-wave-brick"),h=e("./gen-wave-brick"),p=e("./find-lane-markers");t.exports=function(e,t,r){var n,a,o,s,i,c,l=[],u=[],f=[];for(o=(l=e.split("")).shift(),i=!1,n=1;"."===l[0]||"|"===l[0];)l.shift(),n+=1;for(u=u.concat(d(o,t,n));l.length;){for(a=o,"<"===(o=l.shift())&&(i=!0,o=l.shift()),">"===o&&(i=!1,o=l.shift()),n=1;"."===l[0]||"|"===l[0];)l.shift(),n+=1;u=i?u.concat(h(a+o,0,n-r.period)):u.concat(h(a+o,t,n))}for(s=0;s<r.phase;s+=1)f.push(u.shift());return 0<f.length?(c=p(f).length,1==p([f[f.length-1]]).length&&1==p([u[0]]).length&&(c-=1)):c=0,[u,c]}},{"./find-lane-markers":7,"./gen-first-wave-brick":9,"./gen-wave-brick":10}],16:[function(e,t,r){"use strict";var f=e("./parse-wave-lane");t.exports=function(e,t){var r,n,a,o,s,i,c,l=[],u=[];for(r in e)n=e[r],t.period=n.period?n.period:1,t.phase=(n.phase?2*n.phase:0)+t.xmin_cfg,l.push([]),u[0]=n.name||" ",u[1]=(n.phase||0)+t.xmin_cfg/2,n.wave?(a=(o=f(n.wave,t.period*t.hscale-1,t))[0],s=o[1]):a=null,l[l.length-1][0]=u.slice(0),l[l.length-1][1]=a,l[l.length-1][2]=(i=s,(c=void 0)===(c=n.data)?null:("string"==typeof c&&(c=c.trim().split(/\s+/)),c=c.slice(i)));return l}},{"./parse-wave-lane":15}],17:[function(e,t,r){"use strict";var s=e("./eva"),i=e("./append-save-as-dialog"),c=e("./render-wave-form");t.exports=function(){var e,t,r,n,a,o;for(r=0,e=document.querySelectorAll("*"),t=0;t<e.length;t++)e.item(t).type&&"WaveDrom"===e.item(t).type&&(e.item(t).setAttribute("id","InputJSON_"+r),(o=document.createElement("div")).id="WaveDrom_Display_"+r,e.item(t).parentNode.insertBefore(o,e.item(t)),r+=1);for(t=n=0;t<r;t+=1)a=s("InputJSON_"+t),c(n,a,"WaveDrom_Display_"),i(t,"WaveDrom_Display_"),a&&a.signal&&(n+=1);document.head.innerHTML+='<style type="text/css">div.wavedromMenu{position:fixed;border:solid 1pt#CCCCCC;background-color:white;box-shadow:0px 10px 20px #808080;cursor:default;margin:0px;padding:0px;}div.wavedromMenu>ul{margin:0px;padding:0px;}div.wavedromMenu>ul>li{padding:2px 10px;list-style:none;}div.wavedromMenu>ul>li:hover{background-color:#b5d5ff;}</style>'}},{"./append-save-as-dialog":1,"./eva":6,"./render-wave-form":30}],18:[function(e,t,r){"use strict";t.exports=function e(t,r){var n,a,o={},s={x:10};for("string"!=typeof t[0]&&"number"!=typeof t[0]||(a=t[0],s.x=25),r.x+=s.x,n=0;n<t.length;n++)"object"==typeof t[n]&&("[object Array]"===Object.prototype.toString.call(t[n])?(o.y=r.y,(r=e(t[n],r)).groups.push({x:r.xx,y:o.y,height:r.y-o.y,name:r.name})):(r.lanes.push(t[n]),r.width.push(r.x),r.y+=1));return r.xx=r.x,r.x-=s.x,r.name=a,r}},{}],19:[function(e,t,r){"use strict";var a=e("./render-assign.js"),o=e("./render-reg.js"),s=e("./render-signal.js");t.exports=function(e,t,r){var n=t.signal?s(e,t,r):t.assign?a(e,t):t.reg?o(e,t):["div",{}];return n[1].class="WaveDrom",n}},{"./render-assign.js":21,"./render-reg.js":27,"./render-signal.js":28}],20:[function(e,t,r){"use strict";var p=e("./arc-shape.js"),m=e("./render-label.js");t.exports=function(e,t,r,s){var d=["g",{id:"wavearcs_"+t}],h={};return Array.isArray(e)&&(e.map(function(e,t){var r,n,a,o=e.node;if(s.period=e.period?e.period:1,s.phase=(e.phase?2*e.phase:0)+s.xmin_cfg,o)for(a=o.split(""),r=0;a.length;)"."!==(n=a.shift())&&(h[n]={x:s.xs*(2*r*s.period*s.hscale-s.phase)+s.xlabel,y:t*s.yo+s.y0+.5*s.ys}),r+=1}),Array.isArray(r.edge)&&r.edge.map(function(e){var t,r,n,a,o,s,i,c=e.trim().split(/\s+/),l={words:c,label:e.substring(c[0].length).substring(1),from:c[0].substr(0,1),to:c[0].substr(-1,1),shape:c[0].slice(1,-1)},u=h[l.from],f=h[l.to];u&&f&&(r=(t=p(l,u,f)).lx,n=t.ly,d=d.concat([(a=l,o=u,s=f,i=t,["path",{id:"gmark_"+a.from+"_"+a.to,d:i.d||"M "+o.x+","+o.y+" "+s.x+","+s.y,style:i.style||"fill:none;stroke:#00F;stroke-width:1"}])]),l.label&&(d=d.concat([m({x:r,y:n},l.label)])))}),Object.keys(h).map(function(e){e===e.toLowerCase()&&0<h[e].x&&(d=d.concat([m({x:h[e].x,y:h[e].y},e+"")]))})),d}},{"./arc-shape.js":2,"./render-label.js":24}],21:[function(e,t,r){"use strict";var h=e("./insert-svg-template-assign");function p(e,t){var r,n,a;for(t.xmax=Math.max(t.xmax,t.x),r=t.y,a=e.length,n=1;n<a;n++)"[object Array]"===Object.prototype.toString.call(e[n])?t=p(e[n],{x:t.x+1,y:t.y,xmax:t.xmax}):(e[n]={name:e[n],x:t.x+1,y:t.y},t.y+=2);return e[0]={name:e[0],x:t.x,y:Math.round((r+(t.y-2))/2)},t.x--,t}function m(e,t){var r,n,a,o,s,i=["g"],c=[];if("[object Array]"===Object.prototype.toString.call(e)){for(n=e.length,c.push(e[0].name),c.push([32*(t-e[0].x),8*e[0].y]),r=1;r<n;r++)"[object Array]"===Object.prototype.toString.call(e[r])?c.push([32*(t-e[r][0].x),8*e[r][0].y]):c.push([32*(t-e[r].x),8*e[r].y]);for(i.push(function(e){var t,r,n,a,o,s,i,c,l,u=["g"],f=[],d=e.length;for(t=2;t<d;t++)f.push(e[t][1]);for(r=Math.min.apply(null,f),n=Math.max.apply(null,f),u.push(["g",{transform:"translate(16,0)"},["path",{d:"M  "+e[2][0]+","+r+" "+e[2][0]+","+n,class:"wire"}]]),t=2;t<d;t++)u.push(["g",["path",{d:"m  "+e[t][0]+","+e[t][1]+" 16,0",class:"wire"}]]);return u.push(["g",{transform:"translate("+e[1][0]+","+e[1][1]+")"},["title",e[0]],(a=e[0],o=r-e[1][1],s=n-e[1][1],l=" M 4,0 C 4,1.1 3.1,2 2,2 0.9,2 0,1.1 0,0 c 0,-1.1 0.9,-2 2,-2 1.1,0 2,0.9 2,2 z",s===o&&(o=-(s=4)),c={BUF:1,INV:1,AND:"&",NAND:"&",OR:"≥1",NOR:"≥1",XOR:"=1",XNOR:"=1",box:""}[a],(i={"~":"M -11,-6 -11,6 0,0 z m -5,6 5,0"+l,"=":"M -11,-6 -11,6 0,0 z m -5,6 5,0","&":"m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z","~&":"m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z"+l,"|":"m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z","~|":"m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z"+l,"^":"m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z","~^":"m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z"+l,"+":"m -8,5 0,-10 m -5,5 10,0 m 3,0 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z","*":"m -4,4 -8,-8 m 0,8 8,-8 m 4,4 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z"}[a])?["path",{class:"gate",d:i}]:c?["g",["path",{class:"gate",d:"m -16,"+(o-3)+" 16,0 0,"+(s-o+6)+" -16,0 z"+({INV:1,NAND:1,NOR:1,XNOR:1}[a]?l:"")}],["text",["tspan",{x:"-14",y:"4",class:"wirename"},c+""]]]:["text",["tspan",{x:"-14",y:"4",class:"wirename"},a+""]])]),u}(c)),r=1;r<n;r++)i.push(m(e[r],t))}else s=e.name,a=32*(t-e.x),o=8*e.y,i.push(["g",{transform:"translate("+a+","+o+")"},["title",s],["path",{d:"M 2,0 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z"}],["text",["tspan",{x:"-4",y:"4",class:"pinname"},s]]]);return i}t.exports=function(e,t){var r,n,a,o,s,i,c,l,u,f=["g"],d=["g"];for(c=t.assign.length,n={x:0,y:2,xmax:0},r=t.assign,i=0;i<c;i++)(n=p(r[i],n)).x++;for(a=n.xmax+3,i=0;i<c;i++)f.push(m(r[i],a));for(o=32*(a+1)+1,s=8*(n.y+1)-7,c=4*(a+1),u=n.y+1,i=0;i<=c;i++)for(l=0;l<=u;l++)d.push(["rect",{height:1,width:1,x:8*i-.5,y:8*l-.5,class:"grid"}]);return["svg",{id:"svgcontent_"+e,viewBox:"0 0 "+o+" "+s,width:o,height:s},h(),["g",{transform:"translate(0.5, 0.5)"},d,f]]}},{"./insert-svg-template-assign":11}],22:[function(e,t,r){"use strict";function s(e,t){for(var r,n=[],a=(e||"").split(""),o=0,s=!1;a.length;)"<"===(r=a.shift())&&(s=!0,r=a.shift()),">"===r&&(s=!1,r=a.shift()),o+=s?1:2*t.period,"|"===r&&n.push(["use",{"xlink:href":"#gap",transform:"translate("+t.xs*((o-(s?0:t.period))*t.hscale-t.phase)+")"}]);return n}t.exports=function(e,t,r){var n,a,o=[];if(e)for(n in e)r.period=e[n].period?e[n].period:1,r.phase=(e[n].phase?2*e[n].phase:0)+r.xmin_cfg,a=s(e[n].wave,r),o=o.concat([["g",{id:"wavegap_"+n+"_"+t,transform:"translate(0,"+(r.y0+n*r.yo)+")"}].concat(a)]);return["g",{id:"wavegaps_"+t}].concat(o)}},{}],23:[function(e,t,r){"use strict";var c=e("tspan");t.exports=function(e,r,n){var a,o,s,i=["g"];return e.forEach(function(e,t){i.push(["path",{id:"group_"+t+"_"+r,d:"m "+(e.x+.5)+","+(e.y*n.yo+3.5+n.yh0+n.yh1)+" c -3,0 -5,2 -5,5 l 0,"+(e.height*n.yo-16)+" c 0,3 2,5 5,5",style:"stroke:#0041c4;stroke-width:1;fill:none"}]),void 0!==e.name&&(a=e.x-10,o=n.yo*(e.y+e.height/2)+n.yh0+n.yh1,(s=c.parse(e.name)).unshift("text",{"text-anchor":"middle",class:"info","xml:space":"preserve"}),i.push(["g",{transform:"translate("+a+","+o+")"},["g",{transform:"rotate(270)"},s]]))}),i}},{tspan:37}],24:[function(e,t,r){"use strict";var n=e("tspan"),a=e("./text-width.js");t.exports=function(e,t){var r=a(t,8)+2;return["g",{transform:"translate("+e.x+","+e.y+")"},["rect",{x:-(r>>1),y:-5,width:r,height:10,style:"fill:#FFF;"}],["text",{"text-anchor":"middle",y:3,style:"font-size:8px;"}].concat(n.parse(t))]}},{"./text-width.js":32,tspan:37}],25:[function(e,t,r){"use strict";var s=e("./render-marks"),i=e("./render-arcs"),c=e("./render-gaps");t.exports=function(e,t,r,n,a,o){return[s(t,e,o,a)].concat(r.res).concat([i(n.lanes,e,a,o)]).concat([c(n.lanes,e,o)])}},{"./render-arcs":20,"./render-gaps":22,"./render-marks":26}],26:[function(e,t,r){"use strict";var m=e("tspan");function f(e,t,r){return e[t]&&e[t].text?[["text",{x:e.xmax*e.xs/2,y:r,fill:"#000","text-anchor":"middle","xml:space":"preserve"}].concat(m.parse(e[t].text))]:[]}function d(e,t,r,n,a,o,s){var i,c,l,u,f=1,d=0,h=[];if(void 0===e[t]||void 0===e[t][r])return[];if("string"==typeof(c=e[t][r]))c=c.trim().split(/\s+/);else if("number"==typeof c||"boolean"==typeof c)for(i=Number(c),c=[],u=0;u<s;u+=1)c.push(u+i);if("[object Array]"!==Object.prototype.toString.call(c))return[];if(0===c.length)return[];if(1===c.length)if(i=Number(c[0]),isNaN(i))h=c;else for(u=0;u<s;u+=1)h[u]=u+i;else if(2===c.length)if(i=Number(c[0]),f=Number(c[1]),2===(l=c[1].split(".")).length&&(d=l[1].length),isNaN(i)||isNaN(f))h=c;else for(i*=f,u=0;u<s;u+=1)h[u]=(f*u+i).toFixed(d);else h=c;var p=["g",{class:"muted","text-anchor":"middle","xml:space":"preserve"}];for(u=0;u<s;u+=1)p.push(["text",{x:u*a+n,y:o}].concat(m.parse(h[u])));return[p]}t.exports=function(e,t,r,n){var a,o=2*r.hscale,s=o*r.xs,i=r.xmax/o,c=e.length*r.yo,l=["g",{id:"gmarks_"+t}],u=["g",{style:"stroke:#888;stroke-width:0.5;stroke-dasharray:1,3"}];if(!n||!n.config||!1!==n.config.marks){for(a=0;a<1+i;a+=1)u.push(["line",{id:"gmark_"+a+"_"+t,x1:a*s,y1:0,x2:a*s,y2:c}]);l=l.concat([u])}return l.concat(f(r,"head",r.yh0?-33:-13)).concat(f(r,"foot",c+(r.yf0?45:25))).concat(d(r,"head","tick",0,s,-5,1+i)).concat(d(r,"head","tock",s/2,s,-5,i)).concat(d(r,"foot","tick",0,s,15+c,1+i)).concat(d(r,"foot","tock",s/2,s,15+c,i))}},{tspan:37}],27:[function(e,t,r){"use strict";var n=e("bit-field/lib/render");t.exports=function(e,t){return n(t.reg,t.config)}},{"bit-field/lib/render":35}],28:[function(e,t,r){"use strict";var c=e("./rec"),l=e("./lane"),u=e("./parse-config"),f=e("./parse-wave-lanes"),d=e("./render-groups"),h=e("./render-lanes"),p=e("./render-wave-lane"),m=e("./insert-svg-template");t.exports=function(e,t,r){!function(e,t,r,n){if(0===e){var a,o,s;for(a in n)break;o=n.default||n[a],t&&t.config&&t.config.skin&&n[t.config.skin]&&(o=n[t.config.skin]),s=o[3][1][2][1],r.xs=Number(s.width),r.ys=Number(s.height),r.xlabel=Number(s.x),r.ym=Number(s.y)}}(e,t,l,r),u(t,l);var n=c(t.signal,{x:0,y:0,xmax:0,width:[],lanes:[],groups:[]}),a=f(n.lanes,l),o=p(a,e,l),s=d(n.groups,e,l),i=o.glengths.reduce(function(e,t,r){return Math.max(e,t+n.width[r])},0);return l.xg=Math.ceil((i-l.tgo)/l.xs)*l.xs,m(e,t,l,r,a,h(e,a,o,n,t,l),s)}},{"./insert-svg-template":12,"./lane":13,"./parse-config":14,"./parse-wave-lanes":16,"./rec":18,"./render-groups":23,"./render-lanes":25,"./render-wave-lane":31}],29:[function(e,t,r){"use strict";var a=e("./render-any.js"),o=e("./create-element");t.exports=function(e,t,r,n){for(;r.childNodes.length;)r.removeChild(r.childNodes[0]);r.insertBefore(o(a(e,t,n)),null)}},{"./create-element":4,"./render-any.js":19}],30:[function(e,t,r){"use strict";var n=e("./render-wave-element");t.exports=function(e,t,r){n(e,t,document.getElementById(r+e),window.WaveSkin)}},{"./render-wave-element":29}],31:[function(e,t,r){"use strict";var l=e("tspan"),u=e("./text-width.js"),s=e("./find-lane-markers");function f(e,t){var r,n,a=[],o=[];if(e[1]){for(r=0;r<e[1].length;r+=1)a.push(["use",{"xlink:href":"#"+e[1][r],transform:"translate("+r*t.xs+")"}]);if(e[2]&&e[2].length&&(o=s(e[1])).length)for(n in o)e[2]&&void 0!==e[2][n]&&a.push(["text",{x:o[n]*t.xs+t.xlabel,y:t.ym,"text-anchor":"middle","xml:space":"preserve"}].concat(l.parse(e[2][n])))}return a}t.exports=function(e,t,r){var n,a,o,s=0,i=[],c=[];for(n=0;n<e.length;n+=1)(a=e[n][0][0])&&(o=0<(o=e[n][0][1])?Math.ceil(2*o)-2*o:-2*o,c.push(["g",{id:"wavelane_"+n+"_"+t,transform:"translate(0,"+(r.y0+n*r.yo)+")"},["text",{x:r.tgo,y:r.ym,class:"info","text-anchor":"end","xml:space":"preserve"}].concat(l.parse(a)),["g",{id:"wavelane_draw_"+n+"_"+t,transform:"translate("+o*r.xs+", 0)"}].concat(f(e[n],r))]),s=Math.max(s,(e[n][1]||[]).length),i.push(u(a,11)));return r.xmax=Math.min(s,r.xmax_cfg-r.xmin_cfg),r.xg=20,{glengths:i,res:c}}},{"./find-lane-markers":7,"./text-width.js":32,tspan:37}],32:[function(e,t,r){"use strict";var i=e("./char-width");t.exports=function(e,t){var r,n,a,o,s;for(t=t||11,n=e.length,r=s=0;r<n;r++)a=e.charCodeAt(r),void 0===(o=i.chars[a])&&(o=i.other),s+=o;return s*t/100}},{"./char-width":3}],33:[function(e,t,r){"use strict";t.exports={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/XML/1998/namespace"}},{}],34:[function(e,t,r){"use strict";window.WaveDrom=window.WaveDrom||{};var n=e("../package.json"),a=e("./process-all"),o=e("./eva"),s=e("./render-wave-form"),i=e("./editor-refresh");window.WaveDrom.ProcessAll=a,window.WaveDrom.RenderWaveForm=s,window.WaveDrom.EditorRefresh=i,window.WaveDrom.eva=o,window.WaveDrom.version=n.version},{"../package.json":40,"./editor-refresh":5,"./eva":6,"./process-all":17,"./render-wave-form":30}],35:[function(e,t,r){"use strict";var a=e("tspan"),g={2:0,3:80,4:170,5:45,6:126,7:215};function c(e,t){return"translate("+e+","+t+")"}function y(e,t,r){var n={};return t&&(n.x=t),r&&(n.y=r),["text",n].concat(a.parse(e))}function l(e,t,r){return"number"==typeof e&&t<e?0|e:r}function u(e,t,r){var n={};return t?(n.x1=t,n.x2=t+e):n.x2=e,r&&(n.y1=r,n.y2=r),["line",n]}function f(e,t,r){var n={};return t&&(n.x1=t,n.x2=t),r?(n.y1=r,n.y2=r+e):n.y2=e,["line",n]}function b(e,t,r,n,a){var o,s=["g",{}];if("number"!=typeof e)return y(e,t,r);for(o=0;o<a;o++)s.push(y(e>>o&1,t+n*(a/2-o-.5),r));return s}function n(e,d){var h=d.hspace/d.mod,p=["g",{transform:c(h/2,d.vspace/5)}],m=["g",{transform:c(h/2,d.vspace/2+4)}],v=["g",{transform:c(h/2,d.vspace)}],x=["g",{transform:c(0,d.vspace/4)}];return e.forEach(function(e){var t,r,n,a,o,s,i,c,l,u,f;if(t=0,r=d.mod-1,n=d.index*d.mod,a=(d.index+1)*d.mod-1,e.lsb/d.mod>>0===d.index)t=e.lsbm,n=e.lsb,e.msb/d.mod>>0===d.index&&(a=e.msb,r=e.msbm);else{if(e.msb/d.mod>>0!==d.index)return;a=e.msb,r=e.msbm}p.push(y(n,h*(d.mod-t-1))),t!==r&&p.push(y(a,h*(d.mod-r-1))),e.name&&m.push(b(e.name,h*(d.mod-(r+t)/2-1),0,h,e.bits)),void 0!==e.name&&void 0===e.type||x.push(["rect",{style:"fill-opacity:0.1"+(o=e.type,s=g[o],void 0!==s?";fill:hsl("+s+",100%,50%)":""),x:h*(d.mod-r-1),y:0,width:h*(r-t+1),height:d.vspace/2}]),void 0!==e.attr&&v.push((i=e,l=t,u=r,f=(c=h)*(d.mod-(u+l)/2-1),Array.isArray(i.attr)?i.attr.reduce(function(e,t,r){return null==t?e:e.concat([b(t,f,16*r,c,i.bits)])},["g",{}]):b(i.attr,f,0,c,i.bits)))}),["g",x,p,m,v]}function d(e,t){return["g",{transform:c(4.5,(t.lanes-t.index-1)*t.vspace+.5),"text-anchor":"middle","font-size":t.fontsize,"font-family":t.fontfamily||"sans-serif","font-weight":t.fontweight||"normal"},function(e,t){var r=t.hspace,n=t.vspace,a=t.mod,o=["g",{transform:c(0,n/4),stroke:"black","stroke-width":1,"stroke-linecap":"round"}];o.push(u(r)),o.push(f(n/2)),o.push(u(r,0,n/2));for(var s=t.index*t.mod,i=t.mod;i===t.mod||e.some(function(e){return e.lsb===s})?o.push(f(n/2,i*(r/a))):(o.push(f(n/16,i*(r/a))),o.push(f(n/16,i*(r/a),7*n/16))),s++,--i;);return o}(e,t),n(e,t)]}t.exports=function(e,t){(t="object"==typeof t?t:{}).vspace=l(t.vspace,19,80),t.hspace=l(t.hspace,39,800),t.lanes=l(t.lanes,0,1),t.bits=l(t.bits,4,32),t.fontsize=l(t.fontsize,5,14),t.bigendian=t.bigendian||!1;var r,n,a,o=16*e.reduce(function(e,t){return Math.max(e,Array.isArray(t.attr)?t.attr.length:0)},0),s=(r=t.hspace+9,n=(t.vspace+o)*t.lanes+5,["svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:n,viewBox:[0,0,r,n].join(" ")}]),i=0,c=t.bits/t.lanes;for(t.mod=0|c,e.forEach(function(e){e.lsb=i,e.lsbm=i%c,i+=e.bits,e.msb=i-1,e.msbm=e.msb%c}),a=0;a<t.lanes;a++)t.index=a,s.push(d(e,t));return s}},{tspan:37}],36:[function(e,t,r){"use strict";t.exports=function(e,t){var n,c="",l=function(e){return e};return 0<t&&(c="\n",n=" ".repeat(t),l=function(e){var t,r=[];return"string"!=typeof e?e:1===(t=e.split("\n")).length?n+e:(t.forEach(function(e){""!==e.trim()?r.push(n+e):r.push(e)}),r.join("\n"))}),function a(e){var o,s,i,t,r;return i=!(s=""),e.some(function(t,e,r){if(0===e)return o="<"+t,1===r.length||void 0;if(1===e){if((n=t)&&"[object Object]"===Object.prototype.toString.call(n))return Object.keys(t).forEach(function(e){o+=" "+e+'="'+t[e]+'"'}),2===r.length||void(o+=">");o+=">"}var n;switch(typeof t){case"string":case"number":case"boolean":case"undefined":return void(s+=t+c)}i=!1,s+=a(t)})?o+"/>"+c:i?o+(t=s.split("\n"),r=[],t.forEach(function(e){""!==e.trim()&&r.push(e)}),r.join("\n"))+"</"+e[0]+">"+c:o+c+l(s)+"</"+e[0]+">"+c}(e)}},{}],37:[function(e,t,r){"use strict";var n=e("./parse"),a=e("./reparse");r.parse=n,r.reparse=a},{"./parse":38,"./reparse":39}],38:[function(e,t,r){"use strict";var s=/<o>|<ins>|<s>|<sub>|<sup>|<b>|<i>|<tt>|<\/o>|<\/ins>|<\/s>|<\/sub>|<\/sup>|<\/b>|<\/i>|<\/tt>/;function i(r,e){e.add&&e.add.split(";").forEach(function(e){var t=e.split(" ");r[t[0]][t[1]]=!0}),e.del&&e.del.split(";").forEach(function(e){var t=e.split(" ");delete r[t[0]][t[1]]})}var c={"<o>":{add:"text-decoration overline"},"</o>":{del:"text-decoration overline"},"<ins>":{add:"text-decoration underline"},"</ins>":{del:"text-decoration underline"},"<s>":{add:"text-decoration line-through"},"</s>":{del:"text-decoration line-through"},"<b>":{add:"font-weight bold"},"</b>":{del:"font-weight bold"},"<i>":{add:"font-style italic"},"</i>":{del:"font-style italic"},"<sub>":{add:"baseline-shift sub;font-size .7em"},"</sub>":{del:"baseline-shift sub;font-size .7em"},"<sup>":{add:"baseline-shift super;font-size .7em"},"</sup>":{del:"baseline-shift super;font-size .7em"},"<tt>":{add:"font-family monospace"},"</tt>":{del:"font-family monospace"}};function l(n){return Object.keys(n).reduce(function(e,t){var r=Object.keys(n[t]);return 0<r.length&&(e[t]=r.join(" ")),e},{})}t.exports=function(e){var t,r,n,a,o;if(void 0===e)return[];if("number"==typeof e)return[e+""];if("string"!=typeof e)return[e];for(r=[],t={"text-decoration":{},"font-weight":{},"font-style":{},"baseline-shift":{},"font-size":{},"font-family":{}};;){if(-1===(n=e.search(s)))return r.push(["tspan",l(t),e]),r;if(0<n&&(o=e.slice(0,n),r.push(["tspan",l(t),o])),a=e.match(s)[0],i(t,c[a]),0===(e=e.slice(n+a.length)).length)return r}}},{}],39:[function(e,t,r){"use strict";var n=e("./parse");t.exports=function(e){var s=e.createElement;function t(e,t){var r=e[0],a=e[1],n=Object.keys(a).reduce(function(e,t){var r,n;return e[null===(n=(r=t).match(/(\w+)-(\w)(\w+)/))?r:n[1]+n[2].toUpperCase()+n[3]]=a[t],e},{}),o=e[2];return n.key=t,s(r,n,o)}return function(e){return n(e).map(t)}}},{"./parse":38}],40:[function(e,t,r){t.exports={name:"wavedrom",version:"2.2.0",description:"Digital timing diagram in your browser",homepage:"http://wavedrom.com",author:"alex.drom@gmail.com",license:"MIT",repository:{type:"git",url:"https://github.com/wavedrom/wavedrom.git"},bugs:{url:"https://github.com/wavedrom/wavedrom/issues"},main:"./lib",unpkg:"wavedrom.unpkg.js",files:["wavedrom.js","wavedrom.min.js","wavedrom.unpkg.js","LICENSE","lib/**","skins/**"],scripts:{test:"grunt",eslint:"eslint lib/*.js",unpkg:"browserify --standalone wavedrom lib/index.js > wavedrom.unpkg.js",cli:"{ echo '#!/usr/bin/env node' ; browserify --node bin/cli.js ; } > bin/wavedrom.js ; chmod +x bin/wavedrom.js",prepare:"npm run test && npm run unpkg",cover:"nyc -r=text -r=lcov mocha"},keywords:["waveform","verilog","RTL"],devDependencies:{"@drom/eslint-config":"^0.10.0",browserify:"^16.5.0",chai:"^4.2.0",eslint:"^5.16.0","fs-extra":"^8.0.1",grunt:"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^2.0.0","grunt-contrib-concat":"^1.0.1","grunt-contrib-uglify":"^4.0.1","grunt-eslint":"^21.0.0","js-beautify":"^1.10.2",jsof:"^0.3.2",json5:"^2.1.1",mocha:"^6.2.1",nyc:"^14.0.0",yargs:"^14.2.0"},dependencies:{"bit-field":"^1.0.3",onml:"^1.1.0",tspan:"^0.3.6"},eslintConfig:{extends:"@drom/eslint-config/eslint4/node4",rules:{camelcase:0},env:{browser:!0}}}},{}]},{},[34]);