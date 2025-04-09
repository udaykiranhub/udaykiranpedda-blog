"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[763],{763:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var i=t(5043),r=t(2489),s=t(2105),o=t(7491),a=t(3519),c=t(1072),d=t(8602),u=t(8628),l=t(4063),m=t(4282),p=t(579);const g=[{id:1,title:"Voting Smart Contract",description:"A sophisticated decentralized voting system built on the Ethereum blockchain that ensures transparent and tamper-proof elections. This smart contract implements a comprehensive voting mechanism with strict security measures to prevent double voting and maintain voter privacy.\n\nKey Features:\n- Secure voter registration with address verification\n- Transparent candidate nomination process\n- Real-time vote counting with anti-tampering measures\n- Admin controls for managing election phases\n- Complete audit trail of all voting activities",securityLevel:"High",scope:["Secure voter registration and verification","Candidate nomination with unique identifiers","Vote casting with duplicate prevention","Real-time vote tallying","Election phase management","Result verification and audit"],functionalities:["Voter registration with address verification","Candidate nomination with unique symbols","Secure vote casting with duplicate prevention","Real-time vote counting and tracking","Admin controls for election phases","Automated result calculation","Event monitoring for all actions"],code:'\n    // SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Voting{\n\n//..........for voters.........\n\n//total votes in the Election\nuint public TotalVotes=0;\n\n//counting votes one by one for ending the Elections, we have to set vote limit for accuracy\nuint public currentVotes=0;\n\n\n//check voting completed or not\nbool public Polling=true;\n\n//check Registration is completed or not\nbool public Registration=true;\n//check Nomination is completed or not\nbool public Nomination=true;\n\n//Admin for Elections\naddress public  Admin;\n//Storing a Voter information\nstruct Voter{\n    string name;\n    string addr;\n    bool Registered;\n    bool voted;\n   \n}\n\n\n//storing all voter details in a struct Array\nVoter[] public VoterList;\n\n//Getting voter details by their wallet address\nmapping(address=>Voter)public VoterDetails;\n\n\n\n//..........For Participant ..............\n\n// Dynamically storing a Participant in Elections\n\n//creating a struct for storing the participant in Elections\n struct Participant{\n    string name;\n    string symbol;\n    uint votes;\n    uint index;\n\n }\n uint public ParticipantIndex=0;//It is index for updating participant vote count in the array\n \n//storing in an Array for accessing all participants once\nParticipant[] public ParticipantList;\n\n//accessing a participant votes instantly\nmapping(string=>Participant)public ParticipantDetails;\n\n//setting Admin \nconstructor(){\nAdmin=msg.sender;\n}\n\n\nmodifier OnlyAdmin(){\n    require(msg.sender==Admin,"Not the Admin!");\n    _;\n}\n\n\n//Events for monitoring\nevent NominationEvent(string pname,string psymbol);\nevent RegisterEvent(address vwallet,string vname,string vaddress );\nevent VotedEvent(address sender,string symbol);\n//Add Participant to the Elections\nfunction NominationForParticipant(string memory _name,string memory _symbol)public  OnlyAdmin returns(bool){\n    require(Nomination==true,"Nomination completed!");\n\nrequire(keccak256(abi.encodePacked(ParticipantDetails[_symbol].name)) != keccak256(abi.encodePacked(_name)),"Participant name already exists!");\nrequire(keccak256(abi.encodePacked(ParticipantDetails[_symbol].symbol)) != keccak256(abi.encodePacked(_symbol)),"Symbol already exists");\n\nParticipantDetails[_symbol]=Participant(_name,_symbol,0,ParticipantIndex);\nParticipantList.push(Participant(_name,_symbol,0,ParticipantIndex));\nParticipantIndex++;\nemit NominationEvent(_name, _symbol);\n\nreturn true;\n\n}\n\n\n//Register a Voter\n\nfunction RegisterVoter(string memory _name,string memory _addr)public returns(bool){\n    require(Registration==true,"Registration is completed");\n    require(!VoterDetails[msg.sender].Registered, "Voter is already registered!");\n    VoterList.push(Voter(_name,_addr,true ,false));\n    VoterDetails[msg.sender]=Voter(_name,_addr,true,false);\n    TotalVotes++;\n    emit RegisterEvent(msg.sender, _name, _addr);\n    return true;\n}\n\n\n//Vote to participant\n\nfunction VoteToParticipant(string  memory _symbol)public   returns (bool){\n   require(Polling==true,"Polling stopped!");\n    require(!VoterDetails[msg.sender].voted,"Already Voted");\n    require(currentVotes<TotalVotes,"Voting Completed!"); // Changed <= to < for accuracy\n\n VoterDetails[msg.sender].voted=true;\nParticipantDetails[_symbol].votes+=1;//incrementing the participant vote count\nuint i=ParticipantDetails[_symbol].index;\n\nParticipantList[i].votes+=1;\n\n currentVotes+=1;\n emit VotedEvent(msg.sender, _symbol);\n\nreturn true;\n\n\n}\n\n//stop the election polling\nfunction StopPolling()public  OnlyAdmin {\n    Polling=false;\n\n\n}\n//stop the nomination process\nfunction StopNomination()public OnlyAdmin {\n    Nomination=false;\n\n}\n//stop the voter Registration\nfunction StopRegistration()public OnlyAdmin {\n    Registration=false;\n    \n}\n\n\n//To know the Voter details\nfunction getMyDetails()public view returns (Voter memory){\n    return VoterDetails[msg.sender];\n}\n//to know the participant details\nfunction getParticipant(string memory _symbol)public view returns (Participant memory){\n    return ParticipantDetails[_symbol];\n}\n\n\n}\n\n}'},{id:2,title:"Agricultural Supply Chain",description:"A blockchain-based supply chain management system designed specifically for agricultural products. This smart contract enables complete transparency and traceability of agricultural products from farm to table, ensuring food safety and fair pricing.\n\nKey Features:\n- Complete product lifecycle tracking\n- Ownership transfer verification\n- Quality assurance checkpoints\n- Price tracking across the supply chain\n- Consumer feedback system\n- Real-time inventory management",securityLevel:"Medium",scope:["End-to-end product tracking","Ownership transfer management","Quality control checkpoints","Price monitoring system","Consumer feedback collection","Inventory tracking","Transportation monitoring"],functionalities:["Product creation and registration","Ownership transfer with verification","Stage-wise quality updates","Price tracking at each stage","Retailer inventory management","Customer review system","Transportation status updates"],code:'\n    \n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ncontract AgriSupplyChain {\n\nuint public productId=0;//inital value for products\n    // Product Details\n    struct Product {\n        uint id;\n        string[] names;\n        address currentOwner;\n     address[] owners;\n        string image;\n        State state; \n    uint[] period; // Time taken at each stage (in hours)\n        uint[] pricesFixed;\n    string[] location; \n        uint[] expenditure;\n        string[] transportStage;//\n    }\n\nmapping(uint=>Product)public Products;//storing the all products in a mapping with theri id\n\n//Product details in Retialer stage\n\nstruct RetailerStage{\n    uint id;\n    uint sales;\n    uint stockReceived;\n    uint price;\n    uint percent;\n    string location;\n\n}\n\n//mapping\nmapping(uint=>RetailerStage)public RetialDetails;\n//customer Review for the Product\n\nstruct Review{\n    uint id;\n    uint8 quality;\n    uint8 rating;\n    string description;\n    string priceReview;\n\n}\nmapping (uint=>Review)public ProductReview;\n// Possible states of a product in the supply chain                                \nenum State { Harvest,  InProduction, Retailer,Customer }\n\n//Events Tracking for Products\n\nevent ProductCreated(uint pid,address powner,string pname);//creation time\nevent TransferOwner(address oldOwner,address newOwner,State state);//Owner ship transfering\n\nevent ProductUpdation(address powner,string pname,uint pprice,string plocation);//updation\n\nfunction CreateProduct(\n    string memory _name,\n   string memory _image,\n      uint _period,\n\n    uint _price,\n    string memory _location,\n    uint _expenditure,\n    string memory _transportStage\n\n) public   {\n    productId++;\n    Products[productId].id=productId;\n     Products[productId].names.push(_name);\n     Products[productId].image = _image;\n     Products[productId].state = State.Harvest;\n     Products[productId].currentOwner=msg.sender;\n    Products[productId].owners.push(msg.sender);\n    Products[productId].period.push(_period);\n     Products[productId].pricesFixed.push(_price);\n    Products[productId].location.push(_location);\n    Products[productId].expenditure.push(_expenditure);\n    Products[productId].transportStage.push(_transportStage);\n\n    emit ProductCreated(productId, msg.sender,_name);\n\n}\n\nmodifier IsOwner(uint _id){\n   \n    require(msg.sender==Products[_id].currentOwner,"Not the Product Owner");\n    _;\n}\n\n//Transfer Product OwnerShip in supply Chain\nfunction TransferOwnerShip(uint _id,address _newOwner)public IsOwner(_id){\n    require(msg.sender!=_newOwner,"This is the current Owner");\n    if(Products[_id].state==State.Retailer){\n        return ;\n    }\n    if(Products[_id].state==State.Harvest){\n        Products[_id].state=State.InProduction;\n    }\n    else{\n        Products[_id].state=State.Retailer;\n    }\n    //   if(Products[_id].state==State.Retailer){\n    //     return ;\n    // }\n    Products[_id].currentOwner=_newOwner;\n    Products[_id].owners.push(_newOwner);\nemit TransferOwner(msg.sender,_newOwner, Products[_id].state);\n\n}\n\n//function to update product details in t next level supply chain \n\n\nfunction UpdateChain(\nuint _id ,\nstring memory _name,\nuint _period,\nuint _pricesFixed,\nstring memory _location,\nuint _expenditure,\nstring memory _transportStage)public IsOwner(_id){\n\n//this function is available for stages InProduction\nrequire(Products[_id].state==State.InProduction,"This stage no update permission!");\nProducts[_id].names.push(_name);\n Products[_id].period.push(_period);\nProducts[_id].pricesFixed.push(_pricesFixed);\nProducts[_id].location.push(_location);\nProducts[_id].expenditure.push(_expenditure);\nemit ProductUpdation(msg.sender, _name, _pricesFixed, _location);\n               \n}\n\n\n//Enter Product details by Retailer\n\nfunction RetialerDetails(uint _id,uint _sales,\nuint _stockReceived,uint _price,uint _percent,string memory _location) public IsOwner(_id) {\n     \n    require(Products[_id].state==State.Retailer,"Not in Retailer state");\n\n  RetialDetails[_id]=RetailerStage(Products[_id].id,_sales,_stockReceived,_price,_percent,_location);\n  Products[_id].state=State.Customer;\n\n}\n\n\n//Customer Review for the product\n\nfunction CustomerReview(uint _id,uint8 _quality,\nuint8 _rating,string memory _description,\nstring memory _priceReview)public {\nrequire(_rating<=5,"Rating is must less than 5!");\n\nrequire(_quality<=100,"quality less than 100");\n\nrequire(Products[_id].state==State.Customer,"Not Customer Stage");\n\n ProductReview[_id]=Review(_id,_quality,_rating,_description,_priceReview);\n\n\n}\n\n\n//Stage of a Product \nfunction ProductStage(uint _id)public view returns (State){\n    return Products[_id].state;\n}\n//getting product\n\nfunction getProduct(uint _id)public view returns(Product memory){\n    return Products[_id];\n\n}\n\n\n}\n\n\n\n}'},{id:3,title:"Flight Booking System",description:"A decentralized flight booking platform that revolutionizes the airline ticket booking process. This smart contract enables direct interaction between airlines and passengers, eliminating intermediaries and reducing booking costs while ensuring secure transactions.\n\nKey Features:\n- Direct airline-passenger booking\n- Automated payment processing\n- Secure check-in system\n- Transparent refund mechanism\n- Review and rating system\n- Real-time seat availability tracking",securityLevel:"High",scope:["Flight management system","Secure booking process","Payment processing","Check-in automation","Refund handling","Review system","Seat inventory management"],functionalities:["Flight creation by airlines","Secure seat booking with payment","Automated check-in process","Transparent refund processing","Customer review system","Real-time seat tracking","Payment security measures"],code:'\n    // SPDX-License-Identifier: MIT\npragma solidity >=0.7.0 <0.9.0;\n\nimport "@openzeppelin/contracts/utils/Counters.sol";\n\ncontract FlightBooking {\n    using Counters for Counters.Counter;\n    Counters.Counter private _totalFlights;\n\n    struct FlightStruct {\n        uint id;\n        string flightNumber;\n        string departure;\n        string arrival;\n        string date;\n        uint totalSeats;\n        uint pricePerSeat;\n        uint availableSeats;\n        address airline;\n        bool isActive;\n        bool isDeleted;\n        uint timestamp;\n    }\n\n    struct BookingStruct {\n        uint id;\n        address passenger;\n        uint seatCount;\n        uint totalPrice;\n        bool checkedIn;\n        bool cancelled;\n        uint bookingDate;\n    }\n\n    struct ReviewStruct {\n        uint id;\n        uint flightId;\n        string reviewText;\n        uint timestamp;\n        address owner;\n    }\n\n    event SecurityFeeUpdated(uint newFee);\n\n    uint public securityFee;\n    uint public taxPercent;\n\n    mapping(uint => FlightStruct) flights;\n    mapping(uint => BookingStruct[]) bookingsOf;\n    mapping(uint => ReviewStruct[]) reviewsOf;\n    mapping(uint => bool) flightExist;\n    mapping(address => mapping(uint => bool)) hasBooked;\n\n    constructor(uint _taxPercent, uint _securityFee) {\n        taxPercent = _taxPercent;\n        securityFee = _securityFee;\n    }\n\n    function createFlight(\n        string memory flightNumber,\n        string memory departure,\n        string memory arrival,\n        string memory date,\n        uint totalSeats,\n        uint pricePerSeat\n    ) public {\n        require(bytes(flightNumber).length > 0, "Flight Number cannot be empty");\n        require(bytes(departure).length > 0, "Departure cannot be empty");\n        require(bytes(arrival).length > 0, "Arrival cannot be empty");\n        require(bytes(date).length > 0, "Date cannot be empty");\n        require(totalSeats > 0, "Seats cannot be zero");\n        require(pricePerSeat > 0 ether, "Price cannot be zero");\n\n        _totalFlights.increment();\n        FlightStruct memory flight;\n        flight.id = _totalFlights.current();\n        flight.flightNumber = flightNumber;\n        flight.departure = departure;\n        flight.arrival = arrival;\n        flight.date = date;\n        flight.totalSeats = totalSeats;\n        flight.availableSeats = totalSeats;\n        flight.pricePerSeat = pricePerSeat;\n        flight.airline = msg.sender;\n        flight.isActive = true;\n        flight.timestamp = block.timestamp;\n\n        flightExist[flight.id] = true;\n        flights[_totalFlights.current()] = flight;\n    }\n\n    function checkInFlight(uint id, uint bookingId) public {\n        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");\n        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");\n\n        bookingsOf[id][bookingId].checkedIn = true;\n        uint price = bookingsOf[id][bookingId].totalPrice;\n        uint fee = (price * taxPercent) / 100;\n\n        payTo(flights[id].airline, (price - fee));\n        payTo(msg.sender, securityFee);\n    }\n\n    function refundBooking(uint id, uint bookingId) public {\n        require(!bookingsOf[id][bookingId].checkedIn, "Already checked-in");\n        require(msg.sender == bookingsOf[id][bookingId].passenger, "Unauthorized passenger");\n\n        bookingsOf[id][bookingId].cancelled = true;\n        flights[id].availableSeats += bookingsOf[id][bookingId].seatCount;\n\n        uint refundAmount = bookingsOf[id][bookingId].totalPrice - securityFee;\n        payTo(msg.sender, refundAmount);\n    }\n\n    function payTo(address to, uint256 amount) internal {\n        (bool success, ) = payable(to).call{value: amount}("");\n        require(success);\n    }\n}\n\n}'},{id:4,title:"Automated Market Maker (AMM)-Gold And Diamond",description:"A decentralized AMM allowing users to swap between Gold and Diamond tokens with liquidity pooling and automated pricing.",securityLevel:"High",scope:["Liquidity provisioning","Token swapping","Automated price calculation","Trading fee mechanism","Reserve tracking"],functionalities:["Liquidity providers can add Gold and Diamond tokens","Swaps between Gold and Diamond with dynamic pricing","Automated price calculation based on reserve ratios","0.3% trading fee applied to swaps","Ensures fair asset exchange and liquidity stability"],code:'// SPDX-License-Identifier: MIT\n      pragma solidity ^0.8.20;\n      \n      import "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n      \n      contract GoldToken is ERC20 {\n          constructor() ERC20("GoldToken", "GOLD") {\n              _mint(msg.sender, 100000 * 10 ** decimals());\n          }\n      }\n      \n      contract DiamondToken is ERC20 {\n          constructor() ERC20("DiamondToken", "DIAMOND") {\n              _mint(msg.sender, 50000 * 10 ** decimals());\n          }\n      }\n      \n      contract AMM {\n          IERC20 public gold;\n          IERC20 public diamond;\n          uint256 public reserveGold;\n          uint256 public reserveDiamond;\n          \n          constructor(address _gold, address _diamond) {\n              gold = IERC20(_gold);\n              diamond = IERC20(_diamond);\n          }\n      \n          function addLiquidity(uint256 goldAmount, uint256 diamondAmount) external {\n              gold.transferFrom(msg.sender, address(this), goldAmount);\n              diamond.transferFrom(msg.sender, address(this), diamondAmount);\n              reserveGold += goldAmount;\n              reserveDiamond += diamondAmount;\n          }\n      \n          function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) public pure returns (uint256) {\n              require(amountIn > 0 && reserveIn > 0 && reserveOut > 0, "Invalid reserves");\n              uint256 amountInWithFee = amountIn * 997;\n              uint256 numerator = amountInWithFee * reserveOut;\n              uint256 denominator = (reserveIn * 1000) + amountInWithFee;\n              return numerator / denominator;\n          }\n      \n          function swapGoldForDiamond(uint256 goldAmount) external {\n              uint256 diamondAmount = getAmountOut(goldAmount, reserveGold, reserveDiamond);\n              require(diamondAmount > 0, "Insufficient output amount");\n              \n              gold.transferFrom(msg.sender, address(this), goldAmount);\n              diamond.transfer(msg.sender, diamondAmount);\n              \n              reserveGold += goldAmount;\n              reserveDiamond -= diamondAmount;\n          }\n      \n          function swapDiamondForGold(uint256 diamondAmount) external {\n              uint256 goldAmount = getAmountOut(diamondAmount, reserveDiamond, reserveGold);\n              require(goldAmount > 0, "Insufficient output amount");\n              \n              diamond.transferFrom(msg.sender, address(this), diamondAmount);\n              gold.transfer(msg.sender, goldAmount);\n              \n              reserveDiamond += diamondAmount;\n              reserveGold -= goldAmount;\n          }\n      }'},{id:5,title:"Coffee Shop Loyalty Program",description:"A blockchain-based coffee shop reward system where customers earn tokens for buying coffee and can redeem them after reaching a purchase limit.",securityLevel:"Medium",scope:["Customer registration","Coffee purchase tracking","Token claim system","Admin limit control"],functionalities:["Customers register with a unique name","Buy coffee using ETH, tracked in the contract","Tokens rewarded after reaching a set purchase limit","Owner can modify the coffee purchase limit for rewards","Customers can claim tokens if the contract has sufficient balance"],code:'// SPDX-License-Identifier: MIT\n      pragma solidity ^0.8.0;\n      \n      import "@openzeppelin/contracts/token/ERC20/IERC20.sol";\n      \n      contract coffeeShop {\n      \n          uint public limit;\n          address public owner;\n          IERC20 public CFT;\n      \n          constructor(uint _limit,address _cft){\n              CFT = IERC20(_cft);\n              limit = _limit;\n              owner = msg.sender;\n          }\n      \n          struct customer {\n              string name;\n              uint tokens;\n              uint coffee;\n              bool exist;\n          }\n      \n          mapping(address => customer) public customers;\n      \n          event addEvent(string name, uint time);\n      \n          function AddCustomer(string memory _name) public {\n              require(!customers[msg.sender].exist, "Already customer exists");\n              customers[msg.sender] = customer(_name, 0, 0, true);\n              emit addEvent(_name, block.timestamp);\n          }\n      \n          event buyEvent(address addr, string name, uint amount, uint coffee);\n      \n          function BuyCoffee() public payable {\n              require(msg.value >= 0.01 ether, "Price too low!");\n              uint bought = msg.value / 0.01 ether;\n              customers[msg.sender].coffee = bought;\n              emit buyEvent(msg.sender, customers[msg.sender].name, msg.value, bought);\n          }\n      \n          modifier OnlyOwner(){\n              require(msg.sender == owner, "Not the Owner");\n              _;\n          }\n      \n          function changeLimit(uint _limit) public OnlyOwner {\n              limit = _limit;\n          }\n      \n          event claimEvent(address addr, uint tokens);\n      \n          function claimToken() public {\n              require(customers[msg.sender].exist, "Customer does not exist!");\n              require(customers[msg.sender].coffee >= limit, "You have to buy some coffees!");\n      \n              uint value = customers[msg.sender].coffee;\n              uint tokens = value / limit;\n      \n              require(CFT.balanceOf(address(this)) >= tokens, "Not enough tokens in contract!");\n      \n              CFT.transfer(msg.sender, tokens);\n              customers[msg.sender].coffee = 0;\n              emit claimEvent(msg.sender, tokens);\n          }\n      }'}];const h=function(){const[n,e]=(0,i.useState)(1),[t,h]=(0,i.useState)(null),f=Math.ceil(g.length/1),b=1*n,y=b-1,v=g.slice(y,b),_=n=>{e(n)},P=n=>{switch(n){case"High":return"success";case"Medium":return"warning";case"Low":return"danger";default:return"secondary"}};let k=[];for(let i=1;i<=f;i++)k.push((0,p.jsx)(o.A.Item,{active:i===n,onClick:()=>_(i),children:i},i));return(0,p.jsx)(a.A,{className:"py-5",children:(0,p.jsx)(c.A,{className:"justify-content-center",children:(0,p.jsxs)(d.A,{lg:8,md:10,sm:12,children:[(0,p.jsx)("h1",{className:"text-center mb-5",children:"Smart Contract Projects"}),v.map((n=>(0,p.jsx)(u.A,{className:"mb-4 shadow-sm",children:(0,p.jsxs)(u.A.Body,{children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[(0,p.jsx)(u.A.Title,{as:"h2",className:"mb-0",children:n.title}),(0,p.jsxs)(l.A,{bg:P(n.securityLevel),className:"d-flex align-items-center gap-2",children:[(0,p.jsx)(r.A,{size:16}),n.securityLevel," Security"]})]}),(0,p.jsx)(u.A.Text,{className:"text-muted mb-4",style:{whiteSpace:"pre-line"},children:n.description}),(0,p.jsxs)(c.A,{className:"mb-4",children:[(0,p.jsxs)(d.A,{md:6,children:[(0,p.jsx)("h3",{className:"h5 mb-3",children:"Project Scope"}),(0,p.jsx)("ul",{className:"list-unstyled",children:n.scope.map(((n,e)=>(0,p.jsxs)("li",{className:"mb-2",children:["\u2022 ",n]},e)))})]}),(0,p.jsxs)(d.A,{md:6,children:[(0,p.jsx)("h3",{className:"h5 mb-3",children:"Key Functionalities"}),(0,p.jsx)("ul",{className:"list-unstyled",children:n.functionalities.map(((n,e)=>(0,p.jsxs)("li",{className:"mb-2",children:["\u2022 ",n]},e)))})]})]}),(0,p.jsxs)(m.A,{variant:"primary",onClick:()=>h((null===t||void 0===t?void 0:t.id)===n.id?null:n),className:"d-flex align-items-center gap-2",children:[(0,p.jsx)(s.A,{size:20}),(null===t||void 0===t?void 0:t.id)===n.id?"Hide Code":"View Smart Contract"]}),(null===t||void 0===t?void 0:t.id)===n.id&&(0,p.jsx)("div",{className:"mt-4",children:(0,p.jsx)("pre",{className:"bg-dark text-light p-4 rounded",children:(0,p.jsx)("code",{children:n.code})})})]})},n.id))),(0,p.jsx)("div",{className:"d-flex justify-content-center mt-4",children:(0,p.jsxs)(o.A,{children:[(0,p.jsx)(o.A.First,{onClick:()=>_(1),disabled:1===n}),(0,p.jsx)(o.A.Prev,{onClick:()=>_(n-1),disabled:1===n}),k,(0,p.jsx)(o.A.Next,{onClick:()=>_(n+1),disabled:n===f}),(0,p.jsx)(o.A.Last,{onClick:()=>_(f),disabled:n===f})]})})]})})})}}}]);
//# sourceMappingURL=763.77ff121b.chunk.js.map