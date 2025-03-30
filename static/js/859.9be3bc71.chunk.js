/*! For license information please see 859.9be3bc71.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[859],{1072:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(8139),a=t.n(s),r=t(5043),i=t(7852),o=t(579);const l=r.forwardRef(((e,n)=>{let{bsPrefix:t,className:s,as:r="div",...l}=e;const c=(0,i.oU)(t,"row"),d=(0,i.gy)(),u=(0,i.Jm)(),x=`${c}-cols`,m=[];return d.forEach((e=>{const n=l[e];let t;delete l[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const s=e!==u?`-${e}`:"";null!=t&&m.push(`${x}${s}-${t}`)})),(0,o.jsx)(r,{ref:n,...l,className:a()(s,c,...m)})}));l.displayName="Row";const c=l},2105:(e,n,t)=>{t.d(n,{A:()=>s});const s=(0,t(7784).A)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},3204:(e,n,t)=>{t.d(n,{A:()=>s});const s=(0,t(7784).A)("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]])},4063:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(8139),a=t.n(s),r=t(5043),i=t(7852),o=t(579);const l=r.forwardRef(((e,n)=>{let{bsPrefix:t,bg:s="primary",pill:r=!1,text:l,className:c,as:d="span",...u}=e;const x=(0,i.oU)(t,"badge");return(0,o.jsx)(d,{ref:n,...u,className:a()(c,x,r&&"rounded-pill",l&&`text-${l}`,s&&`bg-${s}`)})}));l.displayName="Badge";const c=l},6859:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ye});var s=t(5043),a=t(3519),r=t(5173),i=t.n(r);function o(e,n,t){const a=(0,s.useRef)(void 0!==e),[r,i]=(0,s.useState)(n),o=void 0!==e,l=a.current;return a.current=o,!o&&l&&r!==n&&i(n),[o?e:r,(0,s.useCallback)((function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const[a,...r]=n;let o=null==t?void 0:t(a,...r);return i(a),o}),[t])]}const l={prefix:String(Math.round(1e10*Math.random())),current:0},c=s.createContext(l),d=s.createContext(!1);let u=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),x=new WeakMap;function m(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,s.useContext)(c),t=(0,s.useRef)(null);if(null===t.current&&!e){var a,r;let e=null===(r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===r||null===(a=r.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let t=x.get(e);null==t?x.set(e,{id:n.current,state:e.memoizedState}):e.memoizedState!==t.state&&(n.current=t.id,x.delete(e))}t.current=++n.current}return t.current}const f="function"===typeof s.useId?function(e){let n=s.useId(),[t]=(0,s.useState)("function"===typeof s.useSyncExternalStore?s.useSyncExternalStore(p,y,h):(0,s.useContext)(d));return e||`${t?"react-aria":`react-aria${l.prefix}`}-${n}`}:function(e){let n=(0,s.useContext)(c);n!==l||u||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=m(!!e),a=`react-aria${n.prefix}`;return e||`${a}-${t}`};function y(){return!1}function h(){return!0}function p(e){return()=>{}}var b=t(8466),g=t(5901),v=t(8187),j=t(579);const N=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],E=["activeKey","getControlledId","getControllerId"],A=["as"];function k(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.indexOf(s)>=0)continue;t[s]=e[s]}return t}function w(e){let{active:n,eventKey:t,mountOnEnter:a,transition:r,unmountOnExit:i,role:o="tabpanel",onEnter:l,onEntering:c,onEntered:d,onExit:u,onExiting:x,onExited:m}=e,f=k(e,N);const y=(0,s.useContext)(b.A);if(!y)return[Object.assign({},f,{role:o}),{eventKey:t,isActive:n,mountOnEnter:a,transition:r,unmountOnExit:i,onEnter:l,onEntering:c,onEntered:d,onExit:u,onExiting:x,onExited:m}];const{activeKey:h,getControlledId:p,getControllerId:v}=y,j=k(y,E),A=(0,g.u)(t);return[Object.assign({},f,{role:o,id:p(t),"aria-labelledby":v(t)}),{eventKey:t,isActive:null==n&&null!=A?(0,g.u)(h)===A:n,transition:r||j.transition,mountOnEnter:null!=a?a:j.mountOnEnter,unmountOnExit:null!=i?i:j.unmountOnExit,onEnter:l,onEntering:c,onEntered:d,onExit:u,onExiting:x,onExited:m}]}const C=s.forwardRef(((e,n)=>{let{as:t="div"}=e,s=k(e,A);const[a,{isActive:r,onEnter:i,onEntering:o,onEntered:l,onExit:c,onExiting:d,onExited:u,mountOnEnter:x,unmountOnExit:m,transition:f=v.A}]=w(s);return(0,j.jsx)(b.A.Provider,{value:null,children:(0,j.jsx)(g.A.Provider,{value:null,children:(0,j.jsx)(f,{in:r,onEnter:i,onEntering:o,onEntered:l,onExit:c,onExiting:d,onExited:u,mountOnEnter:x,unmountOnExit:m,children:(0,j.jsx)(t,Object.assign({},a,{ref:n,hidden:!r,"aria-hidden":!r}))})})})}));C.displayName="TabPanel";const S=e=>{const{id:n,generateChildId:t,onSelect:a,activeKey:r,defaultActiveKey:i,transition:l,mountOnEnter:c,unmountOnExit:d,children:u}=e,[x,m]=o(r,i,a),y=f(n),h=(0,s.useMemo)((()=>t||((e,n)=>y?`${y}-${n}-${e}`:null)),[y,t]),p=(0,s.useMemo)((()=>({onSelect:m,activeKey:x,transition:l,mountOnEnter:c||!1,unmountOnExit:d||!1,getControlledId:e=>h(e,"tabpane"),getControllerId:e=>h(e,"tab")})),[m,x,l,c,d,h]);return(0,j.jsx)(b.A.Provider,{value:p,children:(0,j.jsx)(g.A.Provider,{value:m||null,children:u})})};S.Panel=C;const O=S;var P=t(8072);function $(e){return"boolean"===typeof e?e?P.A:v.A:e}const R=e=>{let{transition:n,...t}=e;return(0,j.jsx)(O,{...t,transition:$(n)})};R.displayName="TabContainer";const z=R;var I=t(8139),M=t.n(I),U=t(7852);const T=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:a="div",...r}=e;return s=(0,U.oU)(s,"tab-content"),(0,j.jsx)(a,{ref:n,className:M()(t,s),...r})}));T.displayName="TabContent";const K=T,L=s.forwardRef(((e,n)=>{let{bsPrefix:t,transition:s,...a}=e;const[{className:r,as:i="div",...o},{isActive:l,onEnter:c,onEntering:d,onEntered:u,onExit:x,onExiting:m,onExited:f,mountOnEnter:y,unmountOnExit:h,transition:p=P.A}]=w({...a,transition:$(s)}),v=(0,U.oU)(t,"tab-pane");return(0,j.jsx)(b.A.Provider,{value:null,children:(0,j.jsx)(g.A.Provider,{value:null,children:(0,j.jsx)(p,{in:l,onEnter:c,onEntering:d,onEntered:u,onExit:x,onExiting:m,onExited:f,mountOnEnter:y,unmountOnExit:h,children:(0,j.jsx)(i,{...o,ref:n,className:M()(r,v,l&&"active")})})})})}));L.displayName="TabPane";const B=L,H={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},_=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};_.propTypes=H;const D=Object.assign(_,{Container:z,Content:K,Pane:B});var q=t(4409),V=t(8628),F=t(1072),W=t(8602),X=t(7121),G=t(6618);const J=(0,t(4488).A)("h4");J.displayName="DivStyledAsH4";const Y=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:a=J,...r}=e;return s=(0,U.oU)(s,"alert-heading"),(0,j.jsx)(a,{ref:n,className:M()(t,s),...r})}));Y.displayName="AlertHeading";const Z=Y;var Q=t(3372);const ee=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:a=Q.A,...r}=e;return s=(0,U.oU)(s,"alert-link"),(0,j.jsx)(a,{ref:n,className:M()(t,s),...r})}));ee.displayName="AlertLink";const ne=ee;var te=t(5632);const se=s.forwardRef(((e,n)=>{const{bsPrefix:t,show:s=!0,closeLabel:a="Close alert",closeVariant:r,className:i,children:o,variant:l="primary",onClose:c,dismissible:d,transition:u=P.A,...x}=(0,X.Zw)(e,{show:"onClose"}),m=(0,U.oU)(t,"alert"),f=(0,G.A)((e=>{c&&c(!1,e)})),y=!0===u?P.A:u,h=(0,j.jsxs)("div",{role:"alert",...y?void 0:x,ref:n,className:M()(i,m,l&&`${m}-${l}`,d&&`${m}-dismissible`),children:[d&&(0,j.jsx)(te.A,{onClick:f,"aria-label":a,variant:r}),o]});return y?(0,j.jsx)(y,{unmountOnExit:!0,...x,ref:void 0,in:s,children:h}):s?h:null}));se.displayName="Alert";const ae=Object.assign(se,{Link:ne,Heading:Z});var re=t(4063),ie=t(7784);const oe=(0,ie.A)("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);var le=t(3204);const ce=(0,ie.A)("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),de=(0,ie.A)("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),ue=(0,ie.A)("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);var xe=t(2489),me=t(2105);const fe=(0,ie.A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const ye=function(){const[e,n]=(0,s.useState)("storage"),t=[{id:1,title:"Basic Storage Layout !",description:"Contract with various data types showing storage slot allocation !",code:"contract X {\n      uint256 public a = 1;  // Slot 0\n      uint128 public b = 2;  // Slot 1 (partially filled)\n      uint128 public c = 3;  // Slot 1 (same as 'b', packed)\n      bool public d = true;  // Slot 2 (partially filled)\n      address public e = msg.sender; // Slot 3\n  \n      struct Data {\n          uint256 x;\n          uint256 y;\n      }\n      Data public data = Data(10, 20); // Slot 4 & 5\n  \n      mapping(address => uint256) public balances; // keccak256(slot)\n      string public text = \"Hello\"; // Reference in slot 6\n  }",slots:[{id:0,content:"uint256 a (32 bytes)",color:"primary"},{id:1,content:"uint128 b + uint128 c (16 + 16 bytes)",color:"success"},{id:2,content:"bool d (1 byte)",color:"warning"},{id:3,content:"address e (20 bytes)",color:"info"},{id:4,content:"Data.x (32 bytes)",color:"danger"},{id:5,content:"Data.y (32 bytes)",color:"danger"},{id:6,content:"text reference",color:"secondary"}]},{id:2,title:"Struct Packing",description:"Efficient struct layout with packed variables",code:"contract X {\n      struct User {\n          uint128 id;   // 16 bytes\n          bool active;  // 1 byte\n          uint8 level;  // 1 byte\n          uint256 score; // 32 bytes (New slot)\n      }\n  }",slots:[{id:0,content:"id (16 bytes) + active (1 byte) + level (1 byte)",color:"success"},{id:1,content:"score (32 bytes)",color:"primary"}]},{id:3,title:"Mapping Storage !",description:"How mappings are stored using keccak256",code:"contract X {\n      mapping(address => uint256) public balances;  // Slot 0\n      \n      function setBalance(address user, uint256 amount) public {\n          balances[user] = amount;\n      }\n  }",slots:[{id:0,content:"mapping slot identifier",color:"info"},{id:"n",content:"keccak256(key + slot) => value",color:"warning"}]}],r=[{title:"Variable Packing",description:"Optimize storage by packing variables efficiently",unsafe:"uint128 a; // Slot 0\n  uint256 b; // Slot 1\n  uint128 c; // Slot 2",safe:"uint128 a; // Slot 0\n  uint128 c; // Slot 0 (packed)\n  uint256 b; // Slot 1"}],i=[{icon:(0,j.jsx)(oe,{size:24}),text:"Every storage slot can store up to 32 bytes of data"},{icon:(0,j.jsx)(le.A,{size:24}),text:"If a variable is \u2264 32 bytes, it fits into a single slot"},{icon:(0,j.jsx)(ce,{size:24}),text:"If a variable is > 32 bytes, it gets its own slot and additional storage"}];return(0,j.jsxs)(a.A,{className:"py-5",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center gap-3 mb-4",children:[(0,j.jsx)(de,{size:32,className:"text-primary"}),(0,j.jsx)("h1",{className:"mb-0",children:"Ethereum Virtual Machine (EVM)"})]}),(0,j.jsxs)(D.Container,{activeKey:e,onSelect:e=>n(e),children:[(0,j.jsxs)(q.A,{variant:"tabs",className:"mb-4",children:[(0,j.jsx)(q.A.Item,{children:(0,j.jsxs)(q.A.Link,{eventKey:"storage",className:"d-flex align-items-center gap-2",children:[(0,j.jsx)(oe,{size:18}),"Storage Layout"]})}),(0,j.jsx)(q.A.Item,{children:(0,j.jsxs)(q.A.Link,{eventKey:"gas",className:"d-flex align-items-center gap-2",children:[(0,j.jsx)(ue,{size:18}),"Gas Optimization"]})}),(0,j.jsx)(q.A.Item,{children:(0,j.jsxs)(q.A.Link,{eventKey:"rules",className:"d-flex align-items-center gap-2",children:[(0,j.jsx)(xe.A,{size:18}),"Storage Rules"]})})]}),(0,j.jsxs)(D.Content,{children:[(0,j.jsx)(D.Pane,{eventKey:"storage",children:t.map((e=>(0,j.jsxs)(V.A,{className:"mb-4",children:[(0,j.jsx)(V.A.Header,{children:(0,j.jsx)("h3",{className:"h5 mb-0",children:e.title})}),(0,j.jsxs)(V.A.Body,{children:[(0,j.jsx)("p",{className:"text-muted",children:e.description}),(0,j.jsxs)(F.A,{className:"mb-4",children:[(0,j.jsxs)(W.A,{md:6,children:[(0,j.jsxs)("h4",{className:"h6 mb-3 d-flex align-items-center gap-2",children:[(0,j.jsx)(me.A,{size:18}),"Contract Code"]}),(0,j.jsx)("pre",{className:"bg-light p-3 rounded",children:(0,j.jsx)("code",{children:e.code})})]}),(0,j.jsxs)(W.A,{md:6,children:[(0,j.jsxs)("h4",{className:"h6 mb-3 d-flex align-items-center gap-2",children:[(0,j.jsx)(oe,{size:18}),"Storage Slots"]}),e.slots.map((e=>(0,j.jsxs)(ae,{variant:e.color,className:"d-flex align-items-center mb-2",children:[(0,j.jsxs)("strong",{className:"me-2",children:["Slot ",e.id,":"]})," ",e.content]},e.id)))]})]})]})]},e.id)))}),(0,j.jsx)(D.Pane,{eventKey:"gas",children:r.map(((e,n)=>(0,j.jsxs)(V.A,{className:"mb-4",children:[(0,j.jsx)(V.A.Header,{children:(0,j.jsx)("h3",{className:"h5 mb-0",children:e.title})}),(0,j.jsxs)(V.A.Body,{children:[(0,j.jsx)("p",{className:"text-muted",children:e.description}),(0,j.jsxs)(F.A,{children:[(0,j.jsxs)(W.A,{md:5,children:[(0,j.jsx)(re.A,{bg:"danger",className:"mb-2",children:"Unsafe"}),(0,j.jsx)("pre",{className:"bg-light p-3 rounded",children:(0,j.jsx)("code",{children:e.unsafe})})]}),(0,j.jsx)(W.A,{md:2,className:"d-flex align-items-center justify-content-center",children:(0,j.jsx)(fe,{size:24})}),(0,j.jsxs)(W.A,{md:5,children:[(0,j.jsx)(re.A,{bg:"success",className:"mb-2",children:"Safe"}),(0,j.jsx)("pre",{className:"bg-light p-3 rounded",children:(0,j.jsx)("code",{children:e.safe})})]})]})]})]},n)))}),(0,j.jsx)(D.Pane,{eventKey:"rules",children:(0,j.jsx)(V.A,{children:(0,j.jsx)(V.A.Body,{children:(0,j.jsx)(F.A,{children:i.map(((e,n)=>(0,j.jsx)(W.A,{md:4,children:(0,j.jsxs)("div",{className:"d-flex align-items-center gap-3 mb-4",children:[(0,j.jsx)("div",{className:"bg-primary bg-opacity-10 p-3 rounded",children:e.icon}),(0,j.jsx)("p",{className:"mb-0",children:e.text})]})},n)))})})})})]})]})]})}},8602:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(8139),a=t.n(s),r=t(5043),i=t(7852),o=t(579);const l=r.forwardRef(((e,n)=>{const[{className:t,...s},{as:r="div",bsPrefix:l,spans:c}]=function(e){let{as:n,bsPrefix:t,className:s,...r}=e;t=(0,i.oU)(t,"col");const o=(0,i.gy)(),l=(0,i.Jm)(),c=[],d=[];return o.forEach((e=>{const n=r[e];let s,a,i;delete r[e],"object"===typeof n&&null!=n?({span:s,offset:a,order:i}=n):s=n;const o=e!==l?`-${e}`:"";s&&c.push(!0===s?`${t}${o}`:`${t}${o}-${s}`),null!=i&&d.push(`order${o}-${i}`),null!=a&&d.push(`offset${o}-${a}`)})),[{...r,className:a()(s,...c,...d)},{as:n,bsPrefix:t,spans:c}]}(e);return(0,o.jsx)(r,{...s,ref:n,className:a()(t,!c.length&&l)})}));l.displayName="Col";const c=l},8628:(e,n,t)=>{t.d(n,{A:()=>$});var s=t(8139),a=t.n(s),r=t(5043),i=t(7852),o=t(579);const l=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r="div",...l}=e;return s=(0,i.oU)(s,"card-body"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));l.displayName="CardBody";const c=l,d=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r="div",...l}=e;return s=(0,i.oU)(s,"card-footer"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));d.displayName="CardFooter";const u=d;var x=t(1778);const m=r.forwardRef(((e,n)=>{let{bsPrefix:t,className:s,as:l="div",...c}=e;const d=(0,i.oU)(t,"card-header"),u=(0,r.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(x.A.Provider,{value:u,children:(0,o.jsx)(l,{ref:n,...c,className:a()(s,d)})})}));m.displayName="CardHeader";const f=m,y=r.forwardRef(((e,n)=>{let{bsPrefix:t,className:s,variant:r,as:l="img",...c}=e;const d=(0,i.oU)(t,"card-img");return(0,o.jsx)(l,{ref:n,className:a()(r?`${d}-${r}`:d,s),...c})}));y.displayName="CardImg";const h=y,p=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r="div",...l}=e;return s=(0,i.oU)(s,"card-img-overlay"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));p.displayName="CardImgOverlay";const b=p,g=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r="a",...l}=e;return s=(0,i.oU)(s,"card-link"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));g.displayName="CardLink";const v=g;var j=t(4488);const N=(0,j.A)("h6"),E=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r=N,...l}=e;return s=(0,i.oU)(s,"card-subtitle"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));E.displayName="CardSubtitle";const A=E,k=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r="p",...l}=e;return s=(0,i.oU)(s,"card-text"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));k.displayName="CardText";const w=k,C=(0,j.A)("h5"),S=r.forwardRef(((e,n)=>{let{className:t,bsPrefix:s,as:r=C,...l}=e;return s=(0,i.oU)(s,"card-title"),(0,o.jsx)(r,{ref:n,className:a()(t,s),...l})}));S.displayName="CardTitle";const O=S,P=r.forwardRef(((e,n)=>{let{bsPrefix:t,className:s,bg:r,text:l,border:d,body:u=!1,children:x,as:m="div",...f}=e;const y=(0,i.oU)(t,"card");return(0,o.jsx)(m,{ref:n,...f,className:a()(s,y,r&&`bg-${r}`,l&&`text-${l}`,d&&`border-${d}`),children:u?(0,o.jsx)(c,{children:x}):x})}));P.displayName="Card";const $=Object.assign(P,{Img:h,Title:O,Subtitle:A,Body:c,Link:v,Text:w,Header:f,Footer:u,ImgOverlay:b})}}]);
//# sourceMappingURL=859.9be3bc71.chunk.js.map