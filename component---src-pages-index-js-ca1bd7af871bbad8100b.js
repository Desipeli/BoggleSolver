"use strict";(self.webpackChunkboggle_solver=self.webpackChunkboggle_solver||[]).push([[678],{2611:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return r}});var l=n(7294);var a=e=>{let{rowCount:t,colCount:n}=e;const a=l.useRef(null),o=l.useRef([]);l.useEffect((()=>{const e=a.current;e.style.gridTemplateColumns="repeat("+n+", minmax(0, 1fr))",e.style.width=5*n+"rem"}),[n]);const r=e=>t=>{if(["Backspace","Delete"].includes(t.key)&&e>0&&0===o.current[e].value.length){const t=o.current[e-1];t.focus(),t.selectionStart=t.value.length,t.selectionEnd=t.value.length}},s=e=>t=>{t.target.value.length>0&&e<o.current.length-1&&o.current[e+1].focus()};return l.createElement("div",{ref:a,id:"grid-container",name:"grid-container",className:"grid gap-5 lg:w-1/2 min-w-84 max-w-lg mx-auto justify-items-center"},Array.from({length:t*n},((e,t)=>l.createElement("input",{key:t,ref:e=>o.current[t]=e,type:"text",className:"w-14 h-14 rounded-md text-center uppercase",onChange:s(t),onKeyDown:r(t)}))))};var o=e=>{let{rowCount:t,colCount:n,setRowCount:a,setColCount:o}=e;return l.createElement("section",{className:"sm:flex block justify-between"},l.createElement("select",{name:"language",id:"language",className:"border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl w-full sm:w-1/2 min-h-16 hover:shadow-green-500 shadow-md"},l.createElement("option",{value:"fin"},"Suomi")),l.createElement("div",{className:"my-12 sm:my-0"},l.createElement("input",{id:"row-count",value:t,onChange:e=>a(e.target.value),className:"min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"}),l.createElement("span",{className:"text-slate-100 mx-6"},"X"),l.createElement("input",{id:"col-count",value:n,onChange:e=>o(e.target.value),className:"min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"})))};var r=e=>{let{data:t}=e;console.log("https://desipeli.github.io/BoggleSolver");const n="https://desipeli.github.io/BoggleSolver"+t.allFile.nodes.map((e=>e.publicURL));console.log(n);const[r,s]=l.useState(5),[c,u]=l.useState(5);return l.createElement("main",{className:"max-w-6xl mx-auto"},l.createElement("section",{className:"m-2 sm:m-12"},l.createElement("h1",{className:"text-center text-5xl my-12 text-slate-100 text-decoration: underline"},"Boggle Ratkaisin"),l.createElement(o,{colCount:c,rowCount:r,setColCount:u,setRowCount:s}),l.createElement("section",{className:"block lg:flex justify-between my-12"},l.createElement("div",{className:"text-xl px-4 lg:my-0 my-12 text-slate-100"},l.createElement("p",null,"Valitse kieli ja pelilaudan koko."),l.createElement("p",null,"Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.")),l.createElement(a,{rowCount:r,colCount:c}))))};const s=()=>l.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-js-ca1bd7af871bbad8100b.js.map