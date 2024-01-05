"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{1985:function(n,e,t){t.d(e,{b:function(){return s}});var a,r=t(168),o=t(7691),i=t(1101),s=o.ZP.div(a||(a=(0,r.Z)(["\n  min-width: 248px;\n  border-radius: 8px;\n  padding: 20px;\n  background-color: white;\n  margin-bottom: 30px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  & h1,\n  h2 {\n    margin: 0;\n    color: ",";\n  }\n"])),i.lL)},1879:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var a,r,o,i,s,l,d,c,p,u,x,m=t(2791),f=t(2742),g=t(9439),h=t(168),b=t(7691),v=b.ZP.form(a||(a=(0,h.Z)(["\n  margin: 30px auto;\n  display: flex;\n  gap: 15px;\n  max-width: 360px;\n  flex-direction: column;\n\n  & button {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    background-color: rgb(81, 203, 238);\n    color: white;\n    padding: 0px 25px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 36px;\n    max-width: 180px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    transition: all 0.25s ease-in-out;\n  }\n\n  & .loading-icon {\n    animation: animate 2s infinite;\n  }\n\n  @keyframes animate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  & button:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n"]))),w=t(6355),j=t(9129),y=t(7231),Z=t(9434),C=t(6916),k=function(n){return n.contacts.items},S=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},P=function(n){return n.filter},N=function(n){return n.contacts.isAddContactPending},z=(0,C.P1)([k,P],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),A=t(1442),_=(b.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),(0,b.ZP)(A.Z)(o||(o=(0,h.Z)(["\n  .MuiInputLabel-root:not([data-shrink='true']) {\n    transform: translate(14px, 10px) scale(1);\n    font-size: 14px;\n  }\n  & input {\n    height: 18px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n  }\n"])))),I=(b.ZP.button(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  max-height: 38px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  font-size: 16px;\n  background-color: rgb(81, 203, 238);\n  transition: all 0.25s ease-in-out;\n  &:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n"]))),t(184)),M=function(){var n=(0,m.useState)(""),e=(0,g.Z)(n,2),t=e[0],a=e[1],r=(0,m.useState)(""),o=(0,g.Z)(r,2),i=o[0],s=o[1],l=(0,Z.I0)(),d=(0,Z.v9)(k),c=(0,Z.v9)(N),p=function(n){"name"===n.currentTarget.name?a(n.currentTarget.value):s(n.currentTarget.value)},u=function(n,e){return d.find((function(e){return n.toLowerCase()===e.name.toLowerCase()}))?null:{name:n,number:e}};return(0,I.jsxs)(v,{onSubmit:function(n){if(n.preventDefault(),null===u(t,i))return alert("".concat(t," is already in contacts"));l((0,y.uK)(u(t,i))),a(""),s("")},children:[(0,I.jsx)(_,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:t,autoComplete:"off",label:"Name",variant:"outlined"}),(0,I.jsx)(_,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:i,autoComplete:"off",label:"Phone",variant:"outlined"}),(0,I.jsxs)("button",{type:"submit",disabled:c,children:[c?(0,I.jsx)(j.WUS,{className:"loading-icon"}):(0,I.jsx)(w.wEH,{})," ","Add Contact"]})]})},L=t(1101),U=b.ZP.form(s||(s=(0,h.Z)(["\n  & label {\n    display: flex;\n    gap: 20px;\n    align-items: baseline;\n    font-weight: 500;\n  }\n  & input {\n    max-width: 150px;\n    transition: all 0.3s ease-in-out;\n    outline: none;\n    padding: 9px;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    height: 18px;\n  }\n  & input:focus {\n    outline: none;\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n    padding: 9px;\n    border: 1px solid rgba(81, 203, 238, 1);\n  }\n"]))),q=b.ZP.div(l||(l=(0,h.Z)(["\n  @media screen and (max-width: ",") {\n    & h2 {\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),L.Mq,L.Mq),T=t(1509),B=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(P);return(0,I.jsxs)(q,{children:[(0,I.jsx)("h2",{children:"Contacts List:"}),(0,I.jsx)(U,{children:(0,I.jsxs)("label",{children:["Search by name:",(0,I.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:function(e){n((0,T.M)(e.currentTarget.value.trim()))}})]})})]})},D=b.ZP.ul(d||(d=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  & .contact__data {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  & .item {\n    padding: 6px 20px;\n    margin-bottom: 10px;\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 25px;\n    transition: box-shadow 0.25s ease-in-out;\n    background-color: white;\n    & .contact__data {\n      flex-grow: 1;\n      align-items: flex-start;\n    }\n  }\n  & .name {\n    font-weight: 500;\n  }\n  & .phone {\n    font-style: italic;\n  }\n\n  & .item:hover .name {\n    animation: tilt-shaking 0.25s infinite;\n  }\n  & .item:hover {\n    box-shadow: 0 1px 6px rgba(81, 203, 238, 0.6);\n  }\n\n  @keyframes tilt-shaking {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(5deg);\n    }\n    50% {\n      transform: rotate(0eg);\n    }\n    75% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n\n  & button {\n    background-color: #ee4b2b;\n    color: white;\n    padding: 0px 15px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 24px;\n  }\n"]))),H=(0,b.ZP)(w.AMf)(c||(c=(0,h.Z)(["\n  font-size: 20px;\n  color: #ee4b2b;\n  cursor: pointer;\n"]))),R=(0,b.ZP)(w.DNl)(p||(p=(0,h.Z)(["\n  font-size: 22px;\n  color: #50c878;\n  cursor: pointer;\n"]))),E=t(6747),$=t(6524),K=(0,b.ZP)(w.fmQ)(u||(u=(0,h.Z)(["\n  font-size: 22px;\n  color: rgb(81, 203, 238);\n  cursor: pointer;\n"]))),O=b.ZP.form(x||(x=(0,h.Z)(["\n  margin: 30px auto;\n  display: flex;\n  gap: 15px;\n  max-width: 360px;\n  flex-direction: column;\n\n  & button {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n      'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    background-color: rgb(81, 203, 238);\n    color: white;\n    padding: 0px 25px;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    height: 36px;\n    max-width: 180px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    transition: all 0.25s ease-in-out;\n  }\n\n  & .loading-icon {\n    animation: animate 2s infinite;\n  }\n\n  @keyframes animate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  & button:hover {\n    box-shadow: 0 0 10px rgba(81, 203, 238, 0.8),\n      0 0 20px rgba(81, 203, 238, 0.6), 0 0 30px rgba(81, 203, 238, 0.4);\n  }\n"]))),J=function(n){n.id;var e=n.name,t=n.number,a=(0,m.useState)(e),r=(0,g.Z)(a,2),o=r[0],i=r[1],s=(0,m.useState)(t),l=(0,g.Z)(s,2),d=l[0],c=l[1],p=function(n){"name"===n.currentTarget.name?i(n.currentTarget.value):c(n.currentTarget.value)};return(0,I.jsxs)(O,{children:[(0,I.jsx)(_,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:o,autoComplete:"off",label:"Name",variant:"outlined"}),(0,I.jsx)(_,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:d,autoComplete:"off",label:"Phone",variant:"outlined"}),(0,I.jsxs)("button",{type:"submit",children:[(0,I.jsx)(w.wEH,{}),"Edit Contact"]})]})},G=t(4651);function Q(){return(0,I.jsx)(G.S1K,{})}var W=t(4512),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"background.paper",borderRadius:2,boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",p:4},X={position:"absolute",top:12,right:20,color:"".concat(L._1)};function Y(n){var e=n.id,t=n.name,a=n.number,r=m.useState(!1),o=(0,g.Z)(r,2),i=o[0],s=o[1],l=function(){return s(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(K,{onClick:function(){return s(!0)}}),(0,I.jsx)($.Z,{open:i,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(E.Z,{sx:V,children:[(0,I.jsx)("h2",{children:"Update Contact"}),(0,I.jsx)(J,{id:e,name:t,number:a}),(0,I.jsx)(W.Z,{edge:"end",color:"inherit",onClick:l,"aria-label":"close",style:X,children:(0,I.jsx)(Q,{})})]})})]})}var nn=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(S),t=(0,Z.v9)(F),a=(0,Z.v9)(z);return(0,I.jsxs)("div",{className:"contacts",children:[e&&!t&&(0,I.jsx)("b",{children:"Request in progress..."}),(0,I.jsx)(D,{children:a.map((function(e){var t=e.name,a=e.id,r=e.number;return(0,I.jsxs)("li",{className:"item",children:[(0,I.jsxs)("div",{className:"contact__data",children:[(0,I.jsx)("span",{className:"name",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,I.jsxs)("span",{className:"phone",children:[r," "]})]}),(0,I.jsx)(R,{href:r}),(0,I.jsx)(Y,{id:a,name:t,number:r}),(0,I.jsx)(H,{onClick:function(){n((0,y.GK)(a))}})]},a)}))})]})},en=t(1985);var tn=function(){return(0,I.jsxs)("div",{children:[(0,I.jsxs)(en.b,{children:[(0,I.jsx)("h1",{children:"Add a new contact"}),(0,I.jsx)(M,{})]}),(0,I.jsx)(en.b,{children:(0,I.jsx)(B,{})}),(0,I.jsx)(nn,{})]})};var an=function(){var n=(0,f.I)().isLoggedIn,e=(0,Z.I0)();return(0,m.useEffect)((function(){e((0,y.yF)())}),[e]),(0,I.jsx)("div",{children:n&&(0,I.jsx)(tn,{})})}}}]);
//# sourceMappingURL=879.b5115241.chunk.js.map