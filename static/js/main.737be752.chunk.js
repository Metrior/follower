(window.webpackJsonpfollowers=window.webpackJsonpfollowers||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"users":{"user1":{"id":1,"name":"Dan","group_id":1,"followers":[]},"user2":{"id":2,"name":"Sam","group_id":1,"followers":[]},"user3":{"id":3,"name":"Paul","group_id":2,"followers":[{"id":2,"name":"Sam","group_id":1,"followers":[]}]},"user4":{"id":4,"name":"Rudi","group_id":2,"followers":[]},"user5":{"id":5,"name":"Stive","group_id":3,"followers":[]},"user6":{"id":6,"name":"Jack","group_id":3,"followers":[]},"user7":{"id":7,"name":"Suzzy","group_id":4,"followers":[]},"user8":{"id":8,"name":"Marry","group_id":4,"followers":[]},"user9":{"id":9,"name":"Angela","group_id":5,"followers":[]},"user10":{"id":10,"name":"Bill","group_id":5,"followers":[]}},"groups":{"group1":{"id":1,"name":"Ruby developers"},"group2":{"id":2,"name":"Python developers"},"group3":{"id":3,"name":"C++ developers"},"group4":{"id":4,"name":"C# developers"},"group5":{"id":5,"name":"Java developers"}}}')},23:function(e,r,t){e.exports={follow:"FollowButton_follow__zp-2V",following:"FollowButton_following__3plRe"}},24:function(e,r,t){e.exports={info:"User_info__fTEy8"}},27:function(e,r,t){e.exports={app:"App_app__1kX79"}},29:function(e,r,t){e.exports=t(40)},34:function(e,r,t){},40:function(e,r,t){"use strict";t.r(r);var n=t(0),s=t.n(n),o=t(15),a=t.n(o),u=(t(34),t(9)),l=t(14),i=t(19),c={currentUser:null,currentUsersList:i.users},p=Object(u.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_USER":return{currentUser:r.payload.currentUser};default:return e}},usersList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_USERS_LIST":return{currentUsersList:r.payload.currentUsersList};default:return e}}}),f=t(2),d=t(3),m=t(5),h=t(4),g=t(6),w=t(27),v=t.n(w),b=function(e){return{type:"SET_USER",payload:{currentUser:e}}},U=function(e){return{type:"SET_USERS_LIST",payload:{currentUsersList:e}}},O=function(e){function r(){var e,t;Object(f.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(r)).call.apply(e,[this].concat(s)))).state={currentUser:t.props.currentUser},t.handleSighOut=function(){t.props.setUser(null)},t.handleSignIn=function(){t.props.setUser({id:1,name:"Dan",group_id:1,followers:[]})},t}return Object(g.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,this.props.currentUser?s.a.createElement("div",null,"welcome ",this.props.currentUser.name,s.a.createElement("button",{onClick:this.handleSighOut},"Log out")):s.a.createElement("div",null,s.a.createElement("div",null,"Must be signed in"),s.a.createElement("button",{onClick:this.handleSignIn},"Log in as user1")))}}]),r}(n.Component),y=Object(l.b)(null,{setUser:b})(O),j=t(23),S=t.n(j),_=t(17),E=function(e){function r(){var e,t;Object(f.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(r)).call.apply(e,[this].concat(s)))).state={followed:!1,user:t.props.user,currentUser:t.props.currentUser},t.handleClick=function(){var e=t.state,r=e.followed,n=e.user,s=e.currentUser;if(!1===r)n.followers.push(s),t.props.setUsersList(t.props.currentUsersList),t.setState({followed:!0});else{var o=n.followers.indexOf(s);n.followers.splice(o,1),t.props.setUsersList(t.props.currentUsersList),t.setState({followed:!1})}},t}return Object(g.a)(r,e),Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.state.user.followers.map(function(r){r.name===e.props.currentUser.name&&e.setState({followed:!0,buttonText:"Following"})})}},{key:"render",value:function(){return s.a.createElement("button",{onClick:this.handleClick,className:this.state.followed?S.a.following:S.a.follow})}}]),r}(n.Component),L=Object(_.a)(function(e){return{currentUsersList:e.usersList.currentUsersList}},{setUsersList:U})(E),k=t(24),C=t.n(k),I=function(e){function r(){var e,t;Object(f.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(r)).call.apply(e,[this].concat(s)))).getGroup=function(e,r){return Object.values(r).map(function(r){if(r.id===e.group_id)return r.name})},t}return Object(g.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){var e=this.props.user;return e.name!==this.props.currentUser.name?s.a.createElement("div",null,e.name,s.a.createElement("span",{className:C.a.info}," ",(e.followers||[]).length," "),s.a.createElement("span",{className:C.a.info}," ",this.getGroup(e,this.props.groups)," "),s.a.createElement(L,{users:this.props.users,user:e,currentUser:this.props.currentUser})):null}}]),r}(n.Component),J=function(e){function r(){var e,t;Object(f.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=Object(m.a)(this,(e=Object(h.a)(r)).call.apply(e,[this].concat(o)))).state={currentUser:t.props.currentUser,users:t.props.users,groups:t.props.groups},t.getList=function(e){return e?Object.values(t.props.users).map(function(e,r){return s.a.createElement(I,{key:r,user:e,currentUser:t.state.currentUser,groups:t.state.groups})}):null},t}return Object(g.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"Choose users to follow:",this.getList(this.state.users))}}]),r}(n.Component),N=function(e){function r(){return Object(f.a)(this,r),Object(m.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(g.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,{currentUser:this.props.currentUser}),this.props.currentUser?s.a.createElement(J,{users:this.props.usersList.currentUsersList,groups:i.groups,currentUser:this.props.currentUser}):null)}}]),r}(n.Component),T=Object(l.b)(function(e){return{currentUser:e.user.currentUser,usersList:e.usersList}},{setUser:b,setUsersList:U})(N),R=function(e){function r(){return Object(f.a)(this,r),Object(m.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(g.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:v.a.app},s.a.createElement(T,null))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(28),A={user:function(){try{var e=localStorage.getItem("currentUser");if(null===e)return;return JSON.parse(e)}catch(r){return}}(),usersList:function(){try{var e=localStorage.getItem("usersList");if(null===e)return;return JSON.parse(e)}catch(r){return}}()},B=Object(u.createStore)(p,A,Object(x.composeWithDevTools)());B.subscribe(function(){!function(e){try{var r=JSON.stringify(e);localStorage.setItem("currentUser",r)}catch(t){console.log(t)}}(B.getState().user),function(e){try{var r=JSON.stringify(e);localStorage.setItem("usersList",r)}catch(t){console.log(t)}}(B.getState().usersList)}),a.a.render(s.a.createElement(l.a,{store:B},s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.737be752.chunk.js.map