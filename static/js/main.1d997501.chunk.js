(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(47),i=a.n(s),l=a(4),o=a(0);var r=function(){return Object(o.jsx)("i",{className:"fas fa-search"})},j=a(13),d=a.n(j),b=a(3);var h=function(){var e=Object(b.f)(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(),j=Object(l.a)(i,2),h=j[0],u=j[1],m=Object(c.useState)(),O=Object(l.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(!0),v=Object(l.a)(g,2),f=v[0],w=v[1],y=function(t){u(t.target.innerText),e.push("/search/".concat(h))};return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:"navbar-logo",children:Object(o.jsx)("h1",{onClick:function(){e.push("/")},className:"navbar-logo_header",children:"Stephen."})}),Object(o.jsxs)("div",{className:"navbar-links",children:[Object(o.jsx)("li",{className:"navbar-links_blogs",children:Object(o.jsx)("a",{href:"#blog",style:{textDecoration:"none",color:"black"},children:"Blog"})}),Object(o.jsx)("li",{className:"navbar-links_about",children:Object(o.jsx)("div",{onClick:function(){e.push("/about")},style:{textDecoration:"none",color:"black"},children:"About"})}),n?Object(o.jsx)("div",{className:"navbar-links_search",children:Object(o.jsxs)("div",{className:"bigSearch",children:[Object(o.jsxs)("div",{className:"navbar-links_search bigSearch_search",children:[Object(o.jsx)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),h?(d.a.get("https://blogstephen.herokuapp.com/add/autoComplete/".concat(h)),e.push("/search/".concat(h))):console.log("Null Value")},children:Object(o.jsx)("input",{type:"text",name:"search",value:h,onChange:function(e){d.a.get("https://blogstephen.herokuapp.com/api/".concat(h)).then((function(e){x(e.data),w(!1)})).catch((function(e){w(!0)})),u(e.target.value)},placeholder:"Search Blogs.."})}),Object(o.jsx)("div",{className:"bigSearch_search-exit",onClick:function(){s(!1),x(""),u(""),w(!1)},children:"\xd7"})]}),f?Object(o.jsx)("div",{}):p.length>0?p.map((function(e){return Object(o.jsx)("div",{className:"searchResult",children:Object(o.jsx)("p",{onClick:y,children:e})},e)})):Object(o.jsx)("div",{})]})}):Object(o.jsx)("div",{className:"navbar-links_search",onClick:function(){s(!0)},children:Object(o.jsx)(r,{})})]})]})},u=(a(83),a(28));var m=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"header-mini",children:[Object(o.jsx)("h1",{className:"heading-primary--main header-name",children:Object(o.jsx)(u.a,{steps:["Hey",1e3,"I'm Stephen"],wrapper:"p"})}),Object(o.jsxs)("p",{className:"heading-primary--sub header-work",children:["A",Object(o.jsxs)("span",{children:["Pr",Object(o.jsx)("span",{children:"o"})]}),"grammer"]}),Object(o.jsx)("button",{className:"btn",children:"Discover"})]})})})},O=a(50),p=a(52);var x=function(){return Object(o.jsxs)("div",{className:"loading",children:[Object(o.jsx)("h1",{style:{color:"grey",fontWeight:"200"},className:"loading_text",children:Object(o.jsx)(u.a,{wrapper:"p",steps:["Loading..."]})}),Object(o.jsx)(p.RotatingPlane,{size:25,color:"grey"})]})};var g=function(){return Object(o.jsx)("footer",{})};var v=function(){var e=Object(b.f)(),t=Object(c.useState)(0),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(),r=Object(l.a)(i,2),j=r[0],h=r[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),p=m[0],v=m[1],f=Object(c.useState)(!1),w=Object(l.a)(f,2),y=w[0],N=w[1],S=Object(c.useState)(!0),k=Object(l.a)(S,2),D=k[0],A=k[1];Object(c.useEffect)((function(){d.a.post("https://blogstephen.herokuapp.com/find",{password:"KxM30xExEx28"}).then((function(e){"Not Found"===e.data[0].status?(N(!0),A(!1)):(h(e.data),A(!1))})).catch((function(e){console.log(e),N(!0),A(!1)}))}),[]);var _,I=function(t){e.push("/read/".concat(t))};return D?Object(o.jsx)(x,{}):Object(o.jsxs)("main",{id:"blog",className:"main",children:[Object(o.jsxs)("div",{className:"main-div",children:[Object(o.jsx)("div",{className:"main-div_blog",children:Object(o.jsx)("h1",{className:"main-div_blog-header",children:"Blogs"})}),y?Object(o.jsx)("div",{style:{color:"black"},children:"The API is currently offline. Please try again in 10 seconds."}):Object(o.jsx)("div",{className:"main-div_blogs",children:6<=j.length?j.slice(0,n).map((function(e){return Object(o.jsxs)("div",{className:"main-div_blogs-container",onClick:function(){I(e.id)},children:[Object(o.jsx)("img",{className:"main-div_blogs-image",alt:e.imageDescription,src:null===e||void 0===e?void 0:e.imageSource}),Object(o.jsx)("div",{className:"main-div_blogs-container-tags-container",children:null===e||void 0===e?void 0:e.tags.map((function(e){return Object(o.jsxs)("div",{style:{color:"white"},className:"main-div_blogs-container-tags",children:["#",e]},e)}))}),Object(o.jsx)("h3",{children:e.title})]},e.id)})):null===(_=j.slice(0,j.length))||void 0===_?void 0:_.map((function(e){return Object(o.jsxs)("div",{className:"main-div_blogs-container",onClick:function(){I(e.id)},children:[Object(o.jsx)("img",{className:"main-div_blogs-image",alt:e.imageDescription,src:e.imageSourc||"https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(o.jsx)("div",{style:{height:"fit-content"},className:"main-div_blogs-container-tags-container",children:e.tags.map((function(e){return Object(o.jsxs)("div",{style:{color:"black"},className:"main-div_blogs-container-tags",children:["#",e]},e)}))}),Object(o.jsxs)("div",{style:{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"right",padding:"0",margin:"0"},children:[Object(o.jsx)("div",{children:e.time}),Object(o.jsx)("div",{class:"readTime",children:e.readTime})]})]}),Object(o.jsx)("h3",{className:"main-div_blogs-container-title",children:e.title})]},e.id)}))})]}),p?Object(o.jsx)(g,{}):Object(o.jsx)(O.a,{onBottom:function(){n+3>j.length?s(n+3):(s(j.length),v(!0))}})]})};var f=function(){return Object(o.jsxs)("div",{className:"About-main",children:[Object(o.jsx)("p",{children:"Hey! I am Stephen. It's great that you wanna know about me. I am an ex Amazon Full Stack Developer. I have 12 years of experience in the DataScience and Web Development industry."}),Object(o.jsx)("p",{children:"My carrer started out has a Data Scientist. I first worked in a small startup where I developed my interest towards Web Development. Since I was so interested in Web Development the company that I have worked in helped me in learning web development and soon after that I started creating multiple web front end pages. But my interest didn't stop there I started learning Node Js and Typescript which was new to the Web Industry that time. I worked as Freelancer and did some part time jobs in small companies to gain more experience on Full Stack Web Development."}),Object(o.jsx)("p",{children:"Finally the big day came when I applied to Amazon as a Full Stack Developer. The excitment didn't last long. After 3 years I quit the job in amazon. The reason was because when do jobs in companies like FAANG you can either be Backend Developer or Front End or Data Scientist. I wanted to do jobs which involved Data Science as well. I didn't want my skills as Front or Back end or Data Scientist to go to waste. So here I am."}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"My goal now is to start up a educational company where I teach my students the skills to land a job in FAANG as a Front End Developer or Backend Developer or as a Data Scientist or even how to start up their own company and how to come up incredible ideas and possible fields where they can start up a company in AI world."})}),Object(o.jsx)("p",{children:"That's all about me. Excited to learn on how to land a job in FAANG or start up your own company ?"})]})};var w=function(){var e=Object(b.h)().query,t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!0),r=Object(l.a)(i,2),j=r[0],h=r[1],u=Object(b.f)(),m=Object(c.useState)(e),O=Object(l.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)([]),v=Object(l.a)(g,2),f=v[0],w=v[1],y=Object(c.useState)(!1),N=Object(l.a)(y,2),S=N[0],k=N[1];return Object(c.useEffect)((function(){d.a.get("https://blogstephen.herokuapp.com/search/".concat(e)).then((function(e){s(e.data),h(!1)})).catch((function(e){h(!0),console.log(e)}))}),[]),Object(o.jsx)("div",{children:j?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"searchTab",children:[Object(o.jsx)("div",{className:"searchTab-container",children:Object(o.jsx)("svg",{className:"search-svg",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),Object(o.jsxs)("div",{className:"searchTab-Holder",children:[Object(o.jsx)("form",{onSubmit:function(){u.push("/search/".concat(p))},children:Object(o.jsx)("input",{onChange:function(t){k(!0),x(t.target.value),d.a.get("https://blogstephen.herokuapp.com/api/".concat(e)).then((function(e){w(e.data)})).catch((function(e){console.log(e)}))},value:p})}),Object(o.jsx)("div",{onClick:function(){x("")},children:"\xd7"})]}),S?0===f.length?Object(o.jsx)("div",{}):f.map((function(e){return Object(o.jsxs)("div",{className:"searchResults-div_container",children:[Object(o.jsx)("svg",{className:"search-svg",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Object(o.jsx)("p",{children:e})]})})):Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"searchResults-div"})]}),Object(o.jsx)("div",{className:"search-results",children:n.map((function(e){return Object(o.jsxs)("div",{className:"search-results_display",children:[Object(o.jsx)("img",{class:"main-div_blogs-image",src:e.imageSource,alt:e.imageDescription}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"50%",margin:"auto",alignText:"left"},children:[Object(o.jsx)("h2",{className:"search-results_display-result",children:e.title}),Object(o.jsx)("p",{className:"search-results_display-result-p",children:e.pageDescription})]})]},e.id)}))})]})})},y=a(53),N=a.n(y),S=a(27);var k=function(){Object(b.f)();var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),i=Object(l.a)(s,2),r=i[0],j=i[1],h=Object(b.h)().id;return Object(c.useEffect)((function(){d.a.post("https://blogstephen.herokuapp.com/api/get/".concat(h),{password:"KxM30xExEx28"}).then((function(e){n(e.data),j(!1),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:r?Object(o.jsxs)("div",{children:["Unable to load the blog. Refresh the page or try again in 2 minutes. Sorry for the inconvenience.",h]}):Object(o.jsxs)("div",{className:"blogView",children:[Object(o.jsxs)(S.a,{children:[Object(o.jsx)("meta",{charSet:"utf-8"}),Object(o.jsx)("title",{children:a[0].title||"Coding Blog to land a job in FAANG."}),Object(o.jsx)("link",{rel:"stylesheet",type:"text/css",href:a[0].cssRef||null}),Object(o.jsx)("meta",{name:"description",content:a[0].pageDescription||"Blog that helps students to land a job in FAANG. Read more find out how to land a job in FAANG"})]}),Object(o.jsx)("div",{style:{width:"100vw",height:"100vh",overflow:"scroll"},dangerouslySetInnerHTML:{__html:N.a.sanitize(a[0].message)}})]})})};var D=function(){var e=Object(b.g)();return Object(o.jsx)("div",{children:Object(o.jsxs)(b.c,{location:e,children:[Object(o.jsxs)(b.a,{path:"/",exact:!0,children:[Object(o.jsxs)(S.a,{children:[Object(o.jsx)("title",{children:"Stephen | Full Stack Web Developer"}),Object(o.jsx)("meta",{name:"description",content:"Hey I am Stephen, Full Stack Web Developer. Join my blog series where you learn the tools required for landing a job in FAANG. You can learn Docker, Kubernetes, Typescript, Google Authentication and how to deploy your site to kubernetes cluster in digital ocean. All this made available for free. Not Only Web Developement I also write blogs where I teach datascience, Deep Learning, Machine Learning and Reinforcement Learning, Q learning in python."}),Object(o.jsx)("meta",{name:"robots",content:"index,follow,archive"}),Object(o.jsx)("meta",{name:"Keywords",content:"Stepeh Ex Web Developer 12 years of work experience Worked in FAANG"})]}),Object(o.jsx)(h,{}),Object(o.jsx)(m,{}),Object(o.jsx)(v,{})]}),Object(o.jsxs)(b.a,{path:"/blog",children:[Object(o.jsx)(h,{}),Object(o.jsx)(v,{})]}),Object(o.jsxs)(b.a,{path:"/about",children:[Object(o.jsx)(h,{}),Object(o.jsx)(m,{}),Object(o.jsx)(f,{})]}),Object(o.jsxs)(b.a,{path:"/search/:query",children:[Object(o.jsx)(h,{}),Object(o.jsx)(w,{})]}),Object(o.jsxs)(b.a,{path:"/read/:id",children:[Object(o.jsx)(h,{}),Object(o.jsx)(k,{})]})]},e.pathname)})},A=a(16);i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(A.a,{children:Object(o.jsx)(D,{})})}),document.getElementById("root"))},83:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.1d997501.chunk.js.map