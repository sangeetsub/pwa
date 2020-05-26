(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),c=(a(102),a(103),a(15)),i=a(161),u=a(164),s=a(180),m=a(171),d=a(179),f=a(169),E=a(177),v=a(181),g=a(168),p=a(178),h=Object(i.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},root:{formControl:{margin:e.spacing(3)},button:{margin:e.spacing(1,0,1,0)},flexGrow:1}}}));function b(){var e=h(),t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),b=Object(c.a)(i,2),w=b[0],y=b[1],x=Object(n.useState)(""),j=Object(c.a)(x,2),C=j[0],k=j[1],O=Object(n.useState)("male"),N=Object(c.a)(O,2),S=N[0],W=N[1],T=Object(n.useState)(""),A=Object(c.a)(T,2),F=A[0],G=A[1],M=Object(n.useState)(0),B=Object(c.a)(M,2),L=B[0],P=B[1];return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(u.a,{item:!0,xs:11,sm:8},l.a.createElement("h2",null,"Please enter your info down below to calculate your calories lost per day.")),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(s.a,{fullWidth:!0,id:"weight",type:"Number",label:"Weight (lbs)",variant:"outlined",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(s.a,{fullWidth:!0,id:"height",type:"Number",label:"Height (inches)",variant:"outlined",value:w,onChange:function(e){return y(e.target.value)}})),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(s.a,{fullWidth:!0,id:"age",type:"Number",label:"Age",variant:"outlined",value:C,onChange:function(e){return k(e.target.value)}})),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(g.a,{variant:"outlined",className:e.formControl,fullWidth:!0},l.a.createElement(v.a,{htmlFor:"outlined-age-native-simple"},"Active Label"),l.a.createElement(p.a,{native:!0,value:F,onChange:function(e){G(e.target.value)},inputProps:{name:"activeLevel",id:"outlined-age-native-simple"}},l.a.createElement("option",{value:"","aria-label":"None"}),l.a.createElement("option",{value:1.2},"Little to None"),l.a.createElement("option",{value:1.37},"Slightly"),l.a.createElement("option",{value:1.55},"Moderate"),l.a.createElement("option",{value:1.725},"Very"),l.a.createElement("option",{value:1.9},"Extra")))),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(d.a,{row:!0,"aria-label":"gender",name:"gender1",value:S,onChange:function(e){return W(e.target.value)},className:"Center"},l.a.createElement(f.a,{value:"female",control:l.a.createElement(E.a,null),label:"Female"}),l.a.createElement(f.a,{value:"male",control:l.a.createElement(E.a,null),label:"Male"}))),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(m.a,{variant:"outlined",color:"primary",className:e.button,onClick:function(){P("male"===S?((66+6.2*r+12.7*w-6.76*C)*(F||1)).toFixed(2):((655.1+4.35*r+4.7*w-4.7*C)*(F||1)).toFixed(2))}},"Calculate")),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(m.a,{onClick:function(){k(""),W("male"),y(""),o(""),G(""),P(0)},color:"secondary"},"Clear")),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement("h2",null,"You've lost : ".concat(L," calories today.")),l.a.createElement("p",null,"\xa9 Sangeet Subedi, 2020"))))}var w=a(173),y=a(174),x=a(129),j=a(170),C=a(78),k=a.n(C),O=a(79),N=a.n(O),S=a(175),W=a(81),T=a(43),A=a(42),F=a.n(A),G=a(166);var M=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(u.a,{container:!0,justify:"center",alignContent:"center",spacing:2},l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(G.a,{fullWidth:!0,type:"text",onChange:function(e){return o(e.target.value)},value:r})),l.a.createElement(u.a,{item:!0,xs:11,sm:7},l.a.createElement(m.a,{color:"primary",variant:"outlined",onClick:function(){var t={action:r};t.action&&t.action.length>0?F.a.post("http://localhost:8000/api/todos",t).then((function(t){t.data&&(e.getTodos(),o(""))})):console.log("input field required")}},"Add Todo")))},B=a(130),L=a(172),P=a(128),R=a(77),I=a.n(R);var U=function(e){var t=Object(i.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},listItem:{backgroundColor:"#F0F8FF"}}}))(),a=e.todos,n=e.deleteTodo;return l.a.createElement("div",null,a&&a.length>0?a.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{container:!0,justify:"center",alignContent:"center"},l.a.createElement(u.a,{item:!0,xs:10,sm:6,className:t.listItem},l.a.createElement(B.a,{key:e._id},l.a.createElement(x.a,null,e.action)),l.a.createElement(L.a,null)),l.a.createElement(u.a,{item:!0,xs:1,sm:1},l.a.createElement(m.a,{key:e._id,onClick:function(){return n(e._id)},color:"primary",variant:"outlined"},l.a.createElement(I.a,null)," Delete"))),l.a.createElement("br",null))})):l.a.createElement(P.a,null,l.a.createElement(B.a,null," No Todo(s)")))};var _=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){F.a.get("http://localhost:8000/api/todos").then((function(e){e.data&&r(e.data)})).catch((function(e){return console.log(e)}))};return l.a.createElement("div",{className:"Center"},l.a.createElement("h1",null," My Todo(s) "),l.a.createElement(M,{getTodos:o}),l.a.createElement("br",null),l.a.createElement(U,{todos:a,deleteTodo:function(e){F.a.delete("http://localhost:8000/api/todos/".concat(e)).then((function(e){e.data&&o()})).catch((function(e){return console.log(e)}))}}))},z=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navigations:{color:"#ffffff",flexGrow:.02},flexGrow:{flexGrow:1}}}));var J=function(){var e=z(),t=l.a.useState(!0),a=Object(c.a)(t,2),n=a[0],r=(a[1],l.a.useState(null)),o=Object(c.a)(r,2),i=o[0],u=o[1],s=Boolean(i),m=function(){u(null)};return l.a.createElement("div",{className:e.root},l.a.createElement(w.a,{position:"static"},l.a.createElement(y.a,null,l.a.createElement(j.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(k.a,null)),l.a.createElement(T.b,{to:"/",className:e.navigations},l.a.createElement(x.a,{variant:"h6"},"Calclories")),l.a.createElement(T.b,{to:"/todos",className:e.navigations},l.a.createElement(x.a,{variant:"h6"},"Todo's")),l.a.createElement("div",{className:e.flexGrow}),n&&l.a.createElement("div",null,l.a.createElement(j.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},l.a.createElement(N.a,null)),l.a.createElement(W.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:m},l.a.createElement(S.a,{onClick:m},"Profile"),l.a.createElement(S.a,{onClick:m},"My account"))))))},q=a(10),D=a(80),H=a(176);var V=function(){var e=Object(D.a)({palette:{primary:{main:"#00838f",light:"#4fb3bf",dark:"#005662"},secondary:{main:"#26c6da",light:"#6ff9ff",dark:"#0095a8"}}});return l.a.createElement(H.a,{theme:e},l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement(J,null)),l.a.createElement("div",{className:"App"},l.a.createElement(q.c,null,l.a.createElement(q.a,{path:"/todos"},l.a.createElement(_,null)),l.a.createElement(q.a,{path:"/"},l.a.createElement(b,null))))))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()},97:function(e,t,a){e.exports=a(127)}},[[97,1,2]]]);
//# sourceMappingURL=main.ce5a879a.chunk.js.map