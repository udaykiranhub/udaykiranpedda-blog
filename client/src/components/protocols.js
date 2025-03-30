import React, { lazy } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CheckCircle, FileText, Send } from "lucide-react";

const DefiFlow = lazy(() => import("./DefiOverView"));


const Protocols = () => {
  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-3">Blockchain Security Protocols</h2> */}
    <DefiFlow/>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <CheckCircle className="me-2" /> ERC20 Protocol
          </Accordion.Header>
          <Accordion.Body>
            <p className="text-muted">
              The ERC20 protocol is a widely adopted standard for fungible tokens on the Ethereum blockchain.
              It defines a set of functions and events that allow for the creation, transfer, and approval of tokens.
              This protocol ensures interoperability between different tokens and smart contracts.
            </p>
            <p>
              <strong>Purpose of the ERC20 Protocol:</strong> The ERC20 token standard facilitates the seamless exchange 
              and interoperability of tokens within the Ethereum ecosystem. It enables users to send, receive, 
              and approve token transactions securely and efficiently.
            </p>
            <p>
              <strong>Functions in ERC20 Protocol:</strong>
              <ul>
                <li>
                  <code>totalSupply()</code>: Returns the total supply of tokens in circulation.
                </li>
                <li>
                  <code>balanceOf(address account)</code>: Retrieves the token balance of a given address.
                </li>
                <li>
                  <code>transfer(address recipient, uint256 amount)</code>: Transfers a specified amount of tokens 
                  from the sender's balance to the recipient.
                </li>
                <li>
                  <code>approve(address spender, uint256 amount)</code>: Grants permission for another address 
                  to spend a specific amount of tokens on behalf of the sender.
                </li>
                <li>
                  <code>allowance(address owner, address spender)</code>: Returns the remaining amount of tokens 
                  that a spender is allowed to spend on behalf of the owner.
                </li>
                <li>
                  <code>transferFrom(address sender, address recipient, uint256 amount)</code>: Transfers tokens from 
                  one address to another, based on prior approval.
                </li>
              </ul>
            </p>
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyERC20Token {
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    string public name;
    string public symbol;
    uint8 public decimals;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    constructor(string memory _name, string memory _symbol, uint256 initialSupply, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        _totalSupply = initialSupply * (10 ** uint256(decimals)); 
        _balances[msg.sender] = _totalSupply; 
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(_balances[msg.sender] >= amount, "ERC20: transfer amount exceeds balance");
        _balances[msg.sender] -= amount;
        _balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        require(spender != address(0), "ERC20: approve to the zero address");
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(_balances[sender] >= amount, "ERC20: transfer amount exceeds balance");
        require(_allowances[sender][msg.sender] >= amount, "ERC20: transfer amount exceeds allowance");
        _balances[sender] -= amount;
        _balances[recipient] += amount;
        _allowances[sender][msg.sender] -= amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FileText className="me-2" /> ERC721 Protocol
          </Accordion.Header>
          <Accordion.Body>
            <p><strong>Uses:</strong> ERC721 is a standard for representing non-fungible tokens (NFTs) on the Ethereum blockchain.</p>
            <p><strong>Scope:</strong> It provides a standardized interface for creating and managing unique tokens.</p>
            <p><strong>Purpose:</strong> Enables the creation of digital assets such as collectibles, real estate, and digital art.</p>
            
            <p><strong>MyERC721Token:</strong> Implements the ERC721 standard to create unique, non-fungible tokens.</p>
            <ul>
              <li><strong>name, symbol:</strong> Stores the token's name and symbol.</li>
              <li><strong>_owners, _balances:</strong> Track ownership and balance of tokens.</li>
              <li><strong>_tokenApprovals, _operatorApprovals:</strong> Manage token approvals and operator permissions.</li>
            </ul>
            
            <p><strong>Functions Breakdown:</strong></p>
            <ul>
              <li><strong>balanceOf:</strong> Returns the number of tokens owned by an address.</li>
              <li><strong>ownerOf:</strong> Returns the owner of a specific token ID.</li>
              <li><strong>approve:</strong> Allows another address to transfer a token.</li>
              <li><strong>getApproved:</strong> Returns the approved address for a specific token.</li>
              <li><strong>setApprovalForAll:</strong> Grants or revokes operator approval for all tokens of an owner.</li>
              <li><strong>transferFrom:</strong> Transfers a token from one address to another.</li>
              <li><strong>safeTransferFrom:</strong> Ensures safe token transfers.</li>
              <li><strong>mint:</strong> Creates a new token.</li>
              <li><strong>burn:</strong> Destroys an existing token.</li>
            </ul>
            
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyERC721Token {
    string public name;
    string public symbol;
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function balanceOf(address owner) public view returns (uint256) {
        require(owner != address(0), "Invalid address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token does not exist");
        return owner;
    }

    function approve(address to, uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        require(to != owner, "Cannot approve to current owner");
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender), "Not authorized");
        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        require(_owners[tokenId] != address(0), "Token does not exist");
        return _tokenApprovals[tokenId];
    }

    function setApprovalForAll(address operator, bool approved) public {
        require(operator != msg.sender, "Cannot approve yourself");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    function transferFrom(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        require(to != address(0), "Cannot transfer to zero address");
        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(from, to, tokenId);
    }

    function mint(address to, uint256 tokenId) public {
        require(to != address(0), "Cannot mint to zero address");
        require(_owners[tokenId] == address(0), "Token already exists");
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(address(0), to, tokenId);
    }

    function burn(uint256 tokenId) public {
        address owner = ownerOf(tokenId);
        _balances[owner] -= 1;
        delete _owners[tokenId];
        emit Transfer(owner, address(0), tokenId);
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Protocols;