(this["webpackJsonpmon-todo-app"]=this["webpackJsonpmon-todo-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),a=n(8),r=n.n(a),u=(n(16),n(7)),s=n(3);var d=function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),n=Object(s.a)(e,2),i=n[0],a=n[1],r=Object(c.useRef)(null);Object(c.useEffect)((function(){r.current.focus()}));var u=function(t){a(t.target.value)};return Object(o.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")},children:t.edit?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Ajouter Tache",value:i,name:"text",onChange:u,className:"todo-input",ref:r}),Object(o.jsx)("button",{className:"todo-button",children:"Modifier"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Modifier Tache",value:i,name:"text",onChange:u,className:"todo-input",ref:r}),Object(o.jsx)("button",{className:"todo-button",children:"Add"})]})})},l=n(9),j=n(10);var b=function t(e){var n=e.todos,i=e.completeTodo,a=e.removeTodo,r=e.updateTodo,u=Object(c.useState)({id:null,value:""}),b=Object(s.a)(u,2),f=b[0],m=b[1];return f.id?Object(o.jsx)(d,{edit:f,onSubmit:function(t){r(f.id,t),m({id:null,value:""})}}):n.map((function(e,n){return Object(o.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(o.jsx)("div",{onClick:function(){return i(e.id)},children:e.text},e.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(l.a,{onClick:function(){return a(e.id)},className:"delete-icon"}),Object(o.jsx)(j.a,{onClick:function(){return m({id:e.id,value:e.text})},className:"edit-icon"})]})]},n)}))};var f=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" What's the Plan for Today"}),Object(o.jsx)(d,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(n));i(e)}}}),Object(o.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),!1}));i(e)},removeTodo:function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};n(17);var m=function(){return Object(o.jsx)("div",{className:"todo-app",children:Object(o.jsx)(f,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.211c2c04.chunk.js.map