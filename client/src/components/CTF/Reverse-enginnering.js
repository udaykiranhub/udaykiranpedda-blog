import React from 'react';
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';

import { Binary, Code, Cpu, Link } from 'lucide-react';
const ReverseEngineering = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
        <h1 className="display-4 mb-4">
            <Binary className="me-3" size={48} />
            EVM Bytecode Reverse Engineering CTF
          </h1>
          <p className="lead text-muted">
            A hands-on guide to analyzing and interacting with Ethereum contract bytecode
          </p>
          <div className="d-flex gap-2 mb-3">
            <Badge bg="primary" className="d-flex align-items-center">
              <Cpu className="me-1" size={16} /> EVM
            </Badge>
            <Badge bg="secondary" className="d-flex align-items-center">
              <Code className="me-1" size={16} /> Bytecode
            </Badge>
            <Badge bg="info" className="d-flex align-items-center">
              <Link className="me-1" size={16} /> CTF
            </Badge>
          </div>
        </Col>
      </Row>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="h5 mb-0">Bytecode Analysis CTF Walkthrough</span>
          </Accordion.Header>
          <Accordion.Body>
            <pre className="bg-light p-3 rounded mb-4">
{`$ forge script script/Counter.s.sol:CounterScript --rpc-url http:127.0.0.1:8545 --private-key 0x8fab1c7c3e750b4c261f4aa6d318a66e0a938ec87cb2a94de6e62d7aa2deef8d --broadcast`}
            </pre>

            <h5>3. Byte code</h5>
            <pre className="bg-light p-3 rounded mb-4">
{`cat out/HelloWorld.sol/HelloWorld.json | jq -r '.deployedBytecode.object'

For opcodes 
cast disassemble <your_bytecode>`}
            </pre>

            <h5>4. Website for byte selector</h5>
            <pre className="bg-light p-3 rounded mb-4">
{`https://www.4byte.directory/signatures/?bytes4_signature=d09de08a
(or)
with foundry =>
cast 4byte 0xd09de08a

5. website for the Opcodes 
https://www.evm.codes/playground


cast call 0x06a4F27D78F5c60AE98CE5Cd666CCe8c1B105feA d09de08a --rpc-url http:127.0.0.1:8545`}
            </pre>

            <pre className="bg-light p-3 rounded mb-4">
{`For more information, try '--help'.
root@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf# cast code 0xd88F9d3aE66CDf815aAFfEA73db14ffC69843429 --rpc-url http://127.0.0.1:8545
Warning: This is a nightly build of Foundry. It is recommended to use the latest stable version. Visit https://book.getfoundry.sh/announcements for more information.
To mute this warning set 'FOUNDRY_DISABLE_NIGHTLY_WARNING' in your environment.

0x608060405234801561000f575f80fd5b506004361061004a575f3560e01c80633fb5c1cb1461004e5780638381f58a1461006a578063cfae321714610088578063d09de08a146100a6575b5f80fd5b6100686004803603810190610063919061014a565b6100b0565b005b6100726100b9565b60405161007f9190610184565b60405180910390f35b6100906100be565b60405161009d919061020d565b60405180910390f35b6100ae6100fb565b005b805f8190555050565b5f5481565b60606040518060400160405280600f81526020017f48656c6c6f2c20466f756e647279210000000000000000000000000000000000815250905090565b5f8081548092919061010c9061025a565b9190505550565b5f80fd5b5f819050919050565b61012981610117565b8114610133575f80fd5b50565b5f8135905061014481610120565b92915050565b5f6020828403121561015f5761015e610113565b5b5f61016c84828501610136565b91505092915050565b61017e81610117565b82525050565b5f6020820190506101975f830184610175565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6101df8261019d565b6101e981856101a7565b93506101f98185602086016101b7565b610202816101c5565b840191505092915050565b5f6020820190508181035f83015261022581846101d5565b905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61026482610117565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036102965761029561022d565b5b60018201905091905056fea26469706673582212201b3d0841a77246d2d2d4ed649f8652f86f4069ba9b22c247d9cd7a531cd59b8864736f6c634300081a0033`}
            </pre>

            <h5>Disassembled Bytecode:</h5>
            <pre className="bg-light p-3 rounded mb-4">
{`[00]	PUSH1	80
[02]	PUSH1	40
[04]	MSTORE	
[05]	CALLVALUE	
[06]	DUP1	
[07]	ISZERO	
[08]	PUSH1	0f
[0a]	JUMPI	
[0b]	PUSH1	00
[0d]	DUP1	
[0e]	REVERT	
[0f]	JUMPDEST	
[10]	POP	
[11]	PUSH2	030a
[14]	DUP1	
[15]	PUSH2	001f
[18]	PUSH1	00
[1a]	CODECOPY	
[1b]	PUSH1	00
[1d]	RETURN	
[1e]	INVALID	
[1f]	PUSH1	80
[21]	PUSH1	40
[23]	MSTORE	
[24]	CALLVALUE	
[25]	DUP1	
[26]	ISZERO	
[27]	PUSH2	0010
[2a]	JUMPI	
[2b]	PUSH1	00
[2d]	DUP1	
[2e]	REVERT	
[2f]	JUMPDEST	
[30]	POP	
[31]	PUSH1	04
[33]	CALLDATASIZE	
[34]	LT	
[35]	PUSH2	004c
[38]	JUMPI	
[39]	PUSH1	00
[3b]	CALLDATALOAD	
[3c]	PUSH1	e0
[3e]	SHR	
[3f]	DUP1	
[40]	PUSH4	3fb5c1cb
[45]	EQ	
[46]	PUSH2	0051
[49]	JUMPI	
[4a]	DUP1	
[4b]	PUSH4	8381f58a
[50]	EQ	
[51]	PUSH2	006d
[54]	JUMPI	
[55]	DUP1	
[56]	PUSH4	cfae3217
[5b]	EQ	
[5c]	PUSH2	008b
[5f]	JUMPI	
[60]	DUP1	
[61]	PUSH4	d09de08a
[66]	EQ	
[67]	PUSH2	00a9
[6a]	JUMPI	
[6b]	JUMPDEST	
[6c]	PUSH1	00
[6e]	DUP1	
[6f]	REVERT	
[70]	JUMPDEST	
[71]	PUSH2	006b
[74]	PUSH1	04
[76]	DUP1	
[77]	CALLDATASIZE	
[78]	SUB	
[79]	DUP2	
[7a]	ADD	
.....
...
...
....
...
...
..
[311]	INVALID	
[312]	INVALID	
[313]	INVALID	
[314]	GT	
[315]	PUSH19	dcbf77d7b3325a4d64736f6c634300081a0033`}
            </pre>

            <pre className="bg-light p-3 rounded mb-4">
{`root@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf#  cast 4byte 0xd09de08a
Warning: This is a nightly build of Foundry. It is recommended to use the latest stable version. Visit https://book.getfoundry.sh/announcements for more information.
To mute this warning set 'FOUNDRY_DISABLE_NIGHTLY_WARNING' in your environment.

increment()
root@lenova:/mnt/c/users/pedda/onedrive/desktop/foundry-test/ctf#`}
            </pre>

            <table className="table mb-4">
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
            </table>

            <h5>🧠 1. Storage</h5>
            <p>Persistent → survives across function calls and transactions</p>
            <p>Used for contract state variables</p>
            <p>Costly: expensive gas-wise to read/write</p>
            <p>Stored on the Ethereum blockchain</p>

            <h6>🔸 How to access:</h6>
            <p>SLOAD — Read from storage</p>
            <p>SSTORE — Write to storage</p>

            <h6>🔸 Example:</h6>
            <pre className="bg-light p-3 rounded mb-4">
{`uint256 public counter;  // Stored in storage slot 0`}
            </pre>

            <h5>💻 2. Memory</h5>
            <p>Temporary → only exists during a function call</p>
            <p>Used for temporary variables, function execution</p>
            <p>Cheaper than storage but more expensive than stack</p>
            <p>Automatically cleared after function ends</p>

            <h6>🔸 How to access:</h6>
            <p>MLOAD — Read from memory</p>
            <p>MSTORE — Write to memory</p>
            <p>MSTORE8 — Write 1 byte to memory</p>

            <h6>🔸 Example:</h6>
            <pre className="bg-light p-3 rounded mb-4">
{`function test() public {
    uint256 temp = 123; // Stored in memory
}`}
            </pre>

            <h6>Purpose:</h6>
            <p>Used for temporary/intermediate calculations</p>
            <p>Extremely fast, but very limited (max 1024 items)</p>
            <p>Automatically managed by the EVM</p>

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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default ReverseEngineering;