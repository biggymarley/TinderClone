(this.webpackJsonpmatcha=this.webpackJsonpmatcha||[]).push([[7],{230:function(e,t,i){"use strict";i.r(t),i.d(t,"DialogContext",(function(){return ge})),i.d(t,"IndexContext",(function(){return fe}));var n=i(14),o=i(96),a=i(0),r=i.n(a),s=i(248),c=i(241),l=i(244),d=i(246),x=i(239),u=i(103),b=i(212),m=i(45),j=i(2),p=function(){var e=Object(u.a)(),t=Object(b.a)(e.breakpoints.up("md"));return Object(j.jsx)(s.a,{position:"sticky",color:"transparent",sx:f.Header,children:Object(j.jsxs)(c.a,{disableGutters:!0,children:[Object(j.jsx)(o.a,{sx:{flexGrow:1},children:Object(j.jsxs)(l.a,{sx:{borderRadius:"0"},children:[Object(j.jsx)(m.c,{sx:f.Logo}),Object(j.jsx)(d.a,{sx:f.LogoName,children:"matcha"})]})}),t?Object(j.jsx)(h,{}):Object(j.jsx)(g,{})]})})},h=function(){var e=Object(a.useContext)(ge).OpenDialog;return Object(j.jsx)(x.a,{sx:f.LoginButton,onClick:e,children:"Log in"})},g=function(){return Object(j.jsx)(j.Fragment,{})},f={Header:{boxShadow:"inset 0px 44px 29px -17px #000000",px:{xs:".2rem",sm:".5rem",lg:"1rem"}},Logo:{width:{xs:"30px",md:"39.936px"},height:{xs:"40px",md:"52.97355px"},color:"#FFFFFF"},LogoName:{fontFamily:"Gotham",fontSize:{xs:"1.5rem",md:"2.4rem"},color:"white",lightHeight:"0",letterSpacing:"-3px"},LoginButton:{backgroundColor:"#FFFFFF",color:"#d6002f",fontFamily:"'Montserrat', sans-serif",fontSize:"1rem",fontWeight:"600",px:"24px",minHeight:"40px",textTransform:"capitalize","&:hover":{backgroundColor:"#FFFFFF"}}},O=i(222);function F(){var e=Object(a.useRef)(void 0),t=Object(u.a)();return Object(b.a)(t.breakpoints.up("md"))?Object(j.jsx)(y,{opacityRef:e}):Object(j.jsx)(v,{})}var y=function(e){var t=e.opacityRef,i=Object(a.useContext)(ge).OpenDialog;return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(e){t&&null!==t.current&&(0===window.scrollY?t.current.style.opacity=1:window.scrollY>t.current.clientHeight/2?t.current.style.opacity=0:t.current.style.opacity=1/(window.scrollY/50))}))}),[t]),Object(j.jsx)(o.a,{sx:k.InnerHome,ref:t,children:Object(j.jsxs)(O.a,{direction:"column",spacing:4,alignItems:"center",children:[Object(j.jsxs)(d.a,{variant:"h1",sx:k.headTitle,children:["Swipe Right",Object(j.jsx)("sup",{children:"\xae"})]}),Object(j.jsx)(x.a,{sx:k.signUp,onClick:i,children:"Create Account"})]})})},v=function(){var e=Object(a.useContext)(ge).OpenDialog;return Object(j.jsxs)(o.a,{sx:k.InnerHome,children:[Object(j.jsxs)(d.a,{variant:"h1",sx:k.MobileheadTitle,children:["Swipe Right",Object(j.jsx)("sup",{children:"\xae"})]}),Object(j.jsxs)(O.a,{direction:"column",spacing:4,alignItems:"center",sx:{width:"80%"},children:[Object(j.jsx)(x.a,{sx:k.MobilesignUp,fullWidth:!0,onClick:e,children:"Create Account"}),Object(j.jsx)(x.a,{sx:k.MobileLogin,fullWidth:!0,onClick:e,children:"Login"})]})]})},k={InnerHome:{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",position:"absolute",width:"100%",top:0,bottom:0},headTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontWeight:"900"},signUp:{background:"linear-gradient(225deg,#ff6036,#fd267a)","&:hover":{background:"linear-gradient(225deg,#fd267a,#ff6036)"},color:"#FFFFFF",width:"315px",minHeight:"55px",borderRadius:"12em",fontWeight:"600"},MobilesignUp:{background:"#FFFFFF !important",color:"#000000",minHeight:"55px",borderRadius:"12em",textTransform:"capitalize",fontWeight:"600"},MobileLogin:{background:"transparent",color:"#FFFFFF",minHeight:"55px",borderRadius:"12em",border:"#FFFFFF 2px solid",textTransform:"capitalize",fontWeight:"600"},MobileheadTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontSize:"8vw",fontStyle:"italic"}},w=i.p+"static/media/homebg.5e9cc30c.webp",S=i(178);function C(){var e=Object(a.useRef)({});return Object(a.useEffect)((function(){S.isSafari&&e.current.classList.add("safariBg")}),[]),Object(j.jsx)(o.a,{sx:W.HomePage,ref:e,children:Object(j.jsxs)(o.a,{sx:W.FrontBgColor,children:[Object(j.jsx)(p,{}),Object(j.jsx)(F,{})]})})}var W={HomePage:{height:"100vh",backgroundImage:"url(".concat(w,")"),backgroundColor:"#000000",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"50%",boxShadow:"0 2px 6px 0 rgb(124 133 145 / 77%)"},FrontBgColor:{backgroundColor:"rgba(0,0,0,.4)",width:"100%",height:"100%",position:"relative",WebkitBoxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",lg:"none"},boxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",md:"none"}}},L=i(245),R=i(238),I=i(249);function T(){return Object(j.jsx)("div",{style:z.root,children:Object(j.jsx)(L.a,{maxWidth:"xl",children:Object(j.jsx)(R.a,{container:!0,spacing:3,children:B.map((function(e,t){return Object(j.jsx)(R.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(D,{feedback:e})},t)}))})})})}var D=function(e){var t=e.feedback;return Object(j.jsxs)(O.a,{direction:"column",spacing:2,sx:z.feedbackBox,children:[Object(j.jsx)(d.a,{sx:z.matchName,children:t.matchName}),Object(j.jsx)(I.a,{}),Object(j.jsx)(d.a,{sx:z.desc,children:t.desc})]})},z={root:{padding:"3rem 0",background:"#FFFFFF",boxShadow:"inset 0px 10px 7px -5px rgb(124 133 145 / 77%)"},feedbackBox:{border:"1px solid #d4d8de",borderRadius:"8px",p:"1rem",boxShadow:"0 2px 6px 0 rgb(101 110 123 / 14%)",overflow:"auto"},matchName:{fontFamily:"Roboto",fontWeight:"900",fontSize:"1.2rem"},desc:{fontFamily:"Roboto",color:"#505965",whiteSpace:"pre-wrap",fontWeight:"300"}},B=[{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."}],P=i(183),A=i.n(P),H=i(181),M=i.n(H),E=i(182),q=i.n(E),G=i(184),N=i.n(G);function U(){return Object(j.jsx)("footer",{style:Q.Footer,children:Object(j.jsx)(L.a,{maxWidth:"lg",children:Object(j.jsx)(R.a,{container:!0,children:K.map((function(e,t){return Object(j.jsxs)(R.a,{item:!0,sx:{flexGrow:1},md:e.grid.md,children:[Object(j.jsx)(d.a,{sx:Q.headTitle,paragraph:!0,children:e.head}),e.isIcon?Object(j.jsx)(Y,{content:e}):Object(j.jsx)(J,{content:e})]},t)}))})})})}var Y=function(e){var t,i=e.content;return Object(j.jsx)(R.a,{container:!0,spacing:2,children:null===i||void 0===i||null===(t=i.items)||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)(R.a,{item:!0,sx:Q.links,children:Object(j.jsx)("a",{href:e.link,style:Q.icon,children:e.label})},t)}))})},J=function(e){var t,i=e.content;return Object(j.jsx)(O.a,{direction:"column",spacing:1,sx:{paddingBottom:{xs:"2rem",sm:0}},children:null===i||void 0===i||null===(t=i.items)||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)(d.a,{sx:Q.links,children:e.label},t)}))})},Q={Footer:{padding:"3rem 0",background:"linear-gradient(225deg,#ff6036,#fd267a)"},headTitle:{fontSize:"1.2rem",fontFamily:"Roboto",fontWeight:"900",textTransform:"uppercase",color:"#FFFFFF"},links:{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:".9rem"},icon:{color:"#FFFFFF",fontSize:"30px"}},K=[{head:"LEGAL",grid:{xs:12,sm:6,md:3},items:[{label:"Privacy",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]},{head:"Team",grid:{xs:12,sm:6,md:3},items:[{label:"Ayoub FARAGI",link:""},{label:"Omar BOULLAM",link:""}]},{head:"SOCIAL",grid:{xs:12,sm:6,md:3},isIcon:!0,items:[{label:Object(j.jsx)(M.a,{sx:Q.icon}),link:""},{label:Object(j.jsx)(q.a,{sx:Q.icon}),link:""},{label:Object(j.jsx)(A.a,{sx:Q.icon}),link:"https://github.com/biggymarley/TinderClonePreview"},{label:Object(j.jsx)(N.a,{sx:Q.icon}),link:""}]},{head:"",grid:{xs:12,sm:6,md:3},items:[{label:"FAQ",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]}];function V(){return Object(j.jsx)("div",{style:X.root,children:Object(j.jsxs)(L.a,{maxWidth:"xl",children:[Object(j.jsx)(I.a,{}),Object(j.jsxs)(o.a,{py:"3rem",children:[Object(j.jsx)(d.a,{sx:X.motivation,paragraph:!0,children:"Single people, listen up: If you\u2019re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it\u2019s the place to be to meet your next best match. Let\u2019s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world\u2019s most popular free dating app, you have millions of other single people at your fingertips and they\u2019re all ready to meet someone like you. Whether you\u2019re straight or in the LGBTQIA community, Tinder\u2019s here to bring you all the sparks."}),Object(j.jsx)(d.a,{sx:X.motivation,children:"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U\u2019s got you covered. Tinder isn\u2019t your average dating site \u2014 it\u2019s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."})]})]})})}var X={root:{background:"#FFFFFF",boxShadow:"inset 0px -14px 9px -11px  rgb(124 133 145 / 77%)"},motivation:{color:"#505965",fontWeight:"300"}},Z=i(185),$=i.n(Z),_=i(124),ee=i.n(_),te=i(236),ie=i(235),ne=i(228),oe=i(48);function ae(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),i=t[0],o=t[1],r=Object(a.useState)(""),s=Object(n.a)(r,2),c=s[0],l=s[1],u=Object(a.useContext)(oe.a),b=u.Islogged,p=u.setIslogged,h=function(e){e.preventDefault(),"Email"===e.target.name?o(e.target.value):l(e.target.value)};return Object(j.jsxs)(O.a,{sx:re.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(j.jsx)(m.c,{sx:re.logo}),Object(j.jsx)(d.a,{variant:"h3",sx:re.TitleHead,children:"Login"}),Object(j.jsx)(ne.a,{name:"Email",sx:re.textField,value:i,onChange:h,label:"Email *",fullWidth:!0}),Object(j.jsx)(ne.a,{name:"Password",type:"password",sx:re.textField,value:c,onChange:h,label:"Password *",fullWidth:!0}),Object(j.jsx)(d.a,{sx:re.paswd,children:"Forgot Password ?"}),Object(j.jsxs)(d.a,{sx:re.desc,children:["By clicking Log in, you agree to our"," ",Object(j.jsx)("span",{style:re.link,children:"Terms"}),". Learn how we process your data in our ",Object(j.jsx)("span",{style:re.link,children:"Privacy Policy"})," and"," ",Object(j.jsx)("span",{style:re.link,children:"Cookie Policy"})]}),Object(j.jsx)(x.a,{sx:re.LoginButton,onClick:function(){return p(!b)},variant:"contained",disabled:""===i||""===c,children:"Login"})]})}var re={innerDialog:{maxWidth:"400px",width:"80vw",px:{xs:"0",md:"44px"},py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".8rem",fontWeight:300},link:{fontWeight:500,textDecoration:"underline"},LoginButton:{color:"#FFFFFF",background:"linear-gradient(225deg,#ff6036,#fd267a)",borderRadius:"12em",minHeight:"54px",fontWeight:600,fontSize:"1rem",position:"relative",width:"80%",px:{xs:"1.5rem",md:"3rem"},"&.Mui-disabled":{background:"#f0f2f4 !important"}},disabled:{background:"#f0f2f4 !important"},textField:{borderRadius:"15px","& input":{borderRadius:"15px !important"},"& label.Mui-focused":{color:"#505965"},"& .MuiInput-underline:after":{borderBottomColor:"#505965"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#505965"}},"& fieldset":{borderRadius:"15px"}},paswd:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300,opacity:.7,cursor:"pointer",textDecoration:"underline","&:hover":{textDecoration:"none"}}};function se(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),i=t[0],o=t[1],r=Object(a.useState)(""),s=Object(n.a)(r,2),c=s[0],l=s[1],u=Object(a.useState)(""),b=Object(n.a)(u,2),p=b[0],h=b[1],g=Object(a.useState)(""),f=Object(n.a)(g,2),F=f[0],y=f[1],v=Object(a.useState)(""),k=Object(n.a)(v,2),w=k[0],S=k[1],C=Object(a.useState)(""),W=Object(n.a)(C,2),L=W[0],I=W[1],T=function(e){e.preventDefault(),"Email"===e.target.name?o(e.target.value):"Firstname"===e.target.name?l(e.target.value):"Lastname"===e.target.name?h(e.target.value):"Username"===e.target.name?y(e.target.value):"Password"===e.target.name?S(e.target.value):"Rpassword"===e.target.name&&I(e.target.value)};return Object(j.jsxs)(O.a,{sx:ce.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(j.jsx)(m.c,{sx:ce.logo}),Object(j.jsx)(d.a,{variant:"h3",sx:ce.TitleHead,children:"Create Account"}),Object(j.jsxs)(R.a,{container:!0,spacing:{xs:0,sm:2},children:[Object(j.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(ne.a,{name:"Firstname",sx:ce.textField,value:c,onChange:T,label:"Firstname *",fullWidth:!0})}),Object(j.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(ne.a,{name:"Lastname",sx:ce.textField,value:p,onChange:T,label:"Lastname *",fullWidth:!0})}),Object(j.jsx)(R.a,{item:!0,xs:12,children:Object(j.jsx)(ne.a,{name:"Email",sx:ce.textField,value:i,onChange:T,label:"Email *",fullWidth:!0})}),Object(j.jsx)(R.a,{item:!0,xs:12,children:Object(j.jsx)(ne.a,{name:"Username",sx:ce.textField,value:F,onChange:T,label:"Username *",fullWidth:!0})}),Object(j.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(ne.a,{name:"Password",type:"password",sx:ce.textField,value:w,onChange:T,label:"Password *",fullWidth:!0})}),Object(j.jsx)(R.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(ne.a,{name:"Rpassword",type:"password",sx:ce.textField,value:L,onChange:T,label:"Repeat Password *",fullWidth:!0})})]}),Object(j.jsxs)(d.a,{sx:ce.desc,children:["By clicking Create Account, you agree to our"," ",Object(j.jsx)("span",{style:ce.link,children:"Terms"}),". Learn how we process your data in our ",Object(j.jsx)("span",{style:ce.link,children:"Privacy Policy"})," and"," ",Object(j.jsx)("span",{style:ce.link,children:"Cookie Policy"})]}),Object(j.jsx)(x.a,{sx:ce.LoginButton,variant:"contained",disabled:""===i||""===w||""===c||""===p||""===F||""===L,children:"Create Account"})]})}var ce={innerDialog:{maxWidth:"400px",width:"80vw",px:{xs:"0",md:"44px"},py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".8rem",fontWeight:300},link:{fontWeight:500,textDecoration:"underline"},LoginButton:{color:"#FFFFFF",background:"linear-gradient(225deg,#ff6036,#fd267a)",borderRadius:"12em",minHeight:"54px",fontWeight:600,fontSize:"1rem",position:"relative",width:"80%",px:{xs:"1.5rem",md:"3rem"},"&.Mui-disabled":{background:"#f0f2f4 !important"}},disabled:{background:"#f0f2f4 !important"},textField:{borderRadius:"15px",paddingBottom:{xs:"1rem",sm:"0"},"& input":{borderRadius:"15px !important"},"& label.Mui-focused":{color:"#505965"},"& .MuiInput-underline:after":{borderBottomColor:"#505965"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#505965"}},"& fieldset":{borderRadius:"15px"}},paswd:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300,opacity:.7,cursor:"pointer",textDecoration:"underline","&:hover":{textDecoration:"none"}}},le="LOGIN",de="SIGNUP";function xe(){var e=Object(a.useContext)(ge),t=e.DialogStatus,i=e.CloseDialog,n=Object(a.useContext)(fe).DialogIndex,o=Object(u.a)(),r=Object(b.a)(o.breakpoints.up("md"));return Object(j.jsxs)(te.a,{onClose:i,open:t,fullScreen:!r,sx:pe.root,children:[Object(j.jsx)(l.a,{sx:pe.close,onClick:i,children:Object(j.jsx)(ee.a,{sx:pe.closeIcon})}),Object(j.jsx)(ue,{index:n})]})}var ue=function(e){switch(e.index){case le:return Object(j.jsx)(ae,{});case de:return Object(j.jsx)(se,{});default:return Object(j.jsx)(be,{})}},be=function(){return Object(j.jsxs)(O.a,{sx:pe.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(j.jsx)(me,{}),Object(j.jsx)(je,{})]})},me=function(){var e=Object(a.useContext)(fe).setDialogIndex;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{sx:pe.logo}),Object(j.jsx)(d.a,{variant:"h3",sx:pe.TitleHead,children:"Create Account"}),Object(j.jsxs)(d.a,{sx:pe.desc,children:["By clicking Log in, you agree to our"," ",Object(j.jsx)("span",{style:pe.link,children:"Terms"}),". Learn how we process your data in our ",Object(j.jsx)("span",{style:pe.link,children:"Privacy Policy"})," and"," ",Object(j.jsx)("span",{style:pe.link,children:"Cookie Policy"})]}),Object(j.jsx)(x.a,{sx:pe.LoginButton,onClick:function(){return e(de)},fullWidth:!0,children:"Create Account"}),Object(j.jsx)(I.a,{sx:{width:"100%"},children:Object(j.jsx)(d.a,{sx:pe.desc,style:{fontWeight:600},children:"Or"})}),he.map((function(t,i){return t.formindex?Object(j.jsxs)(x.a,{sx:pe.LoginButton,fullWidth:!0,onClick:function(){return e(t.formindex)},children:[t.icon,t.label]},i):Object(j.jsxs)(x.a,{sx:pe.LoginButton,fullWidth:!0,children:[t.icon,t.label]},i)})),Object(j.jsx)(I.a,{sx:{width:"100%"}}),Object(j.jsx)(d.a,{sx:pe.TitleAvatars,children:"Check my Github"})]})},je=function(){return Object(j.jsx)(O.a,{direction:"row",spacing:2,children:Object(j.jsx)(l.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/biggymarley"},children:Object(j.jsx)(ie.a,{alt:"Ayoub FARAGI",src:"https://avatars.githubusercontent.com/u/58108317?v=4",sx:pe.avatar})})})},pe={root:{".MuiDialog-paper":{display:"flex",alignItems:"center",borderRadius:{xs:0,md:"8px"},position:"relative"}},close:{position:"absolute",right:10,top:10,"&:hover":{backgroundColor:"transparent"}},closeIcon:{fontSize:"2rem",color:"#d4d8de",transition:"transform .2s ease","&:hover":{transform:"rotate(90deg)"}},LoginButton:{color:"#191e25",borderRadius:"12em",minHeight:"54px",border:"2px solid #505965",fontWeight:600,fontSize:"1rem",position:"relative",px:{xs:"1.5rem",md:"3rem"}},innerDialog:{maxWidth:"400px",width:"80vw",px:{xs:"0",md:"44px"},py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},TitleAvatars:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.4rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300},link:{fontWeight:900,textDecoration:"underline"},icon:{width:{xs:"1rem",md:"1.9rem"},height:{xs:"1rem",md:"1.9rem"},position:"absolute",left:10},avatar:{width:56,height:56}},he=[{label:"Log In With Google",icon:Object(j.jsx)(m.b,{sx:pe.icon})},{label:"Log In With Facebook",icon:Object(j.jsx)(m.a,{sx:pe.icon})},{label:"Log In With username",icon:Object(j.jsx)($.a,{sx:pe.icon}),formindex:le}],ge=r.a.createContext(!1),fe=r.a.createContext(!1);t.default=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),i=t[0],r=t[1],s=Object(a.useState)("default"),c=Object(n.a)(s,2),l=c[0],d=c[1];return Object(j.jsx)(ge.Provider,{value:{DialogStatus:i,OpenDialog:function(){d("default"),r(!0)},CloseDialog:function(e){r(!1)}},children:Object(j.jsxs)(fe.Provider,{value:{DialogIndex:l,setDialogIndex:d},children:[Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)(C,{}),Object(j.jsxs)(o.a,{sx:Oe.sticky,children:[Object(j.jsx)(T,{}),Object(j.jsx)(V,{})]})]}),Object(j.jsx)(U,{}),Object(j.jsx)(xe,{})]})})};var Oe={sticky:{position:window.innerHeight>=700?{xs:"static",md:"sticky"}:"static",bottom:0,zIndex:-1}}}}]);
//# sourceMappingURL=7.afb39d86.chunk.js.map