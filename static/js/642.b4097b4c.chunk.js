/*! For license information please see 642.b4097b4c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[642],{457:(e,t,n)=>{n.d(t,{A:()=>P});var s=n(8139),r=n.n(s),a=n(5043),o=n(7121),i=n(7852),d=n(2306);function c(e,t){return Array.isArray(e)?e.includes(t):e===t}const l=a.createContext({});l.displayName="AccordionContext";const f=l;var h=n(579);const u=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:o,children:l,eventKey:u,...m}=e;const{activeEventKey:b}=(0,a.useContext)(f);return s=(0,i.oU)(s,"accordion-collapse"),(0,h.jsx)(d.A,{ref:t,in:c(b,u),...m,className:r()(o,s),children:(0,h.jsx)(n,{children:a.Children.only(l)})})}));u.displayName="AccordionCollapse";const m=u,b=a.createContext({eventKey:""});b.displayName="AccordionItemContext";const p=b,x=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:o,onEnter:d,onEntering:c,onEntered:l,onExit:f,onExiting:u,onExited:b,...x}=e;s=(0,i.oU)(s,"accordion-body");const{eventKey:y}=(0,a.useContext)(p);return(0,h.jsx)(m,{eventKey:y,onEnter:d,onEntering:c,onEntered:l,onExit:f,onExiting:u,onExited:b,children:(0,h.jsx)(n,{ref:t,...x,className:r()(o,s)})})}));x.displayName="AccordionBody";const y=x;const j=a.forwardRef(((e,t)=>{let{as:n="button",bsPrefix:s,className:o,onClick:d,...l}=e;s=(0,i.oU)(s,"accordion-button");const{eventKey:u}=(0,a.useContext)(p),m=function(e,t){const{activeEventKey:n,onSelect:s,alwaysOpen:r}=(0,a.useContext)(f);return a=>{let o=e===n?null:e;r&&(o=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==s||s(o,a),null==t||t(a)}}(u,d),{activeEventKey:b}=(0,a.useContext)(f);return"button"===n&&(l.type="button"),(0,h.jsx)(n,{ref:t,onClick:m,...l,"aria-expanded":Array.isArray(b)?b.includes(u):u===b,className:r()(o,s,!c(b,u)&&"collapsed")})}));j.displayName="AccordionButton";const A=j,g=a.forwardRef(((e,t)=>{let{as:n="h2","aria-controls":s,bsPrefix:a,className:o,children:d,onClick:c,...l}=e;return a=(0,i.oU)(a,"accordion-header"),(0,h.jsx)(n,{ref:t,...l,className:r()(o,a),children:(0,h.jsx)(A,{onClick:c,"aria-controls":s,children:d})})}));g.displayName="AccordionHeader";const E=g,v=a.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:o,eventKey:d,...c}=e;s=(0,i.oU)(s,"accordion-item");const l=(0,a.useMemo)((()=>({eventKey:d})),[d]);return(0,h.jsx)(p.Provider,{value:l,children:(0,h.jsx)(n,{ref:t,...c,className:r()(o,s)})})}));v.displayName="AccordionItem";const N=v,U=a.forwardRef(((e,t)=>{const{as:n="div",activeKey:s,bsPrefix:d,className:c,onSelect:l,flush:u,alwaysOpen:m,...b}=(0,o.Zw)(e,{activeKey:"onSelect"}),p=(0,i.oU)(d,"accordion"),x=(0,a.useMemo)((()=>({activeEventKey:s,onSelect:l,alwaysOpen:m})),[s,l,m]);return(0,h.jsx)(f.Provider,{value:x,children:(0,h.jsx)(n,{ref:t,...b,className:r()(c,p,u&&`${p}-flush`)})})}));U.displayName="Accordion";const P=Object.assign(U,{Button:A,Collapse:m,Item:N,Header:E,Body:y})},2105:(e,t,n)=>{n.d(t,{A:()=>s});const s=(0,n(7784).A)("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]])},2306:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(8139),r=n.n(s),a=n(8747),o=n(5043),i=n(9998),d=n(9791),c=n(9841);const l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];e.apply(this,s),t.apply(this,s)}}),null)};var f=n(2643),h=n(3850),u=n(579);const m={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],s=m[e];return n+parseInt((0,a.A)(t,s[0]),10)+parseInt((0,a.A)(t,s[1]),10)}const p={[i.kp]:"collapse",[i.ze]:"collapsing",[i.ns]:"collapsing",[i._K]:"collapse show"},x=o.forwardRef(((e,t)=>{let{onEnter:n,onEntering:s,onEntered:a,onExit:i,onExiting:m,className:x,children:y,dimension:j="height",in:A=!1,timeout:g=300,mountOnEnter:E=!1,unmountOnExit:v=!1,appear:N=!1,getDimensionValue:U=b,...P}=e;const S="function"===typeof j?j():j,k=(0,o.useMemo)((()=>l((e=>{e.style[S]="0"}),n)),[S,n]),w=(0,o.useMemo)((()=>l((e=>{const t=`scroll${S[0].toUpperCase()}${S.slice(1)}`;e.style[S]=`${e[t]}px`}),s)),[S,s]),C=(0,o.useMemo)((()=>l((e=>{e.style[S]=null}),a)),[S,a]),D=(0,o.useMemo)((()=>l((e=>{e.style[S]=`${U(S,e)}px`,(0,f.A)(e)}),i)),[i,U,S]),M=(0,o.useMemo)((()=>l((e=>{e.style[S]=null}),m)),[S,m]);return(0,u.jsx)(h.A,{ref:t,addEndListener:c.A,...P,"aria-expanded":P.role?A:null,onEnter:k,onEntering:w,onEntered:C,onExit:D,onExiting:M,childRef:(0,d.am)(y),in:A,timeout:g,mountOnEnter:E,unmountOnExit:v,appear:N,children:(e,t)=>o.cloneElement(y,{...t,className:r()(x,y.props.className,p[e],"width"===S&&"collapse-horizontal")})})}))},4063:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(8139),r=n.n(s),a=n(5043),o=n(7852),i=n(579);const d=a.forwardRef(((e,t)=>{let{bsPrefix:n,bg:s="primary",pill:a=!1,text:d,className:c,as:l="span",...f}=e;const h=(0,o.oU)(n,"badge");return(0,i.jsx)(l,{ref:t,...f,className:r()(c,h,a&&"rounded-pill",d&&`text-${d}`,s&&`bg-${s}`)})}));d.displayName="Badge";const c=d},7784:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(5043);const r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,s.forwardRef)(((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:c="",children:l,iconNode:f,...h}=e;return(0,s.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:d?24*Number(i)/Number(o):i,className:r("lucide",c),...h},[...f.map((e=>{let[t,n]=e;return(0,s.createElement)(t,n)})),...Array.isArray(l)?l:[l]])})),i=(e,t)=>{const n=(0,s.forwardRef)(((n,a)=>{let{className:i,...d}=n;return(0,s.createElement)(o,{ref:a,iconNode:t,className:r(`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...d});var c}));return n.displayName=`${e}`,n}},8280:(e,t,n)=>{n.d(t,{A:()=>s});const s=(0,n(7784).A)("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]])},9642:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});n(5043);var s=n(3519),r=n(1072),a=n(8602),o=n(4063),i=n(457),d=n(7784);const c=(0,d.A)("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);var l=n(8280),f=n(2105);const h=(0,d.A)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var u=n(579);const m=()=>(0,u.jsxs)(s.A,{className:"py-5",children:[(0,u.jsx)(r.A,{className:"mb-5",children:(0,u.jsxs)(a.A,{children:[(0,u.jsxs)("h1",{className:"display-4 mb-4",children:[(0,u.jsx)(c,{className:"me-3",size:48}),"EVM Bytecode Reverse Engineering CTF"]}),(0,u.jsx)("p",{className:"lead text-muted",children:"A hands-on guide to analyzing and interacting with Ethereum contract bytecode"}),(0,u.jsxs)("div",{className:"d-flex gap-2 mb-3",children:[(0,u.jsxs)(o.A,{bg:"primary",className:"d-flex align-items-center",children:[(0,u.jsx)(l.A,{className:"me-1",size:16})," EVM"]}),(0,u.jsxs)(o.A,{bg:"secondary",className:"d-flex align-items-center",children:[(0,u.jsx)(f.A,{className:"me-1",size:16})," Bytecode"]}),(0,u.jsxs)(o.A,{bg:"info",className:"d-flex align-items-center",children:[(0,u.jsx)(h,{className:"me-1",size:16})," CTF"]})]})]})}),(0,u.jsx)(i.A,{children:(0,u.jsxs)(i.A.Item,{eventKey:"0",children:[(0,u.jsx)(i.A.Header,{children:(0,u.jsx)("span",{className:"h5 mb-0",children:"Bytecode Analysis CTF Walkthrough"})}),(0,u.jsxs)(i.A.Body,{children:[(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"$ forge script script/Counter.s.sol:CounterScript --rpc-url http:127.0.0.1:8545 --private-key 0x8fab1c7c3e750b4c261f4aa6d318a66e0a938ec87cb2a94de6e62d7aa2deef8d --broadcast"}),(0,u.jsx)("h5",{children:"3. Byte code"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"cat out/HelloWorld.sol/HelloWorld.json | jq -r '.deployedBytecode.object'\n\nFor opcodes \ncast disassemble <your_bytecode>"}),(0,u.jsx)("h5",{children:"4. Website for byte selector"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"https://www.4byte.directory/signatures/?bytes4_signature=d09de08a\n(or)\nwith foundry =>\ncast 4byte 0xd09de08a\n\n5. website for the Opcodes \nhttps://www.evm.codes/playground\n\n\ncast call 0x06a4F27D78F5c60AE98CE5Cd666CCe8c1B105feA d09de08a --rpc-url http:127.0.0.1:8545"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"For more information, try '--help'.\nroot@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf# cast code 0xd88F9d3aE66CDf815aAFfEA73db14ffC69843429 --rpc-url http://127.0.0.1:8545\nWarning: This is a nightly build of Foundry. It is recommended to use the latest stable version. Visit https://book.getfoundry.sh/announcements for more information.\nTo mute this warning set 'FOUNDRY_DISABLE_NIGHTLY_WARNING' in your environment.\n\n0x608060405234801561000f575f80fd5b506004361061004a575f3560e01c80633fb5c1cb1461004e5780638381f58a1461006a578063cfae321714610088578063d09de08a146100a6575b5f80fd5b6100686004803603810190610063919061014a565b6100b0565b005b6100726100b9565b60405161007f9190610184565b60405180910390f35b6100906100be565b60405161009d919061020d565b60405180910390f35b6100ae6100fb565b005b805f8190555050565b5f5481565b60606040518060400160405280600f81526020017f48656c6c6f2c20466f756e647279210000000000000000000000000000000000815250905090565b5f8081548092919061010c9061025a565b9190505550565b5f80fd5b5f819050919050565b61012981610117565b8114610133575f80fd5b50565b5f8135905061014481610120565b92915050565b5f6020828403121561015f5761015e610113565b5b5f61016c84828501610136565b91505092915050565b61017e81610117565b82525050565b5f6020820190506101975f830184610175565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6101df8261019d565b6101e981856101a7565b93506101f98185602086016101b7565b610202816101c5565b840191505092915050565b5f6020820190508181035f83015261022581846101d5565b905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61026482610117565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036102965761029561022d565b5b60018201905091905056fea26469706673582212201b3d0841a77246d2d2d4ed649f8652f86f4069ba9b22c247d9cd7a531cd59b8864736f6c634300081a0033"}),(0,u.jsx)("h5",{children:"Disassembled Bytecode:"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"[00]\tPUSH1\t80\n[02]\tPUSH1\t40\n[04]\tMSTORE\t\n[05]\tCALLVALUE\t\n[06]\tDUP1\t\n[07]\tISZERO\t\n[08]\tPUSH1\t0f\n[0a]\tJUMPI\t\n[0b]\tPUSH1\t00\n[0d]\tDUP1\t\n[0e]\tREVERT\t\n[0f]\tJUMPDEST\t\n[10]\tPOP\t\n[11]\tPUSH2\t030a\n[14]\tDUP1\t\n[15]\tPUSH2\t001f\n[18]\tPUSH1\t00\n[1a]\tCODECOPY\t\n[1b]\tPUSH1\t00\n[1d]\tRETURN\t\n[1e]\tINVALID\t\n[1f]\tPUSH1\t80\n[21]\tPUSH1\t40\n[23]\tMSTORE\t\n[24]\tCALLVALUE\t\n[25]\tDUP1\t\n[26]\tISZERO\t\n[27]\tPUSH2\t0010\n[2a]\tJUMPI\t\n[2b]\tPUSH1\t00\n[2d]\tDUP1\t\n[2e]\tREVERT\t\n[2f]\tJUMPDEST\t\n[30]\tPOP\t\n[31]\tPUSH1\t04\n[33]\tCALLDATASIZE\t\n[34]\tLT\t\n[35]\tPUSH2\t004c\n[38]\tJUMPI\t\n[39]\tPUSH1\t00\n[3b]\tCALLDATALOAD\t\n[3c]\tPUSH1\te0\n[3e]\tSHR\t\n[3f]\tDUP1\t\n[40]\tPUSH4\t3fb5c1cb\n[45]\tEQ\t\n[46]\tPUSH2\t0051\n[49]\tJUMPI\t\n[4a]\tDUP1\t\n[4b]\tPUSH4\t8381f58a\n[50]\tEQ\t\n[51]\tPUSH2\t006d\n[54]\tJUMPI\t\n[55]\tDUP1\t\n[56]\tPUSH4\tcfae3217\n[5b]\tEQ\t\n[5c]\tPUSH2\t008b\n[5f]\tJUMPI\t\n[60]\tDUP1\t\n[61]\tPUSH4\td09de08a\n[66]\tEQ\t\n[67]\tPUSH2\t00a9\n[6a]\tJUMPI\t\n[6b]\tJUMPDEST\t\n[6c]\tPUSH1\t00\n[6e]\tDUP1\t\n[6f]\tREVERT\t\n[70]\tJUMPDEST\t\n[71]\tPUSH2\t006b\n[74]\tPUSH1\t04\n[76]\tDUP1\t\n[77]\tCALLDATASIZE\t\n[78]\tSUB\t\n[79]\tDUP2\t\n[7a]\tADD\t\n.....\n...\n...\n....\n...\n...\n..\n[311]\tINVALID\t\n[312]\tINVALID\t\n[313]\tINVALID\t\n[314]\tGT\t\n[315]\tPUSH19\tdcbf77d7b3325a4d64736f6c634300081a0033"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"root@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf#  cast 4byte 0xd09de08a\nWarning: This is a nightly build of Foundry. It is recommended to use the latest stable version. Visit https://book.getfoundry.sh/announcements for more information.\nTo mute this warning set 'FOUNDRY_DISABLE_NIGHTLY_WARNING' in your environment.\n\nincrement()\nroot@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf#"}),(0,u.jsxs)("table",{className:"table mb-4",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"You Have"}),(0,u.jsx)("th",{children:"Can You Interact?"}),(0,u.jsx)("th",{children:"Notes"})]})}),(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Function Selector only"}),(0,u.jsx)("td",{children:(0,u.jsx)(o.A,{bg:"danger",children:"\u274c"})}),(0,u.jsx)("td",{children:"Need at least an address"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Selector + Inputs"}),(0,u.jsx)("td",{children:(0,u.jsx)(o.A,{bg:"danger",children:"\u274c"})}),(0,u.jsx)("td",{children:"Still need address"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Address + Selector"}),(0,u.jsx)("td",{children:(0,u.jsx)(o.A,{bg:"success",children:"\u2705"})}),(0,u.jsx)("td",{children:"ABI optional if calldata is right"})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Full ABI + Address"}),(0,u.jsx)("td",{children:(0,u.jsx)(o.A,{bg:"success",children:"\u2705\u2705"})}),(0,u.jsx)("td",{children:"Best for dev use"})]})]})]}),(0,u.jsx)("h5",{children:"\ud83e\udde0 1. Storage"}),(0,u.jsx)("p",{children:"Persistent \u2192 survives across function calls and transactions"}),(0,u.jsx)("p",{children:"Used for contract state variables"}),(0,u.jsx)("p",{children:"Costly: expensive gas-wise to read/write"}),(0,u.jsx)("p",{children:"Stored on the Ethereum blockchain"}),(0,u.jsx)("h6",{children:"\ud83d\udd38 How to access:"}),(0,u.jsx)("p",{children:"SLOAD \u2014 Read from storage"}),(0,u.jsx)("p",{children:"SSTORE \u2014 Write to storage"}),(0,u.jsx)("h6",{children:"\ud83d\udd38 Example:"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"uint256 public counter;  // Stored in storage slot 0"}),(0,u.jsx)("h5",{children:"\ud83d\udcbb 2. Memory"}),(0,u.jsx)("p",{children:"Temporary \u2192 only exists during a function call"}),(0,u.jsx)("p",{children:"Used for temporary variables, function execution"}),(0,u.jsx)("p",{children:"Cheaper than storage but more expensive than stack"}),(0,u.jsx)("p",{children:"Automatically cleared after function ends"}),(0,u.jsx)("h6",{children:"\ud83d\udd38 How to access:"}),(0,u.jsx)("p",{children:"MLOAD \u2014 Read from memory"}),(0,u.jsx)("p",{children:"MSTORE \u2014 Write to memory"}),(0,u.jsx)("p",{children:"MSTORE8 \u2014 Write 1 byte to memory"}),(0,u.jsx)("h6",{children:"\ud83d\udd38 Example:"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded mb-4",children:"function test() public {\n    uint256 temp = 123; // Stored in memory\n}"}),(0,u.jsx)("h6",{children:"Purpose:"}),(0,u.jsx)("p",{children:"Used for temporary/intermediate calculations"}),(0,u.jsx)("p",{children:"Extremely fast, but very limited (max 1024 items)"}),(0,u.jsx)("p",{children:"Automatically managed by the EVM"}),(0,u.jsx)("h6",{children:"\ud83d\udd27 When to Use:"}),(0,u.jsx)("p",{children:"Used implicitly by the EVM for basic operations like ADD, MUL, etc."}),(0,u.jsx)("p",{children:"You don't use it directly in Solidity \u2014 the compiler handles it."}),(0,u.jsx)("h6",{children:"\u2705 Example (behind the scenes):"}),(0,u.jsx)("pre",{className:"bg-light p-3 rounded",children:"function add(uint a, uint b) public pure returns (uint) {\n    return a + b;\n}\n\u27a1 This gets compiled to:\n\nCALLDATALOAD \u2192 stack: [a]\nCALLDATALOAD \u2192 stack: [b, a]\nADD          \u2192 stack: [a + b]"})]})]})})]})}}]);
//# sourceMappingURL=642.b4097b4c.chunk.js.map