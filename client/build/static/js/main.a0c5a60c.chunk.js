(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(19),i=s.n(n),l=s(7),r=s(8),j=s(10),b=s(9),d=s(13),o=s(2),h=(s(25),s(26),s(0)),m=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={userFlag:"online",testingVar:"",chatHistory:[],users:[{id:1,name:"Aslam",phone:"+919540378590",status:"online"},{id:2,name:"Sanaul",phone:"+919389726350",status:"offline"}],broadcast:[{broadcast_name:"Social Media ",modified_at:"2 hour ago"},{broadcast_name:"Website Promotion",modified_at:"1 hour ago"},{broadcast_name:"Lead Generation",modified_at:"30 min ago"}]},e}return Object(r.a)(s,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:5000/whatsapp").then((function(e){return e.json()})).then((function(t){return e.setState({chatHistory:t})}))}},{key:"componentWillUpdate",value:function(){var e=this;fetch("http://localhost:5000/whatsapp").then((function(e){return e.json()})).then((function(t){return e.setState({chatHistory:t})}));var t=document.querySelector(".chat-body");t.scrollTop=t.scrollHeight}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"d-flex w-100",children:[Object(h.jsxs)("div",{className:"w-25 py-2",children:[Object(h.jsxs)("h5",{className:"px-4 py-3",children:[Object(h.jsx)("img",{src:"assets/icons/comment-alt.svg",width:"24",alt:"",className:"img-fluid me-3"}),"All Chats"]}),Object(h.jsx)("div",{className:"chat-aside",children:this.state.users.map((function(e){return Object(h.jsxs)("div",{className:"chat-owner d-flex align-items-center justify-content-between",children:[Object(h.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(h.jsx)("img",{src:"https://picsum.photos/32",className:"rounded-circle img-fluid",alt:""}),Object(h.jsx)("p",{className:"mb-0 ms-3",children:e.name})]}),Object(h.jsx)("span",{className:e.status,children:"1"})]})}))})]}),Object(h.jsx)("div",{className:"w-50 border-end border-start px-0",children:Object(h.jsxs)("div",{className:"chat-area",children:[Object(h.jsxs)("div",{className:"chat-header d-flex justify-content-between align-items-center border-bottom p-4 py-3",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("img",{src:"https://picsum.photos/40",className:"rounded-circle img-fluid",alt:""}),Object(h.jsxs)("label",{className:"chat-username ms-2 mb-0 h5 ",children:["Anonymous ",Object(h.jsx)("sub",{className:"d-block ".concat(this.state.userFlag),children:this.state.userFlag})]})]}),Object(h.jsxs)("button",{className:"btn btn-sm btn-outline-danger d-flex align-items-center fw-bold",children:[Object(h.jsx)("i",{className:"bi-trash me-1"}),"Delete"]})]}),Object(h.jsx)("div",{className:"chat-body",children:this.state.chatHistory.length>0?this.state.chatHistory.map((function(e){return Object(h.jsx)("div",{className:"chat-box ".concat(e.user),children:Object(h.jsx)("span",{children:e.text})})})):Object(h.jsx)("p",{children:"No conversation found..."})})]})}),Object(h.jsxs)("div",{className:"w-25 p-4 px-4",children:[Object(h.jsxs)("h5",{className:"mb-4",children:[Object(h.jsx)("i",{className:"bi-megaphone me-2"}),"   All Broadcast"]}),this.state.broadcast.map((function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-between py-3 border-bottom",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:"fw-bold mb-0 d-block",children:e.broadcast_name}),Object(h.jsx)("small",{children:"Admin"})]}),Object(h.jsx)("small",{className:"small",children:e.modified_at})]})})),Object(h.jsxs)("button",{className:"btn primary-btn mt-4","data-bs-target":"#modalForm","data-bs-toggle":"modal",children:[Object(h.jsx)("i",{className:"bi-megaphone-fill me-2"}),"Add Broadcast"]}),Object(h.jsx)("div",{className:"modal fade slide",id:"modalForm",children:Object(h.jsx)("div",{className:"modal-dialog",children:Object(h.jsx)("div",{className:"modal-content",children:Object(h.jsx)("div",{className:"modal-body p-5",children:Object(h.jsxs)("form",{action:"http://localhost:5000/api",method:"post",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Broadcast Title"}),Object(h.jsx)("input",{className:"form-control",type:"text",id:"c_name",name:"c_name"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Phone 1"}),Object(h.jsx)("input",{className:"form-control",type:"number",id:"no_1",name:"no_1"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Phone 2"}),Object(h.jsx)("input",{className:"form-control",type:"number",id:"no_2",name:"no_2"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Messages"}),Object(h.jsx)("textarea",{rows:"4",className:"form-control",type:"text",id:"message",name:"message"})]}),Object(h.jsx)("button",{className:"btn btn-primary me-2",type:"submit",children:"Send Broadcast"}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Close"})]})})})})})]})]})}}]),s}(c.Component),x=(s(28),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg nav-bg px-2 navbar-dark",children:[Object(h.jsx)("button",{className:"p-0 border-0 fs-large mr-2 bg-transparent text-white",children:Object(h.jsx)("i",{className:"bi bi-list"})}),Object(h.jsxs)("a",{className:"navbar-brand text-white",children:["Re",Object(h.jsx)("b",{children:"mmsh"})]}),Object(h.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(h.jsx)("li",{className:"nav-item me-4",children:Object(h.jsx)("a",{className:"btn btn-outline-light btn-sm  ",children:"Upgrade Plan"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("a",{className:"nav-link",children:[Object(h.jsx)("i",{className:"bi bi-question-circle"}),Object(h.jsx)("span",{})]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("a",{className:"nav-link",children:[Object(h.jsx)("i",{className:"bi bi-bell"}),Object(h.jsx)("span",{})]})}),Object(h.jsxs)("li",{class:"nav-item dropdown",children:[Object(h.jsxs)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(h.jsx)("i",{className:"bi bi-person-circle me-2"}),"Sanaul"]}),Object(h.jsxs)("ul",{className:"dropdown-menu mb-0 dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{className:"dropdown-item",children:[Object(h.jsx)("i",{className:"bi bi-person"})," Personal Setting"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{className:"dropdown-item",children:[Object(h.jsx)("i",{className:"bi bi-people"})," Organisation Setting"]})}),Object(h.jsx)("li",{children:Object(h.jsx)("hr",{className:"dropdown-divider"})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{className:"dropdown-item",children:[Object(h.jsx)("i",{className:"bi bi-box-arrow-left"})," Logout"]})})]})]})]})]})})}}]),s}(c.Component)),O=(s(29),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("ul",{className:"pl-0 m-0 list-unstyled navlist",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-columns-gap me-3"}),Object(h.jsx)("span",{children:"Dashboard"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(d.b,{to:"/",children:[Object(h.jsx)("i",{className:"bi bi-chat-left-text me-3"}),Object(h.jsx)("span",{children:"Chats"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(d.b,{to:"/reservation",children:[Object(h.jsx)("i",{className:"bi bi-card-checklist me-3"}),Object(h.jsx)("span",{children:"Reesrvation"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-sd-card me-3"}),Object(h.jsx)("span",{children:"Contacts"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-diagram-3 me-3"}),Object(h.jsx)("span",{children:"Channels"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-file-text me-3"}),Object(h.jsx)("span",{children:"Templates"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-bar-chart-line me-3"}),Object(h.jsx)("span",{children:"Statistics"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"bi bi-gear me-3"}),Object(h.jsx)("span",{children:"Settings"})]})})]})}}]),s}(c.Component)),u=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={allReply:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/reservation").then((function(e){return e.json()})).then((function(t){return e.setState({allReply:t})}))}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"w-100 p-4 pt-3",children:[Object(h.jsx)("h4",{className:"mb-4",children:"All Reservations"}),Object(h.jsxs)("table",{className:"table border",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Sr. No."}),Object(h.jsx)("th",{children:"Sender"}),Object(h.jsx)("th",{children:"Reply"}),Object(h.jsx)("th",{children:"Choice"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"No of guest"}),Object(h.jsx)("th",{children:"Phone"})]})}),Object(h.jsx)("tbody",{children:""!=this.state.allReply?this.state.allReply.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.sender}),Object(h.jsx)("td",{children:e.reply}),Object(h.jsx)("td",{children:e.step}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.no_of_guest}),Object(h.jsx)("td",{children:e.phone})]})})):Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colspan:"8",className:"fw-bold text-center py-4",children:"No Reservation Found..."})})})]})]})})}}]),s}(c.Component),p=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:m}),Object(h.jsx)(o.a,{path:"/reservation",component:u})]})]})})]})}}]),s}(c.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a0c5a60c.chunk.js.map