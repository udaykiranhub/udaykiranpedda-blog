// Erc721Protocol.jsx
import React from "react";
import { Accordion } from "react-bootstrap";
import { FileText } from "lucide-react";

const Erc721Protocol = () => {
  return (
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
  );
};

export default Erc721Protocol;
