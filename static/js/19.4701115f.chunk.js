/*! For license information please see 19.4701115f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[19],{457:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(8139),r=t.n(a),s=t(5043),o=t(7121),l=t(7852),i=t(2306);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=s.createContext({});d.displayName="AccordionContext";const u=d;var h=t(579);const f=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:o,children:d,eventKey:f,...p}=e;const{activeEventKey:m}=(0,s.useContext)(u);return a=(0,l.oU)(a,"accordion-collapse"),(0,h.jsx)(i.A,{ref:n,in:c(m,f),...p,className:r()(o,a),children:(0,h.jsx)(t,{children:s.Children.only(d)})})}));f.displayName="AccordionCollapse";const p=f,m=s.createContext({eventKey:""});m.displayName="AccordionItemContext";const x=m,y=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:o,onEnter:i,onEntering:c,onEntered:d,onExit:u,onExiting:f,onExited:m,...y}=e;a=(0,l.oU)(a,"accordion-body");const{eventKey:v}=(0,s.useContext)(x);return(0,h.jsx)(p,{eventKey:v,onEnter:i,onEntering:c,onEntered:d,onExit:u,onExiting:f,onExited:m,children:(0,h.jsx)(t,{ref:n,...y,className:r()(o,a)})})}));y.displayName="AccordionBody";const v=y;const b=s.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:a,className:o,onClick:i,...d}=e;a=(0,l.oU)(a,"accordion-button");const{eventKey:f}=(0,s.useContext)(x),p=function(e,n){const{activeEventKey:t,onSelect:a,alwaysOpen:r}=(0,s.useContext)(u);return s=>{let o=e===t?null:e;r&&(o=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==a||a(o,s),null==n||n(s)}}(f,i),{activeEventKey:m}=(0,s.useContext)(u);return"button"===t&&(d.type="button"),(0,h.jsx)(t,{ref:n,onClick:p,...d,"aria-expanded":Array.isArray(m)?m.includes(f):f===m,className:r()(o,a,!c(m,f)&&"collapsed")})}));b.displayName="AccordionButton";const j=b,A=s.forwardRef(((e,n)=>{let{as:t="h2","aria-controls":a,bsPrefix:s,className:o,children:i,onClick:c,...d}=e;return s=(0,l.oU)(s,"accordion-header"),(0,h.jsx)(t,{ref:n,...d,className:r()(o,s),children:(0,h.jsx)(j,{onClick:c,"aria-controls":a,children:i})})}));A.displayName="AccordionHeader";const w=A,g=s.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:a,className:o,eventKey:i,...c}=e;a=(0,l.oU)(a,"accordion-item");const d=(0,s.useMemo)((()=>({eventKey:i})),[i]);return(0,h.jsx)(x.Provider,{value:d,children:(0,h.jsx)(t,{ref:n,...c,className:r()(o,a)})})}));g.displayName="AccordionItem";const E=g,N=s.forwardRef(((e,n)=>{const{as:t="div",activeKey:a,bsPrefix:i,className:c,onSelect:d,flush:f,alwaysOpen:p,...m}=(0,o.Zw)(e,{activeKey:"onSelect"}),x=(0,l.oU)(i,"accordion"),y=(0,s.useMemo)((()=>({activeEventKey:a,onSelect:d,alwaysOpen:p})),[a,d,p]);return(0,h.jsx)(u.Provider,{value:y,children:(0,h.jsx)(t,{ref:n,...m,className:r()(c,x,f&&`${x}-flush`)})})}));N.displayName="Accordion";const k=Object.assign(N,{Button:j,Collapse:p,Item:E,Header:w,Body:v})},1719:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(8139),r=t.n(a),s=t(5043),o=t(7121),l=t(6618),i=t(7852),c=t(4488),d=t(579);const u=(0,c.A)("h4");u.displayName="DivStyledAsH4";const h=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:a,as:s=u,...o}=e;return a=(0,i.oU)(a,"alert-heading"),(0,d.jsx)(s,{ref:n,className:r()(t,a),...o})}));h.displayName="AlertHeading";const f=h;var p=t(3372);const m=s.forwardRef(((e,n)=>{let{className:t,bsPrefix:a,as:s=p.A,...o}=e;return a=(0,i.oU)(a,"alert-link"),(0,d.jsx)(s,{ref:n,className:r()(t,a),...o})}));m.displayName="AlertLink";const x=m;var y=t(8072),v=t(5632);const b=s.forwardRef(((e,n)=>{const{bsPrefix:t,show:a=!0,closeLabel:s="Close alert",closeVariant:c,className:u,children:h,variant:f="primary",onClose:p,dismissible:m,transition:x=y.A,...b}=(0,o.Zw)(e,{show:"onClose"}),j=(0,i.oU)(t,"alert"),A=(0,l.A)((e=>{p&&p(!1,e)})),w=!0===x?y.A:x,g=(0,d.jsxs)("div",{role:"alert",...w?void 0:b,ref:n,className:r()(u,j,f&&`${j}-${f}`,m&&`${j}-dismissible`),children:[m&&(0,d.jsx)(v.A,{onClick:A,"aria-label":s,variant:c}),h]});return w?(0,d.jsx)(w,{unmountOnExit:!0,...b,ref:void 0,in:a,children:g}):a?g:null}));b.displayName="Alert";const j=Object.assign(b,{Link:x,Heading:f})},2019:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(5043);var a=t(3519),r=t(1072),s=t(8602),o=t(1719),l=t(457),i=t(2489),c=t(9891),d=t(7719),u=t(579);const h=()=>(0,u.jsxs)(a.A,{className:"py-5",children:[(0,u.jsx)(r.A,{className:"mb-5",children:(0,u.jsxs)(s.A,{children:[(0,u.jsxs)("h1",{className:"display-4 mb-4",children:[(0,u.jsx)(i.A,{className:"me-3",size:48}),"Damn Vulnerable DeFi - Side Entrance"]}),(0,u.jsx)("p",{className:"lead text-muted",children:"A deep dive into exploiting vulnerabilities in DeFi lending pools"}),(0,u.jsxs)(o.A,{variant:"info",className:"d-flex align-items-center",children:[(0,u.jsx)(c.A,{className:"me-2"}),(0,u.jsxs)("span",{children:["CTF GitHub Repository:"," ",(0,u.jsx)("a",{href:"https://github.com/tinchoabbate/damn-vulnerable-defi/tree/v3.0.0",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/tinchoabbate/damn-vulnerable-defi"})]})]})]})}),(0,u.jsx)(l.A,{children:(0,u.jsxs)(l.A.Item,{eventKey:"0",children:[(0,u.jsx)(l.A.Header,{children:(0,u.jsx)("span",{className:"h5 mb-0",children:"Side Entrance Attack Walkthrough"})}),(0,u.jsxs)(l.A.Body,{children:[(0,u.jsx)("h5",{children:"\ud83c\udfaf Goal:"}),(0,u.jsx)("p",{children:"Drain 1000 ETH from the vulnerable SideEntranceLenderPool contract."}),(0,u.jsx)("h5",{children:"\ud83d\udca5 What's the vulnerability?"}),(0,u.jsx)("p",{children:"The pool has these features:"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"Anyone can deposit and withdraw ETH."}),(0,u.jsx)("li",{children:"It also gives flash loans (borrow and repay in the same transaction)."}),(0,u.jsx)("li",{children:"Flash loan gives ETH and then calls your contract's execute() function."})]}),(0,u.jsxs)(o.A,{variant:"danger",className:"d-flex align-items-start",children:[(0,u.jsx)(d.A,{className:"me-2 mt-1"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:"Critical Vulnerability:"})," The contract tracks deposits and flash loan repayments using the same balance mapping, allowing a malicious actor to use the flash loaned amount as their own deposit balance."]})]}),(0,u.jsx)("h5",{children:"\ud83d\udd0d Detailed Analysis:"}),(0,u.jsx)("p",{children:"The vulnerability stems from how the pool tracks balances:"}),(0,u.jsxs)("ol",{children:[(0,u.jsxs)("li",{children:["The pool uses a simple ",(0,u.jsx)("code",{children:"balances"})," mapping to track both deposits and flash loan repayments."]}),(0,u.jsxs)("li",{children:["When you repay a flash loan via deposit, it increases your ",(0,u.jsx)("code",{children:"balances"})," entry."]}),(0,u.jsx)("li",{children:"The flash loan repayment check only verifies that the contract's ETH balance increased, not how it increased."}),(0,u.jsx)("li",{children:"This creates an accounting inconsistency where the same ETH is counted both as repaid loan and as your deposit."})]}),(0,u.jsx)("h5",{children:"\ud83d\ude80 Attack Plan:"}),(0,u.jsxs)("ol",{children:[(0,u.jsx)("li",{children:"Take a flash loan of 1000 ETH."}),(0,u.jsx)("li",{children:"In the execute() function, immediately deposit the 1000 ETH back."}),(0,u.jsx)("li",{children:"The pool thinks the flash loan was repaid \u2014 \u2705."}),(0,u.jsx)("li",{children:"But now your contract has a 1000 ETH internal balance in the pool."}),(0,u.jsx)("li",{children:"You call withdraw() to take out the full 1000 ETH."}),(0,u.jsx)("li",{children:"Finally, send the ETH to your wallet."})]}),(0,u.jsx)("h5",{children:"\ud83d\udee1\ufe0f Prevention:"}),(0,u.jsx)("p",{children:"To prevent this attack, the contract should:"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:"Separate the tracking of deposits and flash loan repayments"}),(0,u.jsx)("li",{children:"Use a dedicated variable to track outstanding flash loans"}),(0,u.jsx)("li",{children:"Implement checks-effects-interactions pattern"}),(0,u.jsx)("li",{children:"Consider using OpenZeppelin's ReentrancyGuard"})]}),(0,u.jsx)("h5",{children:"Exploit Contract:"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"contract Attacker {\n    SideEntranceLenderPool public pool;\n    address public owner;\n\n    constructor(address _pool) {\n        pool = SideEntranceLenderPool(_pool);\n        owner = msg.sender;\n    }\n\n    // Step 1: Start the attack\n    function attack() external {\n        pool.flashLoan(1000 ether); // borrow all ETH\n        pool.withdraw(); // withdraw credited deposit\n        payable(owner).transfer(address(this).balance); // send to attacker\n    }\n\n    // Step 2: Pool calls this after giving us the loan\n    function execute() external payable {\n        pool.deposit{value: msg.value}(); // deposit the ETH back\n    }\n\n    receive() external payable {}\n}"}),(0,u.jsx)("h5",{children:"\u2699\ufe0f Attack Execution Flow:"}),(0,u.jsxs)("ol",{children:[(0,u.jsxs)("li",{children:["Attacker calls ",(0,u.jsx)("code",{children:"attack()"})]}),(0,u.jsx)("li",{children:"Contract takes 1000 ETH flash loan"}),(0,u.jsxs)("li",{children:["Pool calls ",(0,u.jsx)("code",{children:"execute()"})," with 1000 ETH"]}),(0,u.jsx)("li",{children:"Attacker deposits the 1000 ETH back, increasing their balance"}),(0,u.jsx)("li",{children:"Flash loan is considered repaid"}),(0,u.jsx)("li",{children:"Attacker withdraws their 1000 ETH balance"}),(0,u.jsx)("li",{children:"ETH is transferred to attacker's wallet"})]}),(0,u.jsx)(o.A,{variant:"warning",children:"This attack demonstrates how improper accounting separation between different contract functionalities can lead to critical vulnerabilities, even without traditional reentrancy."})]})]})})]})},2306:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(8139),r=t.n(a),s=t(8747),o=t(5043),l=t(9998),i=t(9791),c=t(9841);const d=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];e.apply(this,a),n.apply(this,a)}}),null)};var u=t(2643),h=t(3850),f=t(579);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function m(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],a=p[e];return t+parseInt((0,s.A)(n,a[0]),10)+parseInt((0,s.A)(n,a[1]),10)}const x={[l.kp]:"collapse",[l.ze]:"collapsing",[l.ns]:"collapsing",[l._K]:"collapse show"},y=o.forwardRef(((e,n)=>{let{onEnter:t,onEntering:a,onEntered:s,onExit:l,onExiting:p,className:y,children:v,dimension:b="height",in:j=!1,timeout:A=300,mountOnEnter:w=!1,unmountOnExit:g=!1,appear:E=!1,getDimensionValue:N=m,...k}=e;const C="function"===typeof b?b():b,T=(0,o.useMemo)((()=>d((e=>{e.style[C]="0"}),t)),[C,t]),R=(0,o.useMemo)((()=>d((e=>{const n=`scroll${C[0].toUpperCase()}${C.slice(1)}`;e.style[C]=`${e[n]}px`}),a)),[C,a]),H=(0,o.useMemo)((()=>d((e=>{e.style[C]=null}),s)),[C,s]),O=(0,o.useMemo)((()=>d((e=>{e.style[C]=`${N(C,e)}px`,(0,u.A)(e)}),l)),[l,N,C]),K=(0,o.useMemo)((()=>d((e=>{e.style[C]=null}),p)),[C,p]);return(0,f.jsx)(h.A,{ref:n,addEndListener:c.A,...k,"aria-expanded":k.role?j:null,onEnter:T,onEntering:R,onEntered:H,onExit:O,onExiting:K,childRef:(0,i.am)(v),in:j,timeout:A,mountOnEnter:w,unmountOnExit:g,appear:E,children:(e,n)=>o.cloneElement(v,{...n,className:r()(y,v.props.className,x[e],"width"===C&&"collapse-horizontal")})})}))},2489:(e,n,t)=>{t.d(n,{A:()=>a});const a=(0,t(7784).A)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},2665:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(5043);function r(){const e=(0,a.useRef)(!0),n=(0,a.useRef)((()=>e.current));return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),n.current}},2677:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(5043);const r="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,s="undefined"!==typeof document||r?a.useLayoutEffect:a.useEffect},3372:(e,n,t)=>{t.d(n,{A:()=>c});var a=t(5043);t(6218);var r=t(8894);t(2665),t(4696);t(2677);new WeakMap;var s=t(4140),o=t(579);const l=["onKeyDown"];const i=a.forwardRef(((e,n)=>{let{onKeyDown:t}=e,a=function(e,n){if(null==e)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}(e,l);const[i]=(0,s.Am)(Object.assign({tagName:"a"},a)),c=(0,r.A)((e=>{i.onKeyDown(e),null==t||t(e)}));return(d=a.href)&&"#"!==d.trim()&&"button"!==a.role?(0,o.jsx)("a",Object.assign({ref:n},a,{onKeyDown:t})):(0,o.jsx)("a",Object.assign({ref:n},a,i,{onKeyDown:c}));var d}));i.displayName="Anchor";const c=i},4140:(e,n,t)=>{t.d(n,{Am:()=>o,Ay:()=>i});var a=t(5043),r=t(579);const s=["as","disabled"];function o(e){let{tagName:n,disabled:t,href:a,target:r,rel:s,role:o,onClick:l,tabIndex:i=0,type:c}=e;n||(n=null!=a||null!=r||null!=s?"a":"button");const d={tagName:n};if("button"===n)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===n&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===n&&(a||(a="#"),t&&(a=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:i,href:a,target:"a"===n?r:void 0,"aria-disabled":t||void 0,rel:"a"===n?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const l=a.forwardRef(((e,n)=>{let{as:t,disabled:a}=e,l=function(e,n){if(null==e)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}(e,s);const[i,{tagName:c}]=o(Object.assign({tagName:t,disabled:a},l));return(0,r.jsx)(c,Object.assign({},l,i,{ref:n}))}));l.displayName="Button";const i=l},4488:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(5043),r=t(8139),s=t.n(r),o=t(579);const l=e=>a.forwardRef(((n,t)=>(0,o.jsx)("div",{...n,ref:t,className:s()(n.className,e)})))},4696:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(5043);function r(e){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{n.current=e})),n.current}},5632:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(5173),r=t.n(a),s=t(5043),o=t(8139),l=t.n(o),i=t(579);const c={"aria-label":r().string,onClick:r().func,variant:r().oneOf(["white"])},d=s.forwardRef(((e,n)=>{let{className:t,variant:a,"aria-label":r="Close",...s}=e;return(0,i.jsx)("button",{ref:n,type:"button",className:l()("btn-close",a&&`btn-close-${a}`,t),"aria-label":r,...s})}));d.displayName="CloseButton",d.propTypes=c;const u=d},6218:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(5043);const r=function(e){const n=(0,a.useRef)(e);return(0,a.useEffect)((()=>{n.current=e}),[e]),n}},6618:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(5043);const r=function(e){const n=(0,a.useRef)(e);return(0,a.useEffect)((()=>{n.current=e}),[e]),n};function s(e){const n=r(e);return(0,a.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}},7719:(e,n,t)=>{t.d(n,{A:()=>a});const a=(0,t(7784).A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},7784:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(5043);const r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(((e,n,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===n)).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,a.forwardRef)(((e,n)=>{let{color:t="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:c="",children:d,iconNode:u,...h}=e;return(0,a.createElement)("svg",{ref:n,...s,width:o,height:o,stroke:t,strokeWidth:i?24*Number(l)/Number(o):l,className:r("lucide",c),...h},[...u.map((e=>{let[n,t]=e;return(0,a.createElement)(n,t)})),...Array.isArray(d)?d:[d]])})),l=(e,n)=>{const t=(0,a.forwardRef)(((t,s)=>{let{className:l,...i}=t;return(0,a.createElement)(o,{ref:s,iconNode:n,className:r(`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,l),...i});var c}));return t.displayName=`${e}`,t}},8072:(e,n,t)=>{t.d(n,{A:()=>p});var a=t(8139),r=t.n(a),s=t(5043),o=t(9998),l=t(9791),i=t(9841),c=t(2643),d=t(3850),u=t(579);const h={[o.ns]:"show",[o._K]:"show"},f=s.forwardRef(((e,n)=>{let{className:t,children:a,transitionClasses:o={},onEnter:f,...p}=e;const m={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...p},x=(0,s.useCallback)(((e,n)=>{(0,c.A)(e),null==f||f(e,n)}),[f]);return(0,u.jsx)(d.A,{ref:n,addEndListener:i.A,...m,onEnter:x,childRef:(0,l.am)(a),children:(e,n)=>s.cloneElement(a,{...n,className:r()("fade",t,a.props.className,h[e],o[e])})})}));f.displayName="Fade";const p=f},8894:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(5043),r=t(6218);function s(e){const n=(0,r.A)(e);return(0,a.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}},9891:(e,n,t)=>{t.d(n,{A:()=>a});const a=(0,t(7784).A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])}}]);
//# sourceMappingURL=19.4701115f.chunk.js.map