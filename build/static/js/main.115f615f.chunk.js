(this.webpackJsonpfarmerbidder=this.webpackJsonpfarmerbidder||[]).push([[0],{124:function(e,t,a){e.exports=a(221)},129:function(e,t,a){},134:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),i=(a(129),a(29)),o=a(12),u=(a(134),a(14)),s=a(15),m=a(17),d=a(16),p=a(37),h=a(111),b=a.n(h),g=(a(135),a(137),{apiKey:"AIzaSyCTf-YconSYup5xO2HuJI_YhMMnMwUrvSQ",authDomain:"farmerbidder.firebaseapp.com",databaseURL:"https://farmerbidder.firebaseio.com",projectId:"farmerbidder",storageBucket:"farmerbidder.appspot.com",messagingSenderId:"1062400645819",appId:"1:1062400645819:web:61d33fbeca55c5fa61e79e",measurementId:"G-JMVMBKQXP9"}),E=b.a.initializeApp(g),f=(E.firestore(),a(78)),v=a.n(f),y=a(44),x=a(118),C=a.n(x),O=(a(157),a(40)),w=a(112),j=a(13),k=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggingIn:!1,isLoggingOut:!1,isVerifying:!1,loginError:!1,logoutError:!1,isAuthenticated:!1,user:{},products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:console.log(t);var a=e.products.concat(t.productinfo);return Object(j.a)(Object(j.a)({},e),{},{products:a});case I:return Object(j.a)(Object(j.a)({},e),{},{isLoggingIn:!0,loginError:!1});case B:return Object(j.a)(Object(j.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!0,user:t.user});case T:return Object(j.a)(Object(j.a)({},e),{},{isLoggingIn:!1,isAuthenticated:!1,loginError:!0});case M:return Object(j.a)(Object(j.a)({},e),{},{isLoggingOut:!0,logoutError:!1});case U:return Object(j.a)(Object(j.a)({},e),{},{isLoggingOut:!1,isAuthenticated:!1,user:{}});case V:return Object(j.a)(Object(j.a)({},e),{},{isLoggingOut:!1,logoutError:!0});case _:return Object(j.a)(Object(j.a)({},e),{},{isVerifying:!0,verifyingError:!1});case G:return Object(j.a)(Object(j.a)({},e),{},{isVerifying:!1});default:return e}}}),R=Object(O.d)(k,{},Object(O.a)(w.a)),S=a(234),A=a(222),D=a(227),L=a(49);var N=function(){return r.a.createElement("div",null,r.a.createElement(A.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(A.a.Brand,{href:"#home"},"FarmerBid App "),r.a.createElement(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"responsive\ufffc\ufffc-navbar-nav"},r.a.createElement(D.a,{className:"mr-auto"},r.a.createElement(D.a.Link,{as:o.b,to:"Farmerhome"},"Products"),r.a.createElement(D.a.Link,{href:"#pricing"},"Bid History"),r.a.createElement(D.a.Link,{as:o.b,to:"Addproduct"},"Add Product"),r.a.createElement(L.a,{title:"Product categories",id:"collasible-nav-dropdown"},r.a.createElement(L.a.Item,{href:"#"},"Vegitables"),r.a.createElement(L.a.Item,{href:"#"},"Fruits"),r.a.createElement(L.a.Item,{href:"#"},"Pluses"))),r.a.createElement(D.a,null,r.a.createElement(D.a.Link,{href:"/login"},"Logout")))))},F=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",croptype:"",weight:"",price:"",selectlocation:"",files:null,startDate:new Date,redirectToReferrer:!1},e.handleChangeName=function(t){e.setState({name:t.target.value})},e.handleChangeCroptype=function(t){e.setState({croptype:t.target.value})},e.handleChangeWeight=function(t){e.setState({weight:t.target.value})},e.handleChangePrice=function(t){e.setState({price:t.target.value})},e.handleChangeSelectlocation=function(t){e.setState({selectlocation:t.target.value})},e.handleChangefiles=function(t){console.log(t.target.files[0]),e.setState({files:URL.createObjectURL(t.target.files[0])})},e.handleupload=function(e){console.log("fileuplaoded:")},e.handlechange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.handleChangeDate=function(t){console.log("date selected: ",t),e.setState({startDate:t})},e.handlesubmit=function(t){t.preventDefault();var a=e.props.dispatch,n={id:Object(S.a)(),name:e.state.name,croptype:e.state.croptype,weight:e.state.weight,price:e.state.price,selectlocation:e.state.selectlocation,files:e.state.files,startDate:e.state.startDate};a(K(n));var r=R.getState();console.log(r.auth.products),e.setState({redirectToReferrer:!0}),t.preventDefault()},e}return Object(s.a)(a,[{key:"render",value:function(){return!0===this.state.redirectToReferrer?r.a.createElement(p.a,{to:"/Farmerhome"}):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N,null),r.a.createElement("h1",null,"Add product descrption"),r.a.createElement("form",{onSubmit:this.handlesubmit},r.a.createElement("label",null,"Name:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",style:{borderRadius:"5px",width:"400px",border:"1px solid #CED4DA"},onChange:this.handleChangeName})),r.a.createElement("br",null),r.a.createElement("div",{style:{paddingRight:"297px"}}),r.a.createElement("label",{style:{color:"black",paddingRight:"50px"}},"Crop type:",r.a.createElement("br",null),r.a.createElement("select",{value:this.state.value,onChange:this.handleChangeCroptype,style:{backgroundColor:"#007BFF",borderRadius:"5px",width:"135px",height:"30px",color:"white",paddingLeft:"10px",paddingRight:"25px",border:"1px solid #CED4DA"}},r.a.createElement("option",{value:"tamato"},"Tomato"),r.a.createElement("option",{value:"chilli"},"Chilli"),r.a.createElement("option",{value:"rice"},"Rice"),r.a.createElement("option",{value:"wheat"},"Wheat"),r.a.createElement("option",{value:"Mango"},"Mango"),r.a.createElement("option",{value:"sapota"},"Sapota"),r.a.createElement("option",{value:"Mosambi"},"Mosambi"),r.a.createElement("option",{value:"Tur dal"},"Tur dal"))),r.a.createElement("br",null),r.a.createElement("label",null," Weight: "),r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"weight in kgs/Tons",onChange:this.handleChangeWeight,style:{borderRadius:"5px",width:"400px",border:"1px solid #CED4DA"}})," ",r.a.createElement("br",null),r.a.createElement("label",{style:{color:"black",paddingRight:"50px"}}," Price: "),r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"Price in Rs",onChange:this.handleChangePrice,style:{borderRadius:"5px",width:"400px",border:"1px solid #CED4DA"}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{paddingRight:"297px"}}),r.a.createElement("label",{style:{color:"black",paddingRight:"50px"}},"Location:",r.a.createElement("br",null),r.a.createElement("select",{value:this.state.value,onChange:this.handleChangeSelectlocation,style:{backgroundColor:"#007BFF",borderRadius:"5px",width:"135px",height:"30px",color:"white",paddingLeft:"10px",paddingRight:"25px",border:"1px solid #CED4DA"}},r.a.createElement("option",{value:"hyderabad"},"Hyderabad"),r.a.createElement("option",{value:"adilabad"},"Adilabad"),r.a.createElement("option",{value:"bhadradri"},"Bhadradri"),r.a.createElement("option",{value:"jagtial"},"Jagtial"),r.a.createElement("option",{value:"kamareddy"},"Kamareddy"),r.a.createElement("option",{value:"karimnagar"},"Karimnagar"),r.a.createElement("option",{value:"khammam"},"Khammam"),r.a.createElement("option",{value:"medak"},"mMedak"),r.a.createElement("option",{value:"nirmal"},"Nirmal"),r.a.createElement("option",{value:"warangal"},"Warangal"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Bid End Date:"),r.a.createElement("br",null),r.a.createElement(C.a,{selected:this.state.startDate,onChange:this.handleChangeDate}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Upload images:"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",onChange:this.handleChangefiles,style:{color:"black",paddingRight:"50px"}}),r.a.createElement("img",{src:this.state.files}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.handleupload,style:{backgroundColor:"#007BFF",borderRadius:"5px",width:"102px",height:"30px",color:"white",paddingLeft:"10px",paddingRight:"25px",border:"1px solid #CED4DA"}},"Upload"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",style:{color:"white",backgroundColor:"#007BFF",borderRadius:"5px",width:"400px",height:"35px",border:"1px solid #CED4DA"}})))}}]),a}(n.Component);var P=Object(i.b)((function(e){return{}}))(F),I="LOGIN_REQUEST",B="LOGIN_SUCCESS",T="LOGIN_FAILURE",M="LOGOUT_REQUEST",U="LOGOUT_SUCCESS",V="LOGOUT_FAILURE",_="VERIFY_REQUEST",G="VERIFY_SUCCESS",W="ADD_PRODUCT",Y=function(e){return{type:B,user:e}},H=function(e,t){return function(a){a({type:I});var n={email:e,password:t,returnSecureToken:!0};v.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=".concat(g.apiKey),n).then((function(e){console.log("user logged in"),console.log(e),console.log(e.data),a(Y(e))})).catch((function(e){a({type:T})}))}},K=function(e){return function(t){t(function(e){return{type:W,productinfo:e}}({id:e.id,name:e.name,croptype:e.croptype,weight:e.weight,price:e.price,selectlocation:e.selectlocation,files:e.files,startDate:e.startDate}))}},J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",isLogged:!1},e.handleChangeEmail=function(t){e.setState({email:t.target.value})},e.handleChangePassword=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(){(0,e.props.dispatch)(H(e.state.email,e.state.password))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.classes,e.loginError,e.isAuthenticated);return console.log("isAuthenticated: ",t),t?r.a.createElement(p.a,{to:"/Farmerhome"}):r.a.createElement("div",{className:"loginpage"},r.a.createElement("h3",null,"Farmer App"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter email",onChange:this.handleChangeEmail})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter Password",onChange:this.handleChangePassword})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleSubmit},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",r.a.createElement("a",{href:"#"},"password?")),r.a.createElement("p",{className:"New register text-left"},"Register",r.a.createElement(o.b,{to:"/Register"},"Here")))}}]),a}(n.Component);var Q=Object(i.b)((function(e){return{isLoggingIn:e.auth.isLoggingIn,loginError:e.auth.loginError,isAuthenticated:e.auth.isAuthenticated}}))(J),z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handlechange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleChange=function(e){n.setState({value:e.target.value})},n.handlesubmit=function(e){alert("my name is ".concat(n.state.fullname,". \n      My email id is ").concat(n.state.email,".\n      My mobile number is ").concat(n.state.phone,".\n      My select type is ").concat(n.state.value,".\n     ")),e.preventDefault()},n.state={fullname:"",email:"",phone:"",value:""},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handlesubmit},r.a.createElement("label",null," fullname "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"fullname",value:this.state.fullname,onChange:this.handlechange,style:{borderRadius:"5px",width:"400px",border:"1px solid #CED4DA"}})," ",r.a.createElement("br",null),r.a.createElement("label",null," Email "),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handlechange})," ",r.a.createElement("br",null),r.a.createElement("label",null," Mobile "),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"phone",value:this.state.phone,onChange:this.handlechange})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Pick type:",r.a.createElement("select",{value:this.state.value,onChange:this.handleChange,style:{backgroundColor:"#007BFF",borderRadius:"5px",width:"135px",height:"30px",color:"white",paddingLeft:"10px",paddingRight:"25px",border:"1px solid #CED4DA"}},r.a.createElement("option",{value:"farmer"},"farmer"),r.a.createElement("option",{value:"bidder"},"bidder"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",style:{color:"white",backgroundColor:"#007BFF",borderRadius:"5px",width:"510px",height:"35px",border:"1px solid #CED4DA"}})))}}]),a}(n.Component),X=(a(220),a(233)),$=a(117),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderProducts=function(){var e=R.getState();return console.log(e.auth.products),e.auth.products.length>0?e.auth.products.map((function(e){var t;t=e.croptype?"./".concat(e.croptype.toString().replace(" ","_").toLowerCase(),".png"):"./tomato.png";var a="/Viewdetails/".concat(e.id);return console.log(e),r.a.createElement("div",{key:e.id},r.a.createElement("li",null,r.a.createElement(X.a,{style:{width:"80rem"}},r.a.createElement(X.a.Body,null,r.a.createElement(X.a.Title,null,e.croptype),r.a.createElement(X.a.Img,{variant:"right",className:"card_img",src:t}),r.a.createElement($.a,{variant:"primary",className:"btn"},r.a.createElement(o.b,{style:{color:"white"},to:a}," View details"))))),r.a.createElement("br",null))})):"Please add products"},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("ol",null,r.a.createElement(this.renderProducts,null)))}}]),a}(n.Component),Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Farmer Product Bidding"),r.a.createElement("div",{className:"homelink"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/Login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/Register"},"Register")))))}}]),a}(r.a.Component),ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).storecp=R.getState(),n.product=[],n.prod={},n.productToRender=function(){return Object.keys(n.prod).length>0?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("h3",null,"Viewdetails"),r.a.createElement("div",null,"posted by:",n.prod.name),r.a.createElement("div",null,"croptype:",n.prod.croptype),r.a.createElement("div",null,"weight in kgs:",n.prod.weight),r.a.createElement("div",null,"price in rs:",n.prod.price),r.a.createElement("div",null,"location:",n.prod.selectlocation),r.a.createElement("div",null,"image:",n.prod.files),r.a.createElement("div",null,"Date:",n.prod.startDate.toDateString()),r.a.createElement($.a,{variant:"primary",className:"card_btn"},r.a.createElement(o.b,{style:{color:"white"},to:"/Bidprice"}," Submit bid"))):r.a.createElement("div",null,"Product not found")},n.productId=n.props.match.params.id,console.log(n.props.match.params.id),n.product=n.storecp.auth.products.filter((function(e){if(e.id===n.productId)return e})),n.product.length>0&&(n.prod=n.product[0]),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"view"},r.a.createElement(this.productToRender,null),r.a.createElement("p",null,"Back",r.a.createElement(o.b,{to:"/Farmerhome"},"Here")))}}]),a}(n.Component);var te=Object(i.b)((function(e){return{}}))(ee),ae=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Your bids"))}}]),a}(n.Component),ne=a(123),re=function(e){var t=e.component,a=e.isAuthenticated,n=e.isVerifying,l=Object(ne.a)(e,["component","isAuthenticated","isVerifying"]);return r.a.createElement(p.b,Object.assign({},l,{render:function(e){return n?r.a.createElement("div",null):a?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},le=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={fullname:"",email:"",phone:"",price:""},e.handlechangeFullname=function(t){e.setState({fullname:t.target.value})},e.handleChangeEmail=function(t){e.setState({email:t.target.value})},e.handleChangePhone=function(t){e.setState({phone:t.target.value})},e.handleChangePrice=function(t){e.setState({price:t.target.value})},e.handlesubmit=function(t){alert("my name is ".concat(e.state.fullname,". \n      My email id is ").concat(e.state.email,".\n      My mobile number is ").concat(e.state.phone,".\n      My Bid price is ").concat(e.state.price,".\n     ")),t.preventDefault()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state;e.fullname,e.email,e.phone,e.price;return r.a.createElement("div",{style:{backgroundColor:"light grey",textAlign:"center"}},r.a.createElement(N,null),r.a.createElement("form",{onSubmit:this.handlesubmit},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Bid Price")),r.a.createElement("br",null),r.a.createElement("label",{style:{color:"black",paddingRight:"50px"}},"Name"),r.a.createElement("input",{type:"text",onChange:this.handlechangeFullname,style:{borderRadius:"5px",width:"400px",border:"1px solid #ced4da"}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{style:{color:"black",paddingRight:"54px"}},"Email"),r.a.createElement("input",{type:"email",onChange:this.handleChangeEmail,style:{borderRadius:"5px",width:"400px",border:"1px solid #ced4da"}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{style:{color:"black",paddingRight:"45px"}},"Mobile"," "),r.a.createElement("input",{type:"number",onChange:this.handleChangePhone,style:{borderRadius:"5px",width:"400px",border:"1px solid #ced4da"}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{style:{color:"black",paddingRight:"50px"}},"Price :"),"",r.a.createElement("input",{type:"number",onChange:this.handleChangePrice,style:{borderRadius:"5px",width:"400px",border:"1px solid #ced4da"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit My Bid",href:"/Farmerhome",style:{color:"white",backgroundColor:"#007bff",borderRadius:"5px",width:"510px",height:"35px",border:"1px solid #ced4da"}}),r.a.createElement("p",{className:"back text-center"},"Back",r.a.createElement(o.b,{to:"/Farmerhome"},"Here"))))}}]),a}(r.a.Component);var ce=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,isVerifying:e.auth.isVerifying}}))((function(e){var t=e.isAuthenticated,a=e.isVerifying;return r.a.createElement(p.d,null,r.a.createElement(re,{exact:!0,path:"/",component:Z,isAuthenticated:t,isVerifying:a}),r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(p.b,{path:"/login",component:Q}),r.a.createElement(p.b,{exact:!0,path:"/Register",component:z}),r.a.createElement(p.b,{exact:!0,path:"/Farmerhome",component:q}),r.a.createElement(p.b,{exact:!0,path:"/Addproduct",component:P}),r.a.createElement(p.b,{exact:!0,path:"/Viewdetails/:id",component:te}),r.a.createElement(p.b,{exact:!0,path:"/Yourbids",component:ae}),r.a.createElement(p.b,{exact:!0,path:"/Bidprice",component:le})))))}));var ie=function(){return r.a.createElement(i.a,{store:R},r.a.createElement(o.a,null,r.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.115f615f.chunk.js.map