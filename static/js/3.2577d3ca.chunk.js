(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[3],{287:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(20),s=a(21),r=a(23),u=a(22),c=a(24),i=a(0),o=a.n(i),l=a(33),m=a(12),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(l.a,{to:"/login"})}}]),a}(o.a.Component);return Object(m.b)(b)(t)}},291:function(e,t,a){e.exports={users:"Dialogs_users__1Ozxe",user:"Dialogs_user__1WNNF"}},292:function(e,t,a){e.exports={users:"User_users__crLcn",user:"User_user__v_FQm"}},293:function(e,t,a){e.exports={users:"Message_users__32ejn",user:"Message_user__2cITb"}},295:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(291),u=a.n(r),c=a(20),i=a(21),o=a(23),l=a(22),m=a(24),b=a(292),p=a.n(b),f=a(13),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).path="/dialogs/"+a.props.id,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",{className:p.a.user},s.a.createElement(f.b,{to:this.path},this.props.name))}}]),t}(n.Component),h=a(293),g=a.n(h),_=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",{className:g.a.message},this.props.message)}}]),t}(n.Component),j=a(33),O=a(85),v=a(125),E=a(37),y=a(82),k=Object(y.a)(100),A=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(O.a,{placeholder:"Enter your message",name:"newMessageBody",component:E.b,validate:[y.b,k]}),s.a.createElement("button",null,"Send"))})),M=function(e){var t=e.users.map((function(e){return s.a.createElement(d,{name:e.name,id:e.id})})),a=e.messages.map((function(e){return s.a.createElement(_,{message:e.message})}));return!1===e.auth?s.a.createElement(j.a,{to:"/login"}):s.a.createElement("div",null,s.a.createElement("div",{className:u.a.dialogs},s.a.createElement("div",{className:u.a.users},t),s.a.createElement("div",{className:u.a.messages},a)),s.a.createElement(A,{onSubmit:function(t){e.onClickMessage(t.newMessageBody)}}))},N=a(12),w=a(287),C=a(7),x=a(124);t.default=Object(C.d)(Object(N.b)((function(e){return{users:e.dialogs.users_from_server,messages:e.dialogs.messages_from_server,isAuth:e.auth.isAuth}}),(function(e){return{onClickMessage:function(t){e(Object(x.a)(t))}}})),w.a)(M)}}]);
//# sourceMappingURL=3.2577d3ca.chunk.js.map