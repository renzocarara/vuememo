(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about",instructions:"instructions"}[e]||e)+"."+{about:"d7b0bce6",instructions:"075b0e1c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,instructions:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",instructions:"instructions"}[e]||e)+"."+{about:"1bf2a42f",instructions:"a89c5459"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuememo/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23e9":function(e,t,n){},"2bb4":function(e,t,n){"use strict";var a=n("525a"),r=n.n(a);r.a},"3c8c":function(e,t,n){},"44fd":function(e,t,n){"use strict";var a=n("3c8c"),r=n.n(a);r.a},"499e":function(e,t,n){},"525a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"appclass",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"mb-0 pt-2"},[e._v("MemoVue")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/instructions"}},[e._v("Instructions")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1),n("my-footer")],1)])},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid my-footer"},[e._v(" © 2020 - Renzo Carara ")])},i=[],c=(n("609c"),n("2877")),l={},u=Object(c["a"])(l,s,i,!1,null,"6fbe65f5",null),d=u.exports,m={name:"App",components:{MyFooter:d}},f=m,p=(n("fef4"),Object(c["a"])(f,r,o,!1,null,"4da09357",null)),h=p.exports,b=(n("d3b7"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("game-table"),n("control-panel")],1)},C=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isGameCompleted?n("div",{key:"table-empty",staticClass:"d-flex justify-content-around flex-wrap game-table game-over"},[n("h1",[e._v("GAME OVER!")])]):n("div",{key:"table-full",staticClass:"d-flex justify-content-around flex-wrap game-table"},e._l(e.cards,(function(e,t){return n("card-box",{key:t,attrs:{card:e}})})),1)])],1)},k=[],O=n("5530"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cardbox"},[n("div",{staticClass:"d-flex h-100 justify-content-center align-content-center flex-column"},[n("transition",{attrs:{name:"bounce",mode:"out-in"}},[e.isUncoveredCard?n("img",{key:"open",staticClass:"uncovered-card h-100 img-box",attrs:{src:e.imgPath,alt:"card"}}):e.isCoveredCard?n("img",{key:"closed",staticClass:"covered-card h-100 img-box clickable",attrs:{src:e.coverPath,alt:"copertina della card"},on:{click:function(t){return e.handleClick()}}}):n("img",{key:"removed",staticClass:"h-100 img-box",attrs:{src:e.checkedPath,alt:"checked card"}})])],1)])},y=[],x=(n("4de4"),16),_=1,j=0,w=16,G=n("2f62"),P={name:"CardBox",data:function(){return{index:this.$vnode.key}},props:{card:Object},methods:Object(O["a"])(Object(O["a"])(Object(O["a"])({},Object(G["c"])(["incrementTotalClicks","setCardOpen","incrementOpenClicks","resetOpenClicks","setCardClosed","setCardRemoved","setGameCompleted"])),Object(G["b"])(["getOpenClicks"])),{},{handleClick:function(){if(!this.areTwoCardsOpen){var e=this;if(this.setCardOpen(this.index),this.incrementTotalClicks(),this.isOneCardOpen){this.incrementOpenClicks();for(var t=this.getGameTable,n=[],a=0;a<t.length;a++)if(t[a].status==_){var r={index:a,id:t[a].id};n.push(r)}n[0].id==n[1].id?setTimeout((function(){e.setCardRemoved(n[0].index),e.setCardRemoved(n[1].index),e.resetOpenClicks();var t=e.getGameTable,a=t.filter((function(e){return e.status===j}));0==a.length&&(console.log("gioco completato!"),e.setGameCompleted(!0))}),800):setTimeout((function(){e.setCardClosed(n[0].index),e.setCardClosed(n[1].index),e.resetOpenClicks()}),1e3)}else this.incrementOpenClicks()}}}),computed:Object(O["a"])(Object(O["a"])({},Object(G["b"])(["getTheme","getCardStatus","getGameTable"])),{},{imgPath:function(){return"assets/images/"+this.getTheme+"/"+this.card.id+".png"},coverPath:function(){return"assets/images/"+this.getTheme+"/cover.png"},checkedPath:function(){return"assets/images/"+this.getTheme+"/checked.png"},isUncoveredCard:function(){return this.getCardStatus(this.index)==_},isCoveredCard:function(){return this.getCardStatus(this.index)==j},isOneCardOpen:function(){return 1==this.getOpenClicks()},areTwoCardsOpen:function(){return 2==this.getOpenClicks()}})},E=P,S=(n("2bb4"),Object(c["a"])(E,T,y,!1,null,"4fb1452f",null)),A=S.exports,M={name:"GameTable",components:{CardBox:A},methods:{},computed:Object(O["a"])(Object(O["a"])({},Object(G["b"])({cards:"getGameTable",getGameCompleted:"getGameCompleted"})),{},{isGameCompleted:function(){return this.getGameCompleted}})},R=M,$=(n("682d"),Object(c["a"])(R,g,k,!1,null,"65d17671",null)),L=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control-panel clearfix"},[n("button",{staticClass:"btn-restart float-right",on:{click:e.initGame}},[e._v("Restart")]),n("div",{staticClass:"theme-selector mr-2 float-left"},[n("label",{staticClass:"theme-label",attrs:{for:""}},[e._v("Theme: ")]),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.theme=t.target.multiple?n:n[0]},e.selectTheme]}},[n("option",{attrs:{value:"mix"}},[e._v("Mix")]),n("option",{attrs:{value:"pugs"}},[e._v("Pugs")]),n("option",{attrs:{value:"logos"}},[e._v("Logos")])])]),n("div",{staticClass:"score-box float-left"},[n("span",[e._v("Clicks: ")]),n("br"),n("span",{staticClass:"score"},[e._v(e._s(e.getTotalClicks))])])])},B=[],H=(n("caad"),{name:"ControlPanel",data:function(){return{theme:this.$store.getters.getTheme}},mounted:function(){this.initGame()},methods:Object(O["a"])(Object(O["a"])({},Object(G["c"])(["initGameTable","setTheme","resetTotalClicks","resetOpenClicks","setGameCompleted"])),{},{selectTheme:function(){this.setTheme(this.theme)},initGame:function(){this.initGameTable(this.mixAndReset()),this.resetTotalClicks(),this.resetOpenClicks(),this.setGameCompleted(!1)},mixAndReset:function(){var e=0,t=x-1,n=[],a=[];while(n.length<x){var r=Math.floor(Math.random()*(t-e+1))+e;n.includes(r)||n.push(r)}for(var o=0;o<n.length;o++)n[o]>x/2-1&&(n[o]-=x/2);for(var s=0;s<x;s++){var i={status:j,id:n[s]};a.push(i)}return a}}),computed:Object(O["a"])({},Object(G["b"])(["getTotalClicks"]))}),I=H,U=(n("44fd"),Object(c["a"])(I,N,B,!1,null,"1a4e43ea",null)),q=U.exports,D={name:"HomePage",components:{GameTable:L,ControlPanel:q},methods:{},computed:{}},F=D,J=(n("d3f6"),Object(c["a"])(F,v,C,!1,null,"1bb32c81",null)),V=J.exports;a["a"].use(b["a"]);var z=[{path:"/",name:"Home",component:V},{path:"/instructions",name:"Instructions",component:function(){return n.e("instructions").then(n.bind(null,"dd5a"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],K=new b["a"]({mode:"history",base:"/vuememo/",routes:z}),Q=K;a["a"].use(G["a"]);var W=new G["a"].Store({state:{gameTable:[],theme:"mix",totalClicks:0,openClicks:0,gameCompleted:!1},getters:{getGameTable:function(e){return e.gameTable},getCardStatus:function(e){return function(t){return e.gameTable[t].status}},getTheme:function(e){return e.theme},getTotalClicks:function(e){return e.totalClicks},getOpenClicks:function(e){return e.openClicks},getGameCompleted:function(e){return e.gameCompleted}},mutations:{initGameTable:function(e,t){e.gameTable=t},setTheme:function(e,t){e.theme=t},incrementTotalClicks:function(e){e.totalClicks++},resetTotalClicks:function(e){e.totalClicks=0},setCardOpen:function(e,t){e.gameTable[t].status=_},setCardClosed:function(e,t){e.gameTable[t].status=j},setCardRemoved:function(e,t){e.gameTable[t].status=w},incrementOpenClicks:function(e){e.openClicks++},resetOpenClicks:function(e){e.openClicks=0},setGameCompleted:function(e,t){e.gameCompleted=t}},actions:{}});n("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:Q,store:W,render:function(e){return e(h)}}).$mount("#app")},"609c":function(e,t,n){"use strict";var a=n("499e"),r=n.n(a);r.a},"682d":function(e,t,n){"use strict";var a=n("9c50"),r=n.n(a);r.a},"956c":function(e,t,n){},"9c50":function(e,t,n){},d3f6:function(e,t,n){"use strict";var a=n("23e9"),r=n.n(a);r.a},fef4:function(e,t,n){"use strict";var a=n("956c"),r=n.n(a);r.a}});
//# sourceMappingURL=app.70363b21.js.map