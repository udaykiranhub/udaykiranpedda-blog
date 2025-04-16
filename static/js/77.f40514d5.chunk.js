/*! For license information please see 77.f40514d5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[77],{59:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]])},1072:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(8139),a=t.n(r),o=t(5043),s=t(7852),l=t(579);const i=o.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:o="div",...i}=e;const c=(0,s.oU)(t,"row"),d=(0,s.gy)(),u=(0,s.Jm)(),f=`${c}-cols`,x=[];return d.forEach((e=>{const n=i[e];let t;delete i[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const r=e!==u?`-${e}`:"";null!=t&&x.push(`${f}${r}-${t}`)})),(0,l.jsx)(o,{ref:n,...i,className:a()(r,c,...x)})}));i.displayName="Row";const c=i},1719:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(8139),a=t.n(r),o=t(5043),s=t(7121),l=t(6618),i=t(7852),c=t(4488),d=t(579);const u=(0,c.A)("h4");u.displayName="DivStyledAsH4";const f=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o=u,...s}=e;return r=(0,i.oU)(r,"alert-heading"),(0,d.jsx)(o,{ref:n,className:a()(t,r),...s})}));f.displayName="AlertHeading";const x=f;var m=t(3372);const v=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o=m.A,...s}=e;return r=(0,i.oU)(r,"alert-link"),(0,d.jsx)(o,{ref:n,className:a()(t,r),...s})}));v.displayName="AlertLink";const y=v;var p=t(8072),b=t(5632);const E=o.forwardRef(((e,n)=>{const{bsPrefix:t,show:r=!0,closeLabel:o="Close alert",closeVariant:c,className:u,children:f,variant:x="primary",onClose:m,dismissible:v,transition:y=p.A,...E}=(0,s.Zw)(e,{show:"onClose"}),h=(0,i.oU)(t,"alert"),A=(0,l.A)((e=>{m&&m(!1,e)})),N=!0===y?p.A:y,g=(0,d.jsxs)("div",{role:"alert",...N?void 0:E,ref:n,className:a()(u,h,x&&`${h}-${x}`,v&&`${h}-dismissible`),children:[v&&(0,d.jsx)(b.A,{onClick:A,"aria-label":o,variant:c}),f]});return N?(0,d.jsx)(N,{unmountOnExit:!0,...E,ref:void 0,in:r,children:g}):r?g:null}));E.displayName="Alert";const h=Object.assign(E,{Link:y,Heading:x})},2105:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},2346:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(3818),a=t(5043);var o=t(3539),s=t(9048),l=t(5901),i=t(8466),c=t(5425),d=t(2644),u=t(579);const f=["as","onSelect","activeKey","role","onKeyDown"];const x=()=>{},m=(0,c.sE)("event-key"),v=a.forwardRef(((e,n)=>{let{as:t="div",onSelect:d,activeKey:v,role:y,onKeyDown:p}=e,b=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,f);const E=function(){const[,e]=(0,a.useReducer)((e=>e+1),0);return e}(),h=(0,a.useRef)(!1),A=(0,a.useContext)(l.A),N=(0,a.useContext)(i.A);let g,w;N&&(y=y||"tablist",v=N.activeKey,g=N.getControlledId,w=N.getControllerId);const C=(0,a.useRef)(null),k=e=>{const n=C.current;if(!n)return null;const t=(0,r.A)(n,`[${m}]:not([aria-disabled=true])`),a=n.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const o=t.indexOf(a);if(-1===o)return null;let s=o+e;return s>=t.length&&(s=0),s<0&&(s=t.length-1),t[s]},j=(e,n)=>{null!=e&&(null==d||d(e,n),null==A||A(e,n))};(0,a.useEffect)((()=>{if(C.current&&h.current){const e=C.current.querySelector(`[${m}][aria-selected=true]`);null==e||e.focus()}h.current=!1}));const O=(0,o.A)(n,C);return(0,u.jsx)(l.A.Provider,{value:j,children:(0,u.jsx)(s.A.Provider,{value:{role:y,activeKey:(0,l.u)(v),getControlledId:g||x,getControllerId:w||x},children:(0,u.jsx)(t,Object.assign({},b,{onKeyDown:e=>{if(null==p||p(e),!N)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=k(-1);break;case"ArrowRight":case"ArrowDown":n=k(1);break;default:return}n&&(e.preventDefault(),j(n.dataset[(0,c.y)("EventKey")]||null,e),h.current=!0,E())},ref:O,role:y}))})})}));v.displayName="Nav";const y=Object.assign(v,{Item:d.A})},2644:(e,n,t)=>{t.d(n,{A:()=>m,M:()=>f});var r=t(5043),a=t(8894),o=t(9048),s=t(5901),l=t(4140),i=t(5425),c=t(8466),d=t(579);const u=["as","active","eventKey"];function f(e){let{key:n,onClick:t,active:l,id:d,role:u,disabled:f}=e;const x=(0,r.useContext)(s.A),m=(0,r.useContext)(o.A),v=(0,r.useContext)(c.A);let y=l;const p={role:u};if(m){u||"tablist"!==m.role||(p.role="tab");const e=m.getControllerId(null!=n?n:null),t=m.getControlledId(null!=n?n:null);p[(0,i.sE)("event-key")]=n,p.id=e||d,y=null==l&&null!=n?m.activeKey===n:l,!y&&(null!=v&&v.unmountOnExit||null!=v&&v.mountOnEnter)||(p["aria-controls"]=t)}return"tab"===p.role&&(p["aria-selected"]=y,y||(p.tabIndex=-1),f&&(p.tabIndex=-1,p["aria-disabled"]=!0)),p.onClick=(0,a.A)((e=>{f||(null==t||t(e),null!=n&&x&&!e.isPropagationStopped()&&x(n,e))})),[p,{isActive:y}]}const x=r.forwardRef(((e,n)=>{let{as:t=l.Ay,active:r,eventKey:a}=e,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,u);const[c,x]=f(Object.assign({key:(0,s.u)(a,o.href),active:r},o));return c[(0,i.sE)("active")]=x.isActive,(0,d.jsx)(t,Object.assign({},o,c,{ref:n}))}));x.displayName="NavItem";const m=x},3005:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},3204:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]])},3539:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(5043);const a=e=>e&&"function"!==typeof e?n=>{e.current=n}:e;const o=function(e,n){return(0,r.useMemo)((()=>function(e,n){const t=a(e),r=a(n);return e=>{t&&t(e),r&&r(e)}}(e,n)),[e,n])}},3702:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(5173),a=t.n(r),o=t(5043);function s(e,n,t){const r=(0,o.useRef)(void 0!==e),[a,s]=(0,o.useState)(n),l=void 0!==e,i=r.current;return r.current=l,!l&&i&&a!==n&&s(n),[l?e:a,(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const[a,...o]=n;let l=null==t?void 0:t(a,...o);return s(a),l}),[t])]}const l={prefix:String(Math.round(1e10*Math.random())),current:0},i=o.createContext(l),c=o.createContext(!1);let d=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),u=new WeakMap;function f(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,o.useContext)(i),t=(0,o.useRef)(null);if(null===t.current&&!e){var r,a;let e=null===(a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===a||null===(r=a.ReactCurrentOwner)||void 0===r?void 0:r.current;if(e){let t=u.get(e);null==t?u.set(e,{id:n.current,state:e.memoizedState}):e.memoizedState!==t.state&&(n.current=t.id,u.delete(e))}t.current=++n.current}return t.current}const x="function"===typeof o.useId?function(e){let n=o.useId(),[t]=(0,o.useState)("function"===typeof o.useSyncExternalStore?o.useSyncExternalStore(y,m,v):(0,o.useContext)(c));return e||`${t?"react-aria":`react-aria${l.prefix}`}-${n}`}:function(e){let n=(0,o.useContext)(i);n!==l||d||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=f(!!e),r=`react-aria${n.prefix}`;return e||`${r}-${t}`};function m(){return!1}function v(){return!0}function y(e){return()=>{}}var p=t(8466),b=t(5901),E=t(8187),h=t(579);const A=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],N=["activeKey","getControlledId","getControllerId"],g=["as"];function w(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function C(e){let{active:n,eventKey:t,mountOnEnter:r,transition:a,unmountOnExit:s,role:l="tabpanel",onEnter:i,onEntering:c,onEntered:d,onExit:u,onExiting:f,onExited:x}=e,m=w(e,A);const v=(0,o.useContext)(p.A);if(!v)return[Object.assign({},m,{role:l}),{eventKey:t,isActive:n,mountOnEnter:r,transition:a,unmountOnExit:s,onEnter:i,onEntering:c,onEntered:d,onExit:u,onExiting:f,onExited:x}];const{activeKey:y,getControlledId:E,getControllerId:h}=v,g=w(v,N),C=(0,b.u)(t);return[Object.assign({},m,{role:l,id:E(t),"aria-labelledby":h(t)}),{eventKey:t,isActive:null==n&&null!=C?(0,b.u)(y)===C:n,transition:a||g.transition,mountOnEnter:null!=r?r:g.mountOnEnter,unmountOnExit:null!=s?s:g.unmountOnExit,onEnter:i,onEntering:c,onEntered:d,onExit:u,onExiting:f,onExited:x}]}const k=o.forwardRef(((e,n)=>{let{as:t="div"}=e,r=w(e,g);const[a,{isActive:o,onEnter:s,onEntering:l,onEntered:i,onExit:c,onExiting:d,onExited:u,mountOnEnter:f,unmountOnExit:x,transition:m=E.A}]=C(r);return(0,h.jsx)(p.A.Provider,{value:null,children:(0,h.jsx)(b.A.Provider,{value:null,children:(0,h.jsx)(m,{in:o,onEnter:s,onEntering:l,onEntered:i,onExit:c,onExiting:d,onExited:u,mountOnEnter:f,unmountOnExit:x,children:(0,h.jsx)(t,Object.assign({},a,{ref:n,hidden:!o,"aria-hidden":!o}))})})})}));k.displayName="TabPanel";const j=e=>{const{id:n,generateChildId:t,onSelect:r,activeKey:a,defaultActiveKey:l,transition:i,mountOnEnter:c,unmountOnExit:d,children:u}=e,[f,m]=s(a,l,r),v=x(n),y=(0,o.useMemo)((()=>t||((e,n)=>v?`${v}-${n}-${e}`:null)),[v,t]),E=(0,o.useMemo)((()=>({onSelect:m,activeKey:f,transition:i,mountOnEnter:c||!1,unmountOnExit:d||!1,getControlledId:e=>y(e,"tabpane"),getControllerId:e=>y(e,"tab")})),[m,f,i,c,d,y]);return(0,h.jsx)(p.A.Provider,{value:E,children:(0,h.jsx)(b.A.Provider,{value:m||null,children:u})})};j.Panel=k;const O=j;var $=t(8072);function R(e){return"boolean"===typeof e?e?$.A:E.A:e}const P=e=>{let{transition:n,...t}=e;return(0,h.jsx)(O,{...t,transition:R(n)})};P.displayName="TabContainer";const I=P;var S=t(8139),K=t.n(S),U=t(7852);const M=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:a="div",...o}=e;return r=(0,U.oU)(r,"tab-content"),(0,h.jsx)(a,{ref:n,className:K()(t,r),...o})}));M.displayName="TabContent";const T=M,L=o.forwardRef(((e,n)=>{let{bsPrefix:t,transition:r,...a}=e;const[{className:o,as:s="div",...l},{isActive:i,onEnter:c,onEntering:d,onEntered:u,onExit:f,onExiting:x,onExited:m,mountOnEnter:v,unmountOnExit:y,transition:E=$.A}]=C({...a,transition:R(r)}),A=(0,U.oU)(t,"tab-pane");return(0,h.jsx)(p.A.Provider,{value:null,children:(0,h.jsx)(b.A.Provider,{value:null,children:(0,h.jsx)(E,{in:i,onEnter:c,onEntering:d,onEntered:u,onExit:f,onExiting:x,onExited:m,mountOnEnter:v,unmountOnExit:y,children:(0,h.jsx)(s,{...l,ref:n,className:K()(o,A,i&&"active")})})})})}));L.displayName="TabPane";const _=L,z={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string,tabAttrs:a().object},D=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};D.propTypes=z;const q=Object.assign(D,{Container:I,Content:T,Pane:_})},3818:(e,n,t)=>{t.d(n,{A:()=>a});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,n){return r(e.querySelectorAll(n))}},4063:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(8139),a=t.n(r),o=t(5043),s=t(7852),l=t(579);const i=o.forwardRef(((e,n)=>{let{bsPrefix:t,bg:r="primary",pill:o=!1,text:i,className:c,as:d="span",...u}=e;const f=(0,s.oU)(t,"badge");return(0,l.jsx)(d,{ref:n,...u,className:a()(c,f,o&&"rounded-pill",i&&`text-${i}`,r&&`bg-${r}`)})}));i.displayName="Badge";const c=i},5425:(e,n,t)=>{t.d(n,{sE:()=>o,y:()=>s});const r="data-rr-ui-",a="rrUi";function o(e){return`${r}${e}`}function s(e){return`${a}${e}`}},5632:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(5173),a=t.n(r),o=t(5043),s=t(8139),l=t.n(s),i=t(579);const c={"aria-label":a().string,onClick:a().func,variant:a().oneOf(["white"])},d=o.forwardRef(((e,n)=>{let{className:t,variant:r,"aria-label":a="Close",...o}=e;return(0,i.jsx)("button",{ref:n,type:"button",className:l()("btn-close",r&&`btn-close-${r}`,t),"aria-label":a,...o})}));d.displayName="CloseButton",d.propTypes=c;const u=d},5692:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},5901:(e,n,t)=>{t.d(n,{A:()=>o,u:()=>a});var r=t(5043);const a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null},o=r.createContext(null)},6618:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(5043);const a=function(e){const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n};function o(e){const n=a(e);return(0,r.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}},6856:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(8139),a=t.n(r),o=t(5043),s=t(7121),l=t(2346),i=t(7852),c=t(9125),d=t(1778),u=t(579);const f=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...s}=e;return r=(0,i.oU)(r,"nav-item"),(0,u.jsx)(o,{ref:n,className:a()(t,r),...s})}));f.displayName="NavItem";const x=f;var m=t(3372),v=t(2644),y=t(5901);const p=o.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:o=m.A,active:s,eventKey:l,disabled:c=!1,...d}=e;t=(0,i.oU)(t,"nav-link");const[f,x]=(0,v.M)({key:(0,y.u)(l,d.href),active:s,disabled:c,...d});return(0,u.jsx)(o,{...d,...f,ref:n,disabled:c,className:a()(r,t,c&&"disabled",x.isActive&&"active")})}));p.displayName="NavLink";const b=p,E=o.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:r,variant:f,fill:x=!1,justify:m=!1,navbar:v,navbarScroll:y,className:p,activeKey:b,...E}=(0,s.Zw)(e,{activeKey:"onSelect"}),h=(0,i.oU)(r,"nav");let A,N,g=!1;const w=(0,o.useContext)(c.A),C=(0,o.useContext)(d.A);return w?(A=w.bsPrefix,g=null==v||v):C&&({cardHeaderBsPrefix:N}=C),(0,u.jsx)(l.A,{as:t,ref:n,activeKey:b,className:a()(p,{[h]:!g,[`${A}-nav`]:g,[`${A}-nav-scroll`]:g&&y,[`${N}-${f}`]:!!N,[`${h}-${f}`]:!!f,[`${h}-fill`]:x,[`${h}-justified`]:m}),...E})}));E.displayName="Nav";const h=Object.assign(E,{Item:x,Link:b})},8072:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(8139),a=t.n(r),o=t(5043),s=t(9998),l=t(9791),i=t(9841),c=t(2643),d=t(3850),u=t(579);const f={[s.ns]:"show",[s._K]:"show"},x=o.forwardRef(((e,n)=>{let{className:t,children:r,transitionClasses:s={},onEnter:x,...m}=e;const v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...m},y=(0,o.useCallback)(((e,n)=>{(0,c.A)(e),null==x||x(e,n)}),[x]);return(0,u.jsx)(d.A,{ref:n,addEndListener:i.A,...v,onEnter:y,childRef:(0,l.am)(r),children:(e,n)=>o.cloneElement(r,{...n,className:a()("fade",t,r.props.className,f[e],s[e])})})}));x.displayName="Fade";const m=x},8187:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(8894),a=t(3539),o=t(5043),s=t(9791);const l=function(e){let{children:n,in:t,onExited:l,mountOnEnter:i,unmountOnExit:c}=e;const d=(0,o.useRef)(null),u=(0,o.useRef)(t),f=(0,r.A)(l);(0,o.useEffect)((()=>{t?u.current=!0:f(d.current)}),[t,f]);const x=(0,a.A)(d,(0,s.am)(n)),m=(0,o.cloneElement)(n,{ref:x});return t?m:c||!u.current&&i?null:m}},8280:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]])},8466:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(5043).createContext(null)},8602:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(8139),a=t.n(r),o=t(5043),s=t(7852),l=t(579);const i=o.forwardRef(((e,n)=>{const[{className:t,...r},{as:o="div",bsPrefix:i,spans:c}]=function(e){let{as:n,bsPrefix:t,className:r,...o}=e;t=(0,s.oU)(t,"col");const l=(0,s.gy)(),i=(0,s.Jm)(),c=[],d=[];return l.forEach((e=>{const n=o[e];let r,a,s;delete o[e],"object"===typeof n&&null!=n?({span:r,offset:a,order:s}=n):r=n;const l=e!==i?`-${e}`:"";r&&c.push(!0===r?`${t}${l}`:`${t}${l}-${r}`),null!=s&&d.push(`order${l}-${s}`),null!=a&&d.push(`offset${l}-${a}`)})),[{...o,className:a()(r,...c,...d)},{as:n,bsPrefix:t,spans:c}]}(e);return(0,l.jsx)(o,{...r,ref:n,className:a()(t,!c.length&&i)})}));i.displayName="Col";const c=i},8628:(e,n,t)=>{t.d(n,{A:()=>P});var r=t(8139),a=t.n(r),o=t(5043),s=t(7852),l=t(579);const i=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...i}=e;return r=(0,s.oU)(r,"card-body"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));i.displayName="CardBody";const c=i,d=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...i}=e;return r=(0,s.oU)(r,"card-footer"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));d.displayName="CardFooter";const u=d;var f=t(1778);const x=o.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,as:i="div",...c}=e;const d=(0,s.oU)(t,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(f.A.Provider,{value:u,children:(0,l.jsx)(i,{ref:n,...c,className:a()(r,d)})})}));x.displayName="CardHeader";const m=x,v=o.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,variant:o,as:i="img",...c}=e;const d=(0,s.oU)(t,"card-img");return(0,l.jsx)(i,{ref:n,className:a()(o?`${d}-${o}`:d,r),...c})}));v.displayName="CardImg";const y=v,p=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="div",...i}=e;return r=(0,s.oU)(r,"card-img-overlay"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));p.displayName="CardImgOverlay";const b=p,E=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="a",...i}=e;return r=(0,s.oU)(r,"card-link"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));E.displayName="CardLink";const h=E;var A=t(4488);const N=(0,A.A)("h6"),g=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o=N,...i}=e;return r=(0,s.oU)(r,"card-subtitle"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));g.displayName="CardSubtitle";const w=g,C=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o="p",...i}=e;return r=(0,s.oU)(r,"card-text"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));C.displayName="CardText";const k=C,j=(0,A.A)("h5"),O=o.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:o=j,...i}=e;return r=(0,s.oU)(r,"card-title"),(0,l.jsx)(o,{ref:n,className:a()(t,r),...i})}));O.displayName="CardTitle";const $=O,R=o.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,bg:o,text:i,border:d,body:u=!1,children:f,as:x="div",...m}=e;const v=(0,s.oU)(t,"card");return(0,l.jsx)(x,{ref:n,...m,className:a()(r,v,o&&`bg-${o}`,i&&`text-${i}`,d&&`border-${d}`),children:u?(0,l.jsx)(c,{children:f}):f})}));R.displayName="Card";const P=Object.assign(R,{Img:y,Title:$,Subtitle:w,Body:c,Link:h,Text:k,Header:m,Footer:u,ImgOverlay:b})},9048:(e,n,t)=>{t.d(n,{A:()=>a});const r=t(5043).createContext(null);r.displayName="NavContext";const a=r},9125:(e,n,t)=>{t.d(n,{A:()=>a});const r=t(5043).createContext(null);r.displayName="NavbarContext";const a=r},9153:(e,n,t)=>{t.d(n,{A:()=>r});const r=(0,t(7784).A)("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]])}}]);
//# sourceMappingURL=77.f40514d5.chunk.js.map