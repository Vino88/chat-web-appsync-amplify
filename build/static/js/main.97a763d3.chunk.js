(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{159:function(e,t){},300:function(e,t,n){e.exports=n(799)},304:function(e,t,n){},799:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(78),i=n.n(o),s=(n(304),n(104)),c=n(75),u=n(105),m=n(106),l=n(110),d=n(97),p=n.n(d),f=n(141),g=n(137),h=n.n(g),b=n(99),y=n(148),v=n(76),w=n(831),_=n(274),O=n(147),E=n(90),j={aws_project_region:"us-east-2",aws_appsync_graphqlEndpoint:"https://l7xcz4jnlrcarht7aeuz3ykpwa.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_cognito_identity_pool_id:"us-east-2:1562a812-c5dd-43e3-a5e2-2504cd15edd9",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_ssjtgUGQ9",aws_user_pools_web_client_id:"2fq6b3b6hefp5vfg84t6n5a8l3",oauth:{domain:"vinotest3e756ba5-3e756ba5-apps.auth.us-east-2.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"https://apps.d3p9tw1olyeelo.amplifyapp.com/",redirectSignOut:"https://apps.d3p9tw1olyeelo.amplifyapp.com/",responseType:"code"},federationTarget:"COGNITO_USER_POOLS"},I=n(77),R=n(92),k=n(826),M=n(827),S=n(828),C=n(832),D=n(829),$=n(833),q=n(830),A=n(278),T=n.n(A),x=n(277),Q=n.n(x),L=n(146),P=n.n(L),G=n(93),N=n.n(G),z=n(121),U=n.n(z),J=function(e){return function(t){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={username:null},t}return Object(l.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.currentAuthenticatedUser();case 2:t=e.sent,this.setState({username:t.attributes.email});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.username;return t?r.a.createElement(e,Object.assign({},this.props,{username:t})):"Loading..."}}]),n}(r.a.Component)};function B(){var e=Object(R.a)(["\n  mutation DeleteRoom($id: ID!) {\n    deleteRoom(input: { id: $id, , _version: 1 }) {\n      id\n      createdAt\n    }\n  }\n"]);return B=function(){return e},e}function W(){var e=Object(R.a)(["\n  mutation CreateRoom($id: ID!) {\n    createRoom(input: { id: $id }) {\n      id\n      createdAt\n    }\n  }\n"]);return W=function(){return e},e}function F(){var e=Object(R.a)(["\n  query ListRooms {\n    listRooms{\n      items {\n        id\n        createdAt\n      }\n    }\n  }\n"]);return F=function(){return e},e}var Z=N()(F()),H=N()(W()),K=N()(B());var V=J((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Query,{query:Z,fetchPolicy:"cache-and-network"},(function(t){var n=t.data,a=t.loading,o=t.error;if(o)return r.a.createElement("div",null,o.message);if(a)return r.a.createElement(k.a,null);var i={userId:e};return console.log(i.userId.username),r.a.createElement(M.a,{subheader:r.a.createElement(S.a,{component:"div"},r.a.createElement(P.a,{color:"secondary","aria-label":"PersonRounded",style:{position:"responsive",align:"center"}}),i.userId.username," \xa0\xa0\xa0\xa0\xa0 List of rooms"),dense:!0},n.listRooms.items.map((function(e){return r.a.createElement(C.a,{key:e.id,divider:!0},r.a.createElement(D.a,{style:{flex:1},component:O.b,to:"/room/".concat(e.id)},r.a.createElement($.a,{primary:e.id,secondary:e.createdAt})),r.a.createElement(v.Mutation,{mutation:K},(function(t){return r.a.createElement(q.a,{color:"secondary","aria-label":"deleteSharp",style:{position:"responsive",bottom:10,right:10},onClick:function(){var n=e.id;t({variables:{id:n},optimisticResponse:function(){return{deleteRoom:{id:n,createdAt:new Date}}},update:function(e,t){var n=t.data.deleteRoom,a=e.readQuery({query:Z});a.listRooms.items=[n].concat(Object(I.a)(a.listRooms.items.filter((function(e){return e.id!==n.id})))),e.writeQuery({query:Z,data:a})}}),window.location.reload(!1)}},r.a.createElement(Q.a,null))})))})))})),r.a.createElement(v.Mutation,{mutation:H},(function(e){return r.a.createElement(q.a,{color:"primary","aria-label":"Add",style:{position:"absolute",bottom:10,right:10},onClick:function(){var t=U()();e({variables:{id:t},optimisticResponse:function(){return{createRoom:{id:t,createdAt:new Date}}},update:function(e,t){var n=t.data.createRoom,a=e.readQuery({query:Z});a.listRooms.items=[n].concat(Object(I.a)(a.listRooms.items.filter((function(e){return e.id!==n.id})))),e.writeQuery({query:Z,data:a})}}),window.location.reload(!1)}},r.a.createElement(T.a,null))})))})),X=n(183),Y=n(20),ee=n(279),te=(n(249),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.subscribeToNewMessages()}},{key:"onSend",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.map((function(t){return e.props.onSend(t.text)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.loading,a=t.error,o=t.data,i=t.user;if(a)return r.a.createElement("div",null,a.message);if(n)return r.a.createElement("div",null,"Loading");var s=o.getRoom.messages.items;return r.a.createElement("div",{style:ne.container},r.a.createElement(y.a,{style:{height:50}},r.a.createElement(P.a,{color:"secondary","aria-label":"PersonRounded",style:{position:"responsive",align:"right"}}),r.a.createElement("br",null),r.a.createElement("text",{color:"secondary"},i)),r.a.createElement(ee.GiftedChat,{messages:s.map((function(e){return{id:e.id,text:e.content,createdAt:new Date(e.when),user:{id:i,name:i}}})),onSend:function(t){return e.onSend(t)},user:{id:i}}))}}]),t}(r.a.Component)),ne={container:{flex:50,height:"90vh"}},ae=te;function re(){var e=Object(R.a)(["\n  subscription OnCreateMessage($roomId: ID!) {\n    onCreateMessage(roomId: $roomId) {\n      __typename\n      id\n      when\n      content\n      owner\n      roomId\n    }\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(R.a)(["\n  query GetRoomMessages($roomId: ID!) {\n    getRoom(id: $roomId) {\n      __typename\n      messages(limit: 20, sortDirection: DESC) {\n        __typename\n        items {\n          __typename\n          id\n          when\n          content\n          owner\n        }\n      }\n    }\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(R.a)(["\n  mutation createMessage($roomId: ID!, $when: String!, $content: String!) {\n    createMessage(input: { roomId: $roomId, when: $when, content: $content }) {\n      __typename\n      id\n      when\n      content\n      owner\n      roomId\n    }\n  }\n"]);return ie=function(){return e},e}var se=N()(ie()),ce=N()(oe()),ue=N()(re());var me=J((function(e){var t=e.match,n=e.username;return console.log(n),r.a.createElement(v.Query,{variables:{roomId:t.params.roomId},query:ce},(function(e){var a=e.data,o=e.subscribeToMore,i=Object(Y.a)(e,["data","subscribeToMore"]);return r.a.createElement(v.Mutation,{mutation:se},(function(e){return r.a.createElement(ae,Object.assign({},i,{user:n,data:a,subscribeToNewMessages:function(){o({document:ue,variables:{roomId:t.params.roomId},updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var a=n.data.onCreateMessage;return Object.assign({},e,{getRoom:Object(X.a)({},e.getRoom,{messages:Object(X.a)({},e.getRoom.messages,{items:[a].concat(Object(I.a)(e.getRoom.messages.items.filter((function(e){return e.id!==a.id}))))})})})}})},onSend:function(a){e({variables:{content:a,roomId:t.params.roomId,when:new Date},optimisticResponse:function(){return{createMessage:{__typename:"Message",id:U()(),when:new Date,owner:n,content:a}}},update:function(e,n){var a=n.data.createMessage,r=e.readQuery({query:ce,variables:{roomId:t.params.roomId}});r.getRoom.messages.items=[a].concat(Object(I.a)(r.getRoom.messages.items.filter((function(e){return e.id!==a.id})))),e.writeQuery({query:ce,variables:{roomId:t.params.roomId},data:r})}})}}))}))}))}));b.b.configure(j);var le=new h.a({url:j.aws_appsync_graphqlEndpoint,region:j.aws_appsync_region,auth:{type:j.aws_appsync_authenticationType,credentials:function(){return b.a.currentCredentials()},jwtToken:function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.currentSession();case 2:return e.abrupt("return",e.sent.getAccessToken().getJwtToken());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},complexObjectsCredentials:function(){return b.a.currentCredentials()}}),de=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.ApolloProvider,{client:le},r.a.createElement(w.a,{client:le},r.a.createElement(_.Rehydrated,null,r.a.createElement(O.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/room/:roomId",component:me}),r.a.createElement(E.a,{path:"/",component:V}))))))}}]),t}(a.Component),pe=Object(y.b)(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[300,1,2]]]);
//# sourceMappingURL=main.97a763d3.chunk.js.map