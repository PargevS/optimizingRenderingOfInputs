(this["webpackJsonptest-app-1"]=this["webpackJsonptest-app-1"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),s=a.n(r),c=(a(12),a(2)),u=a(6),i=a(7),o=a(5),b=a.n(o),j=(a(13),a(0)),d=function(e){var t=e.idName,a=e.elClassName,n=e.labelText,l=Object(i.a)(e,["idName","elClassName","labelText"]),r=b()("input-wrapper",a);return console.log(t),Object(j.jsx)("div",{className:r,children:Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("input",Object(u.a)({name:t,type:"text"},l))]})})};d.defaultProps={elClassName:"",labelText:""};var f=l.a.memo(d,(function(e,t){if(e.value===t.value)return!0})),m=(a(15),a(16),function(e){var t=e.data,a=Object(n.useState)(0),l=Object(c.a)(a,2),r=l[0],s=l[1];return Object(n.useEffect)((function(){if(t.length){var e=0;t.forEach((function(t){return e+=t})),s(e),console.log("Total = ",e)}}),[t]),Object(j.jsxs)("div",{className:"total",children:["Sum of the addition of fields: ",Object(j.jsx)("span",{children:r})]})});m.defaultProps={data:[]};var p=m;var O=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),s=Object(c.a)(r,2),u=s[0],i=s[1],o=Object(n.useState)(0),b=Object(c.a)(o,2),d=b[0],m=b[1],O=Object(n.useState)(0),x=Object(c.a)(O,2),v=x[0],N=x[1],h=Object(n.useState)(0),y=Object(c.a)(h,2),g=y[0],T=y[1];return console.log("***** app component rendering ******"),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)(p,{data:[a,u,d,v,g]}),Object(j.jsx)(f,{idName:"field-1",elClassName:"form-item",type:"number",value:a,onInput:function(e){return l(parseFloat(e.target.value))},labelText:"Entry field 1"}),Object(j.jsx)(f,{idName:"field-2",elClassName:"form-item",type:"number",value:u,onInput:function(e){return i(parseFloat(e.target.value))},labelText:"Entry field 2"}),Object(j.jsx)(f,{idName:"field-3",elClassName:"form-item",type:"number",value:d,onInput:function(e){return m(parseFloat(e.target.value))},labelText:"Entry field 3"}),Object(j.jsx)(f,{idName:"field-4",elClassName:"form-item",type:"number",value:v,onInput:function(e){return N(parseFloat(e.target.value))},labelText:"Entry field 4"}),Object(j.jsx)(f,{idName:"field-5",elClassName:"form-item",type:"number",value:g,onInput:function(e){return T(parseFloat(e.target.value))},labelText:"Entry field 5"})]})})};s.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.9150014e.chunk.js.map