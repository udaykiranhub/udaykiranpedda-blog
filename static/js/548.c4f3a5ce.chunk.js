/*! For license information please see 548.c4f3a5ce.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[548],{457:(e,n,t)=>{"use strict";t.d(n,{A:()=>w});var r=t(8139),o=t.n(r),s=t(5043),i=t(7121),a=t(7852),c=t(2306);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const u=s.createContext({});u.displayName="AccordionContext";const d=u;var f=t(579);const p=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:r,className:i,children:u,eventKey:p,...x}=e;const{activeEventKey:y}=(0,s.useContext)(d);return r=(0,a.oU)(r,"accordion-collapse"),(0,f.jsx)(c.A,{ref:n,in:l(y,p),...x,className:o()(i,r),children:(0,f.jsx)(t,{children:s.Children.only(u)})})}));p.displayName="AccordionCollapse";const x=p,y=s.createContext({eventKey:""});y.displayName="AccordionItemContext";const m=y,h=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:r,className:i,onEnter:c,onEntering:l,onEntered:u,onExit:d,onExiting:p,onExited:y,...h}=e;r=(0,a.oU)(r,"accordion-body");const{eventKey:v}=(0,s.useContext)(m);return(0,f.jsx)(x,{eventKey:v,onEnter:c,onEntering:l,onEntered:u,onExit:d,onExiting:p,onExited:y,children:(0,f.jsx)(t,{ref:n,...h,className:o()(i,r)})})}));h.displayName="AccordionBody";const v=h;const E=s.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:r,className:i,onClick:c,...u}=e;r=(0,a.oU)(r,"accordion-button");const{eventKey:p}=(0,s.useContext)(m),x=function(e,n){const{activeEventKey:t,onSelect:r,alwaysOpen:o}=(0,s.useContext)(d);return s=>{let i=e===t?null:e;o&&(i=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==r||r(i,s),null==n||n(s)}}(p,c),{activeEventKey:y}=(0,s.useContext)(d);return"button"===t&&(u.type="button"),(0,f.jsx)(t,{ref:n,onClick:x,...u,"aria-expanded":Array.isArray(y)?y.includes(p):p===y,className:o()(i,r,!l(y,p)&&"collapsed")})}));E.displayName="AccordionButton";const g=E,A=s.forwardRef(((e,n)=>{let{as:t="h2","aria-controls":r,bsPrefix:s,className:i,children:c,onClick:l,...u}=e;return s=(0,a.oU)(s,"accordion-header"),(0,f.jsx)(t,{ref:n,...u,className:o()(i,s),children:(0,f.jsx)(g,{onClick:l,"aria-controls":r,children:c})})}));A.displayName="AccordionHeader";const b=A,C=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:r,className:i,eventKey:c,...l}=e;r=(0,a.oU)(r,"accordion-item");const u=(0,s.useMemo)((()=>({eventKey:c})),[c]);return(0,f.jsx)(m.Provider,{value:u,children:(0,f.jsx)(t,{ref:n,...l,className:o()(i,r)})})}));C.displayName="AccordionItem";const N=C,j=s.forwardRef(((e,n)=>{const{as:t="div",activeKey:r,bsPrefix:c,className:l,onSelect:u,flush:p,alwaysOpen:x,...y}=(0,i.Zw)(e,{activeKey:"onSelect"}),m=(0,a.oU)(c,"accordion"),h=(0,s.useMemo)((()=>({activeEventKey:r,onSelect:u,alwaysOpen:x})),[r,u,x]);return(0,f.jsx)(d.Provider,{value:h,children:(0,f.jsx)(t,{ref:n,...y,className:o()(l,m,p&&`${m}-flush`)})})}));j.displayName="Accordion";const w=Object.assign(j,{Button:g,Collapse:x,Item:N,Header:b,Body:v})},2306:(e,n,t)=>{"use strict";t.d(n,{A:()=>h});var r=t(8139),o=t.n(r),s=t(8747),i=t(5043),a=t(9998),c=t(9791),l=t(9841);const u=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)};var d=t(2643),f=t(3850),p=t(579);const x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function y(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=x[e];return t+parseInt((0,s.A)(n,r[0]),10)+parseInt((0,s.A)(n,r[1]),10)}const m={[a.kp]:"collapse",[a.ze]:"collapsing",[a.ns]:"collapsing",[a._K]:"collapse show"},h=i.forwardRef(((e,n)=>{let{onEnter:t,onEntering:r,onEntered:s,onExit:a,onExiting:x,className:h,children:v,dimension:E="height",in:g=!1,timeout:A=300,mountOnEnter:b=!1,unmountOnExit:C=!1,appear:N=!1,getDimensionValue:j=y,...w}=e;const K="function"===typeof E?E():E,k=(0,i.useMemo)((()=>u((e=>{e.style[K]="0"}),t)),[K,t]),P=(0,i.useMemo)((()=>u((e=>{const n=`scroll${K[0].toUpperCase()}${K.slice(1)}`;e.style[K]=`${e[n]}px`}),r)),[K,r]),O=(0,i.useMemo)((()=>u((e=>{e.style[K]=null}),s)),[K,s]),R=(0,i.useMemo)((()=>u((e=>{e.style[K]=`${j(K,e)}px`,(0,d.A)(e)}),a)),[a,j,K]),S=(0,i.useMemo)((()=>u((e=>{e.style[K]=null}),x)),[K,x]);return(0,p.jsx)(f.A,{ref:n,addEndListener:l.A,...w,"aria-expanded":w.role?g:null,onEnter:k,onEntering:P,onEntered:O,onExit:R,onExiting:S,childRef:(0,c.am)(v),in:g,timeout:A,mountOnEnter:b,unmountOnExit:C,appear:N,children:(e,n)=>i.cloneElement(v,{...n,className:o()(h,v.props.className,m[e],"width"===K&&"collapse-horizontal")})})}))},2548:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var r=t(5043),o=t(457),s=t(579);const i=(0,r.lazy)((()=>t.e(1).then(t.bind(t,2001)))),a=(0,r.lazy)((()=>t.e(66).then(t.bind(t,4066)))),c=(0,r.lazy)((()=>t.e(512).then(t.bind(t,512)))),l=(0,r.lazy)((()=>t.e(48).then(t.bind(t,3048)))),u=(0,r.lazy)((()=>t.e(636).then(t.bind(t,6636)))),d=(0,r.lazy)((()=>t.e(998).then(t.bind(t,4998)))),f=()=>(0,s.jsxs)("div",{className:"container mt-4",children:[(0,s.jsx)("h2",{className:"text-center mb-3",children:"Protocol Analysis"}),(0,s.jsxs)(o.A,{defaultActiveKey:"0",children:[(0,s.jsx)(a,{}),(0,s.jsx)(c,{}),(0,s.jsx)(u,{}),(0,s.jsx)(l,{}),(0,s.jsx)(d,{})]}),(0,s.jsx)(i,{})]})},7852:(e,n,t)=>{"use strict";t.d(n,{Jm:()=>d,gy:()=>u,oU:()=>l});var r=t(5043);t(579);const o=["xxl","xl","lg","md","sm","xs"],s="xs",i=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:s}),{Consumer:a,Provider:c}=i;function l(e,n){const{prefixes:t}=(0,r.useContext)(i);return e||t[n]||n}function u(){const{breakpoints:e}=(0,r.useContext)(i);return e}function d(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}},8139:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,s(t)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)r.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=548.c4f3a5ce.chunk.js.map