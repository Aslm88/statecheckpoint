(this.webpackJsonpstatecheckpt=this.webpackJsonpstatecheckpt||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(3),o=n.n(c),r=(n(13),n(4)),a=n(5),l=n(6),h=n(8),d=n(7),u=(n(14),n(0)),b={width:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 5px 10px 2px rgba(0.0.0.25)"},j={width:"300px",height:"40px",borderRadius:"10px",color:"white",border:"none",fontWeight:"bold",backgroundColor:"blue"},p={display:"bloc",color:"blue",textAlign:"center",textTransform:"capitalize",letterSpacing:"3px",fontWeight:"bold"},g=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state=Object(r.a)({fullName:"Jhon Doe",bio:"developement",imgSrc:"https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg",profession:"Front End Web Developper",isShown:!1,date:"",tick:"",timerID:""},"date",new Date),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var t=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[this.state.isShown&&Object(u.jsxs)("div",{style:b,children:[Object(u.jsx)("img",{src:this.state.imgSrc,alt:""}),Object(u.jsxs)("div",{style:p,children:[Object(u.jsxs)("div",{children:[" fullName: ",this.state.fullName]}),Object(u.jsxs)("div",{children:[" bio: ",this.state.bio," "]}),Object(u.jsxs)("div",{children:["Profession : ",this.state.profession]})]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("h2",{children:[" ",this.state.date.toLocaleTimeString(),"."]})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return t.setState({isShown:!t.state.isShown})},style:j,children:this.state.isShown?"Hide":"Show"})})]})})}}]),n}(s.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),s(t),c(t),o(t)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.8c86ca55.chunk.js.map