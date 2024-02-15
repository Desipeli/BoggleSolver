(self.webpackChunkboggle_solver=self.webpackChunkboggle_solver||[]).push([[678],{5792:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return g},default:function(){return m}});var n=r(7294),l=r(5785);const{indexToCoord:o}=r(7191);var a=e=>{let{gridSize:t,gridValues:r,setGridValues:a,highlightedRoute:s,setHighlightedRoute:i}=e;const c=n.useRef(null),u=n.useRef([]);n.useEffect((()=>{const e=c.current;window.matchMedia("(max-width: 400px)").matches?(e.style.gridTemplateColumns="repeat("+t+", minmax(0, 1fr))",e.style.width=3*t+"rem"):(e.style.gridTemplateColumns="repeat("+t+", minmax(0, 1fr))",e.style.width=4*t+"rem")}),[t]);const d=e=>r=>{if(["Backspace"].includes(r.key)&&e>0&&0===u.current[e].value.length){const t=u.current[e-1];t.focus(),t.selectionStart=t.value.length,t.selectionEnd=t.value.length}if(["Delete"].includes(r.key)&&e<t**2-1&&0===u.current[e].value.length){const t=u.current[e+1];t.focus(),t.selectionStart=0,t.selectionEnd=0}},m=e=>n=>{const c=n.target.value,d=o(e,t);s.includes(""+d[0]+d[1])&&i([]);const m=(0,l.Z)(r);m[e]=c.toLowerCase(),a(m),c.length>0&&(e<u.current.length-1&&null!==u.current[e+1]&&u.current[e+1].focus(),e===t**2-1&&document.getElementById("search-words-btn").focus())};return n.useEffect((()=>{if(0!==s.length)for(let e=0;e<s.length;e++);}),[s]),n.createElement("div",{ref:c,id:"grid-container",name:"grid-container",className:"grid gap-5 lg:w-1/2 xs:max-w-lg w-full mx-auto justify-items-center"},Array.from({length:t**2},((e,l)=>n.createElement("div",{key:l,className:"relative"},n.createElement("input",{value:r[l],ref:e=>u.current[l]=e,type:"text",className:(s.includes(""+o(l,t)[0]+o(l,t)[1])?"bg-lime-300 ":"")+"xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field",onChange:m(l),onKeyDown:d(l)}),s.includes(""+o(l,t)[0]+o(l,t)[1])&&n.createElement("div",{className:"absolute top-0 right-0 bg-black rounded-bl-full text-white font-medium text-sm p-1"},s.findIndex((e=>e===""+o(l,t)[0]+o(l,t)[1]))+1)))))};var s=e=>{let{changeGridSize:t,listOfDicts:r}=e;return n.createElement("section",{className:"flex justify-between"},n.createElement("select",{name:"language",id:"language",className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"},null==r?void 0:r.map((e=>n.createElement("option",{key:e.name,value:e},e.name)))),n.createElement("select",{name:"grid-size-select",id:"grid-size-select",defaultValue:4,className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md",onChange:e=>t(e.target.value)},n.createElement("option",{value:4},"4 x 4"),n.createElement("option",{value:5},"5 x 5"),n.createElement("option",{value:6},"6 x 6")))};var i=e=>{let{word:t,routes:r,setHighlightedRoute:l}=e;const[o,a]=n.useState(!1);return n.createElement("div",{className:(o?"my-4 ":"")+" text-center"},n.createElement("span",{className:"cursor-pointer text-center",onClick:()=>{a(!o)}},t),o&&r.map(((e,t)=>n.createElement("div",{key:t},n.createElement("p",{onClick:()=>l(e),className:"cursor-pointer"},e.toString())))))};const{searchWords:c}=r(1407),{convertArrayTo2D:u}=r(7191);var d=e=>{let{dictionary:t,gridValues:r,gridSize:l,setHighlightedRoute:o}=e;const[a,s]=n.useState({}),[d,m]=n.useState(""),g=e=>{const t=e.sort(((e,t)=>t[0].length-e[0].length||e[0].localeCompare(t[0],"fi"))),r={};for(let n=0;n<t.length;n++)t[n][0]in r?r[t[n][0]].push(t[n].splice(1)):r[t[n][0]]=[t[n].splice(1)];s(r)};return n.createElement(n.Fragment,null,n.createElement("section",{className:"flex justify-center mx-2"},n.createElement("div",null,n.createElement("p",{className:"text-center my-2 text-red-500 text-xl",id:"find-error"},d),n.createElement("button",{name:"search-words-btn",id:"search-words-btn",className:"border rounded-lg min-h-12 w-80 bg-slate-100",onClick:()=>{for(let t=0;t<r.length;t++)if(0===r[t].length)return m("Täytä taulukko"),void s({});m("");const e=u(r,l),n=c(e,t);n.length>0&&g(n)}},"Etsi sanat"))),n.createElement("section",{className:"grid gap-2 grid-cols-1 md:grid-cols-3 xs:grid-cols-2 justify-items-center text-2xl text-slate-100 my-4"},Object.keys(a).sort(((e,t)=>t.length-e.length||e.localeCompare(t,"fi"))).map(((e,t)=>n.createElement(i,{key:t,word:e,routes:a[e],setHighlightedRoute:o})))))};var m=e=>{let{data:t}=e,r="";r="https://desipeli.github.io/BoggleSolver";const[l,o]=n.useState(4),[i,c]=n.useState(4),[u,m]=n.useState(4),[g,f]=n.useState(Array.from({length:l*i},(()=>""))),[h,p]=n.useState([]),[x,y]=n.useState([]),v=t.allFile.nodes,[E,b]=n.useState(v[0]);return n.useEffect((()=>{E&&fetch(""+r+E.publicURL).then((e=>e.json())).then((e=>{y(e.words)}))}),[E]),n.createElement("main",{className:"max-w-4xl mx-auto"},n.createElement("div",{className:"m-2 sm:m-12"},n.createElement("section",null,n.createElement("h1",{className:"text-center text-5xl my-12 text-slate-100 text-decoration: underline"},"Boggle Ratkaisin"),n.createElement(s,{changeGridSize:e=>{m(e),f(Array.from({length:e*e},(()=>""))),p([])},listOfDicts:v}),n.createElement("section",{className:"block lg:flex justify-between my-12"},n.createElement("div",{className:"lg:w-1/2 w-full text-xl px-4 lg:my-0 my-12 text-slate-100"},n.createElement("p",null,"Valitse kieli ja pelilaudan koko."),n.createElement("p",null,"Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.")),n.createElement(a,{gridValues:g,setGridValues:f,highlightedRoute:h,setHighlightedRoute:p,gridSize:u}))),n.createElement(d,{dictionary:x,gridValues:g,setHighlightedRoute:p,gridSize:u})))};const g=()=>n.createElement("title",null,"Home Page")},7191:function(e){e.exports={convertArrayTo2D:(e,t)=>{const r=[];for(let n=0;n<t;n++){const l=[];for(let r=0;r<t;r++)l.push(e[n*t+r]);r.push(l)}return r},indexToCoord:(e,t)=>[Math.floor(e/t),e%t]}},1407:function(e,t,r){var n=r(861);const l=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],o=(e,t,r,s,i,c)=>{const u=""+t+r;if(s.includes(u))return[];s.push(u),i.push(e[t][r]);let d=[];const m=a(i.join(""),c);if(!0===m[0])d.push([i.join("")].concat(n(s)));else if(!1===m[1])return s.pop(),i.pop(),[];for(let a=0;a<l.length;a++){const u=[t+l[a][0],r+l[a][1]];if(u[0]<0||u[1]<0||u[0]>=e.length||u[1]>=e[0].length)continue;const m=o(e,u[0],u[1],s,i,c);m.length>0&&(d=[].concat(n(d),n(m)))}return s.pop(),i.pop(),d},a=(e,t)=>{let r=0,n=t.length,l=!1;for(;;){const o=r+Math.floor((n-r)/2),a=e.localeCompare(t[o],"fi");if(0===a)return[!0,o];if(o>=0&&o<=t.length-1&&t[o].startsWith(e)&&(l=!0),n-r<=0)return[!1,l];1===a&&(r=o+1),-1===a&&(n=o-1)}};e.exports={searchWords:(e,t)=>{let r=[];for(let l=0;l<e.length;l++)for(let a=0;a<e[0].length;a++){const s=o(e,l,a,[],[],t);s.length>0&&(r=[].concat(n(r),n(s)))}return r.sort(((e,t)=>e[0].localeCompare(t[0])))},binarySearchDict:a,dfs:o}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),l=r(9498),o=r(6116),a=r(2281);e.exports=function(e){return n(e)||l(e)||o(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-883cc2dbc0af6dfb8b86.js.map