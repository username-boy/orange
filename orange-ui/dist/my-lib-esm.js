import e,{memo as t,useMemo as a}from"react";var r=({title:t})=>e.createElement("h1",null,t);const d=t((t=>{const{type:r,width:d,height:i,disabled:l,circle:n,dashed:c,loading:o,handleClick:s,children:h}=t,m=a((()=>r||"danger"===r||"warning"===r||"warning"===r||"text"===r?r:"primary"),[r]),p=a((()=>{var e={width:"100px",height:"40px"};return d&&(e.width=d+"px"),i&&(e.height=i+"px"),n&&(e={...e,borderRadius:"50%"}),c&&"text"===r&&(e={...e,border:"1px dashed #ccc"}),l&&(e={...e,cursor:"not-allowed"}),e}),[d,i,n,c]);return a((()=>{}),[l]),e.createElement("div",{className:"button"},e.createElement("button",{className:m,style:p,disabled:!!l,onClick:s},o&&e.createElement("div",{className:"loading1"}),h))}));export{d as Button,r as Foo};
