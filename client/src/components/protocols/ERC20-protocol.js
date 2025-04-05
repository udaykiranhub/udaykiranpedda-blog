// File: ERC720Protocol.js
import React from "react";
import { Accordion } from "react-bootstrap";
import { CheckCircle } from "lucide-react";

const ERC720Protocol = () => {
  return (
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
            <li><code>totalSupply()</code>: Returns the total supply of tokens in circulation.</li>
            <li><code>balanceOf(address account)</code>: Retrieves the token balance of a given address.</li>
            <li><code>transfer(address recipient, uint256 amount)</code>: Transfers a specified amount of tokens 
              from the sender's balance to the recipient.</li>
            <li><code>approve(address spender, uint256 amount)</code>: Grants permission for another address 
              to spend a specific amount of tokens on behalf of the sender.</li>
            <li><code>allowance(address owner, address spender)</code>: Returns the remaining amount of tokens 
              that a spender is allowed to spend on behalf of the owner.</li>
            <li><code>decreaseAllowance(address spender, substract value)</code>: Decrease the allowance of a user.</li>
            <li><code>increaseAllowance(address spender, adding value)</code>: Increase the allowance of a user.</li>
            <li><code>transferFrom(address sender, address recipient, uint256 amount)</code>: Transfers tokens from 
              one address to another, based on prior approval.</li>
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
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);

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

    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        require(spender != address(0), "ERC20: increase allowance for the zero address");
        _allowances[msg.sender][spender] += addedValue;
        emit Approval(msg.sender, spender, _allowances[msg.sender][spender]);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        require(spender != address(0), "ERC20: decrease allowance for the zero address");
        require(_allowances[msg.sender][spender] >= subtractedValue, "ERC20: decreased allowance below zero");
        _allowances[msg.sender][spender] -= subtractedValue;
        emit Approval(msg.sender, spender, _allowances[msg.sender][spender]);
        return true;
    }

    function mint(address account, uint256 amount) public {
        require(account != address(0), "ERC20: mint to the zero address");
        _totalSupply += amount;
        _balances[account] += amount;
        emit Mint(account, amount);
        emit Transfer(address(0), account, amount);
    }

    function burn(uint256 amount) public {
        require(_balances[msg.sender] >= amount, "ERC20: burn amount exceeds balance");
        _balances[msg.sender] -= amount;
        _totalSupply -= amount;
        emit Burn(msg.sender, amount);
        emit Transfer(msg.sender, address(0), amount);
    }
}
        `}</pre>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ERC720Protocol;
