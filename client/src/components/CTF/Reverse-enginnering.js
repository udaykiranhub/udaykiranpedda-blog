import React from 'react';
import { Accordion, Card, Badge, Table } from 'react-bootstrap';
import { Binary, Code, Cpu, Link, ChevronDown, AlertTriangle } from 'lucide-react';

const ReverseEngineering = () => {
  return (
    <div className="mb-4">
      <h3 className="d-flex align-items-center gap-2 mb-3">
        <Binary size={20} className="text-muted" />
        EVM Bytecode Reverse Engineering CTF
      </h3>
      <p className="lead text-muted mb-3">
        A hands-on guide to analyzing and interacting with Ethereum contract bytecode
      </p>
      <div className="d-flex gap-2 mb-4">
        <Badge bg="primary" className="d-flex align-items-center">
          <Cpu size={16} className="me-1" /> EVM
        </Badge>
        <Badge bg="secondary" className="d-flex align-items-center">
          <Code size={16} className="me-1" /> Bytecode
        </Badge>
        <Badge bg="info" className="d-flex align-items-center">
          <Link size={16} className="me-1" /> CTF
        </Badge>
      </div>
      
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Header as={Card.Header} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <AlertTriangle size={18} className="text-warning" />
              <strong>Bytecode Analysis CTF Walkthrough</strong>
            </div>
            <ChevronDown size={18} />
          </Accordion.Header>
          <Accordion.Body>
            <Card.Body>
              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Foundry Script Execution
                </h5>
                <pre className="bg-light p-3 rounded">
{`$ forge script script/Counter.s.sol:CounterScript --rpc-url http:127.0.0.1:8545 --private-key 0x8fab1c7c3e750b4c261f4aa6d318a66e0a938ec87cb2a94de6e62d7aa2deef8d --broadcast`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Bytecode Extraction
                </h5>
                <pre className="bg-light p-3 rounded">
{`cat out/HelloWorld.sol/HelloWorld.json | jq -r '.deployedBytecode.object'

For opcodes:
cast disassemble <your_bytecode>`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Useful Tools
                </h5>
                <pre className="bg-light p-3 rounded">
{`https://www.4byte.directory/signatures/?bytes4_signature=d09de08a
(or)
with foundry =>
cast 4byte 0xd09de08a

EVM Playground:
https://www.evm.codes/playground

Call example:
cast call 0x06a4F27D78F5c60AE98CE5Cd666CCe8c1B105feA d09de08a --rpc-url http:127.0.0.1:8545`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Contract Bytecode Example
                </h5>
                <pre className="bg-light p-3 rounded">
{`0x608060405234801561000f575f80fd5b506004361061004a575f3560e01c80633fb5c1cb1461004e5780638381f58a1461006a578063cfae321714610088578063d09de08a146100a6575b5f80fd5b6100686004803603810190610063919061014a565b6100b0565b005b6100726100b9565b60405161007f9190610184565b60405180910390f35b6100906100be565b60405161009d919061020d565b60405180910390f35b6100ae6100fb565b005b805f8190555050565b5f5481565b60606040518060400160405280600f81526020017f48656c6c6f2c20466f756e647279210000000000000000000000000000000000815250905090565b5f8081548092919061010c9061025a565b9190505550565b5f80fd5b5f819050919050565b61012981610117565b8114610133575f80fd5b50565b5f8135905061014481610120565b92915050565b5f6020828403121561015f5761015e610113565b5b5f61016c84828501610136565b91505092915050565b61017e81610117565b82525050565b5f6020820190506101975f830184610175565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6101df8261019d565b6101e981856101a7565b93506101f98185602086016101b7565b610202816101c5565b840191505092915050565b5f6020820190508181035f83015261022581846101d5565b905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61026482610117565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036102965761029561022d565b5b60018201905091905056fea26469706673582212201b3d0841a77246d2d2d4ed649f8652f86f4069ba9b22c247d9cd7a531cd59b8864736f6c634300081a0033`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Function Selector Lookup
                </h5>
                <pre className="bg-light p-3 rounded">
{`cast 4byte 0xd09de08a
increment()`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  Interaction Requirements
                </h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>You Have</th>
                      <th>Can You Interact?</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Function Selector only</td>
                      <td><Badge bg="danger">❌</Badge></td>
                      <td>Need at least an address</td>
                    </tr>
                    <tr>
                      <td>Selector + Inputs</td>
                      <td><Badge bg="danger">❌</Badge></td>
                      <td>Still need address</td>
                    </tr>
                    <tr>
                      <td>Address + Selector</td>
                      <td><Badge bg="success">✅</Badge></td>
                      <td>ABI optional if calldata is right</td>
                    </tr>
                    <tr>
                      <td>Full ABI + Address</td>
                      <td><Badge bg="success">✅✅</Badge></td>
                      <td>Best for dev use</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  EVM Storage
                </h5>
                <ul>
                  <li>Persistent → survives across function calls and transactions</li>
                  <li>Used for contract state variables</li>
                  <li>Costly: expensive gas-wise to read/write</li>
                  <li>Stored on the Ethereum blockchain</li>
                </ul>
                <h6>🔸 How to access:</h6>
                <p>SLOAD — Read from storage</p>
                <p>SSTORE — Write to storage</p>
                <h6>🔸 Example:</h6>
                <pre className="bg-light p-3 rounded">
{`uint256 public counter;  // Stored in storage slot 0`}
                </pre>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  EVM Memory
                </h5>
                <ul>
                  <li>Temporary → only exists during a function call</li>
                  <li>Used for temporary variables, function execution</li>
                  <li>Cheaper than storage but more expensive than stack</li>
                  <li>Automatically cleared after function ends</li>
                </ul>
                <h6>🔸 How to access:</h6>
                <p>MLOAD — Read from memory</p>
                <p>MSTORE — Write to memory</p>
                <p>MSTORE8 — Write 1 byte to memory</p>
                <h6>🔸 Example:</h6>
                <pre className="bg-light p-3 rounded">
{`function test() public {
    uint256 temp = 123; // Stored in memory
}`}
                </pre>
              </div>

              <div>
                <h5 className="d-flex align-items-center gap-2">
                  <Code size={18} />
                  EVM Stack
                </h5>
                <ul>
                  <li>Used for temporary/intermediate calculations</li>
                  <li>Extremely fast, but very limited (max 1024 items)</li>
                  <li>Automatically managed by the EVM</li>
                </ul>
                <h6>🔧 When to Use:</h6>
                <p>Used implicitly by the EVM for basic operations like ADD, MUL, etc.</p>
                <p>You don't use it directly in Solidity — the compiler handles it.</p>
                <h6>✅ Example (behind the scenes):</h6>
                <pre className="bg-light p-3 rounded">
{`function add(uint a, uint b) public pure returns (uint) {
    return a + b;
}
➡ This gets compiled to:

CALLDATALOAD → stack: [a]
CALLDATALOAD → stack: [b, a]
ADD          → stack: [a + b]`}
                </pre>
              </div>
            </Card.Body>
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
};

export default ReverseEngineering;