"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{9085:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return v}});var a=n(2791),r=n(4420),l=n(3050),s=n(6875),i=n(7828),u={table:"Contacts_table__HVUnQ",trBody:"Contacts_trBody__lKhfs",tdButton:"Contacts_tdButton__-E48U",button:"Contacts_button__EElih"},c=n(184),o=function(){var e=(0,r.v9)(i.K2),t=(0,r.v9)(i.zK),n=(0,r.I0)(),a=e.filter((function(e){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())}));return(0,c.jsxs)("table",{className:u.table,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Name"}),(0,c.jsx)("th",{children:"Phone Number"}),(0,c.jsx)("th",{children:"Delete"})]})}),(0,c.jsx)("tbody",{children:a.map((function(e){return(0,c.jsxs)("tr",{className:u.trBody,children:[(0,c.jsx)("td",{children:e.name}),(0,c.jsx)("td",{children:e.number}),(0,c.jsx)("td",{className:u.tdButton,children:(0,c.jsx)("button",{className:u.button,onClick:function(){return t=e.id,n((0,s.GK)(t));var t},children:"Delete"})})]},e.id)}))})]})},d=n(9439),h=n(7694),m=n.n(h),b={form:"Input_form__3umCm",label:"Input_label__N3zb4",input:"Input_input__G65h5",button:"Input_button__tenp8"},x=n(422),_=function(){var e=(0,a.useState)(""),t=(0,d.Z)(e,2),n=t[0],l=t[1],u=(0,a.useState)(""),o=(0,d.Z)(u,2),h=o[0],_=o[1],j=(0,r.v9)(i.K2),p=(0,r.I0)();return(0,c.jsx)("div",{className:b.div,children:(0,c.jsxs)("form",{className:b.form,onSubmit:function(e){e.preventDefault(),j.some((function(e){return e.name.toLowerCase()===n.trim().toLowerCase()}))?m().Notify.warning("This contact already exists!"):(p((0,s.uK)({id:(0,x.x0)(),name:n,number:h})),l(""),_(""))},children:[(0,c.jsx)("label",{className:b.label,htmlFor:"nameField",children:"Name"}),(0,c.jsx)("input",{className:b.input,id:"nameField",type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Name",required:!0}),(0,c.jsx)("label",{className:b.label,htmlFor:"NumberField",children:"Number"}),(0,c.jsx)("input",{className:b.input,id:"NumberField",type:"tel",value:h,onChange:function(e){return _(e.target.value)},placeholder:"Phone Number",pattern:"\\+?\\d{1,4}?[ .\\\\-\\\\s]?\\(?\\d{1,3}?\\)?[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,9}",required:!0}),(0,c.jsx)("button",{className:b.button,type:"submit",children:"Add contact"})]})})},j="Filter_input__-ROIN",p=n(2559),f=function(){var e=(0,r.v9)(i.zK),t=(0,r.I0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"searchField",children:"Find contacts by name"}),(0,c.jsx)("input",{className:j,id:"searchField",type:"text",name:"filter",value:e,onChange:function(e){t((0,p.T)(e.target.value))},placeholder:"Search by name"})]})},v=function(){var e=(0,r.v9)(i.Vc),t=(0,r.I0)();return(0,a.useEffect)((function(){t((0,s.yF)())}),[t]),(0,c.jsx)(l.B6,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(l.ql,{children:(0,c.jsx)("title",{children:"Your Contacts"})}),(0,c.jsx)(_,{}),(0,c.jsx)(f,{}),e&&(0,c.jsx)("span",{className:u.loader}),(0,c.jsx)(o,{})]})})}}}]);
//# sourceMappingURL=85.8a087caa.chunk.js.map