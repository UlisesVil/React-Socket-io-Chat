(this["webpackJsonpchat-react-socket"]=this["webpackJsonpchat-react-socket"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=n(7);function o(e,t){var n="React-Socket-Chat"+e,a=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(i.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,o]}var l=n(115),j=n(119),u=n(116),d=n(120),b=n(1);function O(e){var t=e.onIdSubmit,n=Object(c.useRef)();return Object(b.jsx)(l.a,{className:"align-items-center d-flex",style:{height:"100vh"},children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),t(n.current.value)},className:"w-100 loginForm",children:[Object(b.jsxs)(j.a.Group,{children:[Object(b.jsxs)(j.a.Label,{children:[Object(b.jsx)("p",{className:"loginText text-white",children:"- Enter your 10 Digit Phone Number"}),Object(b.jsx)("p",{className:"loginText text-white",children:"- Or Generate a Random ID"})]}),Object(b.jsx)(j.a.Control,{type:"text",ref:n,required:!0})]}),Object(b.jsx)(u.a,{type:"submit",className:"mr-2 btnCreate",children:"Login"}),Object(b.jsx)(u.a,{onClick:function(){t(Object(d.a)())},variant:"secondary",children:"Create a new ID"})]})})}var f=n(117),x=n(24),m=n(22),h=a.a.createContext();function v(){return Object(c.useContext)(h)}function p(e){var t=e.children,n=o("contacts",[]),c=Object(i.a)(n,2),a=c[0],r=c[1];return Object(b.jsx)(h.Provider,{value:{contacts:a,createContact:function(e,t){r((function(n){return[].concat(Object(m.a)(n),[{id:e,name:t}])}))}},children:t})}var g=n(66),C=n.n(g),y=a.a.createContext();function N(e){var t=e.id,n=e.children,a=Object(c.useState)(),r=Object(i.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){var e=C()("https://ulisesv-react-chat-webapp.herokuapp.com",{withCredentials:!1,query:{id:t}});return o(e),console.log(e),function(){return e.close()}}),[t]),Object(b.jsx)(y.Provider,{value:s,children:n})}var S=a.a.createContext();function I(){return Object(c.useContext)(S)}function w(e){var t=e.id,n=e.children,a=o("conversations",[]),r=Object(i.a)(a,2),s=r[0],l=r[1],j=Object(c.useState)(0),u=Object(i.a)(j,2),d=u[0],O=u[1],f=v().contacts,h=Object(c.useContext)(y);var p=Object(c.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;l((function(e){var a=!1,r={sender:c,text:n},s=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(a=!0,Object(x.a)(Object(x.a)({},e),{},{messages:[].concat(Object(m.a)(e.messages),[r])})):e;var n,c}));return a?s:[].concat(Object(m.a)(e),[{recipients:t,messages:[r]}])}))}),[l]);Object(c.useEffect)((function(){if(null!=h)return h.on("receive-message",p),function(){return h.off("receive-message")}}),[h,p]);var g=s.map((function(e,n){var c=e.recipients.map((function(e){var t=f.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),a=e.messages.map((function(e){var n=f.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,a=t===e.sender;return Object(x.a)(Object(x.a)({},e),{},{senderName:c,fromMe:a})})),r=n===d;return Object(x.a)(Object(x.a)({},e),{},{messages:a,recipients:c,selected:r})})),C={conversations:g,selectedConversation:g[d],sendMessage:function(e,n){h.emit("send-message",{recipients:e,text:n}),p({recipients:e,text:n,sender:t})},selectConversationIndex:O,createConversation:function(e){l((function(t){return[].concat(Object(m.a)(t),[{recipients:e,messages:[]}])}))}};return Object(b.jsx)(S.Provider,{value:C,children:n})}function k(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),s=I(),o=s.sendMessage,l=s.selectedConversation;return Object(b.jsxs)("div",{className:"d-flex flex-column flex-grow-1 conversationMain",children:[Object(b.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(b.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:l.messages.map((function(e,t){var n=l.messages.length-1===t;return Object(b.jsxs)("div",{ref:n?r:null,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(b.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"forMe":"notForMe"),children:e.text}),Object(b.jsx)("div",{className:"userReference small ".concat(e.fromMe?"text-right mr-2":"ml-2"),children:e.fromMe?"You":e.senderName})]},t)}))})}),Object(b.jsx)(j.a,{onSubmit:function(e){e.preventDefault(),o(l.recipients.map((function(e){return e.id})),n),a("")},children:Object(b.jsx)(j.a.Group,{className:"m-2",children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(j.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return a(e.target.value)},style:{height:"75px",resize:"none"},className:"textArea"}),Object(b.jsx)(f.a.Append,{children:Object(b.jsxs)(u.a,{type:"submit",className:"sendMessage",children:["Send ",Object(b.jsx)("i",{className:"far fa-arrow-alt-circle-right"})]})})]})})})]})}var M=n(122),B=n(121),E=n(118),L=n(123);n(107);function D(){var e=I(),t=e.conversations,n=e.selectConversationIndex;return Object(b.jsx)(L.a,{variant:"flush",children:t.map((function(e,t){return Object(b.jsx)(L.a.Item,{action:!0,onClick:function(){return n(t)},active:e.selected,children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}function G(){var e=v().contacts;return Object(b.jsx)(L.a,{variant:"flush",className:"contact",children:e.map((function(e){return Object(b.jsxs)(L.a.Item,{className:"contact",children:[Object(b.jsx)("p",{className:"contactLine",children:e.name})," ",Object(b.jsx)("p",{className:"contactLine id",children:e.id})]},e.id)}))})}n(108),n(109);function P(e){var t=e.closeModal,n=Object(c.useRef)(),a=Object(c.useRef)(),r=v().createContact;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E.a.Header,{closeButton:!0,children:"Create Contact"}),Object(b.jsx)(E.a.Body,{children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),r(n.current.value,a.current.value),t()},children:[Object(b.jsxs)(j.a.Group,{children:[Object(b.jsx)(j.a.Label,{children:"Id"}),Object(b.jsx)(j.a.Control,{type:"text",ref:n,required:!0})]}),Object(b.jsxs)(j.a.Group,{children:[Object(b.jsx)(j.a.Label,{children:"Name"}),Object(b.jsx)(j.a.Control,{type:"text",ref:a,required:!0})]}),Object(b.jsx)(u.a,{type:"submit",className:"btnCreate",children:"Create"})]})})]})}function R(e){var t=e.closeModal,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1],o=v().contacts,l=I().createConversation;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(b.jsx)(E.a.Body,{children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),l(r),t()},children:[o.map((function(e){return Object(b.jsx)(j.a.Group,{controlId:e.id,children:Object(b.jsx)(j.a.Check,{type:"checkbox",value:r.includes(e.id),label:e.name,onChange:function(){return t=e.id,void s((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(m.a)(e),[t])}));var t}})},e.id)})),Object(b.jsx)(u.a,{type:"submit",className:"btnCreate",children:"Create"})]})})]})}var q="conversations",H="contacts";function K(e){var t=e.id,n=Object(c.useState)(q),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],O=r===q;function f(){d(!1)}return Object(b.jsxs)("div",{id:"sideBarContainer",className:"flex-column sideBarContainer",style:{display:"flex"},children:[Object(b.jsxs)(M.a.Container,{activeKey:r,onSelect:s,children:[Object(b.jsxs)(B.a,{variant:"tabs",className:"justify-content-left",children:[Object(b.jsx)(B.a.Item,{children:Object(b.jsx)(B.a.Link,{className:"activeTab",eventKey:q,children:"Conversations"})}),Object(b.jsx)(B.a.Item,{children:Object(b.jsx)(B.a.Link,{className:"disableTab",eventKey:H,children:"Contacts"})})]}),Object(b.jsxs)(M.a.Content,{className:"overflow-auto flex-grow-1",children:[Object(b.jsx)(M.a.Pane,{eventKey:q,children:Object(b.jsx)(D,{})}),Object(b.jsx)(M.a.Pane,{eventKey:H,className:"contact",children:Object(b.jsx)(G,{})})]}),Object(b.jsxs)("div",{className:"p-2 small",children:["Your Id: ",Object(b.jsxs)("span",{className:"text-white",children:[" ",t]})]}),Object(b.jsxs)(u.a,{onClick:function(){return d(!0)},className:"rounded-1 modalButton",children:["New ",O?"Conversation":"Contact"]})]}),Object(b.jsx)(E.a,{show:j,onHide:f,children:O?Object(b.jsx)(R,{closeModal:f}):Object(b.jsx)(P,{closeModal:f})})]})}function F(e){var t=e.id,n=I().selectedConversation;return Object(b.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(b.jsx)("div",{id:"hamburgerHide",children:Object(b.jsx)("i",{className:"fas fa-hamburger hamburgerHide",onClick:function(){return function(){var e=document.getElementById("sideBarContainer");if(console.log(e),"none"===e.style.display){var t=document.getElementById("sideBarContainer");t.style.display="flex",console.log(t)}else{var n=document.getElementById("sideBarContainer");n.style.display="none",console.log(n)}}()},style:{display:"none"}})}),Object(b.jsx)(K,{id:t}),n&&Object(b.jsx)(k,{})]})}var J=function(){var e=o("id"),t=Object(i.a)(e,2),n=t[0],c=t[1];return n?Object(b.jsx)(N,{id:n,children:Object(b.jsx)(p,{children:Object(b.jsx)(w,{id:n,children:Object(b.jsx)(F,{id:n})})})}):Object(b.jsx)(O,{onIdSubmit:c})};n(110),n(111);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.41f6f289.chunk.js.map