(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{108:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(73),a=n(5),s="SEND-MESSAGE",i={DialogsD:[{id:1,name:"mambik"},{id:2,name:"kozak"},{id:3,name:"pitsa"},{id:4,name:"pena"},{id:4,name:"pena"},{id:4,name:"pena"},{id:4,name:"pena"},{id:4,name:"pena"},{id:4,name:"pena"},{id:4,name:"pena"}],MessageD:[{id:1,message:"hi, mamba"},{id:2,message:"i love pitsa"},{id:3,message:"mambasale"},{id:3,message:"mambasale"},{id:3,message:"mambasale"},{id:3,message:"mambasale"},{id:3,message:"mambasale"}]},c=function(e){return{type:s,newMessValue:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:6,message:t.newMessValue};return Object(a.a)(Object(a.a)({},e),{},{MessageD:[].concat(Object(r.a)(e.MessageD),[n])});default:return e}}},139:function(e,t,n){"use strict";n(5),n(29),n(30),n(32),n(31),n(1),n(9),n(11),n(0)},19:function(e,t,n){e.exports={header:"Header_header__33Alx",header_inner:"Header_header_inner__3Eci5",header_nav:"Header_header_nav__2yrcP",header_logo:"Header_header_logo__1fbY1",header_feed:"Header_header_feed__VHzS-",header_music:"Header_header_music__3LtkH",header_prof:"Header_header_prof__3mSZ6",header_prof_nav:"Header_header_prof_nav__2ih0m",header_prof_name:"Header_header_prof_name__PsYoO",header_prof_logo:"Header_header_prof_logo__1P4Dg",header_prof_open_nav_btn:"Header_header_prof_open_nav_btn__1ourU",header_prof_logo_btn_cont:"Header_header_prof_logo_btn_cont__3tyFS",dis_b:"Header_dis_b__39ZuX",dis_n:"Header_dis_n__2FCYL"}},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(135),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"82585bda-8ac2-4ab8-90f9-a9ab0e49ce8b"}}),s={requireUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},21:function(e,t,n){e.exports={users_main_cont:"Users_users_main_cont__1KaVe",users_user_icon_follow_cont:"Users_users_user_icon_follow_cont__1Gg4V",users_user_icon:"Users_users_user_icon__1Pxo3",users_user_follow_btn:"Users_users_user_follow_btn__j4uec",user_info_cont:"Users_user_info_cont__2QXkb",user_info:"Users_user_info__29hvG",user_location:"Users_user_location__3AcA6",fetching_cont:"Users_fetching_cont__1m5iR",fetching_img_cont:"Users_fetching_img_cont__109FX"}},248:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(10),i=n(134),c=n(97),o=n(108),u={friends:[{id:"1",name:"mamba"},{id:"2",name:"pena"},{id:"3",name:"pitska"},{id:"4",name:"pika"},{id:"5",name:"kaka"}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return e},d=n(12),f=n.n(d),b=n(24),j=n(73),g=n(5),_=n(20),p=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},h="FOLLOW",m="UNFOLLOW",O="SET_USERS",A="SET_CURRENT_PAGE",x="SET_TOTAL_USERS_COUNT",v="TOGGLE_IS_FETCHING",w="TOGGLE_FOLLOWING_IN_PROGRESS",S={users:[],pageSize:5,totalUsersCount:0,currentPage:2654,isFetching:!0,followingInProgress:[]},C=function(e){return{type:h,userId:e}},P=function(e){return{type:m,userId:e}},N=function(e){return{type:v,isFetching:e}},I=function(e,t){return{type:w,isFetching:e,userId:t}},E=function(){var e=Object(b.a)(f.a.mark((function e(t,n,r,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(I(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(g.a)(Object(g.a)({},e),{},{users:p(e.users,t.userId,"id",{followed:!0})});case m:return Object(g.a)(Object(g.a)({},e),{},{users:p(e.users,t.userId,"id",{followed:!1})});case O:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case x:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case A:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case v:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case w:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},F=n(58),U="auth/SET_USER_DATA",L={id:null,email:null,login:null,isAuth:!1},B=function(e,t,n,r){return{type:U,payload:{id:e,email:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,a,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,i=r.email,t(B(a,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},H=n(136),D="INITIALIZING_SUCCESS",K={initialized:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},Q=n(133),G=Object(s.combineReducers)({profilePage:c.b,MessagePage:o.a,Sidebar:l,UsersPage:k,auth:z,form:Q.a,app:W}),J=Object(s.createStore)(G,Object(i.composeWithDevTools)(Object(s.applyMiddleware)(H.a)));window._store_=J;var Z=J,R=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},X=n(67),T=n.n(X),M=(n(248),n(29)),V=n(30),Y=n(32),q=n(31),$=n(19),ee=n.n($),te=n(74),ne=n.n(te),re=n(0),ae=function(){return Object(re.jsxs)("div",{className:ne.a.settings,children:[Object(re.jsx)("div",{className:ne.a.settings_cont,children:"q"}),Object(re.jsx)("div",{className:ne.a.settings_close,children:Object(re.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(re.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]})},se=n(9),ie=n(11),ce=n(35),oe=n.n(ce),ue=n(71),le=n.n(ue),de=n(14),fe=function(e){return Object(re.jsx)("li",{children:Object(re.jsx)("div",{className:le.a.sidebar_friend_name,children:Object(re.jsx)("p",{children:e.name})})})},be=function(e){var t=e.Sidebar.friends.map((function(e,t){return Object(re.jsx)(fe,{name:e.name},t)}));return Object(re.jsxs)("div",{className:oe.a.sidebar,children:[Object(re.jsxs)("ul",{className:oe.a.sidebar_nav,children:[Object(re.jsx)("li",{children:Object(re.jsx)(de.b,{activeClassName:oe.a.sidebar_li_active,to:"/profile",children:"Profile"})}),Object(re.jsx)("li",{children:Object(re.jsx)(de.b,{activeClassName:oe.a.sidebar_li_active,to:"/messages",children:"Messages"})}),Object(re.jsx)("li",{children:Object(re.jsx)(de.b,{activeClassName:oe.a.sidebar_li_active,to:"/users",children:"Users"})})]}),Object(re.jsx)("ul",{className:le.a.sidebar_friend_list,children:t}),Object(re.jsx)(de.b,{to:"/settings",className:oe.a.sidebar_settings,activeClassName:oe.a.sidebar_settings_active,children:Object(re.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0hJREFUeJztmT1oFFEQx/8zK7dvTeJXxAgSMSgIKeSyMSpa2PjRKGis0oiCKSxsRbS3sRJR0MLGpEihKEKaVDYSQWMqCw3xoxFMLGKTu012xiYJR9iTPXf3dk/fr33DzLu3c3vvdwNYLBaLxWKxWCz/JZRZ5uO6wf2le0DQagd9xStazqxWAjjthB0D0mn88J5ZkJ9E9IlAM2YB86YvvLvpiGxLu15SUu2A0kHZj2WdYOZuQBSCzwAARg/AJCLfADoRTPOnNOsmIb0O6NV2XtZxZu4WyBMG7apMO3sr085eCqlbVUaZeTezjuOAtKVWtygYX24aX9Uth88AjegsJeOHL4yvavr1RvN3GE3sr4DXJxdC1YfM3BkZoGEIchxSHVh8z28jc/hyWEGTUBEQp/7+AQARmXccHl58R8/jxMc+gFI5nK/74WuoVODiAwWRi/vENZuoErfm3yKQuWDK2REntpGnoLGitqhbb6ljK9obqJeEeHtFAwfgODwskLn6ERIAgLeIU/UilpZW1yS6Q1JAID+gNJxV/rp4fTJofFXjhx+jfu/b+3W78cNZ46uWfDnT9A3WIcV7gJJblqfEfB6QGYBuuUs0oW1KQRWnQHob4B6FjFWneAig2G2aJelehY+I5wY6QuDBqGWFjFU7+BJeZf8ijEsGLqDk+XpOVa9C+ZCyKAneCNGD4D29LMqTt6yQnQ0mpUk2mcltLAnNtslCdUAeNlmcDrA2mY9NpmeDSVlnk6v1AOiq3a3ZpIQh2HGi0uRug0lZtcnaemt2F9Mm87XBpHjwIuopAGz2aGPMLHnYYFJWbDLUk7X1au2uukFP18ZGZsnLBpPi9eu5FZucbTssXevXNw7ozpIffjG+aqlPzqZVt0D3ACXXl1ECD4nId4foDgivAUAVxwR6nYm7BDISTPHFtJyiQAcAoFdLxpX7IL4SuS7yqBLwtbp/uf0FxTqAFUxZjoL0shLKAJQU00T0eHGKJ/Pe2z9H8zqgoLPCzF2g6LPCTDugFWaF2XWAtbvWmBVmZ4ONzAr/YHeNUjgbzGNWWCwbzGdWWAQbzGdWWBgbbJVZYYb3gNaYFWZ7FW6BWWETXMDOCi0Wi8VisVgsFkvx+A3IRz80Xb1zrQAAAABJRU5ErkJggg==",alt:""})})]})},je=Object(ie.b)((function(e){return{Sidebar:e.Sidebar}}),{})(be),ge=n(39),_e=(n(139),n(138)),pe=Object(_e.a)((function(e){return e.UsersPage.users}),(function(e){return e.filter((function(e){return!0}))})),he=function(e){return e.UsersPage.pageSize},me=function(e){return e.UsersPage.totalUsersCount},Oe=function(e){return e.UsersPage.currentPage},Ae=function(e){return e.UsersPage.isFetching},xe=function(e){return e.UsersPage.followingInProgress},ve=n(57),we=n(21),Se=n.n(we),Ce=n(132),Pe=n(46),Ne=n.n(Pe),Ie=function(e){for(var t=e.currentPage,n=e.totalItemsCount,a=e.pageSize,s=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,o=n/a,u=Math.ceil(o),l=[],d=1;d<=u;d++)l.push(d);var f=Object(r.useState)(t/10),b=Object(Ce.a)(f,2),j=b[0],g=b[1],_=Math.ceil(u/c),p=(j-1)*c+1,h=j*c;return Object(re.jsx)("div",{children:Object(re.jsxs)("div",{className:Ne.a.page_number_global_container,children:[j>1&&Object(re.jsx)("button",{className:Ne.a.page_portion_changer,onClick:function(){g(j-1)},children:"prev"}),Object(re.jsx)("ul",{className:Ne.a.page_number_container,children:l.filter((function(e){return e>=p&&e<=h})).map((function(e,n){return Object(re.jsx)("li",{className:t===e&&Ne.a.selected_page,onClick:function(){s(e)},children:e},n)}))}),_>j&&Object(re.jsx)("button",{className:Ne.a.page_portion_changer,onClick:function(){g(j+1)},children:"next"})]})})},Ee=n(98),ke=function(e){var t=e.item,n=e.index,r=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(re.jsxs)("li",{children:[Object(re.jsxs)("div",{className:Se.a.users_user_icon_follow_cont,children:[Object(re.jsx)(de.b,{to:"/profile/".concat(t.id),children:Object(re.jsx)("div",{className:Se.a.users_user_icon,children:Object(re.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ee.a,alt:""})})}),Object(re.jsx)("div",{className:Se.a.users_user_follow_btn,children:t.followed?Object(re.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"unfollow"}):Object(re.jsx)("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"follow"})})]}),Object(re.jsx)("div",{className:Se.a.user_info_cont,children:Object(re.jsx)("div",{className:Se.a.user_info,children:Object(re.jsx)("div",{className:Se.a.user_name,children:Object(re.jsxs)("p",{children:["Name: ",t.name]})})})})]},n)},Fe=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],Ue=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,i=Object(ve.a)(e,Fe);return Object(re.jsx)("div",{children:Object(re.jsxs)("ul",{className:Se.a.users_main_cont,children:[Object(re.jsx)(Ie,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:a}),s.map((function(e,t){return Object(re.jsx)(ke,{item:e,index:t,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow})}))]})})},Le=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(M.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requireUsers(t,n),e.props.setCurrentPage(t)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requireUsers(t,n)}},{key:"render",value:function(){return Object(re.jsxs)(re.Fragment,{children:[this.props.isFetching?Object(re.jsx)(ge.a,{}):null,Object(re.jsx)(Ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Be=Object(s.compose)(Object(ie.b)((function(e){return{users:pe(e),pageSize:he(e),totalUsersCount:me(e),currentPage:Oe(e),isFetching:Ae(e),followingInProgress:xe(e)}}),{follow:function(e){return function(t){E(t,e,_.c.follow,C)}},unfollow:function(e){return function(t){E(t,e,_.c.unfollow,P)}},setCurrentPage:function(e){return{type:A,currentPage:e}},toggleFollowingInProgress:I,requireUsers:function(e,t){return function(){var n=Object(b.a)(f.a.mark((function n(r){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(N(!0)),n.next=3,_.c.requireUsers(e,t);case 3:a=n.sent,r(N(!1)),r((i=a.items,{type:O,users:i})),r((s=a.totalCount,{type:x,count:s}));case 7:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()},getUsers:pe}))(Le),ye=n(99),ze=function(e){return Object(re.jsx)("header",{className:ee.a.header,children:Object(re.jsx)("div",{className:"container",children:Object(re.jsxs)("div",{className:ee.a.header_inner,children:[Object(re.jsx)("div",{className:ee.a.header_nav,children:Object(re.jsx)("div",{className:ee.a.header_logo,children:Object(re.jsx)("h1",{children:"MAMBIK"})})}),Object(re.jsxs)("div",{className:ee.a.header_prof,children:[Object(re.jsx)("div",{className:ee.a.header_prof_name,children:e.isAuth?e.login:Object(re.jsx)(de.b,{to:"/login",children:"Login"})}),Object(re.jsxs)("div",{className:"".concat(e.isAuth?ee.a.header_prof_logo_btn_cont:ee.a.dis_n),children:[Object(re.jsx)("div",{className:ee.a.header_prof_logo,children:Object(re.jsx)("img",{src:ye.a,alt:"logo"})}),Object(re.jsxs)("div",{className:ee.a.header_prof_open_nav_btn,children:[Object(re.jsx)("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(re.jsx)("path",{clipRule:"evenodd",d:"M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z",fill:"currentColor",fillRule:"evenodd"})}),Object(re.jsx)("ul",{className:ee.a.header_prof_nav,children:Object(re.jsx)("li",{onClick:e.logout,children:"log out"})})]})]})]})]})})})},He=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(re.jsx)(ze,Object(g.a)({},this.props))}}]),n}(a.a.Component),De=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.resultCode&&t(B(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(He),Ke=n(130),We=n(131),Qe=n(68),Ge=n(50),Je=n(40),Ze=n.n(Je),Re=Object(Ge.a)(50),Xe=Object(Ge.a)(25),Te=Object(We.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(re.jsx)("div",{className:Ze.a.login_main_container,children:Object(re.jsx)("form",{onSubmit:t,children:Object(re.jsxs)("div",{className:Ze.a.login_form_container,children:[Object(re.jsx)("div",{className:Ze.a.login_title,children:Object(re.jsx)("h1",{children:"LOGIN"})}),Object(re.jsx)("div",{children:Object(re.jsx)(Ke.a,{placeholder:"Email",name:"email",validate:[Ge.b,Re],component:Qe.a})}),Object(re.jsx)("div",{children:Object(re.jsx)(Ke.a,{placeholder:"Password",name:"password",validate:[Ge.b,Xe],component:Qe.a,type:"password"})}),Object(re.jsxs)("div",{className:Ze.a.remember_me,children:[Object(re.jsx)(Ke.a,{name:"rememberMe",component:Qe.a,type:"checkbox"}),Object(re.jsx)("p",{children:"remember "}),Object(re.jsx)("p",{children:"me"})]}),n&&Object(re.jsx)("span",{className:Ze.a.error_alert,children:n}),Object(re.jsx)("div",{children:Object(re.jsx)("button",{className:Ze.a.login_button,children:"Login"})})]})})})})),Me=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(b.a)(f.a.mark((function r(a){var s;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(y()):a(Object(F.a)("login",{_error:s.messages.length>0?s.messages[0]:"some error"}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(re.jsx)(se.a,{to:"/profile"}):Object(re.jsx)("div",{children:Object(re.jsx)(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe),console.log(t)}})})})),Ve=function(e){return function(t){return Object(re.jsx)(a.a.Suspense,{fallback:Object(re.jsx)(ge.a,{}),children:Object(re.jsx)(e,Object(g.a)({},t))})}},Ye=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),qe=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),$e=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(re.jsxs)("div",{children:[Object(re.jsx)(De,{}),Object(re.jsxs)("div",{className:"container side_main",children:[Object(re.jsx)(je,{}),Object(re.jsxs)("div",{className:"main",children:[Object(re.jsx)(se.b,{path:"/profile/:userId?",render:Ve(Ye)}),Object(re.jsx)(se.b,{path:"/messages",render:Ve(qe)}),Object(re.jsx)(se.b,{path:"/users",render:function(){return Object(re.jsx)(a.a.Suspense,{fallback:Object(re.jsx)(ge.a,{}),children:Object(re.jsx)(Be,{})})}}),Object(re.jsx)(se.b,{path:"/settings",render:function(){return Object(re.jsx)(ae,{})}}),Object(re.jsx)(se.b,{path:"/login",render:function(){return Object(re.jsx)(Me,{})}})]})]})]}):Object(re.jsx)(ge.a,{})}}]),n}(a.a.Component),et=Object(s.compose)(se.f,Object(ie.b)((function(e){return{initialized:e.app.initialized}}),{getAuthUserData:y,initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:D})}))}}}))($e);T.a.render(Object(re.jsx)(a.a.StrictMode,{children:Object(re.jsx)(de.a,{children:Object(re.jsx)(ie.a,{store:Z,state:Z.getState(),dispatch:Z.dispatch.bind(Z),children:Object(re.jsx)(et,{})})})}),document.getElementById("root")),R()},35:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1Y6RS",sidebar_nav:"Sidebar_sidebar_nav__1KPIU",sidebar_settings:"Sidebar_sidebar_settings__3vWlg",sidebar_settings_active:"Sidebar_sidebar_settings_active__2DAGn"}},39:function(e,t,n){"use strict";n(1);var r=n(21),a=n.n(r),s=n.p+"static/media/preloader.f1283d50.gif",i=n(0);t.a=function(){return Object(i.jsx)("div",{className:a.a.fetching_cont,children:Object(i.jsx)("div",{className:a.a.fetching_img_cont,children:Object(i.jsx)("img",{src:s,alt:"preloader"})})})}},40:function(e,t,n){e.exports={login_main_container:"Login_login_main_container__2lJtp",login_form_container:"Login_login_form_container__22Rv0",remember_me:"Login_remember_me__3_rjb",login_button:"Login_login_button__Fsb5_",error_alert:"Login_error_alert__zXcqy"}},46:function(e,t,n){e.exports={page_number_global_container:"Paginatir_page_number_global_container__3TRFK",page_number_container:"Paginatir_page_number_container__2gwhZ",page_portion_changer:"Paginatir_page_portion_changer__YgRNS",selected_page:"Paginatir_selected_page__1yVE-"}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"please, write something..."},a=function(e){return function(t){if(t&&t.length>e)return"Max lengths ".concat(e," symbols")}}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(5),a=n(57),s=(n(1),n(94)),i=n.n(s),c=n(0),o=["input","meta","child"],u=["input","meta","child"],l=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(c.jsxs)("div",{className:i.a.input_container,children:[a,s&&Object(c.jsx)("span",{className:i.a.error_alert,children:r})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,o));return Object(c.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(c.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},71:function(e,t,n){e.exports={sidebar_friend_list:"FriendList_sidebar_friend_list__3xaCv",sidebar_friend_list_logo:"FriendList_sidebar_friend_list_logo__ei7Yh"}},74:function(e,t,n){e.exports={settings:"Settings_settings__1ZfNw",settings_close:"Settings_settings_close__24Tbj"}},94:function(e,t,n){e.exports={input_container:"FormsControls_input_container__2TIq7",error:"FormsControls_error__1YKNa",error_alert:"FormsControls_error_alert__2kIUE"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return _}));var r=n(12),a=n.n(r),s=n(24),i=n(5),c=n(20),o="ADD-POST",u="SET_USER_PROFILE",l="SET_STATUS",d={ProfileD:{name:"Mamba",BD:"09.03.2005",city:"mambaria",education:"pitseed",PortfLink:"https://mamba/pitsa"},PostD:[{message:"Hi, mambas lorem",likes:"5"},{message:"I love pitsa",likes:"200"}],profile:null,status:""},f=function(e){return{type:o,newPostText:e}},b=function(e){return{type:l,status:e}},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:r=t.sent,n({type:u,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:5,message:t.newPostText,likes:"1488"};return Object(i.a)(Object(i.a)({},e),e.PostD.unshift(n));case u:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case l:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},98:function(e,t,n){"use strict";t.a=n.p+"static/media/squishi_big.41aa6f3c.jpg"},99:function(e,t,n){"use strict";t.a="data:image/jpeg;base64,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"}},[[293,1,2]]]);
//# sourceMappingURL=main.eb93dc90.chunk.js.map