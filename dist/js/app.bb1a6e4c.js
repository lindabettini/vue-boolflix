(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},o=[],i=n("bc3a"),u=n.n(i),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("BOOLFLIX")]),n("input",{attrs:{type:"text",name:"search",id:""}}),n("button",{attrs:{type:"button"}},[e._v("Cerca")])])}],s={name:"Header"},p=s,f=n("2877"),d=Object(f["a"])(p,c,l,!1,null,"34b0ecc0",null),v=d.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{attrs:{id:"movies-list"}},[n("ul",[n("li",[e._v("ciao")])])]),n("section",{attrs:{id:"series-list"}},[n("ul",[n("li",[e._v("ciai")])])])])}],b={name:"Main"},y=b,_=Object(f["a"])(y,h,m,!1,null,"a86f10da",null),g=_.exports,O={name:"App",components:{Header:v,Main:g},data:function(){return{movies:[],apiKey:"9165cfcc7a4de7472e23d49699f35185",query:"games"}},methods:{searchMovie:function(){var e=this,t={params:{apiKey:this.apiKey,query:this.query,language:"it-IT"}};u.a.get("https://api.themoviedb.org/3/search/movies",t).then((function(t){e.movies=t.data.results}))}}},j=O,w=Object(f["a"])(j,a,o,!1,null,null,null),x=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.bb1a6e4c.js.map