(this["webpackJsonpsevengalaxies-app"]=this["webpackJsonpsevengalaxies-app"]||[]).push([[0],{17:function(e,n,t){e.exports=t.p+"static/media/Logo_wide.eda6be1a.png"},18:function(e,n,t){e.exports=t.p+"static/media/Logo.31fb0142.png"},20:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),o=t.n(c),l=(t(6),t(7),t(17)),i=t.n(l),u=t(8),s=t(1),m=t(18),v=t.n(m);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(u.b,{to:"/sevengalaxies-app/Game"},r.a.createElement("img",{src:v.a,alt:"Seven Galaxies",width:"80%"}))))},d=t(13),E=t(4);var p=function(){var e=Object(a.useState)({_id:1,nivel:1,energia:1}),n=Object(E.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(!1),l=Object(E.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(1),m=Object(E.a)(s,2),v=m[0],f=m[1],d=Object(a.useState)(1),p=Object(E.a)(d,2),g=p[0],b=p[1],h=Object(a.useState)(1),k=Object(E.a)(h,2),w=k[0],N=k[1],O=Object(a.useState)(1),j=Object(E.a)(O,2),x=j[0],C=j[1];function R(e,n){"nivel"===e?f((function(e){return e+n<0?0:e+n>10?10:e+n})):N((function(e){return e+n<0?0:e+n>10?10:e+n}))}function S(e,n){"nivel"===e?(b((function(e){return e+n<0?0:e+n>10?10:e+n})),g>0&&g<10&&f((function(e){return e+n<0?0:e+n>10?10:e+n}))):(C((function(e){return e+n<0?0:e+n>10?10:e+n})),x>0&&x<10&&N((function(e){return e+n<0?0:e+n>10?10:e+n})))}function A(e,n){var a=g,r=x;e&&a++,n&&r++,f(a),b(a),N(r),C(r),c({_id:t._id+1,nivel:a,energia:r}),u(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Rodada"},i?r.a.createElement("div",{className:"Rodada-escolha"},r.a.createElement("button",{onClick:function(){return A(!0,!1)}}," + Nivel "),r.a.createElement("button",{onClick:function(){return A(!1,!0)}}," + Energia ")):r.a.createElement("button",{onClick:function(){t._id+1<=2?A(!0,!0):u(!0)}}," Nova Rodada "),r.a.createElement("div",{className:"Rodada-count"},r.a.createElement("p",null," ",t._id," "))),r.a.createElement("div",{className:"Reserva"},r.a.createElement("header",null,r.a.createElement("strong",null," N\xedvel (N) ")),r.a.createElement("div",{className:"Reserva-movel"},r.a.createElement("button",{onClick:function(){return R("nivel",-1)}}," - "),r.a.createElement("p",null," ",v," "),r.a.createElement("button",{onClick:function(){return R("nivel",1)}}," + ")),r.a.createElement("div",{className:"Reserva-conquista"},r.a.createElement("button",{onClick:function(){return S("nivel",-1)}}," - "),r.a.createElement("p",null," ",g," "),r.a.createElement("button",{onClick:function(){return S("nivel",1)}}," + "))),r.a.createElement("div",{className:"Reserva"},r.a.createElement("header",null,r.a.createElement("strong",null," Energia (E) ")),r.a.createElement("div",{className:"Reserva-movel"},r.a.createElement("button",{onClick:function(){return R("energia",-1)}}," - "),r.a.createElement("p",null," ",w," "),r.a.createElement("button",{onClick:function(){return R("energia",1)}}," + ")),r.a.createElement("div",{className:"Reserva-conquista"},r.a.createElement("button",{onClick:function(){return S("energia",-1)}}," - "),r.a.createElement("p",null," ",x," "),r.a.createElement("button",{onClick:function(){return S("energia",1)}}," + "))))};var g=function(){var e=Object(a.useState)(30),n=Object(E.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),l=Object(E.a)(o,2),i=l[0],u=l[1];function s(e){c((function(n){return n+e<0?0:n+e>30?30:n+e})),u(i.map((function(n){return n.marco>=t+e&&"OK"!==n.text?Object(d.a)({},n,{on:!0}):n})))}function m(){var e=i.filter((function(e){return e.on})).length;return e>0?r.a.createElement("p",{className:"Aviso"}," Compre ",e," cccard",e>1&&"s","!"):r.a.createElement("p",{className:"Aviso"}," ",r.a.createElement("br",null)," ")}return Object(a.useEffect)((function(){u([{marco:20,text:20,on:!1},{marco:10,text:10,on:!1},{marco:5,text:5,on:!1}])}),[]),r.a.createElement("main",{className:"list-Reserva"},r.a.createElement(p,null),r.a.createElement("div",{className:"Fortaleza"},r.a.createElement("header",null,r.a.createElement("strong",null," Fortaleza ")),r.a.createElement("div",{className:"Fortaleza-Vida"},r.a.createElement("button",{onClick:function(){return s(-1)}}," - "),r.a.createElement("p",null," ",t," "),r.a.createElement("button",{onClick:function(){return s(1)}}," + ")),r.a.createElement(m,null),r.a.createElement("ul",{className:"Compra"},i.map((function(e){return r.a.createElement("div",{key:e.marco},r.a.createElement("button",{onClick:function(){return function(e){e.on&&"OK"!==e.text&&u(i.map((function(n){return n.marco===e.marco&&n.on?Object(d.a)({},n,{text:"OK",on:!1}):n})))}(e)}}," ",e.text," "))})))))};function b(){return r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/sevengalaxies-app/",exact:!0,component:f}),r.a.createElement(s.a,{path:"/sevengalaxies-app/Game",component:g})))}var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,alt:"Seven Galaxies"})),r.a.createElement(b,null))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sevengalaxies-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/sevengalaxies-app","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()},6:function(e,n,t){},7:function(e,n,t){}},[[20,1,2]]]);
//# sourceMappingURL=main.1eeba2f7.chunk.js.map