(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subvue"],{"0d48":function(e,t,u){"use strict";u("b0c0"),u("a4d3"),u("e01a");var s=u("7a23"),n={class:"subvue-info"},c=Object(s["g"])("p",null,[Object(s["g"])("strong",null,"Moderators")],-1);function b(e,t,u,b,r,i){var a=Object(s["y"])("router-link");return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["g"])(a,{class:"heading",to:{name:"Subvue",params:{name:u.subvue.permalink}}},{default:Object(s["F"])((function(){return[Object(s["g"])("h2",null,Object(s["A"])(u.subvue.name),1)]})),_:1},8,["to"]),Object(s["g"])("p",null,Object(s["A"])(u.subvue.description),1),r.subscribed?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return i.subscribe&&i.subscribe.apply(i,arguments)}),class:"subscribe-button"},"Subscribe")),r.subscribed?(Object(s["q"])(),Object(s["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return i.unsubscribe&&i.unsubscribe.apply(i,arguments)}),class:"subscribe-button"},"Unsubscibe")):Object(s["e"])("",!0),c,Object(s["g"])("ul",null,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(u.subvue.moderators,(function(e){return Object(s["q"])(),Object(s["d"])("li",{key:e.username},[Object(s["g"])(a,{to:{name:"User",params:{username:e.username}}},{default:Object(s["F"])((function(){return[Object(s["f"])(Object(s["A"])(e.username),1)]})),_:2},1032,["to"])])})),128))])])}u("4de4");var r=u("aaff"),i=u("bf80"),a={name:"subvue-info",props:["subvue"],data:function(){return{subscribed:!1}},methods:{subscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;r["a"].subscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},unsubscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;r["a"].unsubscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},checkSubscribed:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return!1;i["a"].username(this.$store.state.user.username).then((function(t){var u=t.data.subscribed.filter((function(t){return t.permalink==e.subvue.permalink}));e.subscribed=u.length>0}))}},mounted:function(){this.checkSubscribed()},watch:{subvue:function(){this.checkSubscribed()}}};u("6469");a.render=b;t["a"]=a},"20f3":function(e,t,u){"use strict";u("8d4f")},"4de4":function(e,t,u){"use strict";var s=u("23e7"),n=u("b727").filter,c=u("1dde"),b=u("ae40"),r=c("filter"),i=b("filter");s({target:"Array",proto:!0,forced:!r||!i},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},6469:function(e,t,u){"use strict";u("a554")},"8d4f":function(e,t,u){},a554:function(e,t,u){},aaff:function(e,t,u){"use strict";var s=u("3f4a");t["a"]={item:function(e){return Object(s["a"])().get("subvues/"+e)},create:function(e){return Object(s["a"])().post("subvues",e)},posts:function(e){return Object(s["a"])().get("subvues/"+e+"/posts")},subscribe:function(e){return Object(s["a"])().post("subvues/"+e+"/subscribe")},unsubscribe:function(e){return Object(s["a"])().post("subvues/"+e+"/unsubscribe")}}},f073:function(e,t,u){"use strict";u.r(t);var s=u("7a23"),n=Object(s["I"])("data-v-9b7f8e64");Object(s["t"])("data-v-9b7f8e64");var c={class:"subvue"},b={class:"container"},r=Object(s["g"])("h1",null,"Recent Posts",-1),i={key:1};Object(s["r"])();var a=n((function(e,t,u,a,o,f){var d=Object(s["y"])("PostPreview"),v=Object(s["y"])("CreateButton"),l=Object(s["y"])("SubvueInfo");return Object(s["q"])(),Object(s["d"])("div",c,[Object(s["g"])("div",b,[r,(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(o.posts,(function(e){return Object(s["q"])(),Object(s["d"])(d,{hideSubvue:!0,key:e.id,post:e},{default:n((function(){return[Object(s["f"])(Object(s["A"])(e.title),1)]})),_:2},1032,["post"])})),128)),Object(s["g"])(v)]),o.subvue?(Object(s["q"])(),Object(s["d"])(l,{key:0,class:"subvue-info",subvue:o.subvue},null,8,["subvue"])):(Object(s["q"])(),Object(s["d"])("div",i))])})),o=(u("b0c0"),u("0d48")),f=u("3ffe"),d=u("1c16"),v=u("aaff"),l={name:"subvue",components:{SubvueInfo:o["a"],CreateButton:f["a"],PostPreview:d["a"]},data:function(){return{permalink:this.$route.params.name,posts:[],subvue:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;v["a"].item(this.permalink).then((function(t){e.subvue=t.data})),v["a"].posts(this.permalink).then((function(t){e.posts=t.data}))}},watch:{$route:function(){this.permalink=this.$route.params.name,this.fetchData()}}};u("20f3");l.render=a,l.__scopeId="data-v-9b7f8e64";t["default"]=l}}]);
//# sourceMappingURL=subvue.ef737acd.js.map