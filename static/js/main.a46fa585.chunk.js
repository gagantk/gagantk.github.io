(this["webpackJsonpgagantk.github.io"]=this["webpackJsonpgagantk.github.io"]||[]).push([[0],{21:function(e,t,n){e.exports={AppHeader:"URLShortener_AppHeader__3uLF_",Form:"URLShortener_Form__GTpf3",H1:"URLShortener_H1__36GrO",url:"URLShortener_url__2RkfX",custom:"URLShortener_custom__141Zj",post:"URLShortener_post__3TiQK"}},31:function(e,t,n){e.exports={App:"Home_App__2iMFO",AppLogo:"Home_AppLogo__3tgIG","App-logo-spin":"Home_App-logo-spin__2vFLc",AppHeader:"Home_AppHeader__1F82l",AppLink:"Home_AppLink__3u0NW"}},36:function(e,t,n){e.exports={card:"Card_card__2M99b"}},42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),a=n(34),s=n.n(a),o=(n(42),n(9)),i=(n(43),n(31)),u=n.n(i),p=n(11),j=function(){return Object(p.jsx)("div",{className:u.a.App,children:Object(p.jsx)("header",{className:u.a.AppHeader,children:Object(p.jsx)("h1",{children:Object(p.jsx)("i",{children:"Coming soon..."})})})})},l=n(0),b=n.n(l),d=n(3),h=n(12),O=n(18),x=n(35),m=Object(x.a)({apiKey:"AIzaSyBLkaIT7BKwJj2ALTcQ3hCofkVCr8ApCVU",authDomain:"url-shortener-890ec.firebaseapp.com",databaseURL:"https://url-shortener-890ec-default-rtdb.firebaseio.com",projectId:"url-shortener-890ec",storageBucket:"url-shortener-890ec.appspot.com",messagingSenderId:"909241385168",appId:"1:909241385168:web:07204197ad46d562ae9ed5"}),f=Object(O.c)(m),g=function(){var e=Object(o.g)().shortCode,t=Object(r.useState)(""),n=Object(h.a)(t,2),c=n[0],a=n[1],s=Object(o.f)();return Object(r.useEffect)((function(){if(""!==c)return window.location.replace(c)}),[c]),function(){var t=Object(d.a)(b.a.mark((function t(){var n,r,c,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(O.a)(f,"urls",e),t.next=3,Object(O.b)(n);case 3:if((r=t.sent).exists()){t.next=6;break}return t.abrupt("return",s("/"));case 6:c=r.data(),o=c.url,a(o);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(p.jsxs)("div",{children:["Redirecting to ",c,"..."]})},_=n(21),v=n.n(_),L=n(36),k=n.n(L),A=function(e){return Object(p.jsx)("div",{className:k.a.card,children:e.children})},S=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(h.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(),j=Object(h.a)(u,2),l=j[0],x=j[1],m=function(){var e=Object(d.a)(b.a.mark((function e(t){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==n.length){e.next=3;break}return e.abrupt("return",alert("URL cannot be empty"));case 3:return 0===o.length&&(r=g()),e.next=6,Object(O.b)(Object(O.a)(f,"urls",0===o.length?r:o));case 6:if(!e.sent.exists()){e.next=11;break}console.log("Already exists!"),e.next=15;break;case 11:return c=Object(O.a)(f,"urls",0===o.length?r:o),e.next=14,Object(O.d)(c,{url:n});case 14:x(Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["Done! https://gagantk.me/#/s/",o]}),Object(p.jsx)("button",{className:v.a.copy,onClick:function(){return navigator.clipboard.writeText("https://gagantk.me/#/s/".concat(o))},children:"Copy"})]}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return i(Math.random().toString(36).substring(2,7)),o};return Object(p.jsx)("div",{className:v.a.AppHeader,children:Object(p.jsxs)(A,{children:[Object(p.jsx)("div",{className:v.a.H1,children:Object(p.jsx)("h1",{children:"URL Shortener"})}),Object(p.jsxs)("form",{onSubmit:m,className:v.a.Form,children:[Object(p.jsxs)("div",{className:v.a.url,children:[Object(p.jsx)("input",{type:"text",minLength:"1",value:n,onChange:function(e){return c(e.target.value.trim())},placeholder:"https://example.com"}),Object(p.jsx)("button",{children:"Shorten!"})]}),Object(p.jsxs)("div",{className:v.a.custom,children:["https://gagantk.me/#/s/",Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){return i(e.target.value.trim())},placeholder:"Enter custom URL"})]})]}),Object(p.jsx)("div",{className:v.a.post,children:l})]})})};var C=function(){return Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",element:Object(p.jsx)(j,{})}),Object(p.jsx)(o.a,{path:"/url-shortener",element:Object(p.jsx)(S,{})}),Object(p.jsx)(o.a,{path:"/s/:shortCode",element:Object(p.jsx)(g,{})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},R=n(27);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(R.a,{children:Object(p.jsx)(C,{})})}),document.getElementById("root")),H()}},[[47,1,2]]]);
//# sourceMappingURL=main.a46fa585.chunk.js.map