!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self)["my-lib-umd"]=e["my-lib-umd"]||{},e["my-lib-umd"].js={}),e.React)}(this,(function(e,t){"use strict";const i=t.memo((e=>{const{type:i,width:n,height:d,disabled:o,circle:l,dashed:a,loading:r,handleClick:s,children:c}=e,u=t.useMemo((()=>i||"danger"===i||"warning"===i||"warning"===i||"text"===i?i:"primary"),[i]),m=t.useMemo((()=>{var e={width:"100px",height:"40px"};return n&&(e.width=n+"px"),d&&(e.height=d+"px"),l&&(e={...e,borderRadius:"50%"}),a&&"text"===i&&(e={...e,border:"1px dashed #ccc"}),o&&(e={...e,cursor:"not-allowed"}),e}),[n,d,l,a]);return t.useMemo((()=>{}),[o]),t.createElement("div",{className:"button"},t.createElement("button",{className:u,style:m,disabled:!!o,onClick:s},r&&t.createElement("div",{className:"loading1"}),c))}));e.Button=i,e.Foo=({title:e})=>t.createElement("h1",null,e)}));
