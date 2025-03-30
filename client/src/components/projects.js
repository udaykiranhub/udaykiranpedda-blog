import React, { useState } from 'react';
import { Shield, Code } from 'lucide-react';
import { Container, Row, Col, Card, Badge, Button, Pagination } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: 'Voting Smart Contract',
    description: `A sophisticated decentralized voting system built on the Ethereum blockchain that ensures transparent and tamper-proof elections. This smart contract implements a comprehensive voting mechanism with strict security measures to prevent double voting and maintain voter privacy.

Key Features:
- Secure voter registration with address verification
- Transparent candidate nomination process
- Real-time vote counting with anti-tampering measures
- Admin controls for managing election phases
- Complete audit trail of all voting activities`,
    securityLevel: 'High',
    scope: [
      'Secure voter registration and verification',
      'Candidate nomination with unique identifiers',
      'Vote casting with duplicate prevention',
      'Real-time vote tallying',
      'Election phase management',
      'Result verification and audit'
    ],
    functionalities: [
      'Voter registration with address verification',
      'Candidate nomination with unique symbols',
      'Secure vote casting with duplicate prevention',
      'Real-time vote counting and tracking',
      'Admin controls for election phases',
      'Automated result calculation',
      'Event monitoring for all actions'
    ],
    code: `
    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting{

//..........for voters.........

//total votes in the Election
uint public TotalVotes=0;

//counting votes one by one for ending the Elections, we have to set vote limit for accuracy
uint public currentVotes=0;


//check voting completed or not
bool public Polling=true;

//check Registration is completed or not
bool public Registration=true;
//check Nomination is completed or not
bool public Nomination=true;

//Admin for Elections
address public  Admin;
//Storing a Voter information
struct Voter{
    string name;
    string addr;
    bool Registered;
    bool voted;
   
}


//storing all voter details in a struct Array
Voter[] public VoterList;

//Getting voter details by their wallet address
mapping(address=>Voter)public VoterDetails;



//..........For Participant ..............

// Dynamically storing a Participant in Elections

//creating a struct for storing the participant in Elections
 struct Participant{
    string name;
    string symbol;
    uint votes;
    uint index;

 }
 uint public ParticipantIndex=0;//It is index for updating participant vote count in the array
 
//storing in an Array for accessing all participants once
Participant[] public ParticipantList;

//accessing a participant votes instantly
mapping(string=>Participant)public ParticipantDetails;

//setting Admin 
constructor(){
Admin=msg.sender;
}


modifier OnlyAdmin(){
    require(msg.sender==Admin,"Not the Admin!");
    _;
}


//Events for monitoring
event NominationEvent(string pname,string psymbol);
event RegisterEvent(address vwallet,string vname,string vaddress );
event VotedEvent(address sender,string symbol);
//Add Participant to the Elections
function NominationForParticipant(string memory _name,string memory _symbol)public  OnlyAdmin returns(bool){
    require(Nomination==true,"Nomination completed!");

require(keccak256(abi.encodePacked(ParticipantDetails[_symbol].name)) != keccak256(abi.encodePacked(_name)),"Participant name already exists!");
require(keccak256(abi.encodePacked(ParticipantDetails[_symbol].symbol)) != keccak256(abi.encodePacked(_symbol)),"Symbol already exists");

ParticipantDetails[_symbol]=Participant(_name,_symbol,0,ParticipantIndex);
ParticipantList.push(Participant(_name,_symbol,0,ParticipantIndex));
ParticipantIndex++;
emit NominationEvent(_name, _symbol);

return true;

}


//Register a Voter

function RegisterVoter(string memory _name,string memory _addr)public returns(bool){
    require(Registration==true,"Registration is completed");
    require(!VoterDetails[msg.sender].Registered, "Voter is already registered!");
    VoterList.push(Voter(_name,_addr,true ,false));
    VoterDetails[msg.sender]=Voter(_name,_addr,true,false);
    TotalVotes++;
    emit RegisterEvent(msg.sender, _name, _addr);
    return true;
}


//Vote to participant

function VoteToParticipant(string  memory _symbol)public   returns (bool){
   require(Polling==true,"Polling stopped!");
    require(!VoterDetails[msg.sender].voted,"Already Voted");
    require(currentVotes<TotalVotes,"Voting Completed!"); // Changed <= to < for accuracy

 VoterDetails[msg.sender].voted=true;
ParticipantDetails[_symbol].votes+=1;//incrementing the participant vote count
uint i=ParticipantDetails[_symbol].index;

ParticipantList[i].votes+=1;

 currentVotes+=1;
 emit VotedEvent(msg.sender, _symbol);

return true;


}

//stop the election polling
function StopPolling()public  OnlyAdmin {
    Polling=false;


}
//stop the nomination process
function StopNomination()public OnlyAdmin {
    Nomination=false;

}
//stop the voter Registration
function StopRegistration()public OnlyAdmin {
    Registration=false;
    
}


//To know the Voter details
function getMyDetails()public view returns (Voter memory){
    return VoterDetails[msg.sender];
}
//to know the participant details
function getParticipant(string memory _symbol)public view returns (Participant memory){
    return ParticipantDetails[_symbol];
}


}

}`
  },
  {
    id: 2,
    title: 'Agricultural Supply Chain',
    description: `A blockchain-based supply chain management system designed specifically for agricultural products. This smart contract enables complete transparency and traceability of agricultural products from farm to table, ensuring food safety and fair pricing.

Key Features:
- Complete product lifecycle tracking
- Ownership transfer verification
- Quality assurance checkpoints
- Price tracking across the supply chain
- Consumer feedback system
- Real-time inventory management`,
    securityLevel: 'Medium',
    scope: [
      'End-to-end product tracking',
      'Ownership transfer management',
      'Quality control checkpoints',
      'Price monitoring system',
      'Consumer feedback collection',
      'Inventory tracking',
      'Transportation monitoring'
    ],
    functionalities: [
      'Product creation and registration',
      'Ownership transfer with verification',
      'Stage-wise quality updates',
      'Price tracking at each stage',
      'Retailer inventory management',
      'Customer review system',
      'Transportation status updates'
    ],
    code: `
    
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract AgriSupplyChain {

uint public productId=0;//inital value for products
    // Product Details
    struct Product {
        uint id;
        string[] names;
        address currentOwner;
     address[] owners;
        string image;
        State state; 
    uint[] period; // Time taken at each stage (in hours)
        uint[] pricesFixed;
    string[] location; 
        uint[] expenditure;
        string[] transportStage;//
    }

mapping(uint=>Product)public Products;//storing the all products in a mapping with theri id

//Product details in Retialer stage

struct RetailerStage{
    uint id;
    uint sales;
    uint stockReceived;
    uint price;
    uint percent;
    string location;

}

//mapping
mapping(uint=>RetailerStage)public RetialDetails;
//customer Review for the Product

struct Review{
    uint id;
    uint8 quality;
    uint8 rating;
    string description;
    string priceReview;

}
mapping (uint=>Review)public ProductReview;
// Possible states of a product in the supply chain                                
enum State { Harvest,  InProduction, Retailer,Customer }

//Events Tracking for Products

event ProductCreated(uint pid,address powner,string pname);//creation time
event TransferOwner(address oldOwner,address newOwner,State state);//Owner ship transfering

event ProductUpdation(address powner,string pname,uint pprice,string plocation);//updation

function CreateProduct(
    string memory _name,
   string memory _image,
      uint _period,

    uint _price,
    string memory _location,
    uint _expenditure,
    string memory _transportStage

) public   {
    productId++;
    Products[productId].id=productId;
     Products[productId].names.push(_name);
     Products[productId].image = _image;
     Products[productId].state = State.Harvest;
     Products[productId].currentOwner=msg.sender;
    Products[productId].owners.push(msg.sender);
    Products[productId].period.push(_period);
     Products[productId].pricesFixed.push(_price);
    Products[productId].location.push(_location);
    Products[productId].expenditure.push(_expenditure);
    Products[productId].transportStage.push(_transportStage);

    emit ProductCreated(productId, msg.sender,_name);

}

modifier IsOwner(uint _id){
   
    require(msg.sender==Products[_id].currentOwner,"Not the Product Owner");
    _;
}

//Transfer Product OwnerShip in supply Chain
function TransferOwnerShip(uint _id,address _newOwner)public IsOwner(_id){
    require(msg.sender!=_newOwner,"This is the current Owner");
    if(Products[_id].state==State.Retailer){
        return ;
    }
    if(Products[_id].state==State.Harvest){
        Products[_id].state=State.InProduction;
    }
    else{
        Products[_id].state=State.Retailer;
    }
    //   if(Products[_id].state==State.Retailer){
    //     return ;
    // }
    Products[_id].currentOwner=_newOwner;
    Products[_id].owners.push(_newOwner);
emit TransferOwner(msg.sender,_newOwner, Products[_id].state);

}

//function to update product details in t next level supply chain 


function UpdateChain(
uint _id ,
string memory _name,
uint _period,
uint _pricesFixed,
string memory _location,
uint _expenditure,
string memory _transportStage)public IsOwner(_id){

//this function is available for stages InProduction
require(Products[_id].state==State.InProduction,"This stage no update permission!");
Products[_id].names.push(_name);
 Products[_id].period.push(_period);
Products[_id].pricesFixed.push(_pricesFixed);
Products[_id].location.push(_location);
Products[_id].expenditure.push(_expenditure);
emit ProductUpdation(msg.sender, _name, _pricesFixed, _location);
               
}


//Enter Product details by Retailer

function RetialerDetails(uint _id,uint _sales,
uint _stockReceived,uint _price,uint _percent,string memory _location) public IsOwner(_id) {
     
    require(Products[_id].state==State.Retailer,"Not in Retailer state");

  RetialDetails[_id]=RetailerStage(Products[_id].id,_sales,_stockReceived,_price,_percent,_location);
  Products[_id].state=State.Customer;

}


//Customer Review for the product

function CustomerReview(uint _id,uint8 _quality,
uint8 _rating,string memory _description,
string memory _priceReview)public {
require(_rating<=5,"Rating is must less than 5!");

require(_quality<=100,"quality less than 100");

require(Products[_id].state==State.Customer,"Not Customer Stage");

 ProductReview[_id]=Review(_id,_quality,_rating,_description,_priceReview);


}


//Stage of a Product 
function ProductStage(uint _id)public view returns (State){
    return Products[_id].state;
}
//getting product

function getProduct(uint _id)public view returns(Product memory){
    return Products[_id];

}


}



}`
  },
  {
    id: 3,
    title: 'Flight Booking System',
    description: `A decentralized flight booking platform that revolutionizes the airline ticket booking process. This smart contract enables direct interaction between airlines and passengers, eliminating intermediaries and reducing booking costs while ensuring secure transactions.

Key Features:
- Direct airline-passenger booking
- Automated payment processing
- Secure check-in system
- Transparent refund mechanism
- Review and rating system
- Real-time seat availability tracking`,
    securityLevel: 'High',
    scope: [
      'Flight management system',
      'Secure booking process',
      'Payment processing',
      'Check-in automation',
      'Refund handling',
      'Review system',
      'Seat inventory management'
    ],
    functionalities: [
      'Flight creation by airlines',
      'Secure seat booking with payment',
      'Automated check-in process',
      'Transparent refund processing',
      'Customer review system',
      'Real-time seat tracking',
      'Payment security measures'
    ],
    code: `
    // SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract FlightBooking {
    using Counters for Counters.Counter;
    Counters.Counter private _totalFlights;

    struct FlightStruct {
        uint id;
        string flightNumber;
        string departure;
        string arrival;
        string date;
        uint totalSeats;
        uint pricePerSeat;
        uint availableSeats;
        address airline;
        bool isActive;
        bool isDeleted;
        uint timestamp;
    }

    struct BookingStruct {
        uint id;
        address passenger;
        uint seatCount;
        uint totalPrice;
        bool checkedIn;
        bool cancelled;
        uint bookingDate;
    }

    struct ReviewStruct {
        uint id;
        uint flightId;
        string reviewText;
        uint timestamp;
        address owner;
    }

    event SecurityFeeUpdated(uint newFee);

    uint public securityFee;
    uint public taxPercent;

    mapping(uint => FlightStruct) flights;
    mapping(uint => BookingStruct[]) bookingsOf;
    mapping(uint => ReviewStruct[]) reviewsOf;
    mapping(uint => bool) flightExist;
    mapping(address => mapping(uint => bool)) hasBooked;

    constructor(uint _taxPercent, uint _securityFee) {
        taxPercent = _taxPercent;
        securityFee = _securityFee;
    }

    function createFlight(
        string memory flightNumber,
        string memory departure,
        string memory arrival,
        string memory date,
        uint totalSeats,
        uint pricePerSeat
    ) public {
        require(bytes(flightNumber).length > 0, "Flight Number cannot be empty");
        require(bytes(departure).length > 0, "Departure cannot be empty");
        require(bytes(arrival).length > 0, "Arrival cannot be empty");
        require(bytes(date).length > 0, "Date cannot be empty");
        require(totalSeats > 0, "Seats cannot be zero");
        require(pricePerSeat > 0 ether, "Price cannot be zero");

        _totalFlights.increment();
        FlightStruct memory flight;
        flight.id = _totalFlights.current();
        flight.flightNumber = flightNumber;
        flight.departure = departure;
        flight.arrival = arrival;
        flight.date = date;
        flight.totalSeats = totalSeats;
        flight.availableSeats = totalSeats;
        flight.pricePerSeat = pricePerSeat;
        flight.airline = msg.sender;
        flight.isActive = true;
        flight.timestamp = block.timestamp;

        flightExist[flight.id] = true;
        flights[_totalFlights.current()] = flight;
    }

    function checkInFlight(uint id, uint bookingId) public {
        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");
        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");

        bookingsOf[id][bookingId].checkedIn = true;
        uint price = bookingsOf[id][bookingId].totalPrice;
        uint fee = (price * taxPercent) / 100;

        payTo(flights[id].airline, (price - fee));
        payTo(msg.sender, securityFee);
    }

    function refundBooking(uint id, uint bookingId) public {
        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");
        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");

        bookingsOf[id][bookingId].cancelled = true;
        flights[id].availableSeats += bookingsOf[id][bookingId].seatCount;

        uint refundAmount = bookingsOf[id][bookingId].totalPrice - securityFee;
        payTo(msg.sender, refundAmount);
    }

    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }
}

}`
  },

  


    {
        id: 4,
        title: 'Automated Market Maker (AMM)-Gold And Diamond',
        description: 'A decentralized AMM allowing users to swap between Gold and Diamond tokens with liquidity pooling and automated pricing.',
        securityLevel: 'High',
        scope: [
          'Liquidity provisioning',
          'Token swapping',
          'Automated price calculation',
          'Trading fee mechanism',
          'Reserve tracking'
        ],
        functionalities: [
          'Liquidity providers can add Gold and Diamond tokens',
          'Swaps between Gold and Diamond with dynamic pricing',
          'Automated price calculation based on reserve ratios',
          '0.3% trading fee applied to swaps',
          'Ensures fair asset exchange and liquidity stability'
        ],
        code: `// SPDX-License-Identifier: MIT
      pragma solidity ^0.8.20;
      
      import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
      
      contract GoldToken is ERC20 {
          constructor() ERC20("GoldToken", "GOLD") {
              _mint(msg.sender, 100000 * 10 ** decimals());
          }
      }
      
      contract DiamondToken is ERC20 {
          constructor() ERC20("DiamondToken", "DIAMOND") {
              _mint(msg.sender, 50000 * 10 ** decimals());
          }
      }
      
      contract AMM {
          IERC20 public gold;
          IERC20 public diamond;
          uint256 public reserveGold;
          uint256 public reserveDiamond;
          
          constructor(address _gold, address _diamond) {
              gold = IERC20(_gold);
              diamond = IERC20(_diamond);
          }
      
          function addLiquidity(uint256 goldAmount, uint256 diamondAmount) external {
              gold.transferFrom(msg.sender, address(this), goldAmount);
              diamond.transferFrom(msg.sender, address(this), diamondAmount);
              reserveGold += goldAmount;
              reserveDiamond += diamondAmount;
          }
      
          function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) public pure returns (uint256) {
              require(amountIn > 0 && reserveIn > 0 && reserveOut > 0, "Invalid reserves");
              uint256 amountInWithFee = amountIn * 997;
              uint256 numerator = amountInWithFee * reserveOut;
              uint256 denominator = (reserveIn * 1000) + amountInWithFee;
              return numerator / denominator;
          }
      
          function swapGoldForDiamond(uint256 goldAmount) external {
              uint256 diamondAmount = getAmountOut(goldAmount, reserveGold, reserveDiamond);
              require(diamondAmount > 0, "Insufficient output amount");
              
              gold.transferFrom(msg.sender, address(this), goldAmount);
              diamond.transfer(msg.sender, diamondAmount);
              
              reserveGold += goldAmount;
              reserveDiamond -= diamondAmount;
          }
      
          function swapDiamondForGold(uint256 diamondAmount) external {
              uint256 goldAmount = getAmountOut(diamondAmount, reserveDiamond, reserveGold);
              require(goldAmount > 0, "Insufficient output amount");
              
              diamond.transferFrom(msg.sender, address(this), diamondAmount);
              gold.transfer(msg.sender, goldAmount);
              
              reserveDiamond += diamondAmount;
              reserveGold -= goldAmount;
          }
      }`
      }
      ,{
        id: 5,
        title: 'Coffee Shop Loyalty Program',
        description: 'A blockchain-based coffee shop reward system where customers earn tokens for buying coffee and can redeem them after reaching a purchase limit.',
        securityLevel: 'Medium',
        scope: [
          'Customer registration',
          'Coffee purchase tracking',
          'Token claim system',
          'Admin limit control'
        ],
        functionalities: [
          'Customers register with a unique name',
          'Buy coffee using ETH, tracked in the contract',
          'Tokens rewarded after reaching a set purchase limit',
          'Owner can modify the coffee purchase limit for rewards',
          'Customers can claim tokens if the contract has sufficient balance'
        ],
        code: `// SPDX-License-Identifier: MIT
      pragma solidity ^0.8.0;
      
      import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
      
      contract coffeeShop {
      
          uint public limit;
          address public owner;
          IERC20 public CFT;
      
          constructor(uint _limit,address _cft){
              CFT = IERC20(_cft);
              limit = _limit;
              owner = msg.sender;
          }
      
          struct customer {
              string name;
              uint tokens;
              uint coffee;
              bool exist;
          }
      
          mapping(address => customer) public customers;
      
          event addEvent(string name, uint time);
      
          function AddCustomer(string memory _name) public {
              require(!customers[msg.sender].exist, "Already customer exists");
              customers[msg.sender] = customer(_name, 0, 0, true);
              emit addEvent(_name, block.timestamp);
          }
      
          event buyEvent(address addr, string name, uint amount, uint coffee);
      
          function BuyCoffee() public payable {
              require(msg.value >= 0.01 ether, "Price too low!");
              uint bought = msg.value / 0.01 ether;
              customers[msg.sender].coffee = bought;
              emit buyEvent(msg.sender, customers[msg.sender].name, msg.value, bought);
          }
      
          modifier OnlyOwner(){
              require(msg.sender == owner, "Not the Owner");
              _;
          }
      
          function changeLimit(uint _limit) public OnlyOwner {
              limit = _limit;
          }
      
          event claimEvent(address addr, uint tokens);
      
          function claimToken() public {
              require(customers[msg.sender].exist, "Customer does not exist!");
              require(customers[msg.sender].coffee >= limit, "You have to buy some coffees!");
      
              uint value = customers[msg.sender].coffee;
              uint tokens = value / limit;
      
              require(CFT.balanceOf(address(this)) >= tokens, "Not enough tokens in contract!");
      
              CFT.transfer(msg.sender, tokens);
              customers[msg.sender].coffee = 0;
              emit claimEvent(msg.sender, tokens);
          }
      }`
      }
      
  
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 1;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getSecurityVariant = (level) => {
    switch (level) {
      case 'High':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <h1 className="text-center mb-5">Smart Contract Projects</h1>
    
            {currentProjects.map((project) => (
              <Card key={project.id} className="mb-4 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Card.Title as="h2" className="mb-0">{project.title}</Card.Title>
                    <Badge bg={getSecurityVariant(project.securityLevel)} className="d-flex align-items-center gap-2">
                      <Shield size={16} />
                      {project.securityLevel} Security
                    </Badge>
                  </div>
    
                  <Card.Text className="text-muted mb-4" style={{ whiteSpace: 'pre-line' }}>
                    {project.description}
                  </Card.Text>
    
                  <Row className="mb-4">
                    <Col md={6}>
                      <h3 className="h5 mb-3">Project Scope</h3>
                      <ul className="list-unstyled">
                        {project.scope.map((item, index) => (
                          <li key={index} className="mb-2">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h3 className="h5 mb-3">Key Functionalities</h3>
                      <ul className="list-unstyled">
                        {project.functionalities.map((item, index) => (
                          <li key={index} className="mb-2">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
    
                  <Button
                    variant="primary"
                    onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                    className="d-flex align-items-center gap-2"
                  >
                    <Code size={20} />
                    {selectedProject?.id === project.id ? 'Hide Code' : 'View Smart Contract'}
                  </Button>
    
                  {selectedProject?.id === project.id && (
                    <div className="mt-4">
                      <pre className="bg-dark text-light p-4 rounded">
                        <code>{project.code}</code>
                      </pre>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
    
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                <Pagination.Prev 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {items}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    
    
  )
}

export default Projects;








// {/* <Container className="py-10">
// {/* <center> */}
// <Row className="justify-content-center">
//   <Col >
//     <h1 className="text-center mb-5"> Projects</h1>

//     {currentProjects.map((project) 