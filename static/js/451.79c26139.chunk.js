"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[451],{1985:function(n,e,t){t.d(e,{b:function(){return o}});var a,r=t(168),o=t(7691).ZP.div(a||(a=(0,r.Z)(["\n  min-width: 248px;\n  border-radius: 8px;\n  padding: 20px;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  & h1,\n  h2 {\n    margin: 0;\n    margin-bottom: 20px;\n  }\n"])))},451:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var a,r,o,i,s,l,d,p,c=t(2791),u=t(2742),x=t(9439),f=t(168),m=t(7691),g=m.ZP.form(a||(a=(0,f.Z)(["\n  margin: 30px auto;\n  display: flex;\n  gap: 15px;\n  max-width: 360px;\n  flex-direction: column;\n\n  & button {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    background-color: rgb(81, 203, 238);\n    color: white;\n    padding: 0px 25px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 36px;\n    max-width: 180px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    transition: all 0.25s ease-in-out;\n  }\n\n  & .loading-icon {\n    animation: animate 2s infinite;\n  }\n\n  @keyframes animate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  & button:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n"]))),h=t(6355),b=t(9129),v=t(7231),w=t(9434),y=t(6916),j=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},C=function(n){return n.filter},P=function(n){return n.contacts.isAddContactPending},S=(0,y.P1)([j,C],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),F=t(1471),N=(m.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),(0,m.ZP)(F.Z)(o||(o=(0,f.Z)(["\n  .MuiInputLabel-root:not([data-shrink='true']) {\n    transform: translate(14px, 10px) scale(1);\n    font-size: 14px;\n  }\n  & input {\n    height: 18px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n  }\n"])))),_=(m.ZP.button(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  max-height: 38px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: rgb(81, 203, 238);\n  transition: all 0.25s ease-in-out;\n  &:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n"]))),t(184)),I=function(){var n=(0,c.useState)(""),e=(0,x.Z)(n,2),t=e[0],a=e[1],r=(0,c.useState)(""),o=(0,x.Z)(r,2),i=o[0],s=o[1],l=(0,w.I0)(),d=(0,w.v9)(j),p=(0,w.v9)(P),u=function(n){"name"===n.currentTarget.name?a(n.currentTarget.value):s(n.currentTarget.value)},f=function(n,e){return d.find((function(e){return n.toLowerCase()===e.name.toLowerCase()}))?null:{name:n,number:e}};return(0,_.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),null===f(t,i))return alert("".concat(t," is already in contacts"));l((0,v.uK)(f(t,i))),a(""),s("")},children:[(0,_.jsx)(N,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:u,value:t,autoComplete:"off",label:"Name",variant:"outlined"}),(0,_.jsx)(N,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:u,value:i,autoComplete:"off",label:"Phone",variant:"outlined"}),(0,_.jsxs)("button",{type:"submit",disabled:p,children:[p?(0,_.jsx)(b.WUS,{className:"loading-icon"}):(0,_.jsx)(h.wEH,{})," ","Add Contact"]})]})},z=m.ZP.form(s||(s=(0,f.Z)(["\n  & label {\n    display: flex;\n    gap: 20px;\n    align-items: baseline;\n    font-weight: 500;\n  }\n  & input {\n    max-width: 150px;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    padding: 9px;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    height: 18px;\n  }\n  & input:focus {\n    outline: none;\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    padding: 9px;\n    border: 1px solid rgba(81, 203, 238, 1);\n  }\n"]))),L=t(1509),A=function(){var n=(0,w.I0)(),e=(0,w.v9)(C);return(0,_.jsx)(z,{children:(0,_.jsxs)("label",{children:["Filter by name:",(0,_.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:function(e){n((0,L.M)(e.currentTarget.value.trim()))}})]})})},M=m.ZP.ul(l||(l=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  & .contact__data {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  & .item {\n    padding: 6px 20px;\n    margin-bottom: 10px;\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    transition: box-shadow 0.25s ease-in-out;\n    background-color: white;\n    & .contact__data {\n      flex-grow: 1;\n      align-items: flex-start;\n    }\n  }\n  & .name {\n    font-weight: 500;\n  }\n  & .phone {\n    font-style: italic;\n  }\n\n  & .item:hover .name {\n    animation: tilt-shaking 0.25s infinite;\n  }\n  & .item:hover {\n    box-shadow: 0 1px 6px rgba(81, 203, 238, 0.6);\n  }\n\n  @keyframes tilt-shaking {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(5deg);\n    }\n    50% {\n      transform: rotate(0eg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n\n  & button {\n    background-color: #ee4b2b;\n    color: white;\n    padding: 0px 15px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 24px;\n  }\n"]))),U=(0,m.ZP)(h.AMf)(d||(d=(0,f.Z)(["\n  font-size: 20px;\n  color: #ee4b2b;\n  cursor: pointer;\n"]))),B=(0,m.ZP)(h.fmQ)(p||(p=(0,f.Z)(["\n  font-size: 22px;\n  color: rgb(81, 203, 238);;\n  cursor: pointer;\n"]))),T=function(){var n=(0,w.I0)(),e=(0,w.v9)(Z),t=(0,w.v9)(k),a=(0,w.v9)(S);return(0,_.jsxs)("div",{className:"contacts",children:[(0,_.jsx)("h2",{children:"Contacts List:"}),e&&!t&&(0,_.jsx)("b",{children:"Request in progress..."}),(0,_.jsx)(M,{children:a.map((function(e){var t=e.name,a=e.id,r=e.number;return(0,_.jsxs)("li",{className:"item",children:[(0,_.jsxs)("div",{className:"contact__data",children:[(0,_.jsx)("span",{className:"name",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,_.jsxs)("span",{className:"phone",children:[r," "]})]}),(0,_.jsx)(B,{}),(0,_.jsx)(U,{onClick:function(){n((0,v.GK)(a))}})]},a)}))})]})},q=t(1985);var D=function(){return(0,_.jsxs)("div",{children:[(0,_.jsxs)(q.b,{children:[(0,_.jsx)("h1",{children:"PhoneBook"}),(0,_.jsx)(I,{}),(0,_.jsx)(A,{})]}),(0,_.jsx)(T,{})]})};var H=function(){var n=(0,u.I)().isLoggedIn,e=(0,w.I0)();return(0,c.useEffect)((function(){e((0,v.yF)())}),[e]),(0,_.jsx)("div",{children:n&&(0,_.jsx)(D,{})})}}}]);
//# sourceMappingURL=451.79c26139.chunk.js.map