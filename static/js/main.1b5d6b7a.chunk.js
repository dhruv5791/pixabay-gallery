(this["webpackJsonppixabay-gallery"]=this["webpackJsonppixabay-gallery"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(16),i=c.n(a),r=(c(22),c(8)),j=c(2),d=c(10),l=c(1),o=function(e){var t=e.image;return Object(l.jsxs)("div",{className:"relative shadow rounded overflow-hidden",children:[Object(l.jsx)("img",{className:"w-full",src:t.webformatURL,alt:t.tags}),Object(l.jsx)("img",{className:"absolute top-1 left-1 rounded-full w-10",src:t.userImageURL,alt:t.user}),Object(l.jsxs)("h1",{className:"text-2xl p-4",children:["User ID: ",t.user_id]}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-4 p-4",children:[Object(l.jsxs)("div",{children:["Comments: ",t.comments]}),Object(l.jsxs)("div",{children:["Likes: ",t.likes]}),Object(l.jsx)("div",{children:t.tags})]})]},t.id)},u=function(e){var t=e.setInputSearch;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:function(e){return t(e.target.value)},className:"border px-4 py-2 border-gray-400 rounded",type:"text",placeholder:"Search for image..."})})},b=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(d.a)(a,2),j=i[0],b=i[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("21145804-b1dabd64212070a566be72dd1","&q=").concat(j,"&image_type=photo&&pretty=true")).then((function(e){return e.json()})).then((function(e){return s(e.hits)}))}),[j]),Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)("h1",{className:"text-center text-3xl uppercase",children:"Pixabay Image Search"}),Object(l.jsx)("div",{className:"flex justify-center my-5",children:Object(l.jsx)(u,{setInputSearch:function(e){return b(e)}})}),Object(l.jsx)("div",{className:"grid grid-cols-4 gap-4",children:c.map((function(e,t){return Object(l.jsx)(r.b,{to:"/".concat(e.id),children:Object(l.jsx)(o,{image:e})},t)}))})]})},h=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"This is about page"})})},x=function(){var e=Object(j.f)().id,t=Object(n.useState)(null),c=Object(d.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){isNaN(parseInt(e))||fetch("https://pixabay.com/api/?key=".concat("21145804-b1dabd64212070a566be72dd1","&id=").concat(e,"&image_type=photo&&pretty=true")).then((function(e){return e.json()})).then((function(e){return a(e.hits[0])}))}),[]),Object(l.jsx)("div",{className:"flex justify-center h-screen items-center",children:Object(l.jsx)("div",{className:"max-w-lg",children:s?Object(l.jsx)(o,{image:s}):Object(l.jsx)("h1",{children:"No image found with given ID."})})})};var O=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/about",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(b,{})})]})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.1b5d6b7a.chunk.js.map