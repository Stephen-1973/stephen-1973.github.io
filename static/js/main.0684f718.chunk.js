(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(35),i=a.n(s),l=a(4),r=a(0);var o=function(){return Object(r.jsx)("i",{className:"fas fa-search"})},j=a(11),d=a.n(j),b=a(3);var h=function(){var e=Object(b.f)(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(),j=Object(l.a)(i,2),h=j[0],u=j[1],m=Object(c.useState)(),O=Object(l.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(!0),v=Object(l.a)(g,2),f=v[0],w=v[1],N=function(t){u(t.target.innerText),e.push("/search/".concat(h))};return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar-logo",children:Object(r.jsx)("h1",{onClick:function(){e.push("/")},className:"navbar-logo_header",children:"Stephen."})}),Object(r.jsxs)("div",{className:"navbar-links",children:[Object(r.jsx)("li",{className:"navbar-links_blogs",children:Object(r.jsx)("a",{href:"#blog",style:{textDecoration:"none",color:"black"},children:"Blog"})}),Object(r.jsx)("li",{className:"navbar-links_about",children:Object(r.jsx)("div",{onClick:function(){e.push("/about")},style:{textDecoration:"none",color:"black"},children:"About"})}),n?Object(r.jsx)("div",{className:"navbar-links_search",children:Object(r.jsxs)("div",{className:"bigSearch",children:[Object(r.jsxs)("div",{className:"navbar-links_search bigSearch_search",children:[Object(r.jsx)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),h?(d.a.get("https://blogstephen.herokuapp.com/add/autoComplete/".concat(h)),e.push("/search/".concat(h))):console.log("Null Value")},children:Object(r.jsx)("input",{type:"text",name:"search",value:h,onChange:function(e){d.a.get("https://blogstephen.herokuapp.com/api/".concat(h)).then((function(e){x(e.data),w(!1)})).catch((function(e){w(!0)})),u(e.target.value)},placeholder:"Search Blogs.."})}),Object(r.jsx)("div",{className:"bigSearch_search-exit",onClick:function(){s(!1),x(""),u(""),w(!1)},children:"\xd7"})]}),f?Object(r.jsx)("div",{}):p.length>0?p.map((function(e){return Object(r.jsx)("div",{className:"searchResult",children:Object(r.jsx)("p",{onClick:N,children:e})},e)})):Object(r.jsx)("div",{})]})}):Object(r.jsx)("div",{className:"navbar-links_search",onClick:function(){s(!0)},children:Object(r.jsx)(o,{})})]})]})},u=(a(70),a(22));var m=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("div",{className:"header-mini",children:[Object(r.jsx)("h1",{className:"heading-primary--main header-name",children:Object(r.jsx)(u.a,{steps:["Hey",1e3,"I'm Stephen"],wrapper:"p"})}),Object(r.jsxs)("p",{className:"heading-primary--sub header-work",children:["A",Object(r.jsxs)("span",{children:["Pr",Object(r.jsx)("span",{children:"o"})]}),"grammer"]}),Object(r.jsx)("button",{className:"btn",children:"Discover"})]})})})},O=a(38);var p=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("h1",{className:"loading_text",children:Object(r.jsx)(u.a,{wrapper:"p",steps:["Loading..."]})})})};var x=function(){return Object(r.jsx)("footer",{})};var g=function(){var e=Object(b.f)(),t=Object(c.useState)(0),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(),o=Object(l.a)(i,2),j=o[0],h=o[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),g=m[0],v=m[1],f=Object(c.useState)(!1),w=Object(l.a)(f,2),N=w[0],y=w[1],S=Object(c.useState)(!0),k=Object(l.a)(S,2),D=k[0],A=k[1];Object(c.useEffect)((function(){d.a.post("http://127.0.0.1:5000find",{password:"KxM30xExEx28"}).then((function(e){"Not Found"===e.data[0].status?(y(!0),A(!1)):(h(e.data),A(!1))})).catch((function(e){y(!0),A(!1)}))}),[]);var _,I=function(t){e.push("/read/".concat(t))};return D?Object(r.jsx)(p,{}):Object(r.jsxs)("main",{id:"blog",className:"main",children:[Object(r.jsxs)("div",{className:"main-div",children:[Object(r.jsx)("div",{className:"main-div_blog",children:Object(r.jsx)("h1",{className:"main-div_blog-header",children:"Blogs"})}),N?Object(r.jsx)("div",{style:{color:"black"},children:"The API is currently offline. Please try again in 10 seconds."}):Object(r.jsx)("div",{className:"main-div_blogs",children:6<=j.length?j.slice(0,n).map((function(e){return Object(r.jsxs)("div",{className:"main-div_blogs-container",onClick:function(){I(e.id)},children:[Object(r.jsx)("img",{className:"main-div_blogs-image",alt:e.imageDescription,src:null===e||void 0===e?void 0:e.imageSource}),Object(r.jsx)("div",{className:"main-div_blogs-container-tags-container",children:null===e||void 0===e?void 0:e.tags.map((function(e){return Object(r.jsxs)("div",{style:{color:"white"},className:"main-div_blogs-container-tags",children:["#",e]},e)}))}),Object(r.jsx)("h3",{children:e.title})]},e.id)})):null===(_=j.slice(0,j.length))||void 0===_?void 0:_.map((function(e){return Object(r.jsxs)("div",{className:"main-div_blogs-container",onClick:function(){I(e.id)},children:[Object(r.jsx)("img",{className:"main-div_blogs-image",alt:e.imageDescription,src:e.imageSourc||"https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"}),Object(r.jsx)("div",{children:e.time}),Object(r.jsx)("div",{className:"main-div_blogs-container-tags-container",children:e.tags.map((function(e){return Object(r.jsxs)("div",{style:{color:"black"},className:"main-div_blogs-container-tags",children:["#",e]},e)}))}),Object(r.jsx)("h3",{className:"main-div_blogs-container-title",children:e.title})]},e.id)}))})]}),g?Object(r.jsx)(x,{}):Object(r.jsx)(O.a,{onBottom:function(){n+3>j.length?s(n+3):(s(j.length),v(!0))}})]})};var v=function(){return Object(r.jsxs)("div",{className:"About-main",children:[Object(r.jsx)("p",{children:"Hey! I am Stephen. It's great that you wanna know about me. I am an ex Amazon Full Stack Developer. I have 12 years of experience in the DataScience and Web Development industry."}),Object(r.jsx)("p",{children:"My carrer started out has a Data Scientist. I first worked in a small startup where I developed my interest towards Web Development. Since I was so interested in Web Development the company that I have worked in helped me in learning web development and soon after that I started creating multiple web front end pages. But my interest didn't stop there I started learning Node Js and Typescript which was new to the Web Industry that time. I worked as Freelancer and did some part time jobs in small companies to gain more experience on Full Stack Web Development."}),Object(r.jsx)("p",{children:"Finally the big day came when I applied to Amazon as a Full Stack Developer. The excitment didn't last long. After 3 years I quit the job in amazon. The reason was because when do jobs in companies like FAANG you can either be Backend Developer or Front End or Data Scientist. I wanted to do jobs which involved Data Science as well. I didn't want my skills as Front or Back end or Data Scientist to go to waste. So here I am."}),Object(r.jsx)("p",{children:Object(r.jsx)("strong",{children:"My goal now is to start up a educational company where I teach my students the skills to land a job in FAANG as a Front End Developer or Backend Developer or as a Data Scientist or even how to start up their own company and how to come up incredible ideas and possible fields where they can start up a company in AI world."})}),Object(r.jsx)("p",{children:"That's all about me. Excited to learn on how to land a job in FAANG or start up your own company ?"})]})};var f=function(){var e=Object(b.h)().query,t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!0),o=Object(l.a)(i,2),j=o[0],h=o[1],u=Object(b.f)(),m=Object(c.useState)(e),O=Object(l.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)([]),v=Object(l.a)(g,2),f=v[0],w=v[1],N=Object(c.useState)(!1),y=Object(l.a)(N,2),S=y[0],k=y[1];return Object(c.useEffect)((function(){d.a.get("https://blogstephen.herokuapp.com/search/".concat(e)).then((function(e){s(e.data),h(!1)})).catch((function(e){h(!0),console.log(e)}))}),[]),Object(r.jsx)("div",{children:j?Object(r.jsx)(r.Fragment,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"searchTab",children:[Object(r.jsx)("div",{className:"searchTab-container",children:Object(r.jsx)("svg",{className:"search-svg",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),Object(r.jsxs)("div",{className:"searchTab-Holder",children:[Object(r.jsx)("form",{onSubmit:function(){u.push("/search/".concat(p))},children:Object(r.jsx)("input",{onChange:function(t){k(!0),x(t.target.value),d.a.get("https://blogstephen.herokuapp.com/api/".concat(e)).then((function(e){w(e.data)})).catch((function(e){console.log(e)}))},value:p})}),Object(r.jsx)("div",{onClick:function(){x("")},children:"\xd7"})]}),S?0===f.length?Object(r.jsx)("div",{}):f.map((function(e){return Object(r.jsxs)("div",{className:"searchResults-div_container",children:[Object(r.jsx)("svg",{className:"search-svg",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Object(r.jsx)("p",{children:e})]})})):Object(r.jsx)("div",{}),Object(r.jsx)("div",{className:"searchResults-div"})]}),Object(r.jsx)("div",{className:"search-results",children:n.map((function(e){return Object(r.jsxs)("div",{className:"search-results_display",children:[Object(r.jsx)("img",{class:"main-div_blogs-image",src:e.imageSource,alt:e.imageDescription}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"50%",margin:"auto",alignText:"left"},children:[Object(r.jsx)("h2",{className:"search-results_display-result",children:e.title}),Object(r.jsx)("p",{className:"search-results_display-result-p",children:e.pageDescription})]})]},e.id)}))})]})})},w=a(40),N=a.n(w),y=a(21);var S=function(){var e=Object(b.f)(),t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!0),o=Object(l.a)(i,2),j=o[0],h=o[1],u=Object(b.h)().id;return Object(c.useEffect)((function(){d.a.post("https://blogstephen.herokuapp.com/api/get/".concat(u),{password:"KxM30xExEx28"}).then((function(e){s(e.data),h(!1)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)(r.Fragment,{children:j?Object(r.jsxs)("div",{children:["Unable to load the blog. Refresh the page or try again in 2 minutes. Sorry for the inconvenience.",u]}):Object(r.jsxs)("div",{className:"blogView",children:[Object(r.jsxs)(y.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:n[0].title||"Coding Blog to land a job in FAANG."}),Object(r.jsx)("link",{rel:"stylesheet",type:"text/css",href:n[0].cssRef||null}),Object(r.jsx)("meta",{name:"description",content:n[0].pageDescription||"Blog that helps students to land a job in FAANG. Read more find out how to land a job in FAANG"})]}),Object(r.jsx)("button",{style:{padding:"0.2rem 2rem"},className:"btn btn-red",onClick:function(){e.push("/")},children:Object(r.jsx)("p",{children:"Exit"})}),Object(r.jsx)("div",{className:"blogView_blog",children:Object(r.jsx)("div",{className:"blogStart",children:Object(r.jsx)("div",{className:"blogStart-read",dangerouslySetInnerHTML:{__html:N.a.sanitize(n[0].message)}})})})]})})};var k=function(){var e=Object(b.g)();return Object(r.jsx)("div",{children:Object(r.jsxs)(b.c,{location:e,children:[Object(r.jsxs)(b.a,{path:"/",exact:!0,children:[Object(r.jsxs)(y.a,{children:[Object(r.jsx)("title",{children:"Stephen | Full Stack Web Developer"}),Object(r.jsx)("meta",{name:"description",content:"Hey I am Stephen, Full Stack Web Developer. Join my blog series where you learn the tools required for landing a job in FAANG. You can learn Docker, Kubernetes, Typescript, Google Authentication and how to deploy your site to kubernetes cluster in digital ocean. All this made available for free. Not Only Web Developement I also write blogs where I teach datascience, Deep Learning, Machine Learning and Reinforcement Learning, Q learning in python."}),Object(r.jsx)("meta",{name:"robots",content:"index,follow,archive"}),Object(r.jsx)("meta",{name:"Keywords",content:"Stepeh Ex Web Developer 12 years of work experience Worked in FAANG"})]}),Object(r.jsx)(h,{}),Object(r.jsx)(m,{}),Object(r.jsx)(g,{})]}),Object(r.jsxs)(b.a,{path:"/blog",children:[Object(r.jsx)(h,{}),Object(r.jsx)(g,{})]}),Object(r.jsxs)(b.a,{path:"/about",children:[Object(r.jsx)(h,{}),Object(r.jsx)(m,{}),Object(r.jsx)(v,{})]}),Object(r.jsxs)(b.a,{path:"/search/:query",children:[Object(r.jsx)(h,{}),Object(r.jsx)(f,{})]}),Object(r.jsxs)(b.a,{path:"/read/:id",children:[Object(r.jsx)(h,{}),Object(r.jsx)(S,{})]})]},e.pathname)})},D=a(13);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(D.a,{children:Object(r.jsx)(k,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0684f718.chunk.js.map