(self.webpackChunkboggle_solver=self.webpackChunkboggle_solver||[]).push([[678],{5681:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return g},default:function(){return f}});var n=r(7294),l=r(5785);const{indexToCoord:o}=r(7191);var a=e=>{let{gridSize:t,gridValues:r,setGridValues:a,selectedWord:s,setSelectedWord:c}=e;const i=n.useRef(null),u=n.useRef([]),[d,m]=n.useState(0);n.useEffect((()=>{m(0)}),[s,r]);const f=e=>{const t=Number(d)+Number(e);t<0?m((null==s?void 0:s.routes.length)-1):t>=(null==s?void 0:s.routes.length)?m(0):m(t)};n.useEffect((()=>{const e=i.current;window.matchMedia("(max-width: 439px)").matches?(e.style.gridTemplateColumns="repeat("+t+", minmax(0, 1fr))",e.style.width=2.5*t+"rem"):(e.style.gridTemplateColumns="repeat("+t+", minmax(0, 1fr))",e.style.width=4*t+"rem")}),[t]);const g=e=>r=>{if(["Backspace"].includes(r.key)&&e>0&&0===u.current[e].value.length){const t=u.current[e-1];t.focus(),t.selectionStart=t.value.length,t.selectionEnd=t.value.length}if(["Delete"].includes(r.key)&&e<t**2-1&&0===u.current[e].value.length){const t=u.current[e+1];t.focus(),t.selectionStart=0,t.selectionEnd=0}},p=e=>n=>{var i;const m=n.target.value,f=o(e,t);null!=s&&null!==(i=s.routes[d])&&void 0!==i&&i.includes(""+f[0]+f[1])&&c(null);const g=(0,l.Z)(r);g[e]=m.toLowerCase(),a(g),m.length>0&&(e<u.current.length-1&&null!==u.current[e+1]&&u.current[e+1].focus(),e===t**2-1&&document.getElementById("search-words-btn").focus())};return n.useEffect((()=>{var e;if(0!==(null==s||null===(e=s.routes[d])||void 0===e?void 0:e.length))for(let r=0;r<(null==s||null===(t=s.routes[d])||void 0===t?void 0:t.length);r++)var t}),[s,d]),n.createElement("div",{className:"flex lg:w-1/2 w-full mx-auto",name:"grid-and-buttons"},n.createElement("div",{className:" w-full mx-auto justify-items-center"},n.createElement("div",{ref:i,id:"grid-container",name:"grid-container",className:"grid gap-5 mx-auto justify-items-center"},Array.from({length:t**2},((e,l)=>{var a,c,i;const m=o(l,t),f=null==s||null===(a=s.routes[d])||void 0===a?void 0:a.findIndex((e=>e===""+m[0]+m[1]));return n.createElement("div",{key:l,className:"relative"},n.createElement("input",{value:r[l],ref:e=>u.current[l]=e,type:"text",className:(null!=s&&null!==(c=s.routes[d])&&void 0!==c&&c.includes(""+m[0]+m[1])?0===f?"bg-yellow-300 ":"bg-lime-300 ":"")+"xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field",onChange:p(l),onKeyDown:g(l)}),(null==s||null===(i=s.routes[d])||void 0===i?void 0:i.includes(""+m[0]+m[1]))&&n.createElement("div",{className:"absolute top-0 right-0 bg-black rounded-bl-full text-white font-medium text-sm p-1"},f+1))}))),s&&n.createElement("div",{className:"flex justify-center items-center text-5xl"},n.createElement("button",{value:-1,onClick:e=>f(e.target.value)},"←"),n.createElement("span",{className:"text-xl text-white mx-2"},s.word," ",d+1,"/",null==s?void 0:s.routes.length),n.createElement("button",{value:1,onClick:e=>f(e.target.value)},"→"))))};var s=e=>{let{changeGridSize:t,listOfDicts:r,setDictionaryNameURL:l,dictionaryNameURL:o,gridSize:a}=e;return n.createElement("section",{className:"flex justify-between"},n.createElement("select",{name:"dictionary-select",id:"dictionary-select",onChange:e=>l(JSON.parse(e.target.value)),value:JSON.stringify(o),className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"},null==r?void 0:r.map((e=>n.createElement("option",{key:e.name,value:JSON.stringify(e)},e.name)))),n.createElement("select",{name:"grid-size-select",id:"grid-size-select",defaultValue:a,className:"w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md",onChange:e=>t(e.target.value)},n.createElement("option",{value:4},"4 x 4"),n.createElement("option",{value:5},"5 x 5"),n.createElement("option",{value:6},"6 x 6")))};var c=e=>{let{word:t,routes:r,setSelectedWord:l,selectedWord:o}=e;return n.createElement("div",{className:"text-center"},n.createElement("button",{className:(o&&o.word===t?"border rounded-lg ":"")+"cursor-pointer text-center",onClick:()=>{l({word:t,routes:r})}},t))};const{searchWords:i}=r(1407),{convertArrayTo2D:u}=r(7191);var d=e=>{let{dictionary:t,gridValues:r,gridSize:l,setSelectedWord:o,selectedWord:a}=e;const[s,d]=n.useState({}),[m,f]=n.useState(""),g=e=>{const t=e.sort(((e,t)=>t[0].length-e[0].length||e[0].localeCompare(t[0],"fi"))),r={};for(let n=0;n<t.length;n++)t[n][0]in r?r[t[n][0]].push(t[n].splice(1)):r[t[n][0]]=[t[n].splice(1)];d(r)};return n.createElement(n.Fragment,null,n.createElement("section",{className:"flex justify-center mx-2"},n.createElement("div",null,n.createElement("p",{className:"text-center my-2 text-red-500 text-xl",id:"find-error"},m),n.createElement("button",{name:"search-words-btn",id:"search-words-btn",className:"border rounded-lg min-h-12 w-80 bg-slate-100",onClick:()=>{for(let t=0;t<r.length;t++)if(0===r[t].length)return f("Täytä taulukko"),void d({});f("");const e=u(r,l),n=performance.now(),o=i(e,t),a=performance.now();console.log("search dureation:",a-n,"milliseconds"),o.length>0&&g(o)}},"Etsi sanat"))),n.createElement("section",{className:"grid gap-2 grid-cols-1 md:grid-cols-3 xs:grid-cols-2 justify-items-center text-2xl text-slate-100 my-4"},Object.keys(s).sort(((e,t)=>t.length-e.length||e.localeCompare(t,"fi"))).map(((e,t)=>n.createElement(c,{key:t,word:e,routes:s[e],setSelectedWord:o,selectedWord:a})))))};const m=(e,t)=>{const{0:r,1:l}=(0,n.useState)((()=>function(e,t){if("undefined"!=typeof window){const r=localStorage.getItem(e);return JSON.parse(r)||t}return t}(e,t)));return(0,n.useEffect)((()=>{"undefined"!=typeof window&&localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,l]};var f=e=>{let{data:t}=e,r="";r="https://desipeli.github.io/BoggleSolver";const[l,o]=m("gridSize",4),[c,i]=n.useState(Array.from({length:l**2},(()=>""))),[u,f]=n.useState(null),[g,p]=n.useState([]),h=t.allFile.nodes,[x,v]=m("currentDictionary",h[0]);return n.useEffect((()=>{x&&fetch(""+r+x.publicURL).then((e=>e.json())).then((e=>{p(e)}))}),[x,r]),n.createElement("main",{className:"max-w-4xl mx-auto"},n.createElement("div",{className:"m-2 sm:m-12"},n.createElement("section",null,n.createElement("h1",{className:"text-center text-5xl my-12 text-slate-100 text-decoration: underline"},"Boggle Ratkaisin"),n.createElement(s,{changeGridSize:e=>{o(e),i(Array.from({length:e*e},(()=>""))),f(null)},listOfDicts:h,setDictionaryNameURL:v,gridSize:l,dictionaryNameURL:x}),n.createElement("section",{className:"block lg:flex justify-between my-12"},n.createElement("div",{className:"lg:w-1/2 w-full text-xl px-4 lg:my-0 my-12 text-slate-100"},n.createElement("p",null,"Valitse sanakirja ja pelilaudan koko."),n.createElement("p",null,"Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.")),n.createElement(a,{gridValues:c,setGridValues:i,selectedWord:u,setSelectedWord:f,gridSize:l}))),n.createElement(d,{dictionary:g,gridValues:c,setSelectedWord:f,gridSize:l,selectedWord:u})))};const g=()=>n.createElement("title",null,"Boggle Ratkaisin")},7191:function(e){e.exports={convertArrayTo2D:(e,t)=>{const r=[];for(let n=0;n<t;n++){const l=[];for(let r=0;r<t;r++)l.push(e[n*t+r]);r.push(l)}return r},indexToCoord:(e,t)=>[Math.floor(e/t),e%t]}},1407:function(e,t,r){var n=r(861);const l=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],o=(e,t,r,s,c,i)=>{const u=""+t+r;if(s.includes(u))return[];s.push(u),c.push(e[t][r]);let d=[];const m=a(c.join(""),i);if(!0===m[0])d.push([c.join("")].concat(n(s)));else if(!1===m[1])return s.pop(),c.pop(),[];for(let a=0;a<l.length;a++){const u=[t+l[a][0],r+l[a][1]];if(u[0]<0||u[1]<0||u[0]>=e.length||u[1]>=e[0].length)continue;const m=o(e,u[0],u[1],s,c,i);m.length>0&&(d=[].concat(n(d),n(m)))}return s.pop(),c.pop(),d},a=(e,t)=>{const r=t.words;let n=0,l=r.length,o=!1;for(;;){const a=n+Math.floor((l-n)/2),s=e.localeCompare(r[a],t.language);if(0===s)return[!0,a];if(a>=0&&a<=r.length-1&&r[a].startsWith(e)&&(o=!0),l-n<=0)return[!1,o];1===s&&(n=a+1),-1===s&&(l=a-1)}};e.exports={searchWords:(e,t)=>{let r=[];for(let l=0;l<e.length;l++)for(let a=0;a<e[0].length;a++){const s=o(e,l,a,[],[],t);s.length>0&&(r=[].concat(n(r),n(s)))}return r.sort(((e,t)=>e[0].localeCompare(t[0])))},binarySearchDict:a,dfs:o}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),l=r(9498),o=r(6116),a=r(2281);e.exports=function(e){return n(e)||l(e)||o(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-7206eecc8ed7e4e7444e.js.map