(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/like.d1fd0755.png"},39:function(e,t,a){e.exports=a.p+"static/media/dislike.931a98bc.png"},42:function(e,t,a){e.exports=a.p+"static/media/FaceTube.630f7fda.png"},45:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(20),o=a.n(i),l=(a(50),a(23)),r=a(8),c=a(9),u=a(11),p=a(10),d=(a(51),a(44)),m=a(21),h=a(43),f=(a(36),a(22)),k=a(18),b=a(37),g=a.n(b),E=a(13),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"likesClickHandler",value:function(e){this.props.likeaction(this.props.postId)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,null,s.a.createElement(k.a,{onClick:function(){return e.likesClickHandler()},fluid:!0,className:"mx-auto",src:g.a,width:"30px",alt:"like logo"}),this.props.no))}}]),a}(s.a.Component),O=a(39),y=a.n(O),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"dislikesClickHandler",value:function(e){this.props.dislikeaction(this.props.postId)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,null,s.a.createElement(k.a,{onClick:function(){return e.dislikesClickHandler()},fluid:!0,className:"mx-auto",src:y.a,width:"30px",alt:"dislike logo"}),this.props.no))}}]),a}(s.a.Component),j=a(40),I=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{border:"success",className:"mx-2 text-left mt-2",style:{width:"450px"}},s.a.createElement(f.a.Header,{as:"h5"},"@",this.props.id),s.a.createElement(k.a,{fluid:!0,className:"mx-auto",src:this.props.img,width:"400px",alt:this.props.alt}),s.a.createElement(f.a.Body,null,s.a.createElement(f.a.Text,null,this.props.text),s.a.createElement(j.a,{xs:"auto"},s.a.createElement(v,{no:this.props.likes,likeaction:this.props.likeaction,postId:this.props.postId}),s.a.createElement(x,{no:this.props.dislikes,dislikeaction:this.props.dislikeaction,postId:this.props.postId}),s.a.createElement(E.a,null),s.a.createElement(E.a,null),s.a.createElement(E.a,null)))))}}]),a}(s.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"buildPosts",value:function(){var e=this;return this.props.posts.map((function(t,a){return s.a.createElement(I,{key:a,postId:t.postid,id:t.id,img:t.img,text:t.text,likes:t.likes,likeaction:e.props.likeaction,dislikes:t.dislikes,dislikeaction:e.props.dislikeaction})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,this.buildPosts()))}}]),a}(s.a.Component),S=a(12),N=a(41),w=a(31),L=a.n(w),J=(a(54),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={postId:0,id:"",text:"",img:""},L.a.options={closeButton:!0,debug:!1,extendedTimeOut:"1000",hideDuration:"1000",hideEasing:"linear",hideMethod:"fadeOut",newestOnTop:!1,onclick:null,positionClass:"toast-top-full-width",preventDuplicates:!0,progressBar:!0,showDuration:"300",showEasing:"swing",showMethod:"fadeIn",timeOut:"5000",background:"black"},L.a.clear(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.lastid),this.setState({postId:this.props.lastid})}},{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"submitHandler",value:function(e){e.preventDefault();var t=this.state.postId+1;console.log(t),this.props.onsubmit(t,this.state.id,this.state.text,this.state.img,0,0),L.a.success("Post Added Successfully"),this.setState({postId:t,id:"",text:"",img:"",likes:0,dislikes:0},console.log(this.state))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{onSubmit:function(t){return e.submitHandler(t)}},s.a.createElement(S.a.Group,{controlId:"userID"},s.a.createElement(S.a.Label,null,"Name:"),s.a.createElement(S.a.Control,{name:"id",type:"text",value:this.state.id,onChange:function(t){return e.handleChange(t)}})),s.a.createElement(S.a.Group,{controlId:"text"},s.a.createElement(S.a.Label,null,"Message:"),s.a.createElement(S.a.Control,{name:"text",type:"text",value:this.state.text,placeholder:"What is your message?",onChange:function(t){return e.handleChange(t)}})),s.a.createElement(S.a.Group,{controlId:"img"},s.a.createElement(S.a.Label,null,"Image URL:"),s.a.createElement(S.a.Control,{name:"img",type:"text",value:this.state.img,placeholder:"Attach your photo by URL",onChange:function(t){return e.handleChange(t)}})),s.a.createElement(N.a,{variant:"success",type:"submit"}," Submit Post")))}}]),a}(s.a.Component)),D=a(42),F=a.n(D),H=a(32),M=a(5),P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={posts:[],postId:void 0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("posts"),t=0;e&&(t=JSON.parse(e)[JSON.parse(e).length-1].postid),this.setState({posts:JSON.parse(e)||[],postId:t})}},{key:"updateListItems",value:function(e,t,a,n,s,i){var o=this,l={postid:e,id:t,text:a,img:n,likes:s,dislikes:i};this.setState((function(e){return{posts:e.posts.concat(l)}}),(function(){return localStorage.setItem("posts",JSON.stringify(o.state.posts))}))}},{key:"addLike",value:function(e){var t=this;this.setState((function(t){return{posts:t.posts.map((function(t){return t.postid===e?Object(l.a)(Object(l.a)({},t),{},{likes:t.likes+1}):t}))}}),(function(){return localStorage.setItem("posts",JSON.stringify(t.state.posts))}))}},{key:"disLike",value:function(e){var t=this;this.setState((function(t){return{posts:t.posts.map((function(t){return t.postid===e?Object(l.a)(Object(l.a)({},t),{},{dislikes:t.dislikes+1}):t}))}}),(function(){return localStorage.setItem("posts",JSON.stringify(t.state.posts))}))}},{key:"render",value:function(){var e=this;return s.a.createElement(H.a,null,s.a.createElement(m.a,{bg:"success",expand:"md"},s.a.createElement(m.a.Brand,null,s.a.createElement("img",{src:F.a,fluid:!0,className:"mx-auto",width:"100px",alt:"FaceTube logo"})),s.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(d.a,{className:"mr-auto"},s.a.createElement(H.b,{className:"nav-link",to:"/"},"View Post"),s.a.createElement(H.b,{className:"nav-link",to:"/add"},"Create Post")))),s.a.createElement(h.a,null,s.a.createElement(M.c,null,s.a.createElement(M.a,{path:"/add",element:s.a.createElement(J,{onsubmit:function(t,a,n,s,i,o){return e.updateListItems(t,a,n,s,i,o)},lastid:this.state.postId})}),s.a.createElement(M.a,{exact:!0,path:"/",element:s.a.createElement(C,{posts:this.state.posts,likeaction:function(t){return e.addLike(t)},dislikeaction:function(t){return e.disLike(t)}})}),s.a.createElement(M.a,{path:"/",element:"Error: 404 not found"}))))}}]),a}(s.a.Component);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(P,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6061cc47.chunk.js.map