/*! For license information please see 998.055ad86f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[998],{1680:(n,e,o)=>{o.d(e,{A:()=>r});const r=(0,o(7784).A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},4998:(n,e,o)=>{o.r(e),o.d(e,{default:()=>i});o(5043);var r=o(457),t=o(1680),d=o(579);const i=()=>(0,d.jsxs)(r.A.Item,{eventKey:"6",children:[(0,d.jsxs)(r.A.Header,{children:[(0,d.jsx)(t.A,{className:"me-2"})," Automated Market Maker (AMM)"]}),(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)("p",{children:(0,d.jsx)("strong",{children:"Gold & Diamond Token:"})}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"GoldToken (GOLD) - 100,000 initial supply"}),(0,d.jsx)("li",{children:"DiamondToken (DIAMOND) - 50,000 initial supply"})]}),(0,d.jsx)("p",{children:(0,d.jsx)("strong",{children:"AMM Features:"})}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Liquidity addition for GOLD and DIAMOND."}),(0,d.jsx)("li",{children:"Swapping GOLD for DIAMOND and vice versa using the constant product formula."}),(0,d.jsx)("li",{children:"0.3% transaction fee applied to swaps."})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:"Constant Product Formula:"})," x \xd7 y = k"]}),(0,d.jsx)("pre",{children:"// Example Swap Calculation:\nGold = 1000\nDiamond = 2000\nk = Gold * Diamond = 2,000,000\n\n1. Adding 100 Gold:\n   GoldNew = 1000 + 100 = 1100\n\n2. New Diamond Calculation:\n   DiamondNew = k / GoldNew\n              = 2,000,000 / 1100\n              = 1818.1818\n\n3. Diamonds to User:\n   Diamond - DiamondNew\n   = 2000 - 1818.1818\n   = 181.8182\n\n4. Updated Reserves:\n   Diamonds = 1818.1818"}),(0,d.jsx)("p",{children:(0,d.jsx)("strong",{children:"Swap Fee Calculation:"})}),(0,d.jsx)("pre",{children:"amountInFee = (amountIn * 997) / 1000\nnumerator = amountInFee * reserveOut\ndenominator = (reserveIn * 1000) + amountInFee\namountOut = numerator / denominator"}),(0,d.jsx)("pre",{children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\n// Gold Token (GOLD)\ncontract GoldToken is ERC20 {\n    constructor() ERC20("GoldToken", "GOLD") {\n        _mint(msg.sender, 100000 * 10 ** decimals());\n    }\n}\n\n// Diamond Token (DIAMOND)\ncontract DiamondToken is ERC20 {\n    constructor() ERC20("DiamondToken", "DIAMOND") {\n        _mint(msg.sender, 50000 * 10 ** decimals());\n    }\n}\n\n// Automated Market Maker (AMM) Contract\ncontract AMM {\n    IERC20 public gold;\n    IERC20 public diamond;\n    uint256 public reserveGold;\n    uint256 public reserveDiamond;\n    \n    constructor(address _gold, address _diamond) {\n        gold = IERC20(_gold);\n        diamond = IERC20(_diamond);\n    }\n\n    function addLiquidity(uint256 goldAmount, uint256 diamondAmount) external {\n        gold.transferFrom(msg.sender, address(this), goldAmount);\n        diamond.transferFrom(msg.sender, address(this), diamondAmount);\n        reserveGold += goldAmount;\n        reserveDiamond += diamondAmount;\n    }\n\n    function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) public pure returns (uint256) {\n        require(amountIn > 0 && reserveIn > 0 && reserveOut > 0, "Invalid reserves");\n        uint256 amountInWithFee = amountIn * 997;\n        uint256 numerator = amountInWithFee * reserveOut;\n        uint256 denominator = (reserveIn * 1000) + amountInWithFee;\n        return numerator / denominator;\n    }\n\n    function swapGoldForDiamond(uint256 goldAmount) external {\n        uint256 diamondAmount = getAmountOut(goldAmount, reserveGold, reserveDiamond);\n        require(diamondAmount > 0, "Insufficient output amount");\n        \n        gold.transferFrom(msg.sender, address(this), goldAmount);\n        diamond.transfer(msg.sender, diamondAmount);\n        \n        reserveGold += goldAmount;\n        reserveDiamond -= diamondAmount;\n    }\n\n    function swapDiamondForGold(uint256 diamondAmount) external {\n        uint256 goldAmount = getAmountOut(diamondAmount, reserveDiamond, reserveGold);\n        require(goldAmount > 0, "Insufficient output amount");\n        \n        diamond.transferFrom(msg.sender, address(this), diamondAmount);\n        gold.transfer(msg.sender, goldAmount);\n        \n        reserveDiamond += diamondAmount;\n        reserveGold -= goldAmount;\n    }\n}'})]})]})},7784:(n,e,o)=>{o.d(e,{A:()=>a});var r=o(5043);const t=function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return e.filter(((n,e,o)=>Boolean(n)&&""!==n.trim()&&o.indexOf(n)===e)).join(" ").trim()};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,r.forwardRef)(((n,e)=>{let{color:o="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:l,iconNode:m,...c}=n;return(0,r.createElement)("svg",{ref:e,...d,width:i,height:i,stroke:o,strokeWidth:s?24*Number(a)/Number(i):a,className:t("lucide",u),...c},[...m.map((n=>{let[e,o]=n;return(0,r.createElement)(e,o)})),...Array.isArray(l)?l:[l]])})),a=(n,e)=>{const o=(0,r.forwardRef)(((o,d)=>{let{className:a,...s}=o;return(0,r.createElement)(i,{ref:d,iconNode:e,className:t(`lucide-${u=n,u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,a),...s});var u}));return o.displayName=`${n}`,o}}}]);
//# sourceMappingURL=998.055ad86f.chunk.js.map