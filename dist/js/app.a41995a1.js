(function(i){function e(e){for(var n,a,s=e[0],I=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in I)Object.prototype.hasOwnProperty.call(I,n)&&(i[n]=I[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var i,e=0;e<o.length;e++){for(var t=o[e],n=!0,s=1;s<t.length;s++){var I=t[s];0!==r[I]&&(n=!1)}n&&(o.splice(e--,1),i=a(a.s=t[0]))}return i}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=i,a.c=n,a.d=function(i,e,t){a.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},a.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(i,e){if(1&e&&(i=a(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)a.d(t,n,function(e){return i[e]}.bind(null,n));return t},a.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return a.d(e,"a",e),e},a.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],I=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=I;o.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"54cd":function(i,e,t){"use strict";t("f007")},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{placeholder:"Cerca un film..."},on:{searched:i.searchUserRequest}}),t("Main",{attrs:{movies:i.movies,series:i.series}})],1)},o=[],a=t("bc3a"),s=t.n(a),I=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("header",[t("h1",[i._v("BOOLFLIX")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:i.queryField,expression:"queryField",modifiers:{trim:!0}}],attrs:{type:"text",name:"search",placeholder:i.placeholder||"Scrivi qui..."},domProps:{value:i.queryField},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.$emit("searched",i.queryField)},input:function(e){e.target.composing||(i.queryField=e.target.value.trim())},blur:function(e){return i.$forceUpdate()}}}),t("button",{attrs:{type:"button"},on:{click:function(e){return i.$emit("searched",i.queryField)}}},[i._v("Cerca")])])},c=[],u={name:"Header",props:["placeholder"],data:function(){return{queryField:""}}},l=u,f=t("2877"),A=Object(f["a"])(l,I,c,!1,null,"0f6b1e72",null),v=A.exports,p=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("main",{staticClass:"container"},[!i.movies.lenght&!i.series.length?t("div",{attrs:{id:"empty-sections"}},[t("h2",[i._v("Cerca un film o una serie...")])]):t("div",[i.movies.length?t("section",{attrs:{id:"movies-list"}},[t("h2",[i._v("Movies")]),t("div",{staticClass:"row text-center"},i._l(i.movies,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)]):i._e(),i.series.length?t("section",{attrs:{id:"series-list"}},[t("h2",[i._v("Series")]),t("div",{staticClass:"row text-center"},i._l(i.series,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)]):i._e()])])},d=[],g=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("ul",{staticClass:"col-3"},[t("li",[t("h4",[i._v(i._s(i.item.title||i.item.name))])]),t("li",[t("h6",[i._v(i._s(i.item.original_title||i.item.original_name))])]),t("li",[i.flags.includes(i.item.original_language)?t("img",{attrs:{src:i.flagSrc,alt:i.item.original_language}}):t("span",[i._v(i._s(i.item.original_language))])]),t("li",[i._v(" "+i._s(i.item.vote_average)+" "),t("i",{staticClass:"fa-solid fa-star"})])])},m=[],h={name:"Card",props:["item"],data:function(){return{flags:["it","en"]}},computed:{flagSrc:function(){return t("b967")("./".concat(this.item.original_language,".png"))}}},y=h,w=(t("54cd"),Object(f["a"])(y,g,m,!1,null,"5cf6f066",null)),C=w.exports,E={name:"Main",components:{Card:C},props:["movies","series"]},O=E,b=(t("92d5"),Object(f["a"])(O,p,d,!1,null,"075eb8b4",null)),j=b.exports,M={name:"App",components:{Header:v,Main:j},data:function(){return{movies:[],series:[],apiKey:"9165cfcc7a4de7472e23d49699f35185"}},methods:{searchUserRequest:function(i){var e=this;if(!i)return this.movies=[],void(this.series=[]);var t={params:{api_key:this.apiKey,query:i,language:"it-IT"}};s.a.get("https://api.themoviedb.org/3/search/movie",t).then((function(i){e.movies=i.data.results})),s.a.get("https://api.themoviedb.org/3/search/tv",t).then((function(i){e.series=i.data.results}))}}},x=M,F=(t("5c0b"),Object(f["a"])(x,r,o,!1,null,null,null)),B=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(B)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},"92d5":function(i,e,t){"use strict";t("d979")},"9c0c":function(i,e,t){},b967:function(i,e,t){var n={"./en.png":"17b5","./it.png":"e33f"};function r(i){var e=o(i);return t(e)}function o(i){if(!t.o(n,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=o,i.exports=r,r.id="b967"},d979:function(i,e,t){},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},f007:function(i,e,t){}});
//# sourceMappingURL=app.a41995a1.js.map