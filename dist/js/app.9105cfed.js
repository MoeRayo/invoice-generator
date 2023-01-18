(function(){"use strict";var e={5043:function(e,t,n){var r=n(6369),i=function(){var e=this,t=e._self._c;return t("div",[t("TheNavBar"),t("router-view")],1)},o=[],a=function(){var e=this,t=e._self._c;return"dashboard"!==e.$route.name?t("div",{staticClass:"bb b--white-30 ph4 pv3 bg-dark-blue"},[t("section",{staticClass:"w-100-sm w-80-m w-70-l center flex justify-between"},[e._m(0),t("nav",{staticClass:"flex-grow flex items-center"},[t("router-link",{staticClass:"f4 link dib white dim mr3 mr4-ns",attrs:{to:"/signin"}},[e._v(" Sign In")]),t("router-link",{staticClass:"f4 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-50",attrs:{to:"/signup"}},[e._v("Sign Up")])],1)])]):e._e()},u=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"link black no-underline flex items-center",attrs:{href:"/"}},[t("h1",{staticClass:"mt2 mb0 fw1 f2 white hover-light-blue"},[e._v("Invoice Generator")])])}],s=n(1001),l={},c=(0,s.Z)(l,a,u,!1,null,null,null),f=c.exports,d={components:{TheNavBar:f}},h=d,p=(0,s.Z)(h,i,o,!1,null,null,null),v=p.exports,b=n(2631),m=function(){var e=this;e._self._c;return e._m(0)},g=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-lightest-blue"},[t("header",{staticClass:"sans-serif vh-100"},[t("div",{staticClass:"mw9 center pa4 pt5-ns ph7-l"},[t("h3",{staticClass:"f2 f1-m f-headline-l measure-narrow lh-title mv0"},[t("span",{staticClass:"bg-black-90 lh-copy white pa1 tracked-tight"},[e._v(" Generate a free and professional Invoice. ")])]),t("h4",{staticClass:"f4 fw1 lh-copy georgia i"},[e._v(" Use our simplified, template to generate Invoices. ")]),t("a",{staticClass:"f6 ttu tracked black-80 bg-dark-blue pa3 br3 white bb link b--black hover-bg-black bg-animate pointer",attrs:{href:"/signin"}},[e._v(" Generate Invoice ")])])])])}],w={name:"HomeView"},y=w,k=(0,s.Z)(y,m,g,!1,null,null,null),_=k.exports;r["default"].use(b.ZP);const C=[{path:"/",name:"home",component:_},{path:"/signin",name:"signin",component:()=>n.e(17).then(n.bind(n,5645))},{path:"/signup",name:"signup",component:()=>n.e(17).then(n.bind(n,4122))},{path:"/dashboard/:id",name:"dashboard",component:()=>n.e(966).then(n.bind(n,4370))}],O=new b.ZP({mode:"history",base:"/",routes:C});var j=O,x=n(7131),T=n.n(x),E=n(7692),S=n.n(E);r["default"].config.productionTip=!1,new r["default"]({router:j,render:e=>e(v)}).$mount("#app"),r["default"].use(S(),{configuration:{cloudName:"moerayo",secure:!0}}),r["default"].use(T())}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<a&&(a=o));if(u){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{17:"sigin",966:"dashboard"}[e]+"."+{17:"1345ebbe",966:"83360447"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/dashboard.b4fc2d27.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="invoice-generator:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var u,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[i];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return i();e(r,u,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={966:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],u=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var c=s(n)}for(t&&t(r);l<a.length;l++)o=a[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkinvoice_generator"]=self["webpackChunkinvoice_generator"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5043)}));r=n.O(r)})();
//# sourceMappingURL=app.9105cfed.js.map