"use strict";(self.webpackChunkboggle_solver=self.webpackChunkboggle_solver||[]).push([[678],{2611:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return o}});var l=n(7294);var a=e=>{let{rowCount:t,colCount:n}=e;const a=l.useRef(null),r=l.useRef([]);l.useEffect((()=>{const e=a.current;window.matchMedia("(max-width: 400px)").matches?(e.style.gridTemplateColumns="repeat("+n+", minmax(0, 1fr))",e.style.width=3*n+"rem"):(e.style.gridTemplateColumns="repeat("+n+", minmax(0, 1fr))",e.style.width=4*n+"rem")}),[n]);const o=e=>t=>{if(["Backspace"].includes(t.key)&&e>0&&0===r.current[e].value.length){const t=r.current[e-1];t.focus(),t.selectionStart=t.value.length,t.selectionEnd=t.value.length}},s=e=>t=>{t.target.value.length>0&&e<r.current.length-1&&r.current[e+1].focus()};return l.createElement("div",{ref:a,id:"grid-container",name:"grid-container",className:"grid gap-5 lg:w-1/2 max-w-56 xs:max-w-lg w-full mx-auto justify-items-center"},Array.from({length:t*n},((e,t)=>l.createElement("input",{key:t,ref:e=>r.current[t]=e,type:"text",className:"xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field",onChange:s(t),onKeyDown:o(t)}))))};var r=e=>{let{rowCount:t,colCount:n,setRowCount:a,setColCount:r}=e;return l.createElement("section",{className:"xs:flex justify-between"},l.createElement("select",{name:"language",id:"language",className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"},l.createElement("option",{value:"fin"},"Suomi")),l.createElement("select",{name:"grid-size-select",id:"grid-size-select",className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md",onChange:e=>{return t=e.target.value,r(t),void a(t);var t}},l.createElement("option",{value:4},"4 x 4"),l.createElement("option",{value:5},"5 x 5")))};var o=e=>{let{data:t}=e;console.log("https://desipeli.github.io/BoggleSolver");t.allFile.nodes.map((e=>e.publicURL));const[n,o]=l.useState(5),[s,c]=l.useState(5);return l.createElement("main",{className:"max-w-4xl mx-auto"},l.createElement("section",{className:"m-2 sm:m-12"},l.createElement("h1",{className:"text-center text-5xl my-12 text-slate-100 text-decoration: underline"},"Boggle Ratkaisin"),l.createElement(r,{colCount:s,rowCount:n,setColCount:c,setRowCount:o}),l.createElement("section",{className:"block lg:flex justify-between my-12"},l.createElement("div",{className:"text-xl px-4 lg:my-0 my-12 text-slate-100"},l.createElement("p",null,"Valitse kieli ja pelilaudan koko."),l.createElement("p",null,"Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.")),l.createElement(a,{rowCount:n,colCount:s}))))};const s=()=>l.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-js-6e100716a262d578d7fd.js.map