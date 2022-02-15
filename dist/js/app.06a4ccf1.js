(function(e){function t(t){for(var n,o,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"39e8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{placeholder:"Cerca un film..."},on:{searched:e.searchUserRequest}}),r("Main",{attrs:{movies:e.movies,series:e.series}})],1)},a=[],o=r("bc3a"),s=r.n(o),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("BOOLFLIX")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.queryField,expression:"queryField",modifiers:{trim:!0}}],attrs:{type:"text",name:"search",placeholder:e.placeholder||"Scrivi qui..."},domProps:{value:e.queryField},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("searched",e.queryField)},input:function(t){t.target.composing||(e.queryField=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("button",{attrs:{type:"button"},on:{click:function(t){return e.$emit("searched",e.queryField)}}},[e._v("Cerca")])])},l=[],c={name:"Header",props:["placeholder"],data:function(){return{queryField:""}}},d=c,p=r("2877"),f=Object(p["a"])(d,u,l,!1,null,"0f6b1e72",null),v=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[!e.movies.lenght&!e.series.length?r("div",{attrs:{id:"empty-sections"}},[r("h2",[e._v("Cerca un film o una serie...")])]):r("div",[e.movies.length?r("section",{attrs:{id:"movies-list"}},[r("h2",[e._v("Movies")]),e._l(e.movies,(function(e){return r("Card",{key:e.id,attrs:{item:e}})}))],2):e._e(),e.series.length?r("section",{attrs:{id:"series-list"}},[r("h2",[e._v("Series")]),e._l(e.series,(function(e){return r("Card",{key:e.id,attrs:{item:e}})}))],2):e._e()])])},h=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row text-center"},[r("div",{staticClass:"card col-3"},[r("ul",[r("li",[e._v(e._s(e.item.title||e.item.name))]),r("li",[e._v(e._s(e.item.original_title||e.original_name))]),r("li",[e._v(e._s(e.item.original_language))]),r("li",[e._v(e._s(e.item.vote_average))])])])])},_=[],b={name:"Card",props:["item"]},g=b,O=(r("e2a4"),Object(p["a"])(g,y,_,!1,null,"94c37112",null)),x=O.exports,j={name:"Main",components:{Card:x},props:["movies","series"]},w=j,k=(r("8dd9"),Object(p["a"])(w,m,h,!1,null,"409b3b64",null)),q=k.exports,C={name:"App",components:{Header:v,Main:q},data:function(){return{movies:[],series:[],apiKey:"9165cfcc7a4de7472e23d49699f35185"}},methods:{searchUserRequest:function(e){var t=this;if(!e)return this.movies=[],void(this.series=[]);var r={params:{api_key:this.apiKey,query:e,language:"it-IT"}};s.a.get("https://api.themoviedb.org/3/search/movie",r).then((function(e){t.movies=e.data.results})),s.a.get("https://api.themoviedb.org/3/search/tv",r).then((function(e){t.series=e.data.results}))}}},F=C,M=Object(p["a"])(F,i,a,!1,null,null,null),P=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"8dd9":function(e,t,r){"use strict";r("39e8")},b109:function(e,t,r){},e2a4:function(e,t,r){"use strict";r("b109")}});
//# sourceMappingURL=app.06a4ccf1.js.map