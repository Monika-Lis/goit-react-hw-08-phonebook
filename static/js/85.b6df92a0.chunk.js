"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{9085:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return j}});var r=n(2791),a=n(4420),l=n(3050),s=n(6875),i=n(7828),c={table:"Contacts_table__HVUnQ",trBody:"Contacts_trBody__lKhfs",tdButton:"Contacts_tdButton__-E48U",button:"Contacts_button__EElih"},u=n(184),o=function(){var e=(0,a.v9)(i.K2),t=(0,a.v9)(i.zK),n=(0,a.I0)(),r=e.filter((function(e){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())}));return(0,u.jsxs)("table",{className:c.table,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Phone"}),(0,u.jsx)("th",{children:"Delete"})]})}),(0,u.jsx)("tbody",{children:r.map((function(e){return(0,u.jsxs)("tr",{className:c.trBody,children:[(0,u.jsx)("td",{children:e.name}),(0,u.jsx)("td",{children:e.phone}),(0,u.jsx)("td",{className:c.tdButton,children:(0,u.jsx)("button",{className:c.button,onClick:function(){return t=e.id,n((0,s.GK)(t));var t},children:"Delete"})})]},e.id)}))})]})},d=n(9439),h=n(7694),m=n.n(h),x={form:"Input_form__3umCm",label:"Input_label__N3zb4",input:"Input_input__G65h5",button:"Input_button__tenp8"},b=function(){var e=(0,r.useState)(""),t=(0,d.Z)(e,2),n=t[0],l=t[1],c=(0,r.useState)(""),o=(0,d.Z)(c,2),h=o[0],b=o[1],_=(0,a.v9)(i.K2),f=(0,a.I0)();return(0,u.jsx)("div",{className:x.div,children:(0,u.jsxs)("form",{className:x.form,onSubmit:function(e){e.preventDefault(),_.some((function(e){return e.name.toLowerCase()===n.trim().toLowerCase()}))?m().Notify.warning("This contact already exists!"):(f((0,s.uK)({name:n,number:h})),l(""),b(""))},children:[(0,u.jsx)("label",{className:x.label,htmlFor:"nameField",children:"Name"}),(0,u.jsx)("input",{className:x.input,id:"nameField",type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Name",required:!0}),(0,u.jsx)("label",{className:x.label,htmlFor:"NumberField",children:"Number"}),(0,u.jsx)("input",{className:x.input,id:"NumberField",type:"tel",value:h,onChange:function(e){return b(e.target.value)},placeholder:"Phone Number",pattern:"\\+?\\d{1,4}?[ .\\\\-\\\\s]?\\(?\\d{1,3}?\\)?[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,9}",required:!0}),(0,u.jsx)("button",{className:x.button,type:"submit",children:"Add contact"})]})})},_="Filter_input__-ROIN",f=function(){var e=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"searchField",children:"Find contacts by name"}),(0,u.jsx)("input",{className:_,id:"searchField",type:"text",name:"filter",value:e,onChange:function(n){t(e(n.target.value))},placeholder:"Search by name"})]})},j=function(){var e=(0,a.v9)(i.Vc),t=(0,a.I0)();return(0,r.useEffect)((function(){t((0,s.yF)())}),[t]),(0,u.jsx)(l.B6,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)(l.ql,{children:(0,u.jsx)("title",{children:"Your Contacts"})}),(0,u.jsx)(b,{}),(0,u.jsx)(f,{}),e&&(0,u.jsx)("span",{className:c.loader}),(0,u.jsx)(o,{})]})})}}}]);
//# sourceMappingURL=85.b6df92a0.chunk.js.map